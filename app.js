/* ============================================================
   Vitrine de produtos — dados e interações
   ------------------------------------------------------------
   COMO EDITAR
   1. Ajuste os dados de CONFIG (nome, iniciais, logo, subtitulo, bio e data).
   2. Em PRODUTOS, cada link já é um meli.la real. Para trocar, use somente
      um link de afiliado gerado no hub do Mercado Livre.
   3. As imagens entram automaticamente pela pasta
      "assets/produtos": crie uma subpasta com o nome definido em "pasta",
      coloque as fotos dentro e rode o "Publicar Site, faz backup, envia ao GitHub.bat" na raiz
      do projeto. O campo "pasta" é o identificador fixo das fotos: ele não
      deve mudar quando você encurtar ou corrigir o título do produto.
      O campo "imagem" continua valendo para uma imagem manual
      avulsa, por exemplo "assets/produto.jpg".
   4. "destaque": 1 a 9 coloca o produto nos destaques.
      Use null nos produtos que não estão em destaque.
      "estoque" e "full" ligam ou desligam as linhas
      "Estoque disponível" e "Armazenado e enviado pelo Mercado Livre".
   5. Só mude "dadosConfirmados" para true depois de conferir
      links, preços, estoque e envio de todos os produtos.
   6. Não remova o aviso de afiliado nem o rel="sponsored".
   ============================================================ */

const CONFIG = {
  nome: "FELP'S GAMES",
  iniciais: "FG",
  logo: "assets/logo-controle.svg",
  subtitulo: "Games & Eletrônicos",
  bio: "Controles, headsets, periféricos e acessórios para montar seu setup. Analiso especificações e mostro os contras antes de recomendar.",
  atualizado: "2026-11-15",
  dadosConfirmados: true
};

/* Emojis locais (Twemoji, CC-BY 4.0). Ver assets/emojis/LEIA-ME.md. */
const EMOJIS = {
  "🎮": "assets/emojis/1f3ae.svg",
  "🎧": "assets/emojis/1f3a7.svg",
  "🔌": "assets/emojis/1f50c.svg",
  "⌨️": "assets/emojis/2328.svg",
  "⌨": "assets/emojis/2328.svg",
  "🖱️": "assets/emojis/1f5b1.svg",
  "🖱": "assets/emojis/1f5b1.svg",
  "🔊": "assets/emojis/1f50a.svg",
  "💾": "assets/emojis/1f4be.svg",
  "📡": "assets/emojis/1f4e1.svg",
  "🛒": "assets/emojis/1f6d2.svg"
};

const EMOJI_PADRAO = "🛒";

const EMOJIS_CATEGORIA = {
  "Todos": "🛒",
  "Games": "🎮",
  "Eletrônicos": "🔌"
};

const PRODUTOS = [
  {
    nome: "Controle Sem Fio Joystick REDFIN Bluetooth Compatível Para Ps4 Videogame Tv Samsung Pc P4 Ps 4 Manete Pc Gamer Tv Smart Controle Bluetooth Celular Headset Sem Fio Com P2 Marca Redfin",
    pasta: "controle-sem-fio-para-pc-e-celular",
    nicho: "Games",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/1F7ujs2",
    preco: "R$ 54,90",
    nota: 4.7,
    avaliacoes: 48335,
    estoque: true,
    full: true,
    descricao: "Para jogar no PC, notebook ou celular sem depender de cabo. Uma opção para começar com um setup mais limpo.",
    publico: "quem joga no PC, notebook ou celular",
    pros: [
      "Conexão sem fio",
      "Compatibilidade com PC e celular",
      "Formato confortável para sessões longas"
    ],
    atencao: "Produto de marca Redfin, não é um controle oficial PlayStation. Confira se a conexão é Bluetooth ou por receptor USB e se o controle é compatível com o seu aparelho.",
    testado: false,
    destaque: 1
  },
  {
    nome: "Headset gamer com microfone",
    pasta: "headset-gamer-com-microfone",
    nicho: "Games",
    emoji: "🎧",
    imagem: "",
    link: "https://meli.la/2GgaBhX",
    preco: "R$ 94,09",
    nota: 4.6,
    avaliacoes: 12087,
    estoque: true,
    full: true,
    descricao: "Para jogar e conversar com o time sem precisar de outro microfone. Deixa o áudio do jogo e das chamadas em um só fone.",
    publico: "quem joga online e participa de chamadas",
    pros: [
      "Microfone integrado",
      "Áudio para jogos e chamadas",
      "Ajuste na cabeça"
    ],
    atencao: "Peso, conforto e isolamento variam conforme o modelo. Confira no anúncio os relatos sobre pressão na cabeça antes de comprar.",
    testado: false,
    destaque: 2
  },
  {
    nome: "Hub USB-C Tantsa 8 em 1",
    pasta: "hub-usb-c-tantsa-8-em-1-para-notebook-e-macbook-com-hdmi-4k-rj45-e-usb-3-0",
    nicho: "Eletrônicos",
    emoji: "🔌",
    imagem: "",
    link: "https://meli.la/1TximbE",
    preco: "R$ 35,85",
    nota: 4.7,
    avaliacoes: 1300,
    estoque: false,
    full: true,
    descricao: "Para conectar monitor, cartão de memória, HD e outros acessórios em notebook com poucas portas.",
    publico: "quem usa notebook ou tablet com poucas conexões",
    pros: [
      "Várias portas em um só adaptador",
      "Compacto para levar na mochila",
      "Útil para trabalho e estudo"
    ],
    atencao: "Nem toda porta do hub passa vídeo, dados na velocidade máxima ou carga. Confira as especificações do modelo.",
    testado: false,
    destaque: 3
  },
  {
    nome: "Kit Teclado Mouse Gamer Completo Barato Com Fio Cabo De 1,5m Led Com Iluminação Rgb Desktop Conexão Usb Cor Preto Usar Com Headset Acessorios Pc Mecanico Jogos - Goodvision",
    pasta: "kit-teclado-e-mouse-gamer-rgb-usb-com-iluminacao-led-layout-abnt2-bk-g55",
    nicho: "Games",
    emoji: "⌨️",
    imagem: "",
    link: "https://meli.la/13sUoZ8",
    preco: "R$ 58,99",
    nota: 4.7,
    avaliacoes: 41148,
    estoque: true,
    full: true,
    descricao: "Para quem quer um kit completo para jogar e trabalhar, com teclado e mouse iluminados e layout ABNT2.",
    publico: "quem joga e trabalha na mesma mesa",
    pros: [
      "Teclado e mouse no mesmo kit",
      "Iluminação RGB",
      "Layout ABNT2 com teclado numérico"
    ],
    atencao: "Confira no anúncio o tipo de tecla, o nível de ruído e o tamanho do teclado antes de comprar.",
    testado: false,
    destaque: null
  },
  {
    nome: "Mouse gamer sem fio",
    pasta: "mouse-gamer-sem-fio",
    nicho: "Games",
    emoji: "🖱️",
    imagem: "",
    link: "https://meli.la/1TTwFTw",
    preco: "R$ 21,90",
    nota: 4.8,
    avaliacoes: 6242,
    estoque: true,
    full: true,
    descricao: "Para jogar com mais liberdade de movimento e menos cabos na mesa. O ajuste de sensibilidade ajuda em estilos diferentes de jogo.",
    publico: "quem quer uma mesa mais limpa para jogar",
    pros: [
      "Conexão sem fio",
      "Ajuste de sensibilidade",
      "Formato leve"
    ],
    atencao: "A autonomia varia com o uso e a iluminação. Confira se o modelo acompanha receptor USB ou usa apenas Bluetooth.",
    testado: false,
    destaque: null
  },
  {
    nome: "Caixa Amplificada Connect Lights Cm-400 Mondial Cor Preto",
    pasta: "caixa-de-som-bluetooth-portatil",
    nicho: "Eletrônicos",
    emoji: "🔊",
    imagem: "",
    link: "https://meli.la/1K3Wtax",
    preco: "R$ 514,04",
    nota: 4.8,
    avaliacoes: 42511,
    estoque: true,
    full: true,
    descricao: "Para levar música para o quarto, a sala ou a área externa sem depender do som do celular.",
    publico: "quem quer som portátil para casa ou viagem",
    pros: [
      "Conexão Bluetooth",
      "Tamanho portátil",
      "Bateria para usar fora da tomada"
    ],
    atencao: "Potência, autonomia e resistência à água variam. Confira a classificação IP e o tempo de bateria no anúncio.",
    testado: false,
    destaque: null
  },
  {
    nome: "Suporte Gamer Controle Ps5 Ps4 Xbox E Headset Gta Rockstar",
    pasta: "suporte-gamer-controle-ps5-ps4-xbox-e-headset-gta-rockstar",
    nicho: "Eletrônicos",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2ZkYrza",
    preco: "R$ 56,00",
    nota: 5,
    avaliacoes: 10,
    estoque: false,
    full: true,
    descricao: "Suporte gamer impresso em PLA de alta qualidade, com base temática inspirada em Grand Theft Auto/Rockstar. Acomoda o headset na parte de cima e dois controles (PS5, PS4 ou Xbox) nos apoios frontais, ajudando a organizar o setup.",
    publico: "quem quer organizar o headset e os controles no setup gamer",
    pros: [
      "Impresso em PLA de alta qualidade",
      "Compatível com PS5, PS4, Xbox e headsets gamer",
      "Acabamento artesanal, feito sob encomenda"
    ],
    atencao: "Produto feito sob encomenda, com acabamento artesanal: podem ocorrer pequenas variações de cor e acabamento. Confirme no anúncio o prazo de produção e a compatibilidade com o seu controle.",
    testado: false,
    destaque: null
  },
  {
    nome: "Receptor Vivensis VX10 Nova Parabolica TV Sem Mensalidade antena OI SKY Claro Vivo Cor Preto",
    pasta: "kit-2-receptores-vx10-com-antena-parabolica-lnb-duplo",
    nicho: "Eletrônicos",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2y4G4xe",
    preco: "R$ 114,23",
    nota: 4.8,
    avaliacoes: 25966,
    estoque: true,
    full: true,
    descricao: "Kit completo para duas TVs, com dois receptores VX10, antena parabólica de 60 cm com LNB duplo, dois cabos de 15 m e mais de 90 canais sem mensalidade. Compatível com a Nova Parabólica SKY; canais pagos são opcionais. O anúncio informa garantia de 2 anos.",
    publico: "quem quer equipar duas TVs com sinal de satélite sem mensalidade",
    pros: [
      "Dois receptores para duas TVs",
      "Mais de 90 canais sem mensalidade",
      "Antena, LNB duplo e cabos inclusos"
    ],
    atencao: "A instalação e a regulagem da antena podem exigir um técnico. A lista de canais, a cobertura e a compatibilidade variam por região; confira no anúncio se os canais pagos exigem assinatura à parte.",
    testado: false,
    destaque: null
  },
  {
    nome: "Extensão Filtro de Linha B-MAX BM-10PD Turbo PD Régua 5 Tomadas USB-C Indução",
    pasta: "extensao-filtro-linha-turbo-pd-regua-5-tomadas-usb-c-inducao",
    nicho: "Eletrônicos",
    emoji: "🔌",
    imagem: "",
    link: "https://meli.la/1ZmLw38",
    preco: "R$ 61,09",
    nota: 4.9,
    avaliacoes: 110,
    estoque: true,
    full: true,
    descricao: "Régua B-MAX BM-10PD com 5 tomadas (3 de 10 A e 2 de 20 A), 3 portas USB-A, 3 USB-C e carregador por indução de 10 W. Tem cabo de 2 m, é bivolt (110–220 V) e traz proteção contra sobrecarga, curto-circuito, superaquecimento e surtos de tensão (DPS).",
    publico: "quem quer concentrar tomadas, carregadores USB e carregamento sem fio em um só ponto",
    pros: [
      "5 tomadas: 3 de 10 A e 2 de 20 A",
      "3 USB-A, 3 USB-C e indução de 10 W",
      "Proteção contra surtos, sobrecarga e superaquecimento",
      "Cabo de 2 m e bivolt automático 110–220 V"
    ],
    atencao: "O plugue de entrada é de 10 A: as tomadas de 20 A não aumentam o limite do cabo. Some o consumo dos aparelhos antes de ligar equipamentos de alta potência. As portas USB-C somam 10,5 W e a indução, 10 W — não espere carregamento rápido de notebook.",
    testado: false,
    destaque: null
  },
];

/* ============================================================
   A partir daqui você não precisa editar.
   ============================================================ */

/* Até 9 produtos podem aparecer em "Destaques da vitrine". */
const MAX_DESTAQUES = 9;

const state = {
  busca: "",
  categoria: "Todos",
  ordem: "destaques"
};

const $ = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emojiHtml(emoji, classe = "") {
  const caractere = String(emoji || EMOJI_PADRAO);
  const arquivo = EMOJIS[caractere] || EMOJIS[EMOJI_PADRAO];
  const classes = classe ? `emoji ${classe}` : "emoji";
  return `<span class="${classes}" aria-hidden="true"><img src="${arquivo}" alt="" width="36" height="36" loading="lazy" decoding="async" onerror="this.src='assets/emojis/1f6d2.svg'; this.onerror=null;" /></span>`;
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function chaveImagem(value) {
  return normalize(value);
}

function chaveProduto(produto) {
  // "pasta" é estável; o nome pode mudar sem perder a galeria.
  return chaveImagem(produto.pasta || produto.nome);
}

function precoNumero(preco) {
  const limpo = String(preco || "").replace(/[^\d,]/g, "").replace(",", ".");
  return Number(limpo) || 0;
}

function formatarData(iso) {
  const partes = String(iso || "").split("-").map(Number);
  if (partes.length !== 3 || !partes[0]) return "";
  const data = new Date(partes[0], partes[1] - 1, partes[2]);
  return data.toLocaleDateString("pt-BR");
}

function isPlaceholder(link) {
  const valor = String(link || "").trim();
  return !valor || valor === "#" || !/^https?:\/\//i.test(valor);
}

function bindProfile() {
  const marca = CONFIG.logo
    ? `<img src="${escapeHtml(CONFIG.logo)}" alt="" />`
    : escapeHtml(CONFIG.iniciais);

  $("brandName").textContent = CONFIG.nome;
  $("brandHandle").textContent = CONFIG.subtitulo;
  $("brandMark").innerHTML = marca;
  $("profileName").textContent = CONFIG.nome;
  $("profileInitials").innerHTML = marca;
  $("profileHandle").textContent = CONFIG.subtitulo;
  $("profileBio").textContent = CONFIG.bio;
  $("profileProducts").textContent = String(PRODUTOS.length);
  $("footerName").textContent = CONFIG.nome;
  document.title = `${CONFIG.nome} | Games e Eletrônicos`;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", document.title);

  const data = formatarData(CONFIG.atualizado);
  const alvo = $("updatedDate");
  if (alvo && data) {
    alvo.textContent = data;
    alvo.setAttribute("datetime", CONFIG.atualizado);
  }

  $("year").textContent = new Date().getFullYear();
}

function imagensDoProduto(produto) {
  const catalogo = window.IMAGENS_PRODUTOS || {};
  const chave = chaveProduto(produto);
  const lista = Array.isArray(catalogo[chave]) ? catalogo[chave].filter(Boolean) : [];

  if (lista.length) return lista;
  return produto.imagem ? [produto.imagem] : [];
}

function mediaHtml(produto) {
  const emoji = emojiHtml(produto.emoji, "media-fallback");
  const imagens = imagensDoProduto(produto);
  if (imagens.length === 0) return emoji;

  const total = imagens.length;
  const principal = `<img class="media-main" src="${escapeHtml(imagens[0])}" alt="${escapeHtml(produto.nome)}" loading="lazy" decoding="async" onerror="this.closest('.card-media').classList.add('sem-imagem'); this.remove();" />`;

  if (total === 1) return principal + emoji;

  const miniaturas = imagens.map((src, indice) => {
    const numero = indice + 1;
    return `<button class="media-thumb${indice === 0 ? " is-active" : ""}" type="button" data-src="${escapeHtml(src)}" data-media-index="${indice}" aria-label="Ver foto ${numero} de ${total}" aria-pressed="${indice === 0}">
        <img src="${escapeHtml(src)}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.remove()" />
      </button>`;
  }).join("");

  return `${principal}${emoji}
    <span class="media-count" aria-hidden="true">1/${total}</span>
    <div class="media-thumbs" role="group" aria-label="Fotos de ${escapeHtml(produto.nome)}">${miniaturas}</div>`;
}

function botaoHtml(produto) {
  if (isPlaceholder(produto.link)) {
    return `<span class="btn btn--dark btn--block btn--disabled" aria-disabled="true">Oferta em breve</span>
      <p class="affiliate-note">Este produto ainda não tem link de compra.</p>`;
  }

  // Abre na mesma aba em todos os navegadores: Brave, Instagram, Facebook
  // e TikTok podem bloquear a abertura de novas abas/popups.
  return `<a class="btn btn--dark btn--block" href="${escapeHtml(produto.link)}" rel="sponsored noopener noreferrer" aria-label="Comprar ${escapeHtml(produto.nome)} no Mercado Livre">
      Comprar no Mercado Livre <small>↗</small>
    </a>
    <p class="affiliate-note">Você será direcionado ao Mercado Livre · link de afiliado${produto.testado ? " · produto testado por mim" : " · análise por especificações"}</p>`;
}

function cardHtml(produto, destaque) {
  const posicao = destaque && produto.destaque
    ? `<span class="rank">#${escapeHtml(produto.destaque)}</span>`
    : "";

  const pros = (produto.pros || [])
    .slice(0, 3)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const temEstoque = produto.estoque !== false;
  const entregaFull = produto.full !== false;

  return `<article class="card${destaque ? " card--featured" : ""}">
    <div class="card-media">
      ${mediaHtml(produto)}
      ${posicao}
    </div>
    <div class="card-body">
      <span class="tag">${escapeHtml(produto.nicho || "Recomendação")}</span>
      <h3>${escapeHtml(produto.nome)}</h3>
      <p class="desc">${escapeHtml(produto.descricao)}</p>
      <p class="ideal"><strong>Ideal para:</strong> ${escapeHtml(produto.publico)}</p>
      <div class="meta-row">
        <span class="stock${temEstoque ? "" : " stock--off"}">${temEstoque ? "Estoque disponível" : "Estoque indisponível"}</span>
        <span class="shipping">${entregaFull ? "Armazenado e enviado pelo Mercado Livre" : "Enviado pelo vendedor"}</span>
      </div>
      <div class="price-row">
        <span class="price">${escapeHtml(produto.preco)}</span>
        <span class="price-note">preço de referência</span>
      </div>
      <ul class="pros">${pros}</ul>
      <div class="attention">
        <strong>Ponto de atenção</strong>
        ${escapeHtml(produto.atencao)}
      </div>
      ${botaoHtml(produto)}
    </div>
  </article>`;
}

function renderTop() {
  const top = PRODUTOS
    .filter((produto) => produto.destaque)
    .sort((a, b) => a.destaque - b.destaque)
    .slice(0, MAX_DESTAQUES);

  $("podiumGrid").innerHTML = top.map((produto) => cardHtml(produto, true)).join("");
}

function renderChips() {
  const categorias = ["Todos", ...new Set(PRODUTOS.map((p) => p.nicho).filter(Boolean))];

  $("chips").innerHTML = categorias
    .map((categoria) => {
      const emoji = emojiHtml(EMOJIS_CATEGORIA[categoria] || EMOJI_PADRAO, "chip-emoji");
      return `<button class="chip" type="button" data-categoria="${escapeHtml(categoria)}" aria-pressed="${categoria === state.categoria}">${emoji}<span>${escapeHtml(categoria)}</span></button>`;
    })
    .join("");
}

function produtosFiltrados() {
  const termo = normalize(state.busca);

  let lista = PRODUTOS.filter((produto) => {
    const combinaCategoria = state.categoria === "Todos" || produto.nicho === state.categoria;
    const texto = normalize([produto.nome, produto.nicho, produto.descricao, produto.publico, produto.atencao].join(" "));
    const combinaBusca = !termo || texto.includes(termo);
    return combinaCategoria && combinaBusca;
  });

  if (state.ordem === "menor-preco") {
    lista = [...lista].sort((a, b) => precoNumero(a.preco) - precoNumero(b.preco));
  } else {
    lista = [...lista].sort((a, b) => {
      const destaqueA = a.destaque || 99;
      const destaqueB = b.destaque || 99;
      return destaqueA - destaqueB;
    });
  }

  return lista;
}

function renderGrid() {
  const lista = produtosFiltrados();

  $("productGrid").innerHTML = lista.map((produto) => cardHtml(produto, false)).join("");
  $("emptyState").classList.toggle("is-visible", lista.length === 0);
  $("resultsCount").textContent = `${lista.length} ${lista.length === 1 ? "produto" : "produtos"}`;
}

function showStatusBanner() {
  const local = window.location.protocol === "file:";
  const semLink = PRODUTOS.filter((produto) => isPlaceholder(produto.link));
  const banner = $("editBanner");
  const partes = [];

  if (!CONFIG.dadosConfirmados) {
    partes.push("<strong>Dados de exemplo:</strong> preços, estoque e envio são referências e podem estar desatualizados. Confirme tudo no anúncio antes de comprar.");
  }

  if (semLink.length > 0) {
    partes.push(`<strong>${semLink.length} ${semLink.length === 1 ? "produto está" : "produtos estão"} sem link de compra</strong> e aparecem como “Oferta em breve”.`);
  }

  if (local) {
    partes.push("Para editar, abra <code>app.js</code>. Para atualizar as fotos, crie a pasta do produto em <code>assets/produtos</code> e rode o <code>Publicar Site, faz backup, envia ao GitHub.bat</code> na raiz do projeto.");
  }

  if (partes.length === 0) {
    banner.classList.remove("is-visible");
    return;
  }

  banner.innerHTML = partes.join(" ");
  banner.classList.add("is-visible");
}

function bindGalerias() {
  document.addEventListener("click", (event) => {
    const thumb = event.target.closest(".media-thumb");
    if (!thumb) return;

    const media = thumb.closest(".card-media");
    if (!media) return;

    const principal = media.querySelector(".media-main");
    if (!principal || !thumb.dataset.src) return;

    principal.src = thumb.dataset.src;

    const miniaturas = [...media.querySelectorAll(".media-thumb")];
    miniaturas.forEach((botao) => {
      const ativo = botao === thumb;
      botao.classList.toggle("is-active", ativo);
      botao.setAttribute("aria-pressed", String(ativo));
    });

    const contador = media.querySelector(".media-count");
    if (contador) contador.textContent = `${Number(thumb.dataset.mediaIndex) + 1}/${miniaturas.length}`;
  });
}

function bindControls() {
  $("search").addEventListener("input", (event) => {
    state.busca = event.target.value;
    renderGrid();
  });

  $("chips").addEventListener("click", (event) => {
    const botao = event.target.closest("[data-categoria]");
    if (!botao) return;
    state.categoria = botao.dataset.categoria;
    document.querySelectorAll("#chips .chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip === botao));
    });
    renderGrid();
  });

  $("sort").addEventListener("change", (event) => {
    state.ordem = event.target.value;
    renderGrid();
  });

  $("resetFilters").addEventListener("click", () => {
    state.busca = "";
    state.categoria = "Todos";
    state.ordem = "destaques";
    $("search").value = "";
    $("sort").value = "destaques";
    document.querySelectorAll("#chips .chip").forEach((chip) => {
      chip.setAttribute("aria-pressed", String(chip.dataset.categoria === "Todos"));
    });
    renderGrid();
    $("search").focus();
  });
}

function init() {
  bindProfile();
  bindGalerias();
  renderTop();
  renderChips();
  bindControls();
  renderGrid();
  showStatusBanner();
}

document.addEventListener("DOMContentLoaded", init);
