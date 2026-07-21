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
│   ├── i18n.js          # idiomas (PT/EN/IT/FR): motor + dicionário da interface
│   ├── main.js          # scramble, tarjas, filtros, contadores, reveal, typewriter
│   └── certificados.js  # dados + filtros + busca do arquivo de certificados
├── vercel.json          # cleanUrls + cabeçalhos de segurança
├── .gitignore
└── README.md
```

## Idiomas (PT · EN · IT · FR)

O site troca de idioma sem recarregar, lembra a escolha (localStorage) e detecta o idioma do navegador na primeira visita. Todo texto traduzível no HTML usa um atributo `data-i18n*`:

| Atributo            | Efeito                                    |
| ------------------- | ----------------------------------------- |
| `data-i18n`         | troca o texto (textContent)               |
| `data-i18n-html`    | troca conteúdo com HTML (spans, `<br>`)   |
| `data-i18n-ph`      | troca o `placeholder`                     |
| `data-i18n-al`      | troca o `aria-label`                      |
| `data-i18n-secret`  | troca o texto secreto da tarja preta      |
| `data-i18n-title`   | troca o `<title>` da aba                  |
| `data-i18n-desc`    | troca a meta description                  |

Para ajustar qualquer texto, edite a chave correspondente nos **quatro** blocos de idioma (`pt`, `en`, `it`, `fr`) dentro de `js/i18n.js`. As frases da máquina de escrever ficam no objeto `FRASES` do mesmo arquivo.

### Traduzir a descrição de um certificado

No `js/certificados.js`, o campo `detalhes` aceita **string** (mesmo texto em todos os idiomas) **ou objeto** por idioma. Para traduzir, troque a string por um objeto:

```js
detalhes: {
  pt: 'Texto em português.',
  en: 'Text in English.',
  it: 'Testo in italiano.',
  fr: 'Texte en français.'
},
```

Se um idioma faltar no objeto, o sistema usa o português automaticamente (fallback). Os campos visíveis do card — número, área, título e emissor — já se traduzem sozinhos (a área vem do dicionário).

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
