# FELP'S GAMES

Vitrine independente de games e eletrônicos, com prós, contras, preços e links de afiliado do Mercado Livre.

**Site publicado:** https://felpsgames.com.br/

**Endereço do GitHub Pages:** https://felipeerickfilhao1245-afk.github.io/felps-games/ (redireciona para o domínio próprio quando o DNS está ativo)

## Conteúdo

- `index.html` — estrutura da página
- `app.js` — dados dos produtos, renderização e filtros
- `styles.css` — visual e responsividade
- `manifest.webmanifest` — instalação como app
- `assets/produtos/` — fotos dos produtos e `manifest.js` gerado automaticamente
- `robots.txt` e `sitemap.xml` — indexação no Google
- `CNAME` — domínio próprio usado pelo GitHub Pages
- `.nojekyll` — desativa o Jekyll e publica os arquivos como estão

## Publicação

O GitHub Pages publica a branch `main`, na raiz do repositório.

Para atualizar o site, edite os arquivos, faça commit e envie para o GitHub:

```powershell
git add -A
git commit -m "Atualiza a vitrine"
git push
```

O GitHub Pages republica automaticamente em alguns minutos.

## Domínio próprio

O arquivo `CNAME` contém `felpsgames.com.br`. No DNS do registrador:

### Registro.br: ativar o Modo Avançado

O domínio recém-registrado fica no **Modo Básico**, que só permite redirecionamento. Para usar registros A/AAAA/CNAME:

1. Acesse https://registro.br/painel/ e entre na conta.
2. Em **Domínios**, clique em `felpsgames.com.br`.
3. Desça até a seção **DNS** e clique em **Configurar Endereçamento**.
4. Clique em **Modo Avançado** e confirme.
5. Aguarde a mensagem de transição concluída e atualize a página.
6. Clique em **Configurar zona DNS**.
7. Em **Nova Entrada**, adicione cada registro da tabela e clique em **Adicionar**.
8. No fim, clique em **Salvar Alterações**.

A publicação do Registro.br ocorre a cada 5 minutos.

### Registros

O campo **Nome** do painel aceita o nome completo do host. **Não use `@` nem `*`** — o painel do Registro.br recusa esses caracteres.

| Tipo | Nome | Valor |
|---|---|---|
| A | `felpsgames.com.br` | `185.199.108.153` |
| A | `felpsgames.com.br` | `185.199.109.153` |
| A | `felpsgames.com.br` | `185.199.110.153` |
| A | `felpsgames.com.br` | `185.199.111.153` |
| AAAA | `felpsgames.com.br` | `2606:50c0:8000::153` |
| AAAA | `felpsgames.com.br` | `2606:50c0:8001::153` |
| AAAA | `felpsgames.com.br` | `2606:50c0:8002::153` |
| AAAA | `felpsgames.com.br` | `2606:50c0:8003::153` |
| CNAME | `www.felpsgames.com.br` | `felipeerickfilhao1245-afk.github.io` |

No GitHub: **Settings → Pages → Custom domain** = `felpsgames.com.br`, depois ative **Enforce HTTPS**.

## Aviso

Os links de compra são de afiliado do Mercado Livre e usam `rel="sponsored"`. Preços e disponibilidade podem mudar sem aviso.
