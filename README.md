# Portfólio · Gildean Monteiro

Portfólio pessoal de Gildean Monteiro do Nascimento, desenvolvedor full stack júnior (Java, Spring Boot, PostgreSQL, Cloud e cibersegurança).

**Stack:** HTML, CSS e JavaScript puros. Sem dependências e sem build. Deploy estático na Vercel com cabeçalhos de segurança (CSP, HSTS, X-Frame-Options).

**Design:** fundo escuro quente, coral de destaque, títulos em Geist com uma palavra em Instrument Serif itálico e rótulos em JetBrains Mono, com seções numeradas (§ 01, § 02…). Inspirado no layout de thainanprado.com.br; todo o conteúdo é meu.

## Estrutura

```
portfolio/
├── index.html               # página principal (hero + § 01 a § 09 + contato)
├── certificados.html        # arquivo completo de certificados, com filtro, busca e modal
├── css/styles.css           # identidade visual (tokens em :root, no topo)
├── js/
│   ├── i18n.js              # português (no HTML) + dicionário em inglês
│   ├── main.js              # animações, números, menu ativo, foto opcional, formulário → WhatsApp
│   └── certificados.js      # dados dos certificados + filtros + busca + modal
├── img/
│   ├── og-image.png         # imagem de pré-visualização (LinkedIn, WhatsApp)
│   └── certificados/        # imagens dos certificados
├── curriculo/
│   ├── curriculo.html       # fonte do currículo em português
│   ├── resume-en.html       # fonte do currículo em inglês
│   ├── gerar-pdf.js         # gera os dois PDFs a partir dos HTMLs
│   ├── Gildean_Monteiro_Curriculo.pdf
│   └── Gildean_Monteiro_Resume_EN.pdf
└── vercel.json              # cleanUrls + cabeçalhos de segurança
```

## Idiomas (PT · EN)

O site abre em português. O botão **EN** da navegação troca para inglês sem recarregar, a escolha fica salva e `?lang=en` abre direto em inglês (bom para mandar a recrutadores de fora).

O texto em português é o que está escrito no HTML. Cada elemento traduzível tem uma chave:

| Atributo          | Efeito                         |
| ----------------- | ------------------------------ |
| `data-i18n`       | troca o conteúdo               |
| `data-i18n-ph`    | troca o `placeholder`          |
| `data-i18n-al`    | troca o `aria-label`           |
| `data-i18n-href`  | troca o link (ex.: currículo)  |
| `data-i18n-title` | troca o `<title>` da aba       |
| `data-i18n-desc`  | troca a meta description       |

Para mudar um texto: edite o português no HTML e a mesma chave no bloco `EN` de `js/i18n.js`.

## Tarefas comuns

| O que mudar                 | Onde |
| --------------------------- | ---- |
| **Colocar sua foto**        | salve em `img/perfil.jpg` (3:4, ~800×1066) e preencha `data-foto="img/perfil.jpg"` no `<div class="retrato">` do `index.html`. Sem foto, aparece o monograma. |
| Cores                       | `css/styles.css` → bloco `:root` |
| Números da seção Sobre      | `index.html` → atributos `data-contar` |
| Projetos                    | `index.html` → § 04, cards `<article class="projeto">` |
| Certificados                | `js/certificados.js` → array `CREDENCIAIS` (a imagem vai em `img/certificados/`) |
| Perguntas do FAQ            | `index.html` → § 09, blocos `<details>` |
| Número do WhatsApp          | `js/main.js` → constante `WHATSAPP` e os links `wa.me` do `index.html` |

## Currículo em PDF

O currículo é escrito em HTML (coluna única, texto real: é o formato que os sistemas de triagem leem melhor) e convertido em PDF pelo Chromium:

```bash
npm i -g playwright && npx playwright install chromium
node curriculo/gerar-pdf.js
```

Depois de editar `curriculo.html` ou `resume-en.html`, rode o comando e faça o commit dos PDFs junto.

## Deploy

Push na `main` → a Vercel publica sozinha (Framework Preset: **Other**, sem configuração extra).

Para conferir os cabeçalhos de segurança depois do deploy:

```bash
curl -I https://portfolio-ten-livid-56.vercel.app | grep -iE "content-security|x-frame|strict-transport|x-content"
```
