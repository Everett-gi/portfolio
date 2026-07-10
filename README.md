# Dossiê GM-2026 — Portfólio de Gildean Monteiro

Portfólio pessoal com conceito de **relatório de reconhecimento (recon report)**: o visitante "investiga" o alvo — perfil, capacidades, evidências (projetos) e registro de atividade (experiência).

**Stack:** HTML + CSS + JavaScript puros. Zero dependências, zero build. Deploy estático na Vercel com cabeçalhos de segurança configurados (CSP, HSTS, X-Frame-Options — como todo portfólio de cibersegurança deveria ter).

## Estrutura

```
gildean-portfolio/
├── index.html           # dossiê principal (7 seções)
├── certificados.html    # ANEXO A — arquivo completo de credenciais
├── css/
│   └── styles.css       # identidade visual (tokens em :root)
├── js/
│   ├── main.js          # scramble, tarjas, filtros, contadores, reveal
│   └── certificados.js  # dados + filtros + busca do arquivo de credenciais
├── vercel.json          # cleanUrls + cabeçalhos de segurança
├── .gitignore
└── README.md
```

## Como adicionar um certificado

Abra `js/certificados.js` e copie uma linha do array `CREDENCIAIS`:

```js
{ titulo: 'Nome do certificado', emissor: 'Instituição', area: 'java', ano: '2026', link: 'https://url-de-verificacao' },
```

Áreas válidas: `ciber` · `java` · `python-ia` · `front` · `cloud` · `redes` · `gestao` · `idiomas`. Os campos `ano`, `data`, `carga`, `detalhes` e `link` são opcionais. Para exibir a imagem do certificado, salve o JPG em `img/certificados/` e aponte no campo `img` — o card mostra a miniatura e o clique abre o modal de inspeção com a imagem em tamanho grande. Numeração, filtros, busca e contagem se ajustam sozinhos. Para criar uma área nova, adicione a chave no objeto `AREAS` do mesmo arquivo e um botão correspondente em `certificados.html`.

## Deploy na Vercel

### Opção 1 — pelo GitHub (recomendado)

```bash
cd gildean-portfolio
git init
git add .
git status   # confira antes de commitar
git commit -m "feat: portfolio dossiê GM-2026"
git branch -M main
git remote add origin https://github.com/Everett-gi/portfolio.git
git push -u origin main
```

Depois: [vercel.com/new](https://vercel.com/new) → **Import** o repositório `portfolio` → Framework Preset: **Other** → **Deploy**. Nenhuma configuração extra é necessária.

### Opção 2 — pela CLI

```bash
npm i -g vercel
cd gildean-portfolio
vercel login
vercel --prod
```

## Personalização rápida

| O que mudar          | Onde                                              |
| -------------------- | ------------------------------------------------- |
| Cores                | `css/styles.css` → bloco `:root` (linhas 8–25)    |
| Projetos             | `index.html` → Seção 04, cards `<article class="ev">` |
| Níveis de habilidade | Seção 03 → quantidade de `<i class="on">` por linha |
| Certificados         | `index.html` → Seção 04, cards `<article class="cred">` — troque os links "↗ verificar" pelas URLs reais das credenciais quando tiver |
| Texto da tarja preta | `index.html` → atributo `data-segredo` do botão `.redacao` |
| Frases da máquina de escrever | `js/main.js` → array `frases`            |
| Rótulos alternativos dos botões | `index.html` → 2º `<span>` dentro de `.rotulos` |
| Durações no hover das datas | `index.html` → 2º `<span>` dentro de `.log-data` |
| Velocidade da faixa  | `css/styles.css` → `.faixa-trilho` (`32s`)        |

## Verificar os cabeçalhos de segurança após o deploy

```bash
curl -I https://SEU-PROJETO.vercel.app | grep -iE "content-security|x-frame|strict-transport|x-content"
```
