/* ============================================================
   ANÚNCIOS E CONSENTIMENTO (GOOGLE ADSENSE)
   ------------------------------------------------------------
   ID do publicador conferido em replace_adsense_idps1/adsense_id.txt.
   Os anúncios ficam ATIVOS neste arquivo; o script do Google só é
   carregado depois que a pessoa aceita os anúncios no banner.

   Como configurar:
   1. ativo: true  -> liga o sistema (já está ligado).
   2. auto: true   -> usa os anúncios automáticos do AdSense.
      Para isso, deixe "Anúncios automáticos" ligado no painel do
      AdSense. O script abaixo já carrega o AdSense com o ID.
   3. slots: preencha com o ID de cada bloco criado no painel em
      AdSense > Anúncios > Por bloco. Sem ID, o bloco fica oculto.
      Com auto: true e slots preenchidos, os dois formatos podem
      aparecer; se quiser só os blocos manuais, use auto: false.
   4. Rode o publicador normalmente depois de alterar.

   Segurança:
   - Só carrega no domínio oficial (e em localhost para testes).
   - Não carrega na página de privacidade (body data-ads="off").
   - Respeita "Só o essencial" e permite mudar a escolha depois.
   - Usa Consent Mode v2 do Google, com padrão negado.
   ============================================================ */

(function () {
  "use strict";

  const CONFIG_PADRAO = {
    cliente: "ca-pub-5428095231521630",
    ativo: true,
    auto: true,
    formato: "auto",
    rootMargin: "320px",
    slots: {
      topo: "",
      fim: "",
      rodape: ""
    }
  };

  const CONFIG = (function () {
    const externo =
      window.FELPS_ADS_CONFIG && typeof window.FELPS_ADS_CONFIG === "object"
        ? window.FELPS_ADS_CONFIG
        : {};
    const slots = Object.assign({}, CONFIG_PADRAO.slots, externo.slots || {});
    return Object.assign({}, CONFIG_PADRAO, externo, { slots });
  })();

  const HOSTS_ANUNCIOS = new Set([
    "felpsgames.com.br",
    "www.felpsgames.com.br",
    "localhost",
    "127.0.0.1",
    "[::1]"
  ]);

  const CONSENTIMENTO_CHAVE = "felps-consentimento-v1";
  const CONSENTIMENTO_VALIDADE = 180 * 24 * 60 * 60 * 1000;
  const SCRIPT_ID = "adsbygoogle-script";
  const SCRIPT_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  const SLOT_VALIDO = /^\d{5,}$/;
  const AVISO_BRAVE_CHAVE = "felps-aviso-brave-v1";
  const AVISO_BRAVE_VALIDADE = 30 * 24 * 60 * 60 * 1000;
  const AVISO_BRAVE_ID = "brave-ads-notice";

  const estado = {
    scriptCarregando: null,
    observador: null,
    avisoTeclado: false
  };

  function normalizarCliente(valor) {
    const achado = String(valor || "")
      .trim()
      .match(/^(?:ca-)?(pub-\d{16})$/i);
    return achado ? `ca-${achado[1]}` : "";
  }

  const CLIENTE = normalizarCliente(CONFIG.cliente);
  const ANUNCIOS_ATIVOS = Boolean(CONFIG.ativo) && Boolean(CLIENTE);

  function hostPermitido() {
    return HOSTS_ANUNCIOS.has(String(location.hostname || "").toLowerCase());
  }

  function paginaPermiteAnuncios() {
    if (!document.body) return false;
    const valor = String(document.body.getAttribute("data-ads") || "")
      .trim()
      .toLowerCase();
    return valor !== "off";
  }

  function slotConfigurado(nome) {
    const valor = CONFIG.slots && CONFIG.slots[nome];
    const texto = String(valor == null ? "" : valor).trim();
    return SLOT_VALIDO.test(texto) ? texto : "";
  }

  function temSlotsConfigurados() {
    return Object.keys(CONFIG.slots || {}).some((nome) => Boolean(slotConfigurado(nome)));
  }

  function lerConsentimento() {
    try {
      const bruto = localStorage.getItem(CONSENTIMENTO_CHAVE);
      if (!bruto) return null;
      const dados = JSON.parse(bruto);
      if (typeof dados.anuncios !== "boolean") return null;
      const quando = Number(dados.quando);
      if (!Number.isFinite(quando) || Date.now() - quando > CONSENTIMENTO_VALIDADE) {
        localStorage.removeItem(CONSENTIMENTO_CHAVE);
        return null;
      }
      return dados.anuncios;
    } catch {
      return null;
    }
  }

  function salvarConsentimento(anuncios) {
    try {
      localStorage.setItem(
        CONSENTIMENTO_CHAVE,
        JSON.stringify({ anuncios, quando: Date.now() })
      );
    } catch {
      // Modo privado ou armazenamento bloqueado: segue sem persistir.
    }
  }

  function limparCookiesDeAnuncios() {
    const nomes = [
      "__gads",
      "__gpi",
      "__gpi_optout",
      "IDE",
      "test_cookie",
      "_gcl_au",
      "_gcl_aw",
      "_gcl_dc"
    ];
    for (const nome of nomes) {
      document.cookie = `${nome}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${nome}=; Max-Age=0; path=/; domain=${location.hostname}; SameSite=Lax`;
      document.cookie = `${nome}=; Max-Age=0; path=/; domain=.${location.hostname}; SameSite=Lax`;
    }
  }

  function garantirGtag() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
  }

  // O padrão precisa ser sempre "negado", mesmo que a pessoa já tenha aceitado.
  // A atualização para "concedido" vem logo depois, antes de carregar o AdSense.
  function aplicarConsentimentoPadrao() {
    garantirGtag();
    if (window.__felpsConsentimentoPadrao) return;
    window.__felpsConsentimentoPadrao = true;
    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      wait_for_update: 500,
      url_passthrough: true,
      ads_data_redaction: true
    });
  }

  function atualizarConsentimentoGoogle(concedido) {
    garantirGtag();
    window.gtag("consent", "update", {
      ad_storage: concedido ? "granted" : "denied",
      ad_user_data: concedido ? "granted" : "denied",
      ad_personalization: concedido ? "granted" : "denied",
      analytics_storage: "denied"
    });
  }

  function carregarScript() {
    if (estado.scriptCarregando) return estado.scriptCarregando;

    const existente = document.getElementById(SCRIPT_ID);
    if (existente && existente.dataset.carregado === "true") {
      estado.scriptCarregando = Promise.resolve();
      return estado.scriptCarregando;
    }

    estado.scriptCarregando = new Promise((resolve, reject) => {
      if (existente) {
        existente.addEventListener(
          "load",
          () => {
            existente.dataset.carregado = "true";
            resolve();
          },
          { once: true }
        );
        existente.addEventListener(
          "error",
          () => {
            estado.scriptCarregando = null;
            reject(new Error("Falha ao carregar o AdSense."));
          },
          { once: true }
        );
        return;
      }

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `${SCRIPT_URL}?client=${encodeURIComponent(CLIENTE)}`;
      script.onload = () => {
        script.dataset.carregado = "true";
        resolve();
      };
      script.onerror = () => {
        estado.scriptCarregando = null;
        script.remove();
        reject(new Error("Falha ao carregar o AdSense."));
      };
      document.head.appendChild(script);
    });

    return estado.scriptCarregando;
  }

  function prepararSlot(caixa) {
    const nome = caixa.getAttribute("data-ad");
    const slot = slotConfigurado(nome);
    if (!slot) {
      caixa.hidden = true;
      return null;
    }

    let bloco = caixa.querySelector(".adsbygoogle");
    if (!bloco) {
      bloco = document.createElement("ins");
      bloco.className = "adsbygoogle";
      bloco.style.display = "block";
      caixa.appendChild(bloco);
    }

    bloco.setAttribute("data-ad-client", CLIENTE);
    bloco.setAttribute("data-ad-slot", slot);
    bloco.setAttribute("data-ad-format", CONFIG.formato || "auto");
    bloco.setAttribute("data-full-width-responsive", "true");

    caixa.hidden = false;
    caixa.classList.add("is-loading");
    caixa.classList.remove("is-filled", "is-unfilled");
    return bloco;
  }

  function observarResultado(caixa, bloco) {
    let encerrado = false;

    function conferir() {
      const status = bloco.getAttribute("data-ad-status");
      if (status === "filled") {
        caixa.classList.remove("is-loading", "is-unfilled");
        caixa.classList.add("is-filled");
        caixa.hidden = false;
        return true;
      }
      if (status === "unfilled") {
        caixa.classList.remove("is-loading", "is-filled");
        caixa.classList.add("is-unfilled");
        window.setTimeout(() => {
          if (bloco.getAttribute("data-ad-status") !== "filled") {
            caixa.hidden = true;
          }
        }, 1200);
        return true;
      }
      return false;
    }

    if (conferir() || encerrado) return;

    if (typeof MutationObserver === "function") {
      const observador = new MutationObserver(() => {
        if (conferir()) {
          observador.disconnect();
          encerrado = true;
        }
      });
      observador.observe(bloco, { attributes: true, attributeFilter: ["data-ad-status"] });
      window.setTimeout(() => {
        observador.disconnect();
        encerrado = true;
      }, 30000);
      return;
    }

    let tentativas = 0;
    const timer = window.setInterval(() => {
      tentativas += 1;
      if (conferir() || tentativas >= 12) {
        window.clearInterval(timer);
      }
    }, 1000);
  }

  function renderizarSlot(caixa) {
    if (!caixa || caixa.dataset.adsRenderizado === "true") return;
    const bloco = prepararSlot(caixa);
    if (!bloco) return;

    caixa.dataset.adsRenderizado = "true";
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      caixa.classList.remove("is-loading");
      caixa.hidden = true;
      return;
    }
    observarResultado(caixa, bloco);
  }

  function iniciarSlots() {
    const caixas = Array.from(document.querySelectorAll(".ad-slot[data-ad]")).filter(
      (caixa) => Boolean(slotConfigurado(caixa.getAttribute("data-ad")))
    );
    if (caixas.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      for (const caixa of caixas) renderizarSlot(caixa);
      return;
    }

    if (!estado.observador) {
      estado.observador = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            if (!entrada.isIntersecting) continue;
            estado.observador.unobserve(entrada.target);
            renderizarSlot(entrada.target);
          }
        },
        { rootMargin: CONFIG.rootMargin || "320px", threshold: 0.01 }
      );
    }

    for (const caixa of caixas) {
      if (caixa.dataset.adsRenderizado === "true") continue;
      prepararSlot(caixa);
      estado.observador.observe(caixa);
    }
  }

  function ehBrave() {
    const porUserAgent = /\bBrave\//i.test(navigator.userAgent);
    try {
      if (navigator.brave && typeof navigator.brave.isBrave === "function") {
        return navigator.brave
          .isBrave()
          .then((valor) => Boolean(valor) || porUserAgent)
          .catch(() => porUserAgent);
      }
    } catch {
      // Sem a API do Brave: usa apenas o user agent.
    }
    return Promise.resolve(porUserAgent);
  }

  function avisoBraveDispensado() {
    try {
      const bruto = localStorage.getItem(AVISO_BRAVE_CHAVE);
      if (!bruto) return false;
      const dados = JSON.parse(bruto);
      const quando = Number(dados && dados.quando);
      if (!Number.isFinite(quando) || Date.now() - quando > AVISO_BRAVE_VALIDADE) {
        localStorage.removeItem(AVISO_BRAVE_CHAVE);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  function dispensarAvisoBrave() {
    try {
      localStorage.setItem(AVISO_BRAVE_CHAVE, JSON.stringify({ quando: Date.now() }));
    } catch {
      // Sem armazenamento: o aviso pode voltar na próxima visita.
    }
  }

  function mostrarAvisoBrave() {
    if (document.getElementById(AVISO_BRAVE_ID) || avisoBraveDispensado()) return;

    const aviso = document.createElement("aside");
    aviso.id = AVISO_BRAVE_ID;
    aviso.className = "brave-notice";
    aviso.setAttribute("role", "region");
    aviso.setAttribute("aria-label", "Anúncios bloqueados pelo Brave");
    aviso.innerHTML = `
      <div class="brave-notice-text">
        <strong>Brave bloqueou os anúncios</strong>
        <p>
          O Brave bloqueia anúncios por padrão. Clique no ícone de leão (Escudos) ao lado do
          endereço, permita anúncios para <b>felpsgames.com.br</b> e recarregue a página.
          O site continua funcionando normalmente sem anúncios.
        </p>
      </div>
      <div class="brave-notice-actions">
        <button type="button" class="btn btn--ghost btn--sm" data-brave-fechar>Fechar</button>
        <button type="button" class="btn btn--dark btn--sm" data-brave-recarregar>Recarregar</button>
      </div>
    `;
    document.body.appendChild(aviso);

    const fechar = aviso.querySelector("[data-brave-fechar]");
    if (fechar) {
      fechar.addEventListener("click", () => {
        dispensarAvisoBrave();
        aviso.remove();
      });
    }

    const recarregar = aviso.querySelector("[data-brave-recarregar]");
    if (recarregar) {
      recarregar.addEventListener("click", () => location.reload());
    }
  }

  function avisarBraveSeBloqueado() {
    if (!ANUNCIOS_ATIVOS) return;
    if (!hostPermitido() || !paginaPermiteAnuncios()) return;
    if (lerConsentimento() !== true) return;
    ehBrave().then((brave) => {
      if (brave) mostrarAvisoBrave();
    });
  }

  function carregarAdSense() {
    if (!ANUNCIOS_ATIVOS) return Promise.resolve(false);
    if (!hostPermitido() || !paginaPermiteAnuncios()) return Promise.resolve(false);
    if (lerConsentimento() !== true) return Promise.resolve(false);
    if (!CONFIG.auto && !temSlotsConfigurados()) return Promise.resolve(false);

    aplicarConsentimentoPadrao();
    atualizarConsentimentoGoogle(true);

    return carregarScript()
      .then(() => {
        iniciarSlots();
        return true;
      })
      .catch(() => {
        avisarBraveSeBloqueado();
        return false;
      });
  }

  function desativarAnuncios() {
    if (estado.observador) {
      estado.observador.disconnect();
      estado.observador = null;
    }
    estado.scriptCarregando = null;

    const script = document.getElementById(SCRIPT_ID);
    if (script) script.remove();

    for (const caixa of document.querySelectorAll(".ad-slot[data-ad]")) {
      caixa.hidden = true;
      caixa.classList.remove("is-loading", "is-filled", "is-unfilled");
      delete caixa.dataset.adsRenderizado;
      const bloco = caixa.querySelector(".adsbygoogle");
      if (bloco) {
        bloco.removeAttribute("data-ad-client");
        bloco.removeAttribute("data-ad-slot");
        bloco.removeAttribute("data-ad-status");
        bloco.innerHTML = "";
      }
    }
  }

  function removerBanner() {
    document.querySelectorAll(".cookie-banner").forEach((banner) => banner.remove());
  }

  function montarBanner(modo) {
    removerBanner();

    const informativo = modo === "info";
    const reaberto = modo === "preferencias";
    const escolha = lerConsentimento();
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "false");
    banner.setAttribute("aria-label", "Preferências de cookies");
    banner.dataset.podeFechar = informativo || reaberto ? "true" : "false";

    const titulo = informativo
      ? "Anúncios ainda não ativados"
      : "Cookies e privacidade";

    let texto;
    if (informativo) {
      texto =
        "Nenhum cookie de publicidade é usado neste momento. O site guarda apenas sua escolha e o último número de visitas no próprio navegador.";
    } else if (reaberto && escolha === true) {
      texto =
        "Você aceitou os anúncios. Com esse consentimento, o Google pode usar cookies de publicidade para mostrar anúncios e medir desempenho. Você pode mudar a escolha quando quiser.";
    } else if (reaberto && escolha === false) {
      texto =
        "Você está usando só o essencial. Nenhum cookie de publicidade foi carregado. Se quiser, pode aceitar os anúncios agora.";
    } else {
      texto =
        "Uso armazenamento local para o site funcionar. Com seu consentimento, também posso usar cookies de publicidade do Google para mostrar anúncios. Você pode aceitar ou continuar só com o essencial.";
    }

    banner.innerHTML = `
      <div class="cookie-banner-inner">
        <div class="cookie-banner-text">
          <strong>${titulo}</strong>
          <p>
            ${texto}
            <a href="privacidade.html#cookies">Saiba mais</a>.
          </p>
        </div>
        <div class="cookie-banner-actions">
          ${
            informativo
              ? '<button type="button" class="btn btn--dark btn--sm" data-cookie-fechar>Fechar</button>'
              : '<button type="button" class="btn btn--ghost btn--sm" data-cookie-essencial>Só o essencial</button>' +
                '<button type="button" class="btn btn--dark btn--sm" data-cookie-aceitar>Aceitar anúncios</button>' +
                (reaberto
                  ? '<button type="button" class="btn btn--ghost btn--sm" data-cookie-fechar>Fechar</button>'
                  : "")
          }
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    const fechar = banner.querySelector("[data-cookie-fechar]");
    if (fechar) {
      fechar.addEventListener("click", removerBanner);
    }

    const aceitar = banner.querySelector("[data-cookie-aceitar]");
    if (aceitar) {
      aceitar.addEventListener("click", () => {
        salvarConsentimento(true);
        removerBanner();
        atualizarConsentimentoGoogle(true);
        carregarAdSense();
      });
    }

    const essencial = banner.querySelector("[data-cookie-essencial]");
    if (essencial) {
      essencial.addEventListener("click", () => {
        const scriptCarregado = Boolean(document.getElementById(SCRIPT_ID));
        salvarConsentimento(false);
        removerBanner();
        atualizarConsentimentoGoogle(false);
        limparCookiesDeAnuncios();
        desativarAnuncios();
        if (scriptCarregado) {
          // Recarrega para encerrar qualquer conexão aberta com o Google.
          window.setTimeout(() => location.reload(), 80);
        }
      });
    }

    const foco = banner.querySelector(
      informativo || reaberto ? "[data-cookie-fechar]" : "[data-cookie-essencial]"
    );
    if (foco) {
      window.setTimeout(() => foco.focus(), 60);
    }
  }

  function abrirPreferencias() {
    montarBanner(ANUNCIOS_ATIVOS ? "preferencias" : "info");
  }

  function aoTeclar(evento) {
    if (evento.key !== "Escape") return;
    const banner = document.querySelector(".cookie-banner");
    if (!banner || banner.dataset.podeFechar !== "true") return;
    removerBanner();
  }

  function iniciarAnuncios() {
    if (window.__felpsAnunciosIniciado) return;
    window.__felpsAnunciosIniciado = true;

    document.addEventListener("click", (evento) => {
      const alvo =
        evento.target && evento.target.closest
          ? evento.target.closest("[data-cookie-prefs]")
          : null;
      if (!alvo) return;
      evento.preventDefault();
      abrirPreferencias();
    });

    if (!estado.avisoTeclado) {
      estado.avisoTeclado = true;
      document.addEventListener("keydown", aoTeclar);
    }

    if (!hostPermitido()) return;
    if (!ANUNCIOS_ATIVOS) return;

    aplicarConsentimentoPadrao();

    const escolha = lerConsentimento();
    if (escolha === true) {
      atualizarConsentimentoGoogle(true);
      carregarAdSense();
      return;
    }

    atualizarConsentimentoGoogle(false);

    if (escolha === null && paginaPermiteAnuncios()) {
      montarBanner("consentimento");
    }
  }

  window.addEventListener("storage", (evento) => {
    if (evento.key !== CONSENTIMENTO_CHAVE) return;
    const escolha = lerConsentimento();
    if (escolha === true) {
      atualizarConsentimentoGoogle(true);
      carregarAdSense();
    } else {
      atualizarConsentimentoGoogle(false);
      desativarAnuncios();
    }
  });

  window.FELPS_ANUNCIOS = {
    abrirPreferencias,
    carregarAdSense,
    desativarAnuncios,
    limparCookiesDeAnuncios,
    config: CONFIG,
    estado: () => ({
      ativo: ANUNCIOS_ATIVOS,
      consentimento: lerConsentimento(),
      scriptCarregado: Boolean(document.getElementById(SCRIPT_ID)),
      slotsConfigurados: temSlotsConfigurados()
    })
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarAnuncios);
  } else {
    iniciarAnuncios();
  }
})();
