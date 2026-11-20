/* ============================================================
   Carregamento dos anuncios do Google AdSense
   ------------------------------------------------------------
   O ID e os slots vem de ads-config.js, gerado a partir de
   dados/config-site.json. O script do AdSense so e injetado
   depois que a pessoa aceita os anuncios no banner.
   ============================================================ */

(function () {
  "use strict";

  const SCRIPT_ID = "adsbygoogle-script";
  const ADS_URL = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  let carregando = null;

  function config() {
    return window.FELPS_ADS && typeof window.FELPS_ADS === "object"
      ? window.FELPS_ADS
      : {};
  }

  function publisherId() {
    const bruto = String(config().publisherId || "").trim();
    const achado = bruto.match(/^(?:ca-)?pub-(\d{16})$/i);
    return achado ? `ca-pub-${achado[1]}` : "";
  }

  function temConsentimento() {
    if (window.FelpsConsent && typeof window.FelpsConsent.hasAdsConsent === "function") {
      return window.FelpsConsent.hasAdsConsent();
    }
    try {
      const dados = JSON.parse(window.localStorage.getItem("felps-consent-v1") || "null");
      return !!(dados && dados.ads === true);
    } catch {
      return false;
    }
  }

  function slots() {
    return Array.from(document.querySelectorAll(".ad-slot[data-ad-slot]"));
  }

  function secoes() {
    return Array.from(document.querySelectorAll("[data-ad-section]"));
  }

  function ocultarTudo() {
    for (const secao of secoes()) secao.hidden = true;
    for (const slot of slots()) {
      slot.hidden = true;
      slot.classList.add("is-hidden");
    }
  }

  function mostrarSecao(slot) {
    const secao = slot.closest("[data-ad-section]");
    if (secao) secao.hidden = false;
  }

  function carregarScript(id) {
    if (carregando) return carregando;

    const existente = document.getElementById(SCRIPT_ID);
    if (existente) {
      carregando = new Promise((resolve, reject) => {
        if (existente.dataset.carregado === "true") {
          resolve();
          return;
        }
        existente.addEventListener("load", () => {
          existente.dataset.carregado = "true";
          resolve();
        }, { once: true });
        existente.addEventListener("error", () => {
          reject(new Error("Falha ao carregar o AdSense."));
        }, { once: true });
      });
      return carregando;
    }

    carregando = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `${ADS_URL}?client=${encodeURIComponent(id)}`;
      script.onload = () => {
        script.dataset.carregado = "true";
        resolve();
      };
      script.onerror = () => {
        reject(new Error("Falha ao carregar o AdSense."));
      };
      document.head.appendChild(script);
    });

    return carregando;
  }

  function criarSlot(slot, id, slotId) {
    if (slot.dataset.adsRenderizado === "true") {
      slot.hidden = false;
      slot.classList.remove("is-hidden");
      mostrarSecao(slot);
      return;
    }

    const formato = slot.dataset.adFormat || "auto";
    slot.innerHTML = "";

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", id);
    ins.setAttribute("data-ad-slot", slotId);
    ins.setAttribute("data-ad-format", formato);
    ins.setAttribute("data-full-width-responsive", "true");
    slot.appendChild(ins);

    slot.hidden = false;
    slot.classList.remove("is-hidden");
    slot.dataset.adsRenderizado = "true";
    mostrarSecao(slot);

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  function renderizar() {
    const id = publisherId();
    if (!id || !temConsentimento()) {
      ocultarTudo();
      return;
    }

    const mapa = config().slots && typeof config().slots === "object" ? config().slots : {};
    const prontos = [];
    for (const slot of slots()) {
      const chave = slot.dataset.adSlot;
      const slotId = String(mapa[chave] || "").trim();
      if (/^\d{5,}$/.test(slotId)) {
        prontos.push({ slot, slotId });
      }
    }

    if (prontos.length === 0) {
      // Sem unidades fixas, o modo automatico do AdSense assume o espaco.
      ocultarTudo();
      if (config().autoAds) {
        carregarScript(id).catch(() => {});
      }
      return;
    }

    ocultarTudo();
    carregarScript(id)
      .then(() => {
        for (const item of prontos) {
          criarSlot(item.slot, id, item.slotId);
        }
      })
      .catch(() => ocultarTudo());
  }

  function desativar() {
    ocultarTudo();
    for (const slot of slots()) {
      slot.innerHTML = "";
      delete slot.dataset.adsRenderizado;
    }
    const script = document.getElementById(SCRIPT_ID);
    if (script) script.remove();
    carregando = null;
  }

  function init() {
    renderizar();
  }

  window.FelpsAds = {
    refresh: renderizar,
    disable: desativar,
    enabled: function () {
      return !!publisherId();
    }
  };

  window.addEventListener("felps:consent", function (evento) {
    if (evento && evento.detail && evento.detail.ads) {
      renderizar();
    } else {
      desativar();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
