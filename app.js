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
   7. "precoAnterior" e "desconto" são gerados pelo script de atualização
      de preços para montar o selo de oferta. Não edite esses campos à mão.
   ============================================================ */

const CONFIG = {
  nome: "FELP'S GAMES",
  iniciais: "FG",
  logo: "assets/logo-controle.svg?v=e62508aea4",
  subtitulo: "Games & Eletrônicos",
  bio: "Controles, headsets, periféricos e acessórios para montar seu setup. Analiso especificações antes de recomendar.",
  atualizado: "2026-11-20",
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
    preco: "R$ 52,15",
    precoAnterior: "R$ 114,90",
    desconto: 54,
    nota: 4.7,
    avaliacoes: 46898,
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
    precoAnterior: "R$ 107,90",
    desconto: 12,
    nota: 4.7,
    avaliacoes: 12110,
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
    nome: "Grand Theft Auto VI - PlayStation 5",
    pasta: "grand-theft-auto-vi-playstation-5",
    nicho: "Games",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2tig57c",
    preco: "R$ 499,00",
    nota: 5,
    avaliacoes: 1763,
    estoque: true,
    full: true,
    descricao: "Grand Theft Auto VI para PlayStation 5 em mídia física. A aventura se passa em Vice City, no estado de Leonida, e acompanha a história de Lucia e Jason em um mundo aberto da Rockstar.",
    publico: "quem joga no PS5 e quer a versão física de GTA VI",
    pros: [
      "Mídia física para PlayStation 5",
      "Mundo aberto de Vice City e Leonida",
      "História protagonizada por Lucia e Jason"
    ],
    atencao: "Jogo indicado para maiores de 18 anos. Confira no anúncio a região, o idioma e se o disco exige download ou conexão com a internet.",
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
    precoAnterior: "R$ 79,00",
    desconto: 25,
    nota: 4.7,
    avaliacoes: 4515,
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
    precoAnterior: "R$ 49,90",
    desconto: 56,
    nota: 4.8,
    avaliacoes: 6294,
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
    preco: "R$ 519,99",
    nota: 4.8,
    avaliacoes: 42546,
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
    nome: "Suporte Monitor Preto Pc Gamer Base Informática Prateleira",
    pasta: "suporte-monitor-preto-pc-gamer-base-informatica-prateleira",
    nicho: "Eletrônicos",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2Sf2jqQ",
    preco: "R$ 73,00",
    precoAnterior: "R$ 119,90",
    desconto: 39,
    nota: 4.2,
    avaliacoes: 351,
    estoque: true,
    full: true,
    descricao: "Suporte de mesa para monitor em MDP de 15 mm, com 100 cm de largura e 15 cm de altura. Tem prateleira inferior para teclado, controles e acessórios e suporta até 35 kg.",
    publico: "quem trabalha ou joga no PC e quer elevar o monitor e liberar espaço na mesa",
    pros: [
      "Estrutura em MDP de 15 mm",
      "Suporta até 35 kg e monitores de até 32 polegadas",
      "Prateleira inferior para teclado e acessórios"
    ],
    atencao: "A altura é fixa de 15 cm e a base tem 100 cm de largura: confira as medidas da sua mesa e do monitor antes de comprar.",
    testado: false,
    destaque: null
  },
  {
    nome: "Jogo Gta 5 Ps5 - Grand Theft Auto V Ps5 Mídia Física",
    pasta: "jogo-gta-5-ps5-grand-theft-auto-v-ps5-midia-fisica",
    nicho: "Games",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/31uD98N",
    preco: "R$ 137,71",
    precoAnterior: "R$ 197,43",
    desconto: 30,
    nota: 4.8,
    avaliacoes: 13328,
    estoque: true,
    full: true,
    descricao: "Grand Theft Auto V para PlayStation 5 em mídia física. Inclui o modo história de Michael, Franklin e Trevor em Los Santos e o acesso ao GTA Online.",
    publico: "quem quer jogar GTA V e GTA Online no PlayStation 5",
    pros: [
      "Modo história e GTA Online",
      "Mídia física para PlayStation 5",
      "Versão com visual aprimorado para o console"
    ],
    atencao: "O GTA Online exige conexão com a internet e conta na Rockstar. Confira no anúncio a região e o idioma do disco antes de comprar.",
    testado: false,
    destaque: null
  },
  {
    nome: "Extensão Filtro de Linha B-MAX BM-10PD Turbo PD Régua 5 Tomadas USB-C Indução",
    pasta: "extensao-filtro-linha-turbo-pd-regua-5-tomadas-usb-c-inducao",
    nicho: "Eletrônicos",
    emoji: "🔌",
    imagem: "",
    link: "https://meli.la/1sR99wD",
    preco: "R$ 72,25",
    nota: 4.9,
    avaliacoes: 432,
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
  {
    nome: "Fone de Ouvido Gamer In-ear Vellon TWS Bluetooth 5.0, com Microfone e Estojo de Carregamento",
    pasta: "fone-de-ouvido-gamer-in-ear-vellon-tws-bluetooth-5-0",
    nicho: "Games",
    emoji: "🎧",
    imagem: "",
    link: "https://meli.la/1G3E6yA",
    preco: "R$ 38,90",
    precoAnterior: "R$ 78,90",
    desconto: 50,
    nota: 4.8,
    avaliacoes: 1000,
    estoque: true,
    full: false,
    descricao: "Para jogar, ouvir música e atender chamadas sem fio no celular, no PC ou no notebook. O estojo de carregamento guarda os fones e ajuda a levar o conjunto na mochila.",
    publico: "quem quer um fone sem fio para jogar e ouvir música no dia a dia",
    pros: [
      "Bluetooth 5.0",
      "Microfone integrado",
      "Estojo de carregamento"
    ],
    atencao: "A autonomia e o alcance do Bluetooth variam com o uso. Confira no anúncio o tempo de bateria e se o estojo acompanha cabo de carregamento.",
    testado: false,
    destaque: null
  },
  {
    nome: "Controle Microsoft Wireless Carbon Black para Xbox Series X|S e PC",
    pasta: "controle-microsoft-wireless-carbon-black-para-xbox-series-x-s-e-pc",
    nicho: "Games",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2eNZ7RC",
    preco: "R$ 389,99",
    precoAnterior: "R$ 499,99",
    desconto: 22,
    estoque: true,
    full: false,
    descricao: "Controle sem fio Microsoft para Xbox Series X|S e PC, com conexão Bluetooth e USB-C. O formato ergonômico e os botões conhecidos dos controles Xbox funcionam no console e no computador.",
    publico: "quem joga no Xbox Series X|S ou no PC",
    pros: [
      "Modelo Microsoft Wireless",
      "Conexão Bluetooth e USB-C",
      "Compatível com Xbox Series X|S e PC"
    ],
    atencao: "Confira no anúncio se o produto é original, se acompanha pilhas e cabo USB-C e se o vendedor é loja oficial. No PC, computadores sem Bluetooth precisam de um adaptador.",
    testado: false,
    destaque: null
  },
  {
    nome: "PlayStation 5 Slim Disk 1 TB com 1 Controle Branco Sony",
    pasta: "playstation-5-slim-disk-1-tb-com-1-controle-branco-sony",
    nicho: "Games",
    emoji: "🎮",
    imagem: "",
    link: "https://meli.la/2HonhMv",
    preco: "R$ 5.049,00",
    estoque: true,
    full: false,
    descricao: "Console PlayStation 5 Slim com leitor de disco, SSD de 1 TB e um controle DualSense branco. Uma opção para jogar os lançamentos do PS5 em mídia física e digital.",
    publico: "quem quer entrar na geração PS5 com leitor de disco",
    pros: [
      "Leitor de disco integrado",
      "SSD de 1 TB",
      "Acompanha um controle DualSense"
    ],
    atencao: "Confira no anúncio a garantia, a região do console e se o modelo é mesmo o Slim com leitor de disco. Os jogos são vendidos separadamente.",
    testado: false,
    destaque: null
  },
];

/* ============================================================
   A partir daqui você não precisa editar.
   ============================================================ */

/* Até 9 produtos podem aparecer em "Destaques da vitrine". */
const MAX_DESTAQUES = 9;

/* Contador de cliques: mesmo serviço do contador de visitas, sem cookies. */
const ABACUS = "https://abacus.jasoncameron.dev";
const HOSTS_OFICIAIS = new Set(["felpsgames.com.br", "www.felpsgames.com.br"]);

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

function hashChave(texto) {
  // FNV-1a de 32 bits: chave curta e estável para o contador do Abacus.
  let hash = 2166136261;
  const valor = String(texto || "");
  for (let i = 0; i < valor.length; i += 1) {
    hash ^= valor.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function registrarClique(hashProduto, origem) {
  if (!HOSTS_OFICIAIS.has(window.location.hostname) || !hashProduto) return;

  const sufixo = origem === "destaque" ? "d" : "l";
  const chave = `clique-${hashProduto}-${sufixo}`;
  const url = `${ABACUS}/hit/${encodeURIComponent("felpsgames.com.br")}/${chave}`;

  try {
    // keepalive permite concluir o registro mesmo com a navegação para o Mercado Livre.
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      credentials: "omit",
      keepalive: true
    }).catch(() => {});
  } catch {
    // Se o contador estiver indisponível, a compra continua normalmente.
  }
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

function notaHtml(produto) {
  const nota = Number(produto.nota);
  const avaliacoes = Number(produto.avaliacoes);
  if (!Number.isFinite(nota) || nota <= 0 || !Number.isFinite(avaliacoes) || avaliacoes <= 0) {
    return "";
  }

  const notaTexto = nota.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
  const avaliacoesTexto = new Intl.NumberFormat("pt-BR").format(avaliacoes);
  const rotuloAvaliacoes = avaliacoes === 1 ? "avaliação" : "avaliações";

  return `<p class="rating">
      <span class="sr-only">Nota do anúncio no Mercado Livre: </span>
      <span class="rating-star" aria-hidden="true">★</span>
      <strong>${notaTexto}</strong>
      <span class="rating-context">· ${avaliacoesTexto} ${rotuloAvaliacoes} no anúncio</span>
    </p>`;
}

function atencaoHtml(produto) {
  const texto = String(produto.atencao || "").trim();
  if (!texto) return "";

  return `<details class="caveat">
      <summary>Ponto de atenção<span class="sr-only"> sobre ${escapeHtml(produto.nome)}</span></summary>
      <p>${escapeHtml(texto)}</p>
    </details>`;
}

function botaoHtml(produto, origem) {
  if (produto.estoque === false) {
    return `<p class="affiliate-note">Produto indisponível no momento. Sem link de compra.</p>`;
  }

  if (isPlaceholder(produto.link)) {
    return `<span class="btn btn--dark btn--block btn--disabled" aria-disabled="true">Oferta em breve</span>
      <p class="affiliate-note">Este produto ainda não tem link de compra.</p>`;
  }

  // Abre na mesma aba em todos os navegadores: Brave, Instagram, Facebook
  // e TikTok podem bloquear a abertura de novas abas/popups.
  const hashProduto = hashChave(chaveProduto(produto));
  return `<a class="btn btn--dark btn--block" href="${escapeHtml(produto.link)}" rel="sponsored noopener noreferrer" data-afiliado="true" data-clique="${hashProduto}" data-origem="${origem}">
      Comprar no Mercado Livre <span class="sr-only"> — ${escapeHtml(produto.nome)}</span> <small aria-hidden="true">↗</small>
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
  const desconto = Number(produto.desconto);
  const temDesconto =
    typeof produto.precoAnterior === "string" &&
    produto.precoAnterior.trim() !== "" &&
    Number.isFinite(desconto) &&
    desconto > 0 &&
    desconto < 100;
  const seloDesconto = temDesconto
    ? `<span class="price-old"><span class="sr-only">Preço anterior: </span>${escapeHtml(produto.precoAnterior)}</span>
        <span class="badge-off">${desconto}% OFF</span>`
    : "";

  return `<article class="card${destaque ? " card--featured" : ""}">
    <div class="card-media">
      ${mediaHtml(produto)}
      ${posicao}
    </div>
    <div class="card-body">
      <span class="tag">${escapeHtml(produto.nicho || "Recomendação")}</span>
      <h3>${escapeHtml(produto.nome)}</h3>
      ${notaHtml(produto)}
      <p class="desc">${escapeHtml(produto.descricao)}</p>
      <p class="ideal"><strong>Ideal para:</strong> ${escapeHtml(produto.publico)}</p>
      <div class="meta-row">
        <span class="stock${temEstoque ? "" : " stock--off"}">${temEstoque ? "Estoque disponível" : "Estoque indisponível"}</span>
        <span class="shipping">${entregaFull ? "Armazenado e enviado pelo Mercado Livre" : "Enviado pelo vendedor"}</span>
      </div>
      <div class="price-row">
        <span class="price">${escapeHtml(produto.preco)}</span>
        ${seloDesconto}
        <span class="price-note">preço de referência</span>
      </div>
      <ul class="pros">${pros}</ul>
      ${atencaoHtml(produto)}
      ${botaoHtml(produto, destaque ? "destaque" : "lista")}
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

// Cores dos chips de categoria: vermelho=promocoes, amarelo=ofertas,
// verde=games, azul=eletronico. As classes estao em styles.css.
const CORES_CATEGORIA = {
  Todos: "chip-vermelho",
  Games: "chip-verde",
  "Eletrônicos": "chip-azul"
};

function renderChips() {
  const categorias = ["Todos", ...new Set(PRODUTOS.map((p) => p.nicho).filter(Boolean))];

  $("chips").innerHTML = categorias
    .map((categoria) => {
      const emoji = emojiHtml(EMOJIS_CATEGORIA[categoria] || EMOJI_PADRAO, "chip-emoji");
      const cor = CORES_CATEGORIA[categoria] || "";
      return `<button class="chip ${cor}" type="button" data-categoria="${escapeHtml(categoria)}" aria-pressed="${categoria === state.categoria}">${emoji}<span>${escapeHtml(categoria)}</span></button>`;
    })
    .join("");
}

function produtosFiltrados() {
  const termo = normalize(state.busca);

  let lista = PRODUTOS.filter((produto) => {
    const combinaCategoria = state.categoria === "Todos" || produto.nicho === state.categoria;
    const texto = normalize([produto.nome, produto.nicho, produto.descricao, produto.publico].join(" "));
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

function bindCliquesAfiliado() {
  const registrar = (event) => {
    const link = event.target && event.target.closest
      ? event.target.closest("a[data-afiliado]")
      : null;
    if (!link || !link.dataset.clique) return;
    registrarClique(link.dataset.clique, link.dataset.origem);
  };

  document.addEventListener("click", registrar);
  document.addEventListener("auxclick", (event) => {
    if (event.button === 1) registrar(event);
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

const CACHE_VISITAS = "felps-visitas";

function lerVisitasSalvas() {
  try {
    const bruto = window.localStorage.getItem(CACHE_VISITAS);
    if (bruto == null || bruto === "") return null;
    const total = Number(bruto);
    return Number.isFinite(total) && total >= 0 ? total : null;
  } catch {
    return null;
  }
}

function salvarVisitas(total) {
  try {
    window.localStorage.setItem(CACHE_VISITAS, String(total));
  } catch {
    // Sem localStorage (modo privado), o contador continua funcionando.
  }
}

function mostrarVisitas(caixa, alvo, rotulo, total) {
  if (!Number.isFinite(total) || total < 0) return;
  alvo.textContent = new Intl.NumberFormat("pt-BR").format(total);
  rotulo.textContent = total === 1 ? "visita" : "visitas";
  caixa.hidden = false;
}

async function consultarVisitas(url) {
  const controle = new AbortController();
  const prazo = setTimeout(() => controle.abort(), 8000);
  try {
    const resposta = await fetch(url, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: controle.signal
    });
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
    const dados = await resposta.json();
    const total = Number(dados && dados.value);
    if (!Number.isFinite(total) || total < 0) throw new Error("valor invalido");
    return total;
  } finally {
    clearTimeout(prazo);
  }
}

async function initContadorVisitas() {
  const caixa = document.getElementById("visitCounter");
  const alvo = document.getElementById("visitCount");
  const rotulo = document.getElementById("visitLabel");
  if (!caixa || !alvo || !rotulo) return;

  // Conta somente no dominio oficial; previsoes locais e o github.io ficam de fora.
  if (!HOSTS_OFICIAIS.has(window.location.hostname)) {
    caixa.hidden = true;
    return;
  }

  const salvo = lerVisitasSalvas();
  if (salvo != null) mostrarVisitas(caixa, alvo, rotulo, salvo);

  try {
    let total;
    try {
      total = await consultarVisitas(`${ABACUS}/hit/felpsgames.com.br/visitas`);
    } catch {
      // O /hit pode falhar por limite de uso; o /get ainda mostra o total.
      total = await consultarVisitas(`${ABACUS}/get/felpsgames.com.br/visitas`);
    }
    mostrarVisitas(caixa, alvo, rotulo, total);
    salvarVisitas(total);
  } catch {
    // Se o servico estiver indisponivel, mantem o ultimo total salvo.
    if (salvo == null) {
      alvo.textContent = "—";
      rotulo.textContent = "visitas";
      caixa.hidden = false;
    }
  }
}

function init() {
  // O contador e independente da vitrine: inicia primeiro para nao depender
  // de nenhuma outra parte da pagina.
  initContadorVisitas();
  bindProfile();
  bindGalerias();
  bindCliquesAfiliado();
  renderTop();
  renderChips();
  bindControls();
  renderGrid();
  showStatusBanner();
}

document.addEventListener("DOMContentLoaded", init);
