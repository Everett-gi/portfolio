/* ============================================================
   i18n · português (padrão) e inglês
   - O texto em português é o que está escrito no próprio HTML;
     este arquivo guarda só a versão em inglês (dicionário EN).
   - Elementos traduzíveis usam atributos data-i18n* no HTML:
       data-i18n       conteúdo (aceita <strong>, <em>, <a>)
       data-i18n-ph    placeholder
       data-i18n-al    aria-label
       data-i18n-alt   alt de imagem
       data-i18n-href  link (ex.: currículo em PT ou EN)
       data-i18n-title <title> da aba   ·   data-i18n-desc meta description
   - Abre em português; a escolha fica salva (localStorage) e ?lang=en força o inglês.
   Para mudar um texto em inglês, edite a chave em EN abaixo.
   ============================================================ */
(function () {
  'use strict';

  var IDIOMAS = ['pt', 'en'];
  var HTML_LANG = { pt: 'pt-BR', en: 'en' };

  /* textos que só existem no JavaScript (a página de certificados usa) */
  var JS_PT = {
    'area.ciber': 'Cibersegurança', 'area.java': 'Java & Back-end', 'area.python-ia': 'Python & IA', 'area.front': 'Front-end',
    'area.cloud': 'Cloud & DevOps', 'area.redes': 'Redes & Infra', 'area.gestao': 'Gestão & Soft skills', 'area.idiomas': 'Idiomas',
    'arch.count': 'exibindo {n} de {total} certificados',
    'card.inspect': 'Ver certificado →', 'card.noImg': 'em andamento',
    'modal.noDetails': 'Detalhes ainda não catalogados para este certificado.',
    'f.whatsIntro': 'Olá, Gildean! Vi seu portfólio e gostaria de conversar.',
    'f.whatsNome': 'Nome', 'f.whatsEmpresa': 'Empresa', 'f.whatsMsg': 'Mensagem'
  };

  var EN = {
    /* meta e navegação */
    'meta.title': 'Gildean Monteiro · Junior Full Stack Developer (Java, Spring Boot, Cloud & Security)',
    'meta.desc': 'Portfolio of Gildean Monteiro, a junior full stack developer in Petrópolis, Brazil. Java 21, Spring Boot, PostgreSQL, Docker, Oracle Cloud and cybersecurity, with two systems in production. Open to internships and junior roles.',
    'skip': 'Skip to content',
    'nav.aria': 'Main navigation', 'nav.inicio': 'Home', 'nav.sobre': 'About', 'nav.habilidades': 'Skills', 'nav.projetos': 'Projects',
    'nav.trajetoria': 'Journey', 'nav.faq': 'FAQ', 'nav.lang': 'PT', 'nav.langAria': 'Ver em português', 'nav.cta': 'Get in touch',

    /* hero */
    'hero.avail': 'Available',
    'hero.badge': 'Open to internships and junior roles in 2026',
    'hero.local': 'Petrópolis · RJ, Brazil · on-site, hybrid or remote',
    'hero.tagL': 'Internship · Junior dev · Security',
    'hero.h1': 'Full Stack Developer who builds, <em>secures</em> and keeps real systems running.',
    'hero.bio': 'IT student at FAETERJ and owner of <strong>Hub Atlética Dragões</strong>, a production platform built with Java 21, Spring Boot, PostgreSQL and <strong>1,275 automated tests</strong>. Certified in <strong>Ethical Hacking</strong> and training in the <strong>Hackers do Bem</strong> program. Looking for an internship or junior role to add value to a team and learn fast.',
    'hero.cta1': 'Download resume (PDF)', 'hero.cvHref': 'curriculo/Gildean_Monteiro_Resume_EN.pdf',
    'hero.cta2': 'See systems in production',
    'hero.fotoAlt': 'Photo of Gildean Monteiro',
    'hero.chip1': 'Java 21 · Spring Boot', 'hero.chip2': '2 systems in production', 'hero.chip3': 'Ethical Hacking · HackerX',
    'hero.marqueeAria': 'Technologies',
    'inst.label': 'Education and certifications from',

    /* § 01 */
    's1.label': 'Who will join your team',
    's1.lead': "I'm <strong>Gildean Monteiro</strong>, a full stack developer in training who <em>learns by building</em> and keeps what he builds running.",
    's1.p1': "I study <strong>Information and Communication Technology at FAETERJ</strong> and I own <strong>Hub Atlética Dragões</strong>, the platform IT students use for grades, class schedules, study content, a digital student ID, room booking and e-sports championships. I model the database, write the back end, build the interface, configure the server and ship it.",
    's1.p2': "Security is my edge: I hold the <strong>HackerX Ethical Hacking certification</strong> and I've been in the <strong>Hackers do Bem</strong> program (Brazilian Ministry of Science and Technology / RNP) since April 2026. It changes how I write code: routes protected by default, personal data handled under LGPD (Brazil's GDPR) and security reviews of my own systems.",
    's1.p3': "Before IT, I was <strong>assistant manager of an operation serving 700+ customers a day</strong>. It taught me what no course does: communication, ownership and staying calm under pressure. Today I'm also an Academic Council member and President of Atlética Dragões, the student association.",
    's1.quote': "I don't just want to write code. I want to ship things people actually use.",
    's1.cardAria': 'Quick profile',
    's1.k1': 'Goal', 's1.v1': 'Internship or Junior Dev', 's1.k2': 'Location', 's1.k3': 'Work model', 's1.v3': 'On-site · Hybrid · Remote',
    's1.k4': 'Education', 's1.v4': 'IT · FAETERJ (ongoing)', 's1.k5': 'Main stack', 's1.k6': 'Languages', 's1.v6': 'Portuguese native · English C2',
    's1.v7': 'Available for interviews', 's1.whats': 'Chat on WhatsApp',
    's1.whatsHref': 'https://wa.me/5511982953630?text=Hi%2C%20Gildean!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.',
    'm1': 'systems in production', 'm2': 'automated tests in the Hub', 'm3': 'IT certificates', 'm4': 'customers a day led',

    /* § 02 */
    's2.label': 'Who this profile is for',
    's2.title': 'The <em>right</em> fit for your team',
    's2.sub': "Before you reach out, here's what I'm looking for and what I bring. It saves your time and mine.",
    's2.c1t': "I'm a good fit if you",
    's2.c1a': 'Have an internship or junior opening in development: Java back end, full stack or web',
    's2.c1b': 'Need someone in infrastructure, cloud or support who can also code',
    's2.c1c': 'Are looking for an early-career information security profile',
    's2.c1d': 'Value someone who has shipped a system to production and looks after it after the deploy',
    's2.c2t': 'What I bring to the team',
    's2.c2a': 'Real production experience: deploys, backups, monitoring and incident fixes',
    's2.c2b': 'Attention to security and privacy from the first commit',
    's2.c2c': 'Clear communication, from years of customer service and team leadership',
    's2.c2d': 'C2 English for documentation, meetings and international teams',

    /* § 03 */
    's3.label': 'What I can do',
    's3.title': 'What I deliver <em>for your team</em>',
    's3.sub': 'Every item below is already in use in a production system. This is not a list of technologies I have “played with”.',
    'h1t': 'Java &amp; Spring Boot back end', 'h1d': 'REST APIs with Java 21 and Spring Boot 3.5: controllers, services, JPA/Hibernate and business rules covered by tests.',
    'h2t': 'APIs &amp; integrations', 'h2d': 'Integrations with an LLM (Groq), Google sign-in (OAuth2), SMTP email, S3 storage (Cloudflare R2) and Web Push notifications.',
    'h3t': 'PostgreSQL databases', 'h3d': 'Modeling, indexes and constraints, with the schema versioned in 46 Flyway migrations, rehearsed on a copy of the database before going live.',
    'h4t': 'Front end &amp; PWA', 'h4d': 'Responsive interfaces in HTML, CSS and JavaScript, an installable PWA, React 18 with Vite and care for accessibility (keyboard and AA contrast).',
    'h5t': 'Cloud &amp; DevOps', 'h5d': 'Docker Compose, Caddy with automatic TLS, Linux, Oracle Cloud and AWS; CI/CD with GitHub Actions + GHCR and versioned rollbacks.',
    'h6t': 'Security &amp; privacy', 'h6d': 'JWT + BCrypt, OAuth2, routes protected by default, rate limiting, CSP/HSTS, XSS and SQL injection defenses, user data export and deletion.',
    'h7t': 'Quality &amp; testing', 'h7d': '1,275 automated tests (JUnit 5 and Mockito) and the habit of proving a fix works before deploying it.',
    'h8t': 'Applied AI', 'h8d': 'An LLM assistant with a deterministic FAQ and a cache to cut costs, graceful degradation when the quota runs out and RAG fundamentals.',
    'h9t': 'Communication &amp; leadership', 'h9d': 'Two years as assistant manager (700+ customers a day) and student representation: explaining, negotiating priorities and working as a team.',

    /* § 04 */
    's4.label': 'Projects',
    's4.title': 'Systems in production, <em>not just exercises</em>',
    's4.sub': "A sample of what I've built and keep running.",
    'p1.tag': 'Platform in production', 'p1.note': '80+ accounts',
    'p1.d': "FAETERJ IT students' web platform: grades and pass simulator, class schedule, study content, student ID with a verifiable QR code, room booking, e-sports and an AI assistant.",
    'p1.link': 'See it live ↗',
    'p2.tag': 'Personal project', 'p2.note': 'live',
    'p2.d': 'Pop culture review platform (movies, series, games, books, albums and comics) with JWT authentication, Flyway migrations and LGPD-compliant terms acceptance.',
    'p2.link': 'See it live ↗',
    'p3.tag': 'This website', 'p3.t': 'Portfolio',
    'p3.d': 'Plain HTML, CSS and JavaScript with no dependencies or build step, in Portuguese and English, with security headers (CSP, HSTS, X-Frame-Options) set on Vercel.',
    'p3.link': 'See the code ↗',
    'p4.tag': 'In development',
    'p4.d': 'A RAG app to ask questions about documents: semantic search with embeddings and answers generated by the Anthropic API.',
    'p4.link': 'Follow on GitHub ↗',
    'p5.tag': 'Study',
    'p5.d': 'The classic rebuilt in plain JavaScript: canvas, collisions and scoring from scratch to strengthen logic and DOM skills.',
    'p5.link': 'See the code ↗',
    'p6.t': 'ONE challenges',
    'p6.d': 'Oracle Next Education projects with Alura: Secret Number game and Secret Santa, using functions, arrays and events in JavaScript.',
    'p6.tag': 'Logic', 'p6.l1': 'Secret Number ↗', 'p6.l2': 'Secret Santa ↗',
    'hub.pill': 'Own product · in production',
    'hub.title': 'I designed, built and keep <em>running</em> the platform for IT students',
    'hub.desc': 'Java 21 and Spring Boot on the back end, PostgreSQL with 46 Flyway migrations, a plain JavaScript PWA front end, Docker and Caddy on Oracle Cloud. I migrated the infrastructure from AWS to Oracle and the monthly cost dropped from ~R$170 to zero, with about 2 minutes of downtime.',
    'hub.m1': 'automated tests', 'hub.m2': 'REST endpoints', 'hub.m3': 'monthly server cost',
    'hub.cta': 'Visit the Hub',
    'hub.obs': 'The code is private because the system stores real students’ data. I walk through the architecture and the code in a technical interview.',
    'hub.termAria': 'Terminal showing the state of the Hub in production',

    /* § 05 */
    's5.label': 'How I work',
    's5.title': 'A <em>predictable</em> way of working, with no deploy surprises',
    'pr1t': 'Understand', 'pr1d': 'Before writing code, I understand the problem and measure what is happening with real data.',
    'pr2t': 'Slice', 'pr2d': 'I split the work into small, complete deliveries, one at a time.',
    'pr3t': 'Build and test', 'pr3d': 'Code with tests, including the test that proves the bug will not come back.',
    'pr4t': 'Validate and ship', 'pr4d': 'Migrations rehearsed on a copy of the database, deploy through CI and a check in production.',
    'pr5t': 'Measure', 'pr5d': 'I watch logs and metrics after the deploy and adjust based on real usage.',

    /* § 06 */
    's6.label': 'Tech stack',
    's6.title': 'Technologies I use <em>in production</em>, not just on my resume',
    'st3': 'Data', 'st5': 'Security &amp; AI',

    /* § 07 */
    's7.label': 'Experience and education',
    's7.title': 'A journey <em>built by doing</em>',
    's7.sub': 'Technology in my studies and projects; customer service and leadership at work. Both show in the way I work.',
    's7.exp': 'Work experience', 's7.edu': 'Education and courses',
    'e1d': 'Nov 2025 → present', 'e1t': 'Parking Operations Controller <em>· Estapar</em>',
    'e1p': 'Access control and traffic monitoring systems; incidents resolved in real time under security protocols. Completed Academia Estapar’s cybersecurity awareness track.',
    'e2d': 'Mar 2025 → Jul 2025', 'e2t': 'Receptionist <em>· Odonto Company</em>', 'e2p': 'In-person, phone and online patient service; appointment scheduling.',
    'e3d': 'Jun 2024 → Mar 2025', 'e3t': 'Young Apprentice <em>· CIEE</em>', 'e3p': 'Customer service and administrative support.',
    'e4d': 'Feb 2022 → Dec 2023', 'e4t': 'Assistant Manager <em>· Mega Lanches, São Paulo</em>', 'e4p': 'Led an operation serving 700+ customers a day: team scheduling and delegation, resources and process improvement.',
    'e5d': 'Aug 2018 → Dec 2020', 'e5t': 'Crew Member <em>· Mega Lanches, São Paulo</em>', 'e5p': 'Fast customer service and equipment operation with a focus on quality, until my promotion.',
    'f1d': 'Mar 2024 → ongoing', 'f1t': 'Information and Communication Technology <em>· FAETERJ</em>',
    'f1p': 'Networks, systems integration, servers and development. Academic Council member and President of Atlética Dragões since May 2024.',
    'f2d': 'Apr 2026 → ongoing', 'f2t': 'Cybersecurity Training <em>· Hackers do Bem (MCTI/RNP)</em>',
    'f2p': 'National cybersecurity training program of the Brazilian Ministry of Science, Technology and Innovation, run by RNP.',
    'f3d': 'Feb 2025 → Mar 2026', 'f3t': 'Ethical Hacking &amp; Cybersecurity <em>· HackerX</em>',
    'f3p': 'Final certification and 17 modules: XSS, SQL injection, vulnerability scanning, sniffing and MITM, passwords, Wi-Fi and AI for security.',
    'f4d': 'May 2025 → Jul 2025', 'f4t': 'Technology Residency <em>· Serratec</em>', 'f4p': 'Immersion in Python, IoT, Artificial Intelligence and Cloud, with team projects.',
    'f5t': 'Beginner Programming Track G8 <em>· Oracle ONE + Alura</em>', 'f5p': '70 hours of JavaScript logic, responsive HTML and CSS, Git and GitHub.',
    's7.note': 'Want it all in one document? <a href="curriculo/Gildean_Monteiro_Resume_EN.pdf" download>Download the resume in English</a> or the <a href="curriculo/Gildean_Monteiro_Curriculo.pdf" download>Portuguese version</a>.',

    /* § 08 */
    's8.label': 'Featured certificates',
    's8.title': 'Continuous learning, <em>proven</em>',
    'c1s': 'In progress', 'c1t': 'Cybersecurity Training', 'c1d': 'since Apr 2026',
    'c2s': 'Final certification', 'c2e': 'HackerX · 17 modules', 'c2d': 'Mar 2026',
    'c3s': '70 hours', 'c3t': 'Beginner Programming Track G8', 'c3d': 'Mar 2025',
    'c4s': 'C2 Proficient', 'c4t': 'English · EF SET 82/100', 'c4d': 'Apr 2024',
    's8.cta': 'See all 40+ certificates',

    /* § 09 */
    's9.label': 'Recruiter questions',
    's9.title': 'Questions recruiters <em>ask before</em> reaching out',
    'q1': 'What kind of role are you looking for?',
    'a1': "An internship or junior role in development (Java back end or full stack), infrastructure and cloud, or information security. I'm also open to other IT areas where I can learn fast and contribute.",
    'q2': "What's your availability?",
    'a2': 'I live in Petrópolis (RJ, Brazil) and can work on-site, hybrid or remote. I balance work with my degree at FAETERJ; we can agree on hours in the interview.',
    'q3': 'Have you worked in IT professionally?',
    'a3': 'Not yet in a formal IT position. My technical experience comes from the two systems I built and run in production, the Serratec residency and my certifications. Professionally, I bring 6+ years of customer service and leadership, including two years as assistant manager.',
    'q4': 'Can I see the Hub’s code?',
    'a4': 'The repository is private because the system stores real students’ data. The site is live at atleticadragoes.com.br, with a visitor mode that needs no login, and I present the architecture, the code and the admin panel in a call or technical interview. This portfolio’s code is public on GitHub.',
    'q5': 'How do you use AI in development?',
    'a5': 'As a productivity tool, always with review, tests and validation before deploying. I also integrate LLMs into products: the Hub’s assistant answers students’ questions at a controlled cost.',
    'q6': 'What is your English level?',
    'a6': 'C2 (Proficient) on the EF SET, scoring 82/100. I read technical documentation, write and speak fluently.',

    /* contato */
    'ct.label': "Let's talk",
    'ct.title': 'Have an opening? Tell me and <em>I’ll reply fast</em>',
    'ct.sub': 'Send me the job description or book a call. I usually reply the same day.',
    'f.nome': 'Your name', 'f.empresa': 'Company (optional)', 'f.msg': 'Tell me about the role or opportunity',
    'f.erro': 'Please fill in your name and message.', 'f.enviar': 'Send via WhatsApp',
    'f.obs': 'Nothing is stored on this site: the form only builds the message and opens WhatsApp.',
    'f.whatsIntro': 'Hi, Gildean! I saw your portfolio and would like to talk.',
    'f.whatsNome': 'Name', 'f.whatsEmpresa': 'Company', 'f.whatsMsg': 'Message',
    'ch1': 'Fastest reply', 'ch5r': 'Resume', 'ch5': 'Download PDF',

    /* rodapé e celular */
    'ft.sub': 'Full Stack Developer · Petrópolis, Brazil', 'ft.nav': 'Navigation', 'ft.proj': 'Projects and credentials',
    'ft.certs': 'All certificates', 'ft.resumeEn': 'Currículo em português (PDF)', 'ft.ct': 'Contact',
    'ft.base': '© 2026 Gildean Monteiro do Nascimento · Handmade with HTML, CSS and JavaScript, no cookies and no trackers.',
    'mob.whats': 'WhatsApp', 'mob.cv': 'Resume',

    /* página de certificados */
    'cert.title': 'Certificates · Gildean Monteiro',
    'cert.desc': "Gildean Monteiro's full list of certificates, organized by area: cybersecurity, front end, Python & AI, cloud, management and languages.",
    'cert.back': '← Back to portfolio', 'cert.label': 'Full archive', 'cert.h1': 'All my <em>certificates</em>',
    'cert.sub': 'Organized by area of study. Filter, search and click a card to see the certificate.',
    'cert.searchPh': 'Search by name or issuer…', 'cert.searchAl': 'Search certificates', 'cert.filtersAl': 'Filter by area',
    'cert.loading': 'loading…', 'cert.empty': 'No certificate found. Adjust the filter or the search.',
    'cert.noscript': 'The certificate list needs JavaScript.',
    'farea.todas': 'All', 'farea.ciber': 'Cybersecurity', 'farea.front': 'Front end', 'farea.python-ia': 'Python & AI',
    'farea.cloud': 'Cloud & DevOps', 'farea.gestao': 'Management & Soft skills', 'farea.idiomas': 'Languages',
    'modal.closeA': 'Close', 'modal.close': 'Close', 'modal.noImg': 'Certificate image not attached yet.', 'modal.verify': 'Verify at the source ↗',
    'area.ciber': 'Cybersecurity', 'area.java': 'Java & Back end', 'area.python-ia': 'Python & AI', 'area.front': 'Front end',
    'area.cloud': 'Cloud & DevOps', 'area.redes': 'Networks & Infra', 'area.gestao': 'Management & Soft skills', 'area.idiomas': 'Languages',
    'arch.count': 'showing {n} of {total} certificates',
    'card.inspect': 'See certificate →', 'card.noImg': 'in progress',
    'modal.noDetails': 'Details not catalogued yet for this certificate.'
  };

  /* ---------------- motor ---------------- */
  var ATRIBUTOS = [
    ['data-i18n-ph', 'placeholder'],
    ['data-i18n-al', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-href', 'href']
  ];
  var originais = new WeakMap();   // português lido do HTML, por elemento
  var titulo = { pt: document.title };
  var descMeta = document.querySelector('meta[data-i18n-desc]');
  var desc = { pt: descMeta ? descMeta.getAttribute('content') : '' };

  function guardar(lang) { try { localStorage.setItem('gm_lang', lang); } catch (e) { /* modo privado */ } }
  function recuperar() { try { return localStorage.getItem('gm_lang'); } catch (e) { return null; } }

  function detectar() {
    var param = new URLSearchParams(location.search).get('lang');
    if (param && IDIOMAS.indexOf(param) !== -1) return param;
    var salvo = recuperar();
    if (salvo && IDIOMAS.indexOf(salvo) !== -1) return salvo;
    return 'pt';   // o público principal é brasileiro: inglês só pelo botão ou por ?lang=en
  }

  var atual = detectar();

  function t(chave) {
    if (atual === 'en' && EN[chave] != null) return EN[chave];
    return JS_PT[chave] != null ? JS_PT[chave] : '';
  }

  function memoria(el) {
    var m = originais.get(el);
    if (!m) {
      m = { html: el.hasAttribute('data-i18n') ? el.innerHTML : null };
      ATRIBUTOS.forEach(function (par) {
        if (el.hasAttribute(par[0])) m[par[1]] = el.getAttribute(par[1]);
      });
      originais.set(el, m);
    }
    return m;
  }

  function aplicar() {
    var sel = '[data-i18n],[data-i18n-ph],[data-i18n-al],[data-i18n-alt],[data-i18n-href]';
    document.querySelectorAll(sel).forEach(function (el) {
      var m = memoria(el);
      if (m.html !== null) {
        var chave = el.getAttribute('data-i18n');
        // conteúdo vem do próprio HTML (PT) ou do dicionário local (EN): nunca de entrada do usuário
        el.innerHTML = (atual === 'en' && EN[chave] != null) ? EN[chave] : m.html;
      }
      ATRIBUTOS.forEach(function (par) {
        if (!el.hasAttribute(par[0])) return;
        var k = el.getAttribute(par[0]);
        var valor = (atual === 'en' && EN[k] != null) ? EN[k] : m[par[1]];
        if (valor != null) el.setAttribute(par[1], valor);
      });
    });

    var elTitulo = document.querySelector('[data-i18n-title]');
    if (elTitulo) {
      var kt = elTitulo.getAttribute('data-i18n-title');
      document.title = (atual === 'en' && EN[kt]) ? EN[kt] : titulo.pt;
    }
    if (descMeta) {
      var kd = descMeta.getAttribute('data-i18n-desc');
      descMeta.setAttribute('content', (atual === 'en' && EN[kd]) ? EN[kd] : desc.pt);
    }
    document.documentElement.setAttribute('lang', HTML_LANG[atual]);
  }

  function definir(lang) {
    if (IDIOMAS.indexOf(lang) === -1 || lang === atual) return;
    atual = lang;
    guardar(lang);
    aplicar();
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: lang } }));
  }

  var botao = document.getElementById('trocaIdioma');
  if (botao) botao.addEventListener('click', function () { definir(atual === 'pt' ? 'en' : 'pt'); });

  window.i18n = {
    t: t,
    get lang() { return atual; },
    set: definir
  };

  aplicar();
})();
