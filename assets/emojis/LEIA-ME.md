# Emojis do site

Esta pasta guarda os SVGs usados nos cards e nos filtros da vitrine. Eles ficam
no próprio site para não depender de fontes de emoji do sistema nem de
requisições a servidores de terceiros.

## Origem e licença

- **Origem:** [Twemoji](https://github.com/jdecked/twemoji), o fork mantido do
  projeto original da Twitter.
- **Desenhos (SVG):** Creative Commons Attribution 4.0 International
  (CC-BY 4.0). O texto da licença está em `LICENSE-GRAPHICS`.
- **Código do Twemoji:** MIT. O texto está em `LICENSE-MIT`; o site usa apenas
  os arquivos gráficos.
- **Atribuição no site:** o rodapé de `index.html` informa “Emojis por Twemoji,
  licença CC-BY 4.0” com link para o projeto.

Os arquivos foram baixados sem alterações do repositório do Twemoji.

## Arquivos usados

| Emoji | Caractere | Arquivo | Uso no site |
|---|---|---|---|
| 🎮 | U+1F3AE | `1f3ae.svg` | Games, controle |
| 🎧 | U+1F3A7 | `1f3a7.svg` | Headset |
| 🔌 | U+1F50C | `1f50c.svg` | Eletrônicos, hub USB |
| ⌨️ | U+2328 | `2328.svg` | Teclado |
| 🖱️ | U+1F5B1 | `1f5b1.svg` | Mouse |
| 🔊 | U+1F50A | `1f50a.svg` | Caixa de som |
| 💾 | U+1F4BE | `1f4be.svg` | Pen drive |
| 📡 | U+1F4E1 | `1f4e1.svg` | Antena / receptores |
| 🛒 | U+1F6D2 | `1f6d2.svg` | Carrinho, categoria “Todos” |

O mapa que liga cada caractere ao arquivo fica em `app.js`, na constante
`EMOJIS`. Os emojis aparecem nos chips de categoria e como imagem de reserva
quando um produto ainda não tem foto.

## Como adicionar outro emoji

1. Baixe o SVG correspondente de
   `https://github.com/jdecked/twemoji/tree/main/assets/svg`.
2. Salve o arquivo nesta pasta com o nome do código Unicode, por exemplo
   `1f4fa.svg`.
3. Registre o caractere e o caminho no mapa `EMOJIS` de `app.js`.
4. Rode `Publicar Site.bat` para copiar a pasta para o repositório.

Mantenha o crédito ao Twemoji no rodapé e os arquivos de licença nesta pasta.
