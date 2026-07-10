/* ============================================================
   ANEXO A — arquivo de credenciais
   Para adicionar um certificado: copie uma linha do array
   CREDENCIAIS, cole no grupo da área correspondente e edite.
   Coloque a imagem em img/certificados/ e aponte no campo img.
   Numeração, filtros, busca, contagem e modal são automáticos.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- áreas válidas e seus rótulos ---------- */
  var AREAS = {
    'ciber':     'CIBERSEGURANÇA',
    'java':      'JAVA & BACK-END',
    'python-ia': 'PYTHON & IA',
    'front':     'FRONT-END',
    'cloud':     'CLOUD & DEVOPS',
    'redes':     'REDES & INFRA',
    'gestao':    'GESTÃO & SOFT SKILLS',
    'idiomas':   'IDIOMAS'
  };

  /* ---------- SEUS CERTIFICADOS ----------
     campos: titulo · emissor · area (obrigatórios)
             ano · data · carga · img · detalhes · link (opcionais)

     MODELO — copie, cole e edite:
     { titulo: 'Nome', emissor: 'Instituição', area: 'java', ano: '2026',
       data: '01/01/2026', carga: '8h', img: 'img/certificados/arquivo.jpg',
       detalhes: 'O que o certificado atesta.', link: '' },
  ------------------------------------------ */
  var CREDENCIAIS = [

    /* ===== CIBERSEGURANÇA ===== */
    { titulo: 'Ethical Hacking & Cybersecurity — Certificação Final', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '02/03/2026', carga: 'Trilha completa', img: 'img/certificados/hackerx-final.jpg',
      detalhes: 'Certificação final do programa de Ethical Hacking & Cybersecurity da HackerX, atestando a conclusão de todos os cursos da trilha e a aprovação no teste de conhecimento do domínio. A trilha cobre redes e protocolos (TCP/IP, DNS, HTTP/HTTPS), OSINT, análise de vulnerabilidades, Pentest web (OWASP Top 10) e criptografia. Certificate ID: 0b2e417953aa451.', link: '' },

    { titulo: 'Know the OS — Módulo de Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2025',
      data: '06/02/2025', carga: 'Módulo', img: 'img/certificados/hackerx-know-the-os.jpg',
      detalhes: 'Certificado do módulo "Know the OS" da trilha de Ethical Hacking, comprovando domínio dos conceitos de sistemas operacionais aplicados à segurança ofensiva. Certificate ID: ae00c9cf3063d93.', link: '' },

    { titulo: 'Vulnerability Scanning and Reporting — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-vuln-scanning.jpg',
      detalhes: 'Módulo de varredura de vulnerabilidades e elaboração de relatórios: uso de scanners, priorização de riscos e documentação de achados — o núcleo do trabalho de um pentester. Certificate ID: 1d218c228530f6a.', link: '' },

    { titulo: 'Cross-Site Scripting (XSS) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-xss.jpg',
      detalhes: 'Exploração de falhas de Cross-Site Scripting — item do OWASP Top 10. Conhecimento aplicado diretamente no hardening anti-XSS do Hub Atlética Dragões (escape de saída no frontend). Certificate ID: 968e89725bc66f2.', link: '' },

    { titulo: 'Database Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '26/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-database-hacking.jpg',
      detalhes: 'Ataques a bancos de dados, incluindo injeção de SQL (OWASP Top 10): identificação, exploração e mitigação. Base direta para escrever back-ends seguros com PostgreSQL. Certificate ID: 92217efb8268b14.', link: '' },

    { titulo: 'Bringing Down a Website (DoS) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-bringing-down-website.jpg',
      detalhes: 'Ataques de negação de serviço (DoS/DDoS): como sobrecarregam aplicações web e quais defesas de infraestrutura os mitigam. Certificate ID: 2a89145698c440e.', link: '' },

    { titulo: 'Vulnerability & Network Spying — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '26/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-network-spying.jpg',
      detalhes: 'Interceptação e análise de tráfego de rede: sniffing, ataques man-in-the-middle e a importância da criptografia em trânsito (HTTPS/TLS). Certificate ID: e127dbdb4d6b0e2.', link: '' },

    { titulo: 'WiFi Hacking — WPA/WPA2 Cracking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '24/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-wifi-wpa.jpg',
      detalhes: 'Quebra de segurança em redes sem fio protegidas por WPA/WPA2: captura de handshake e ataques de dicionário, com foco em como proteger redes reais. Certificate ID: fb0fdd0b65f8075.', link: '' },

    { titulo: 'WiFi Hacking — WEP Cracking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '21/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-wifi-wep.jpg',
      detalhes: 'Exploração das fragilidades do protocolo WEP, demonstrando por que ele foi descontinuado — fundamento de segurança em redes sem fio. Certificate ID: 856cc6c0539db2f.', link: '' },

    { titulo: 'Hacking Passwords — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-hacking-passwords.jpg',
      detalhes: 'Ataques a senhas — força bruta, dicionário e rainbow tables — e as defesas correspondentes: hashing com sal (BCrypt) e políticas de senha forte, ambas aplicadas nos meus projetos. Certificate ID: d15a11b24f50415.', link: '' },

    { titulo: 'Android Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-android-hacking.jpg',
      detalhes: 'Superfície de ataque de dispositivos e aplicativos Android: permissões, engenharia reversa de APKs e vetores de comprometimento em mobile. Certificate ID: 82613722ea291b0.', link: '' },

    { titulo: 'Make Your Data Safe — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-make-data-safe.jpg',
      detalhes: 'Práticas de proteção de dados: criptografia em repouso, backups seguros e higiene de credenciais — princípios que aplico em produção (backups offsite no Cloudflare R2). Certificate ID: 201875356e842a9.', link: '' },

    { titulo: 'Keyboard Spying (Keyloggers) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '21/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-keyboard-spying.jpg',
      detalhes: 'Funcionamento de keyloggers de hardware e software, como detectá-los e medidas de proteção contra captura de teclado. Certificate ID: 7fe8f847124bf23.', link: '' },

    { titulo: 'Credit and Debit Card Frauds — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '02/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-card-frauds.jpg',
      detalhes: 'Anatomia das fraudes com cartões — skimming, carding e clonagem — e os controles de segurança que as previnem em sistemas de pagamento. Certificate ID: 7baf1a95a72f239.', link: '' },

    { titulo: 'Social Media Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '29/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-social-media-hacking.jpg',
      detalhes: 'Vetores de comprometimento de contas em redes sociais: engenharia social, reutilização de senhas e a importância do 2FA. Certificate ID: b3a07952f5be1af.', link: '' },

    { titulo: 'Hiding Messages (Esteganografia) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-hiding-messages.jpg',
      detalhes: 'Esteganografia: ocultação de informações dentro de imagens e arquivos, técnicas de detecção e aplicações em segurança ofensiva e defensiva. Certificate ID: 46e0f3b67b7648a.', link: '' },

    { titulo: 'Leveraging AI for Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-ai-hacking.jpg',
      detalhes: 'Uso de Inteligência Artificial aplicada à segurança ofensiva: automação de coleta e análise — a interseção entre minhas duas áreas de estudo, IA e cibersegurança. Certificate ID: 2a71d0029ebff00.', link: '' },

    { titulo: 'Prompt Guide for Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-prompt-guide.jpg',
      detalhes: 'Engenharia de prompts aplicada a tarefas de segurança: como orientar modelos de IA para apoiar a análise de vulnerabilidades. Certificate ID: c2dbef3ae8559ec.', link: '' },

    { titulo: 'Segurança em Tecnologia da Informação', emissor: 'Fundação Bradesco — Escola Virtual', area: 'ciber', ano: '2024',
      data: '26/02 a 02/03/2024', carga: '12h', img: 'img/certificados/bradesco-seguranca-ti.jpg',
      detalhes: 'Fundamentos de segurança da informação: princípios de proteção de dados, ameaças digitais e boas práticas em ambientes corporativos. Curso da Escola Virtual da Fundação Bradesco, com código de autenticidade verificável no portal da EV.', link: '' },

    { titulo: 'Lei Geral de Proteção de Dados (LGPD)', emissor: 'Fundação Bradesco — Escola Virtual', area: 'ciber', ano: '2024',
      data: '02/03 a 04/03/2024', carga: '2h', img: 'img/certificados/bradesco-lgpd.jpg',
      detalhes: 'Panorama da LGPD: bases legais do tratamento de dados pessoais, direitos dos titulares e obrigações das organizações. Conhecimento aplicado diretamente nos projetos OmniRate e Hub Atlética (aceite de termos e conformidade).', link: '' },

    { titulo: 'Introdução à Cybersegurança', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h15', img: 'img/certificados/estapar-intro-cyber.jpg',
      detalhes: 'Treinamento corporativo de conscientização em segurança digital: conceitos fundamentais de cibersegurança aplicados ao ambiente de trabalho. Emitido pela plataforma SmartLeader da Academia Estapar.', link: '' },

    { titulo: 'Engenharia Social', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-engenharia-social.jpg',
      detalhes: 'Táticas de manipulação psicológica usadas por atacantes — pretexting, baiting e abordagens presenciais — e como reconhecê-las e reportá-las no ambiente corporativo.', link: '' },

    { titulo: 'Phishing', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-phishing.jpg',
      detalhes: 'Identificação de e-mails, links e páginas fraudulentas: indicadores de phishing, spear phishing e boas práticas de verificação antes do clique.', link: '' },

    { titulo: 'Malware', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-malware.jpg',
      detalhes: 'Tipos de software malicioso — vírus, trojans, ransomware e spyware — vetores de infecção e medidas de prevenção e contenção.', link: '' },

    { titulo: 'Ameaças Internas', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-ameacas-internas.jpg',
      detalhes: 'Riscos originados dentro da organização: uso indevido de credenciais, vazamento de informações e sinais de alerta de ameaças internas, intencionais ou acidentais.', link: '' },

    /* ===== PYTHON & IA ===== */
    { titulo: 'Residência em TIC — IA, IoT, Python e Cloud', emissor: 'Serratec', area: 'python-ia', ano: '2025',
      data: '05 a 07/2025', carga: 'Residência', img: '',
      detalhes: 'Residência tecnológica do Serratec (Parque Tecnológico da Região Serrana): imersão em Inteligência Artificial, Internet das Coisas, Python e Computação em Nuvem, com discussões sobre os vetores de ataque e a segurança inerente a cada tecnologia.', link: '' },

    { titulo: 'Imersão Agentes IA', emissor: 'Hashtag Treinamentos', area: 'python-ia', ano: '2026',
      data: '21/05/2026', carga: '8h', img: 'img/certificados/hashtag-agentes-ia.jpg',
      detalhes: 'Imersão prática em construção de agentes de Inteligência Artificial: automação de tarefas com LLMs e orquestração de fluxos inteligentes. Evento da Hashtag Treinamentos com 8 horas de duração.', link: '' },

    /* ===== FRONT-END ===== */
    { titulo: 'Formação Iniciante em Programação — G8 (9 cursos · 70h)', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/03/2025', carga: '70h', img: 'img/certificados/one-formacao-g8.jpg',
      detalhes: 'Certificado de conclusão da formação completa "Iniciante em Programação" da turma G8 do Oracle Next Education: 9 cursos somando 70 horas, cobrindo lógica de programação, JavaScript, HTML, CSS, Git e desenvolvimento pessoal.', link: '' },

    { titulo: 'Lógica de Programação: mergulhe em programação com JavaScript', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '20/01/2025', carga: '6h', img: 'img/certificados/alura-logica-js.jpg',
      detalhes: 'Primeiros fundamentos de lógica: variáveis, condicionais, laços e funções aplicados na construção do Jogo do Número Secreto — projeto publicado no GitHub (Everett-gi/ONE-jogoDoNumeroSecreto).', link: '' },

    { titulo: 'Praticando Lógica de Programação: Challenge Amigo Secreto', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/02/2025', carga: '8h', img: 'img/certificados/alura-amigo-secreto.jpg',
      detalhes: 'Challenge prático consolidando lógica de programação: manipulação de arrays, sorteio aleatório e interação com o DOM no projeto Amigo Secreto — publicado no GitHub (Everett-gi/ONE-challengeAmigoSecreto).', link: '' },

    { titulo: 'Lógica de Programação: explore funções e listas', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '01/2025', carga: '6h', img: 'img/certificados/alura-funcoes-listas.jpg',
      detalhes: 'Aprofundamento em funções e estruturas de lista em JavaScript: parâmetros, retorno, escopo e métodos de array aplicados em exercícios práticos.', link: '' },

    { titulo: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '05/03/2025', carga: '8h', img: 'img/certificados/alura-htmlcss-ambientes.jpg',
      detalhes: 'Base do desenvolvimento web: configuração de ambiente, organização de arquivos, semântica de tags HTML e primeiros estilos com CSS.', link: '' },

    { titulo: 'HTML e CSS: classes, posicionamento e Flexbox', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '09/03/2025', carga: '8h', img: 'img/certificados/alura-htmlcss-flexbox.jpg',
      detalhes: 'Layouts com CSS: seletores de classe, modelos de posicionamento e construção de interfaces flexíveis com Flexbox.', link: '' },

    { titulo: 'HTML e CSS: cabeçalho, footer e variáveis CSS', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '11/03/2025', carga: '6h', img: 'img/certificados/alura-htmlcss-cabecalho.jpg',
      detalhes: 'Componentes estruturais de páginas — cabeçalhos e rodapés — e uso de custom properties (variáveis CSS) para manutenção de temas.', link: '' },

    { titulo: 'HTML e CSS: responsividade e publicação de projetos', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/03/2025', carga: '6h', img: 'img/certificados/alura-htmlcss-responsividade.jpg',
      detalhes: 'Design responsivo com media queries e unidades flexíveis, além do fluxo de publicação de projetos web — do repositório ao ar.', link: '' },

    /* ===== CLOUD & DEVOPS ===== */
    { titulo: 'Git e GitHub: compartilhando e colaborando em projetos', emissor: 'Alura · Oracle Next Education', area: 'cloud', ano: '2025',
      data: '02/2025', carga: '8h', img: 'img/certificados/alura-git-github.jpg',
      detalhes: 'Controle de versão na prática: commits, branches, merges e colaboração via GitHub — fluxo hoje aplicado no dia a dia dos projetos Hub Atlética Dragões e OmniRate, incluindo deploy via git pull.', link: '' },

    /* ===== GESTÃO & SOFT SKILLS ===== */
    { titulo: 'Introdução à Administração', emissor: 'Fundação Bradesco — Escola Virtual', area: 'gestao', ano: '2024',
      data: '02/03 a 16/03/2024', carga: '12h', img: 'img/certificados/bradesco-intro-administracao.jpg',
      detalhes: 'Fundamentos de administração: planejamento, organização, direção e controle — base teórica que complementa a experiência prática de liderança em operação de alto volume.', link: '' },

    { titulo: 'Coletivo Online — Preparação para o Mercado de Trabalho', emissor: 'Instituto Coca-Cola Brasil', area: 'gestao', ano: '2025',
      data: '01/2025', carga: '11h', img: 'img/certificados/cocacola-coletivo-online.jpg',
      detalhes: 'Programa do Instituto Coca-Cola Brasil: plano de vida e definição de objetivos, educação financeira, comunicação oral e escrita, orientações para entrevistas, elaboração de currículo, direitos humanos e equidade racial.', link: '' },

    { titulo: 'Aprender a Aprender: técnicas para seu autodesenvolvimento', emissor: 'Alura · Oracle Next Education', area: 'gestao', ano: '2025',
      data: '16/03/2025', carga: '8h', img: 'img/certificados/alura-aprender-a-aprender.jpg',
      detalhes: 'Metacognição e técnicas de estudo: gestão de tempo, retenção ativa e construção de rotina de aprendizado contínuo — o motor por trás deste arquivo de credenciais.', link: '' },

    { titulo: 'LinkedIn: como fazer o seu perfil trabalhar para você', emissor: 'Alura · Oracle Next Education', area: 'gestao', ano: '2025',
      data: '17/03/2025', carga: '4h', img: 'img/certificados/alura-linkedin.jpg',
      detalhes: 'Posicionamento profissional na maior rede corporativa: construção de perfil estratégico, palavras-chave para recrutadores e networking ativo.', link: '' },

    /* ===== IDIOMAS ===== */
    { titulo: 'EF SET English Certificate — 82/100 (C2 Proficient)', emissor: 'EF SET', area: 'idiomas', ano: '2024',
      data: '03/04/2024', carga: 'Leitura e audição', img: 'img/certificados/efset-ingles.jpg',
      detalhes: 'Proficiência em inglês certificada pelo EF Standard English Test com nota 82/100 — nível C2 Proficient, o mais alto do Quadro Europeu Comum de Referência (CEFR). Avaliação de leitura e compreensão auditiva.', link: '' }

  ];

  /* ---------- estado dos filtros ---------- */
  var areaAtiva = 'todas';
  var termo = '';

  var grid = document.getElementById('arquivoGrid');
  var vazio = document.getElementById('arquivoVazio');
  var contagem = document.getElementById('contagem');
  var busca = document.getElementById('busca');
  var semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- modal de inspeção ---------- */
  var modal = document.getElementById('modalCred');
  var mNum = document.getElementById('modalNum');
  var mArea = document.getElementById('modalArea');
  var mImgWrap = document.getElementById('modalImgWrap');
  var mImg = document.getElementById('modalImg');
  var mSemImg = document.getElementById('modalSemImg');
  var mTitulo = document.getElementById('modalTitulo');
  var mMeta = document.getElementById('modalMeta');
  var mDetalhes = document.getElementById('modalDetalhes');
  var mLink = document.getElementById('modalLink');
  var temDialog = modal && typeof modal.showModal === 'function';

  function abrirModal(cred, indice) {
    if (!temDialog) return;
    mNum.textContent = 'CRED-' + String(indice + 1).padStart(3, '0');
    mArea.textContent = AREAS[cred.area] || cred.area.toUpperCase();
    mTitulo.textContent = cred.titulo;

    var meta = [cred.emissor];
    if (cred.data) meta.push(cred.data);
    if (cred.carga) meta.push(cred.carga);
    mMeta.textContent = meta.join('  ·  ');

    mDetalhes.textContent = cred.detalhes || 'Detalhes ainda não catalogados para esta credencial.';

    if (cred.img) {
      mImg.src = cred.img;
      mImg.alt = 'Certificado: ' + cred.titulo;
      mImg.hidden = false;
      mSemImg.hidden = true;
    } else {
      mImg.hidden = true;
      mImg.removeAttribute('src');
      mSemImg.hidden = false;
    }

    if (cred.link && cred.link.indexOf('https://') === 0) {
      mLink.href = cred.link;
      mLink.hidden = false;
    } else {
      mLink.hidden = true;
    }
    modal.showModal();
  }

  if (temDialog) {
    document.getElementById('modalFechar').addEventListener('click', function () { modal.close(); });
    /* clique no backdrop (fora da caixa de conteúdo) fecha */
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.close();
    });
  }

  /* ---------- monta um card (DOM API + textContent: à prova de XSS) ---------- */
  function montarCard(cred, indice, ordem) {
    var card = document.createElement('article');
    card.className = 'acred';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', 'Inspecionar certificado: ' + cred.titulo);
    if (!semAnimacao) card.style.animationDelay = Math.min(ordem * 35, 400) + 'ms';

    var thumb = document.createElement('figure');
    thumb.className = 'acred-thumb';
    if (cred.img) {
      var im = document.createElement('img');
      im.src = cred.img;
      im.alt = 'Certificado: ' + cred.titulo;
      im.loading = 'lazy';
      thumb.appendChild(im);
    } else {
      thumb.classList.add('sem-img');
      thumb.textContent = '// imagem não anexada';
    }

    var corpo = document.createElement('div');
    corpo.className = 'acred-corpo';

    var topo = document.createElement('div');
    topo.className = 'acred-topo';

    var num = document.createElement('span');
    num.className = 'acred-num';
    num.textContent = 'CRED-' + String(indice + 1).padStart(3, '0');

    var area = document.createElement('span');
    area.className = 'acred-area';
    area.textContent = AREAS[cred.area] || cred.area.toUpperCase();

    topo.appendChild(num);
    topo.appendChild(area);

    var titulo = document.createElement('h3');
    titulo.textContent = cred.titulo;

    var emissor = document.createElement('p');
    emissor.className = 'acred-emissor';
    emissor.textContent = cred.emissor + (cred.ano ? ' · ' + cred.ano : '');

    var ver = document.createElement('span');
    ver.className = 'acred-ver';
    ver.textContent = '↗ inspecionar';

    corpo.appendChild(topo);
    corpo.appendChild(titulo);
    corpo.appendChild(emissor);
    corpo.appendChild(ver);

    card.appendChild(thumb);
    card.appendChild(corpo);

    card.addEventListener('click', function () { abrirModal(cred, indice); });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirModal(cred, indice);
      }
    });
    return card;
  }

  /* ---------- aplica filtro + busca e redesenha ---------- */
  function aplicar() {
    grid.textContent = '';                       // limpa o grid
    var visiveis = 0;
    var t = termo.trim().toLowerCase();

    CREDENCIAIS.forEach(function (cred, i) {
      var bateArea = areaAtiva === 'todas' || cred.area === areaAtiva;
      var bateBusca = !t ||
        cred.titulo.toLowerCase().indexOf(t) !== -1 ||
        cred.emissor.toLowerCase().indexOf(t) !== -1;
      if (bateArea && bateBusca) {
        grid.appendChild(montarCard(cred, i, visiveis));
        visiveis++;
      }
    });

    vazio.hidden = visiveis > 0;
    contagem.textContent = 'exibindo ' + visiveis + ' de ' + CREDENCIAIS.length +
      (CREDENCIAIS.length === 1 ? ' registro' : ' registros');
  }

  /* ---------- eventos ---------- */
  document.querySelectorAll('.farea').forEach(function (botao) {
    botao.addEventListener('click', function () {
      document.querySelectorAll('.farea').forEach(function (b) { b.classList.remove('ativa'); });
      botao.classList.add('ativa');
      areaAtiva = botao.dataset.area;
      aplicar();
    });
  });

  busca.addEventListener('input', function () {
    termo = busca.value;
    aplicar();
  });

  aplicar();
})();
