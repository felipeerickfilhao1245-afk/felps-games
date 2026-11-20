/* ============================================================
   Consentimento de cookies e armazenamento local
   ------------------------------------------------------------
   O banner aparece na primeira visita e guarda a escolha em
   localStorage. Os anuncios do Google AdSense so carregam depois
   que a pessoa clica em "Aceitar todos".
   ============================================================ */

(function () {
  "use strict";

  const CHAVE = "felps-consent-v1";
  const VERSAO = 1;
  let memoria = null;
  let banner = null;

  function ler() {
    try {
      const bruto = window.localStorage.getItem(CHAVE);
      if (!bruto) return memoria;
      const dados = JSON.parse(bruto);
      if (!dados || dados.versao !== VERSAO || typeof dados.ads !== "boolean") {
        return null;
      }
      return dados;
    } catch {
      return memoria;
    }
  }

  function salvar(ads) {
    const dados = {
      versao: VERSAO,
      ads: !!ads,
      data: new Date().toISOString()
    };
    memoria = dados;
    try {
      window.localStorage.setItem(CHAVE, JSON.stringify(dados));
    } catch {
      // Sem localStorage (modo privado), a escolha vale para esta visita.
    }
    return dados;
  }

  function temConsentimentoAnuncios() {
    const dados = ler();
    return !!(dados && dados.ads === true);
  }

  function avisarMudanca(ads) {
    document.documentElement.dataset.adsConsent = ads ? "granted" : "denied";
    try {
      window.dispatchEvent(new CustomEvent("felps:consent", { detail: { ads: !!ads } }));
    } catch {
      const evento = document.createEvent("CustomEvent");
      evento.initCustomEvent("felps:consent", false, false, { ads: !!ads });
      window.dispatchEvent(evento);
    }
  }

  function fechar() {
    if (!banner) return;
    banner.classList.remove("is-visible");
    document.body.classList.remove("cookie-open");
    window.setTimeout(() => {
      if (banner && !banner.classList.contains("is-visible")) {
        banner.hidden = true;
      }
    }, 260);
  }

  function decidir(ads) {
    salvar(ads);
    fechar();
    avisarMudanca(ads);
  }

  function criarBanner() {
    if (banner && document.body.contains(banner)) return banner;

    banner = document.createElement("div");
    banner.id = "cookieBanner";
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "false");
    banner.setAttribute("aria-labelledby", "cookieTitle");
    banner.setAttribute("aria-describedby", "cookieText");
    banner.innerHTML = [
      '<div class="cookie-banner-inner">',
      '  <div class="cookie-copy">',
      '    <h2 id="cookieTitle">Cookies e privacidade</h2>',
      '    <p id="cookieText">Uso cookies e armazenamento local essenciais para o site funcionar. Com seu consentimento, também uso cookies de publicidade do Google AdSense para mostrar anúncios. Você pode aceitar todos ou continuar só com os essenciais. <a href="politica-de-privacidade.html">Política de privacidade</a>.</p>',
      '  </div>',
      '  <div class="cookie-actions">',
      '    <button type="button" class="btn btn--ghost btn--sm" data-cookie="essential">Só essenciais</button>',
      '    <button type="button" class="btn btn--dark btn--sm" data-cookie="all">Aceitar todos</button>',
      '    <button type="button" class="cookie-close" data-cookie="close" aria-label="Fechar preferências de cookies">&times;</button>',
      '  </div>',
      '</div>'
    ].join("");
    document.body.appendChild(banner);

    banner.querySelector("[data-cookie='all']").addEventListener("click", () => decidir(true));
    banner.querySelector("[data-cookie='essential']").addEventListener("click", () => decidir(false));
    banner.querySelector("[data-cookie='close']").addEventListener("click", fechar);

    return banner;
  }

  function abrir() {
    const caixa = criarBanner();
    const temEscolha = !!ler();
    caixa.hidden = false;
    caixa.classList.toggle("is-reopened", temEscolha);
    caixa.classList.add("is-visible");
    document.body.classList.add("cookie-open");

    const foco = caixa.querySelector(
      temEscolha ? "[data-cookie='close']" : "[data-cookie='essential']"
    );
    if (foco) {
      window.setTimeout(() => foco.focus(), 60);
    }
  }

  function init() {
    const ano = document.getElementById("year");
    if (ano) ano.textContent = String(new Date().getFullYear());

    document.addEventListener("click", (evento) => {
      const alvo = evento.target && evento.target.closest
        ? evento.target.closest("[data-cookie-open]")
        : null;
      if (!alvo) return;
      evento.preventDefault();
      abrir();
    });

    const salvo = ler();
    if (salvo) {
      document.documentElement.dataset.adsConsent = salvo.ads ? "granted" : "denied";
    } else {
      abrir();
    }
  }

  window.FelpsConsent = {
    CHAVE,
    abrir,
    fechar,
    get: ler,
    hasAdsConsent: temConsentimentoAnuncios,
    set: decidir
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
