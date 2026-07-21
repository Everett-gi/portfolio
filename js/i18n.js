/* ============================================================
   i18n — sistema de idiomas (PT · EN · IT · FR)
   - textos da interface ficam no dicionário TRAD abaixo
   - elementos traduzíveis usam atributos data-i18n* no HTML
   - a escolha é lembrada (localStorage) e detectada do navegador
   Para ajustar um texto: edite a chave correspondente aqui.
   ============================================================ */
(function () {
  'use strict';

  var IDIOMAS = ['pt', 'en', 'it', 'fr'];
  var PADRAO = 'pt';

  /* rótulos <html lang> por idioma */
  var HTML_LANG = { pt: 'pt-BR', en: 'en', it: 'it', fr: 'fr' };

  /* frases da máquina de escrever (hero) por idioma */
  var FRASES = {
    pt: ['Desenvolvedor Full Stack Jr', 'Em busca de estágio em TI', 'Java · Spring Boot · PostgreSQL', 'Front-end · React · JavaScript', 'Cloud · Docker · deploy próprio', 'Cibersegurança como diferencial'],
    en: ['Junior Full Stack Developer', 'Looking for an IT internship', 'Java · Spring Boot · PostgreSQL', 'Front-end · React · JavaScript', 'Cloud · Docker · my own deploys', 'Cybersecurity as my edge'],
    it: ['Sviluppatore Full Stack Junior', 'In cerca di uno stage in IT', 'Java · Spring Boot · PostgreSQL', 'Front-end · React · JavaScript', 'Cloud · Docker · deploy in autonomia', 'Cybersecurity come punto di forza'],
    fr: ['Développeur Full Stack Junior', "À la recherche d'un stage en info", 'Java · Spring Boot · PostgreSQL', 'Front-end · React · JavaScript', 'Cloud · Docker · mes propres déploiements', 'La cybersécurité comme atout']
  };

  /* ---------------- DICIONÁRIO ---------------- */
  var TRAD = {
    pt: {
      'meta.title': 'Gildean Monteiro — Desenvolvedor Full Stack Jr & Cibersegurança',
      'meta.desc': 'Portfólio de Gildean Monteiro do Nascimento — Desenvolvedor Full Stack Jr em busca de estágio em TI. Java, Spring Boot, Python, React, PostgreSQL, Docker, Cloud e cibersegurança.',
      'switch.aria': 'Selecionar idioma',
      'faixa': 'PERFIL PROFISSIONAL ✦ REF: GM-2026 ✦ GILDEAN MONTEIRO ✦ DESENVOLVEDOR FULL STACK JR ✦ EM BUSCA DE ESTÁGIO EM TI ✦ DISPONÍVEL ✦\u00A0',
      'nav.perfil': '01·Perfil', 'nav.resumo': '02·Resumo', 'nav.capacidades': '03·Capacidades', 'nav.credenciais': '04·Credenciais', 'nav.projetos': '05·Projetos', 'nav.atividade': '06·Trajetória', 'nav.contato': '07·Contato',
      's1.tag': 'SEÇÃO 01 / PERFIL PROFISSIONAL',
      'hero.srRole': 'Desenvolvedor Full Stack Jr em busca de estágio em TI',
      'hero.tese': 'Desenvolvedor full stack júnior que <span class="marca">constrói e mantém sistemas reais em produção</span> — do banco de dados ao deploy na nuvem — com boas práticas de segurança em cada camada. <span class="marca">Em busca de uma oportunidade de estágio em TI</span> para aprender rápido e somar ao time.',
      'btn.github': '↗ GitHub', 'btn.githubA': 'ver meus projetos',
      'btn.linkedin': '↗ LinkedIn', 'btn.linkedinA': 'ver meu perfil',
      'btn.contato': 'Entrar em contato', 'btn.contatoA': 'vamos conversar →',
      'stamp.l1': 'BUSCA ESTÁGIO', 'stamp.l2': 'EM TI · DISPONÍVEL',
      'ficha.top': 'FICHA PROFISSIONAL — GILDEAN MONTEIRO',
      'ficha.nome': 'NOME', 'ficha.usuario': 'USUÁRIO', 'ficha.base': 'BASE', 'ficha.baseVal': 'Petrópolis — RJ, Brasil',
      'ficha.formacao': 'FORMAÇÃO', 'ficha.formacaoVal': 'TIC — FAETERJ (em curso)',
      'ficha.objetivo': 'OBJETIVO', 'ficha.objetivoVal': 'Estágio em TI',
      'ficha.dif': 'DIFERENCIAL', 'ficha.difVal': 'Cibersegurança — HackerX',
      'ficha.idiomas': 'IDIOMAS', 'ficha.idiomasVal': 'PT nativo · EN C2 · IT A1',
      'ficha.status': 'STATUS', 'ficha.statusVal': 'DISPONÍVEL — aberto a propostas',
      'ficha.curio': 'CURIOSIDADE', 'ficha.secret': 'não recusa desafio técnico',
      'ficha.rodape': '// toque na tarja preta para revelar',
      's2.tag': 'SEÇÃO 02 / RESUMO PROFISSIONAL', 's2.title': 'Quem eu sou',
      's2.p1': 'Sou desenvolvedor full stack júnior e graduando em <span class="marca">TIC pela FAETERJ</span>. Gosto de resolver problemas de ponta a ponta: modelo o banco, escrevo o back-end, monto a interface e coloco tudo no ar — e é assim que aprendo mais rápido, colocando a mão na massa.',
      's2.p2': 'Antes da TI, já lidava com pressão e trabalho em equipe: liderei um restaurante com <span class="marca">mais de 700 clientes por dia</span>, gerenciando pessoas e imprevistos. Trouxe dessa experiência organização, comunicação e responsabilidade.',
      's2.p3': 'No lado técnico, tenho projetos <span class="marca">reais rodando em produção</span> com Docker, banco de dados, migrações versionadas e deploy na nuvem. Como diferencial, invisto forte em <span class="marca">cibersegurança</span> (certificação HackerX, OWASP Top 10, OSINT), o que me faz escrever código com mais atenção à segurança. Também sou Conselheiro Acadêmico e Presidente da Atlética Dragões na FAETERJ, onde desenvolvo trabalho em equipe e comunicação.',
      's2.veredito': 'OBJETIVO: primeira oportunidade de estágio em TI.',
      'ind.prod': 'sistemas em produção<br>AWS &amp; Oracle Cloud',
      'ind.certs': 'certificados<br>em várias áreas de TI',
      'ind.clientes': 'clientes/dia geridos<br>sob pressão',
      'ind.ingles': 'inglês proficiente<br>certificado EF SET',
      's3.tag': 'SEÇÃO 03 / COMPETÊNCIAS TÉCNICAS', 's3.title': 'O que eu sei fazer',
      's3.hId': 'ID', 's3.hCap': 'CAPACIDADE', 's3.hDet': 'DETALHE', 's3.hSig': 'SINAL',
      'cap1.n': 'Back-end Java', 'cap1.d': 'Java 21, Spring Boot, APIs REST, JWT/BCrypt e Flyway — aplicados em projetos reais em produção.',
      'cap2.n': 'Front-end & PWA', 'cap2.d': 'HTML, CSS e JavaScript, React e aplicações instaláveis (PWA) responsivas e leves — inclusive este site.',
      'cap3.n': 'Banco de dados — PostgreSQL', 'cap3.d': 'Modelagem, schema versionado, índices e extensões como pgvector — padrão em todos os projetos.',
      'cap4.n': 'Cloud & DevOps', 'cap4.d': 'Deploy real em AWS EC2 e Oracle Cloud com Docker Compose, Caddy, DuckDNS, Git e CI com GitHub Actions.',
      'cap5.n': 'Python & IA', 'cap5.d': 'FastAPI, integração com LLMs, RAG com embeddings e automação. Residência tecnológica pelo Serratec.',
      'cap6.n': 'Cibersegurança <em>(diferencial)</em>', 'cap6.d': 'Certificação HackerX: Pentest web (OWASP Top 10), OSINT, análise de vulnerabilidades e criptografia. Faz eu escrever código mais seguro.',
      'cap7.n': 'Trabalho em equipe & comunicação', 'cap7.d': 'Gestão de operação de alto volume, delegação e representação estudantil como Conselheiro Acadêmico.',
      'cap8.n': 'Resolução de problemas', 'cap8.d': 'Depuração de incidentes em produção, raciocínio estruturado, vontade de aprender e decisão sob pressão.',
      's4.tag': 'SEÇÃO 04 / CREDENCIAIS VERIFICADAS', 's4.title': 'Meus certificados',
      's4.note': '// passe o mouse para inspecionar o selo — mais de 40 no anexo completo',
      'tag.emitida': 'EMITIDA', 'tag.concluida': 'CONCLUÍDA', 'tag.emcurso': 'EM CURSO',
      'cred.verify': '↗ verificar',
      'cred1.d': 'Pentest web (OWASP Top 10), OSINT, análise de vulnerabilidades, redes e protocolos (TCP/IP, DNS, HTTP/HTTPS), criptografia e prática em laboratórios controlados de ataque e defesa.',
      'cred2.t': 'Residência em TIC', 'cred2.d': 'Imersão em Inteligência Artificial, Internet das Coisas, Python e Computação em Nuvem, com foco nos vetores de ataque e na segurança inerente a cada tecnologia.',
      'cred3.d': 'Formação em lógica de programação e desenvolvimento front-end com JavaScript, HTML e CSS, consolidada em desafios práticos publicados no GitHub.', 'cred3.data': 'PROGRAMA ONE',
      'cred4.t': 'Graduação em TIC', 'cred4.d': 'Tecnologia da Informação e Comunicação: redes e protocolos, integração de sistemas, administração de servidores e tecnologias emergentes para ambientes corporativos.', 'cred4.data': '03/2024 → atual',
      'cred5.d': 'Proficiência em inglês certificada com nota 82/100 — nível C2 Proficient na escala CEFR, o mais alto do quadro europeu. Leitura e compreensão auditiva avaliadas.',
      'slot.anexo': 'ANEXO A', 'slot.title': 'arquivo completo de certificados', 'slot.sub': '// 40+ certificados catalogados por área de estudo — e contando', 'slot.btn': '↗ Ver todos os certificados', 'slot.btnA': 'abrir arquivo completo →',
      's5.tag': 'SEÇÃO 05 / PROJETOS', 's5.title': 'Código rodando no mundo real',
      'tag.prod': 'EM PRODUÇÃO', 'tag.dev': 'EM DESENVOLVIMENTO', 'tag.plan': 'ROADMAP', 'tag.done': 'CONCLUÍDO',
      'proj.selo': 'VER MAIS ✓',
      'proj1.d': 'PWA completo para os estudantes de TIC da FAETERJ: assistente de IA, notas, agenda, materiais, simulados e jogos multiplayer. Deploy em AWS EC2 com Docker, Caddy com cabeçalhos de segurança, Flyway e backups no Cloudflare R2.', 'proj1.link': '🔒 Repositório privado — demo sob demanda',
      'proj2.d': 'Plataforma unificada de avaliação de cultura pop: filmes, séries, jogos, livros, álbuns e HQs. Autenticação JWT com BCrypt, aceite de termos conforme a LGPD e deploy completo na Oracle Cloud.', 'proj2.link': '↗ Ver ao vivo',
      'proj3.d': 'Aplicação RAG: perguntas sobre documentos com respostas baseadas em busca semântica. Embeddings locais com sentence-transformers e geração via API da Anthropic. Une meu interesse por Python, IA e dados.', 'proj3.link': '↗ GitHub',
      'proj4.d': 'Suíte de segurança em Java com projetos interligados: cofre de senhas (SecVault), monitoramento de logs (SIEM-Lite), API bancária DevSecOps (SecureBank) e gestão de identidade (AuthHub).', 'proj4.link': '↗ Acompanhar no GitHub',
      'proj5.d': 'Recriação do clássico em JavaScript puro, sem frameworks — canvas, colisões e placar construídos do zero para consolidar lógica e manipulação do DOM.', 'proj5.link': '↗ Ver código',
      'proj6.t': 'Desafios ONE — Oracle', 'proj6.d': 'Projetos do programa Oracle Next Education com a Alura: Jogo do Número Secreto e Amigo Secreto. Lógica de programação, funções, arrays e eventos com JavaScript.', 'proj6.link1': '↗ Número Secreto', 'proj6.link2': '↗ Amigo Secreto',
      's6.tag': 'SEÇÃO 06 / TRAJETÓRIA', 's6.title': 'Minha trajetória',
      'filtro.prof': '[ PROFISSIONAL ]', 'filtro.acad': '[ ACADÊMICA ]',
      'prof1.d1': '11/2025 → atual', 'prof1.d2': '≈ 8 meses e contando', 'prof1.r': 'Controlador de Estacionamento <em>· Estapar — Petrópolis, RJ</em>', 'prof1.d': 'Gestão de sistemas de controle de acesso e monitoramento de fluxo em ambiente de grande circulação. Resolução de incidentes em tempo real com protocolos de segurança.',
      'prof2.d1': '03/2025 → 07/2025', 'prof2.d2': '≈ 5 meses', 'prof2.r': 'Recepcionista <em>· Odonto Company — Petrópolis, RJ</em>', 'prof2.d': 'Atendimento presencial, telefônico e virtual; agendamento de consultas e gestão da experiência do paciente.',
      'prof3.d1': '06/2024 → 03/2025', 'prof3.d2': '≈ 10 meses', 'prof3.r': 'Jovem Aprendiz <em>· CIEE — Petrópolis, RJ</em>', 'prof3.d': 'Atendimento a clientes, apresentação de produtos e serviços e suporte às rotinas administrativas.',
      'prof4.d1': '02/2022 → 12/2023', 'prof4.d2': '≈ 2 anos de liderança', 'prof4.r': 'Sub-Gerente <em>· Mega Lanches — São Paulo, SP</em>', 'prof4.d': 'Liderança de operação de alto volume (700+ clientes/dia): delegação, gestão de recursos e melhorias de processo com foco em comunicação e eficiência.',
      'prof5.d1': '08/2018 → 12/2020', 'prof5.d2': '≈ 2 anos e 5 meses', 'prof5.r': 'Atendente <em>· Mega Lanches — São Paulo, SP</em>', 'prof5.d': 'Atendimento ágil ao cliente e operação de máquinas e equipamentos com foco em qualidade.',
      'acad1.d1': '02/2025 → 03/2026', 'acad1.d2': '≈ 13 meses de treino', 'acad1.r': 'Ethical Hacking / Cibersegurança <em>· HackerX</em>', 'acad1.d': 'Redes e protocolos (TCP/IP, DNS, HTTP/HTTPS), OSINT, análise de vulnerabilidades, Pentest web (OWASP Top 10), criptografia e laboratórios de ataque e defesa.',
      'acad2.d1': '05/2025 → 07/2025', 'acad2.d2': '≈ 3 meses intensivos', 'acad2.r': 'Residência em TIC <em>· Serratec — Petrópolis, RJ</em>', 'acad2.d': 'Imersão em IA, IoT, Python e Cloud, com discussões sobre vetores de ataque e segurança de cada tecnologia.',
      'acad3.d1': '05/2024 → atual', 'acad3.d2': '≈ 2 anos e contando', 'acad3.r': 'Conselheiro Acadêmico &amp; Presidente da Atlética Dragões <em>· FAETERJ</em>', 'acad3.d': 'Coordenação de atividades extracurriculares, apoio à integração de alunos, ponte entre estudantes e administração e inclusão nos esportes físicos e virtuais.',
      'acad4.d1': '03/2024 → em curso', 'acad4.d2': '≈ 2 anos e contando', 'acad4.r': 'Graduação em TIC <em>· FAETERJ — Petrópolis, RJ</em>', 'acad4.d': 'Redes e protocolos, integração de sistemas, gestão de redes, administração de servidores e tecnologias emergentes.',
      's7.tag': 'SEÇÃO 07 / CONTATO', 's7.title': 'Vamos conversar',
      's7.text': 'Estou em busca da minha primeira oportunidade de estágio em TI — aberto a qualquer área: desenvolvimento, dados, infraestrutura, suporte ou segurança. Se meu perfil combina com a sua vaga, vou adorar conversar.',
      'contact.whats': '↗ Abrir canal no WhatsApp', 'contact.whatsA': 'resposta rápida garantida ✓',
      'ch.phone': 'TELEFONE',
      'footer.end': '— OBRIGADO PELA VISITA —', 'footer.signed': 'assinado:',
      /* --- página de certificados --- */
      'cert.title': 'Arquivo de Certificados — Gildean Monteiro',
      'cert.desc': 'Arquivo completo de certificados de Gildean Monteiro, catalogados por área de estudo: cibersegurança, front-end, Python & IA, cloud, gestão e idiomas.',
      'cert.faixa': 'ARQUIVO DE CERTIFICADOS ✦ GILDEAN MONTEIRO ✦ MAIS DE 40 CERTIFICADOS ✦ CATALOGADOS POR ÁREA DE ESTUDO ✦\u00A0',
      'cert.back': '← Voltar ao início', 'cert.projetos': 'Projetos', 'cert.contato': 'Contato',
      'arch.tag': 'ANEXO A / ARQUIVO DE CERTIFICADOS', 'arch.title': 'Todos os meus certificados',
      'arch.note': '// catalogados por área de estudo — filtre ou busque por nome',
      'arch.searchPh': 'buscar por nome ou emissor...', 'arch.loading': 'carregando registros…',
      'arch.count': 'exibindo {n} de {total} registros',
      'farea.todas': '[ TODAS ]', 'farea.ciber': '[ CIBERSEGURANÇA ]', 'farea.java': '[ JAVA & BACK-END ]', 'farea.python-ia': '[ PYTHON & IA ]', 'farea.front': '[ FRONT-END ]', 'farea.cloud': '[ CLOUD & DEVOPS ]', 'farea.redes': '[ REDES & INFRA ]', 'farea.gestao': '[ GESTÃO & SOFT SKILLS ]', 'farea.idiomas': '[ IDIOMAS ]',
      'area.ciber': 'CIBERSEGURANÇA', 'area.java': 'JAVA & BACK-END', 'area.python-ia': 'PYTHON & IA', 'area.front': 'FRONT-END', 'area.cloud': 'CLOUD & DEVOPS', 'area.redes': 'REDES & INFRA', 'area.gestao': 'GESTÃO & SOFT SKILLS', 'area.idiomas': 'IDIOMAS',
      'arch.empty': '// nenhum registro encontrado — ajuste o filtro ou a busca',
      'arch.back': '← Voltar ao início', 'arch.backA': 'voltar ao portfólio',
      'card.inspect': '↗ inspecionar', 'card.noImg': '// imagem não anexada',
      'modal.closeA': 'Fechar', 'modal.noImg': '// imagem original ainda não anexada', 'modal.verify': '↗ verificar autenticidade na fonte', 'modal.noDetails': 'Detalhes ainda não catalogados para esta credencial.'
    },

    en: {
      'meta.title': 'Gildean Monteiro — Junior Full Stack Developer & Cybersecurity',
      'meta.desc': 'Portfolio of Gildean Monteiro do Nascimento — Junior Full Stack Developer looking for an IT internship. Java, Spring Boot, Python, React, PostgreSQL, Docker, Cloud and cybersecurity.',
      'switch.aria': 'Select language',
      'faixa': 'PROFESSIONAL PROFILE ✦ REF: GM-2026 ✦ GILDEAN MONTEIRO ✦ JUNIOR FULL STACK DEVELOPER ✦ LOOKING FOR AN IT INTERNSHIP ✦ AVAILABLE ✦\u00A0',
      'nav.perfil': '01·Profile', 'nav.resumo': '02·About', 'nav.capacidades': '03·Skills', 'nav.credenciais': '04·Credentials', 'nav.projetos': '05·Projects', 'nav.atividade': '06·Journey', 'nav.contato': '07·Contact',
      's1.tag': 'SECTION 01 / PROFESSIONAL PROFILE',
      'hero.srRole': 'Junior Full Stack Developer looking for an IT internship',
      'hero.tese': 'Junior full stack developer who <span class="marca">builds and maintains real systems in production</span> — from the database to cloud deployment — with solid security practices at every layer. <span class="marca">Looking for an IT internship</span> to learn fast and add value to the team.',
      'btn.github': '↗ GitHub', 'btn.githubA': 'see my projects',
      'btn.linkedin': '↗ LinkedIn', 'btn.linkedinA': 'see my profile',
      'btn.contato': 'Get in touch', 'btn.contatoA': "let's talk →",
      'stamp.l1': 'SEEKING INTERNSHIP', 'stamp.l2': 'IN IT · AVAILABLE',
      'ficha.top': 'PROFILE CARD — GILDEAN MONTEIRO',
      'ficha.nome': 'NAME', 'ficha.usuario': 'USERNAME', 'ficha.base': 'BASED IN', 'ficha.baseVal': 'Petrópolis — RJ, Brazil',
      'ficha.formacao': 'EDUCATION', 'ficha.formacaoVal': 'IT — FAETERJ (ongoing)',
      'ficha.objetivo': 'GOAL', 'ficha.objetivoVal': 'IT internship',
      'ficha.dif': 'EDGE', 'ficha.difVal': 'Cybersecurity — HackerX',
      'ficha.idiomas': 'LANGUAGES', 'ficha.idiomasVal': 'PT native · EN C2 · IT A1',
      'ficha.status': 'STATUS', 'ficha.statusVal': 'AVAILABLE — open to offers',
      'ficha.curio': 'FUN FACT', 'ficha.secret': 'never turns down a technical challenge',
      'ficha.rodape': '// tap the black bar to reveal',
      's2.tag': 'SECTION 02 / PROFESSIONAL SUMMARY', 's2.title': 'Who I am',
      's2.p1': "I'm a junior full stack developer and an <span class=\"marca\">IT undergraduate at FAETERJ</span>. I enjoy solving problems end to end: I model the database, write the back-end, build the interface and ship it all — and that hands-on approach is how I learn fastest.",
      's2.p2': 'Before IT, I already dealt with pressure and teamwork: I led a restaurant serving <span class="marca">over 700 customers a day</span>, managing people and the unexpected. That experience gave me organization, communication and responsibility.',
      's2.p3': "On the technical side, I have <span class=\"marca\">real projects running in production</span> with Docker, databases, versioned migrations and cloud deployment. As my edge, I invest heavily in <span class=\"marca\">cybersecurity</span> (HackerX certification, OWASP Top 10, OSINT), which makes me write code with security in mind. I'm also Academic Advisor and President of Atlética Dragões at FAETERJ, where I develop teamwork and communication.",
      's2.veredito': 'GOAL: my first IT internship opportunity.',
      'ind.prod': 'systems in production<br>AWS &amp; Oracle Cloud',
      'ind.certs': 'certificates<br>across several IT areas',
      'ind.clientes': 'customers/day managed<br>under pressure',
      'ind.ingles': 'proficient English<br>EF SET certified',
      's3.tag': 'SECTION 03 / TECHNICAL SKILLS', 's3.title': 'What I can do',
      's3.hId': 'ID', 's3.hCap': 'SKILL', 's3.hDet': 'DETAILS', 's3.hSig': 'LEVEL',
      'cap1.n': 'Back-end Java', 'cap1.d': 'Java 21, Spring Boot, REST APIs, JWT/BCrypt and Flyway — applied in real production projects.',
      'cap2.n': 'Front-end & PWA', 'cap2.d': 'HTML, CSS and JavaScript, React and installable (PWA) apps — responsive and lightweight, including this site.',
      'cap3.n': 'Databases — PostgreSQL', 'cap3.d': 'Modeling, versioned schema, indexes and extensions like pgvector — standard across all projects.',
      'cap4.n': 'Cloud & DevOps', 'cap4.d': 'Real deployment on AWS EC2 and Oracle Cloud with Docker Compose, Caddy, DuckDNS, Git and CI with GitHub Actions.',
      'cap5.n': 'Python & AI', 'cap5.d': 'FastAPI, LLM integration, RAG with embeddings and automation. Tech residency at Serratec.',
      'cap6.n': 'Cybersecurity <em>(my edge)</em>', 'cap6.d': 'HackerX certification: web pentesting (OWASP Top 10), OSINT, vulnerability analysis and cryptography. It makes me write more secure code.',
      'cap7.n': 'Teamwork & communication', 'cap7.d': 'High-volume operations management, delegation and student representation as Academic Advisor.',
      'cap8.n': 'Problem solving', 'cap8.d': 'Debugging production incidents, structured thinking, eagerness to learn and decision-making under pressure.',
      's4.tag': 'SECTION 04 / VERIFIED CREDENTIALS', 's4.title': 'My certificates',
      's4.note': '// hover to inspect the seal — 40+ in the full archive',
      'tag.emitida': 'ISSUED', 'tag.concluida': 'COMPLETED', 'tag.emcurso': 'IN PROGRESS',
      'cred.verify': '↗ verify',
      'cred1.d': 'Web pentesting (OWASP Top 10), OSINT, vulnerability analysis, networks and protocols (TCP/IP, DNS, HTTP/HTTPS), cryptography and hands-on practice in controlled attack-and-defense labs.',
      'cred2.t': 'IT Residency', 'cred2.d': 'Immersion in Artificial Intelligence, Internet of Things, Python and Cloud Computing, focusing on attack vectors and the security inherent to each technology.',
      'cred3.d': 'Training in programming logic and front-end development with JavaScript, HTML and CSS, consolidated through hands-on challenges published on GitHub.', 'cred3.data': 'ONE PROGRAM',
      'cred4.t': 'IT Degree', 'cred4.d': 'Information and Communication Technology: networks and protocols, systems integration, server administration and emerging technologies for corporate environments.', 'cred4.data': '03/2024 → present',
      'cred5.d': 'English proficiency certified with a score of 82/100 — level C2 Proficient on the CEFR scale, the highest of the European framework. Reading and listening assessed.',
      'slot.anexo': 'APPENDIX A', 'slot.title': 'full certificate archive', 'slot.sub': '// 40+ certificates catalogued by field of study — and counting', 'slot.btn': '↗ See all certificates', 'slot.btnA': 'open full archive →',
      's5.tag': 'SECTION 05 / PROJECTS', 's5.title': 'Code running in the real world',
      'tag.prod': 'IN PRODUCTION', 'tag.dev': 'IN DEVELOPMENT', 'tag.plan': 'ROADMAP', 'tag.done': 'COMPLETED',
      'proj.selo': 'MORE ✓',
      'proj1.d': "Full PWA for FAETERJ's IT students: AI assistant, grades, schedule, study materials, mock exams and multiplayer games. Deployed on AWS EC2 with Docker, Caddy with security headers, Flyway and backups on Cloudflare R2.", 'proj1.link': '🔒 Private repository — demo on request',
      'proj2.d': 'Unified pop-culture rating platform: movies, series, games, books, albums and comics. JWT authentication with BCrypt, LGPD-compliant terms acceptance and full deployment on Oracle Cloud.', 'proj2.link': '↗ View live',
      'proj3.d': 'RAG application: ask questions about your documents and get answers grounded in semantic search. Local embeddings with sentence-transformers and generation via the Anthropic API. It brings together my interest in Python, AI and data.', 'proj3.link': '↗ GitHub',
      'proj4.d': 'Java security suite with interconnected projects: password vault (SecVault), log monitoring (SIEM-Lite), DevSecOps banking API (SecureBank) and identity management (AuthHub).', 'proj4.link': '↗ Follow on GitHub',
      'proj5.d': 'A remake of the classic in pure JavaScript, no frameworks — canvas, collisions and scoring built from scratch to consolidate logic and DOM manipulation.', 'proj5.link': '↗ View code',
      'proj6.t': 'ONE Challenges — Oracle', 'proj6.d': 'Projects from the Oracle Next Education program with Alura: Secret Number game and Secret Friend. Programming logic, functions, arrays and events with JavaScript.', 'proj6.link1': '↗ Secret Number', 'proj6.link2': '↗ Secret Friend',
      's6.tag': 'SECTION 06 / JOURNEY', 's6.title': 'My journey',
      'filtro.prof': '[ PROFESSIONAL ]', 'filtro.acad': '[ ACADEMIC ]',
      'prof1.d1': '11/2025 → present', 'prof1.d2': '≈ 8 months and counting', 'prof1.r': 'Parking Attendant <em>· Estapar — Petrópolis, RJ</em>', 'prof1.d': 'Managing access-control systems and monitoring traffic flow in a high-footfall environment. Real-time incident resolution with security protocols.',
      'prof2.d1': '03/2025 → 07/2025', 'prof2.d2': '≈ 5 months', 'prof2.r': 'Receptionist <em>· Odonto Company — Petrópolis, RJ</em>', 'prof2.d': 'In-person, phone and online reception; appointment scheduling and patient experience management.',
      'prof3.d1': '06/2024 → 03/2025', 'prof3.d2': '≈ 10 months', 'prof3.r': 'Young Apprentice <em>· CIEE — Petrópolis, RJ</em>', 'prof3.d': 'Customer service, presenting products and services, and support with administrative routines.',
      'prof4.d1': '02/2022 → 12/2023', 'prof4.d2': '≈ 2 years of leadership', 'prof4.r': 'Assistant Manager <em>· Mega Lanches — São Paulo, SP</em>', 'prof4.d': 'Leading a high-volume operation (700+ customers/day): delegation, resource management and process improvements focused on communication and efficiency.',
      'prof5.d1': '08/2018 → 12/2020', 'prof5.d2': '≈ 2 years and 5 months', 'prof5.r': 'Attendant <em>· Mega Lanches — São Paulo, SP</em>', 'prof5.d': 'Fast customer service and operation of machines and equipment with a focus on quality.',
      'acad1.d1': '02/2025 → 03/2026', 'acad1.d2': '≈ 13 months of training', 'acad1.r': 'Ethical Hacking / Cybersecurity <em>· HackerX</em>', 'acad1.d': 'Networks and protocols (TCP/IP, DNS, HTTP/HTTPS), OSINT, vulnerability analysis, web pentesting (OWASP Top 10), cryptography and attack-and-defense labs.',
      'acad2.d1': '05/2025 → 07/2025', 'acad2.d2': '≈ 3 intensive months', 'acad2.r': 'IT Residency <em>· Serratec — Petrópolis, RJ</em>', 'acad2.d': 'Immersion in AI, IoT, Python and Cloud, with discussions on attack vectors and the security of each technology.',
      'acad3.d1': '05/2024 → present', 'acad3.d2': '≈ 2 years and counting', 'acad3.r': 'Academic Advisor &amp; President of Atlética Dragões <em>· FAETERJ</em>', 'acad3.d': 'Coordinating extracurricular activities, supporting student integration, bridging students and administration, and inclusion in physical and virtual sports.',
      'acad4.d1': '03/2024 → ongoing', 'acad4.d2': '≈ 2 years and counting', 'acad4.r': 'IT Degree <em>· FAETERJ — Petrópolis, RJ</em>', 'acad4.d': 'Networks and protocols, systems integration, network management, server administration and emerging technologies.',
      's7.tag': 'SECTION 07 / CONTACT', 's7.title': "Let's talk",
      's7.text': "I'm looking for my first IT internship — open to any area: development, data, infrastructure, support or security. If my profile fits your opening, I'd love to talk.",
      'contact.whats': '↗ Message me on WhatsApp', 'contact.whatsA': 'quick reply guaranteed ✓',
      'ch.phone': 'PHONE',
      'footer.end': '— THANKS FOR VISITING —', 'footer.signed': 'signed:',
      'cert.title': 'Certificate Archive — Gildean Monteiro',
      'cert.desc': "Gildean Monteiro's full certificate archive, catalogued by field of study: cybersecurity, front-end, Python & AI, cloud, management and languages.",
      'cert.faixa': 'CERTIFICATE ARCHIVE ✦ GILDEAN MONTEIRO ✦ OVER 40 CERTIFICATES ✦ CATALOGUED BY FIELD OF STUDY ✦\u00A0',
      'cert.back': '← Back to home', 'cert.projetos': 'Projects', 'cert.contato': 'Contact',
      'arch.tag': 'APPENDIX A / CERTIFICATE ARCHIVE', 'arch.title': 'All my certificates',
      'arch.note': '// catalogued by field of study — filter or search by name',
      'arch.searchPh': 'search by name or issuer...', 'arch.loading': 'loading records…',
      'arch.count': 'showing {n} of {total} records',
      'farea.todas': '[ ALL ]', 'farea.ciber': '[ CYBERSECURITY ]', 'farea.java': '[ JAVA & BACK-END ]', 'farea.python-ia': '[ PYTHON & AI ]', 'farea.front': '[ FRONT-END ]', 'farea.cloud': '[ CLOUD & DEVOPS ]', 'farea.redes': '[ NETWORKS & INFRA ]', 'farea.gestao': '[ MANAGEMENT & SOFT SKILLS ]', 'farea.idiomas': '[ LANGUAGES ]',
      'area.ciber': 'CYBERSECURITY', 'area.java': 'JAVA & BACK-END', 'area.python-ia': 'PYTHON & AI', 'area.front': 'FRONT-END', 'area.cloud': 'CLOUD & DEVOPS', 'area.redes': 'NETWORKS & INFRA', 'area.gestao': 'MANAGEMENT & SOFT SKILLS', 'area.idiomas': 'LANGUAGES',
      'arch.empty': '// no records found — adjust the filter or search',
      'arch.back': '← Back to home', 'arch.backA': 'back to the portfolio',
      'card.inspect': '↗ inspect', 'card.noImg': '// image not attached',
      'modal.closeA': 'Close', 'modal.noImg': '// original image not attached yet', 'modal.verify': '↗ verify authenticity at the source', 'modal.noDetails': 'Details not catalogued yet for this credential.'
    },

    it: {
      'meta.title': 'Gildean Monteiro — Sviluppatore Full Stack Junior & Cybersecurity',
      'meta.desc': 'Portfolio di Gildean Monteiro do Nascimento — Sviluppatore Full Stack Junior in cerca di uno stage in IT. Java, Spring Boot, Python, React, PostgreSQL, Docker, Cloud e cybersecurity.',
      'switch.aria': 'Seleziona lingua',
      'faixa': 'PROFILO PROFESSIONALE ✦ REF: GM-2026 ✦ GILDEAN MONTEIRO ✦ SVILUPPATORE FULL STACK JUNIOR ✦ IN CERCA DI STAGE IN IT ✦ DISPONIBILE ✦\u00A0',
      'nav.perfil': '01·Profilo', 'nav.resumo': '02·Chi sono', 'nav.capacidades': '03·Competenze', 'nav.credenciais': '04·Certificati', 'nav.projetos': '05·Progetti', 'nav.atividade': '06·Percorso', 'nav.contato': '07·Contatti',
      's1.tag': 'SEZIONE 01 / PROFILO PROFESSIONALE',
      'hero.srRole': 'Sviluppatore Full Stack Junior in cerca di uno stage in IT',
      'hero.tese': 'Sviluppatore full stack junior che <span class="marca">costruisce e mantiene sistemi reali in produzione</span> — dal database al deploy in cloud — con buone pratiche di sicurezza a ogni livello. <span class="marca">In cerca di uno stage in IT</span> per imparare in fretta e dare valore al team.',
      'btn.github': '↗ GitHub', 'btn.githubA': 'vedi i miei progetti',
      'btn.linkedin': '↗ LinkedIn', 'btn.linkedinA': 'vedi il mio profilo',
      'btn.contato': 'Contattami', 'btn.contatoA': 'parliamone →',
      'stamp.l1': 'CERCO STAGE', 'stamp.l2': 'IN IT · DISPONIBILE',
      'ficha.top': 'SCHEDA PROFESSIONALE — GILDEAN MONTEIRO',
      'ficha.nome': 'NOME', 'ficha.usuario': 'UTENTE', 'ficha.base': 'SEDE', 'ficha.baseVal': 'Petrópolis — RJ, Brasile',
      'ficha.formacao': 'FORMAZIONE', 'ficha.formacaoVal': 'IT — FAETERJ (in corso)',
      'ficha.objetivo': 'OBIETTIVO', 'ficha.objetivoVal': 'Stage in IT',
      'ficha.dif': 'PUNTO DI FORZA', 'ficha.difVal': 'Cybersecurity — HackerX',
      'ficha.idiomas': 'LINGUE', 'ficha.idiomasVal': 'PT madrelingua · EN C2 · IT A1',
      'ficha.status': 'STATO', 'ficha.statusVal': 'DISPONIBILE — aperto a proposte',
      'ficha.curio': 'CURIOSITÀ', 'ficha.secret': 'non rifiuta una sfida tecnica',
      'ficha.rodape': '// tocca la barra nera per rivelare',
      's2.tag': 'SEZIONE 02 / SINTESI PROFESSIONALE', 's2.title': 'Chi sono',
      's2.p1': "Sono uno sviluppatore full stack junior e studente di <span class=\"marca\">Informatica alla FAETERJ</span>. Mi piace risolvere i problemi dall'inizio alla fine: modello il database, scrivo il back-end, costruisco l'interfaccia e metto tutto online — ed è così, mettendo le mani in pasta, che imparo più in fretta.",
      's2.p2': "Prima dell'IT, avevo già a che fare con la pressione e il lavoro di squadra: ho gestito un ristorante con <span class=\"marca\">oltre 700 clienti al giorno</span>, coordinando persone e imprevisti. Quell'esperienza mi ha dato organizzazione, comunicazione e senso di responsabilità.",
      's2.p3': "Sul piano tecnico, ho <span class=\"marca\">progetti reali in produzione</span> con Docker, database, migrazioni versionate e deploy in cloud. Come punto di forza, investo molto nella <span class=\"marca\">cybersecurity</span> (certificazione HackerX, OWASP Top 10, OSINT), il che mi porta a scrivere codice con più attenzione alla sicurezza. Sono anche Consigliere Accademico e Presidente dell'Atlética Dragões alla FAETERJ, dove sviluppo lavoro di squadra e comunicazione.",
      's2.veredito': 'OBIETTIVO: il mio primo stage in IT.',
      'ind.prod': 'sistemi in produzione<br>AWS &amp; Oracle Cloud',
      'ind.certs': 'certificati<br>in varie aree IT',
      'ind.clientes': 'clienti/giorno gestiti<br>sotto pressione',
      'ind.ingles': 'inglese fluente<br>certificato EF SET',
      's3.tag': 'SEZIONE 03 / COMPETENZE TECNICHE', 's3.title': 'Cosa so fare',
      's3.hId': 'ID', 's3.hCap': 'COMPETENZA', 's3.hDet': 'DETTAGLIO', 's3.hSig': 'LIVELLO',
      'cap1.n': 'Back-end Java', 'cap1.d': 'Java 21, Spring Boot, API REST, JWT/BCrypt e Flyway — applicati in progetti reali in produzione.',
      'cap2.n': 'Front-end & PWA', 'cap2.d': 'HTML, CSS e JavaScript, React e applicazioni installabili (PWA) responsive e leggere — incluso questo sito.',
      'cap3.n': 'Database — PostgreSQL', 'cap3.d': 'Modellazione, schema versionato, indici ed estensioni come pgvector — standard in tutti i progetti.',
      'cap4.n': 'Cloud & DevOps', 'cap4.d': 'Deploy reale su AWS EC2 e Oracle Cloud con Docker Compose, Caddy, DuckDNS, Git e CI con GitHub Actions.',
      'cap5.n': 'Python & IA', 'cap5.d': 'FastAPI, integrazione con LLM, RAG con embedding e automazione. Residenza tecnologica presso Serratec.',
      'cap6.n': 'Cybersecurity <em>(punto di forza)</em>', 'cap6.d': 'Certificazione HackerX: pentest web (OWASP Top 10), OSINT, analisi delle vulnerabilità e crittografia. Mi porta a scrivere codice più sicuro.',
      'cap7.n': 'Lavoro di squadra & comunicazione', 'cap7.d': 'Gestione di operazioni ad alto volume, delega e rappresentanza studentesca come Consigliere Accademico.',
      'cap8.n': 'Problem solving', 'cap8.d': 'Debug di incidenti in produzione, ragionamento strutturato, voglia di imparare e decisioni sotto pressione.',
      's4.tag': 'SEZIONE 04 / CERTIFICATI VERIFICATI', 's4.title': 'I miei certificati',
      's4.note': '// passa il mouse per ispezionare il sigillo — oltre 40 nell\u2019archivio completo',
      'tag.emitida': 'RILASCIATO', 'tag.concluida': 'COMPLETATO', 'tag.emcurso': 'IN CORSO',
      'cred.verify': '↗ verifica',
      'cred1.d': 'Pentest web (OWASP Top 10), OSINT, analisi delle vulnerabilità, reti e protocolli (TCP/IP, DNS, HTTP/HTTPS), crittografia e pratica in laboratori controllati di attacco e difesa.',
      'cred2.t': 'Residenza in IT', 'cred2.d': "Immersione in Intelligenza Artificiale, Internet of Things, Python e Cloud Computing, con focus sui vettori di attacco e sulla sicurezza propria di ogni tecnologia.",
      'cred3.d': 'Formazione in logica di programmazione e sviluppo front-end con JavaScript, HTML e CSS, consolidata in sfide pratiche pubblicate su GitHub.', 'cred3.data': 'PROGRAMMA ONE',
      'cred4.t': 'Laurea in IT', 'cred4.d': "Tecnologie dell'Informazione e della Comunicazione: reti e protocolli, integrazione di sistemi, amministrazione di server e tecnologie emergenti per ambienti aziendali.", 'cred4.data': '03/2024 → attuale',
      'cred5.d': 'Competenza in inglese certificata con punteggio 82/100 — livello C2 Proficient sulla scala CEFR, il più alto del quadro europeo. Valutate lettura e comprensione orale.',
      'slot.anexo': 'ALLEGATO A', 'slot.title': 'archivio completo dei certificati', 'slot.sub': '// oltre 40 certificati catalogati per area di studio — e in aumento', 'slot.btn': '↗ Vedi tutti i certificati', 'slot.btnA': 'apri archivio completo →',
      's5.tag': 'SEZIONE 05 / PROGETTI', 's5.title': 'Codice che gira nel mondo reale',
      'tag.prod': 'IN PRODUZIONE', 'tag.dev': 'IN SVILUPPO', 'tag.plan': 'ROADMAP', 'tag.done': 'COMPLETATO',
      'proj.selo': 'DI PIÙ ✓',
      'proj1.d': "PWA completa per gli studenti di IT della FAETERJ: assistente IA, voti, agenda, materiali, simulazioni d'esame e giochi multiplayer. Deploy su AWS EC2 con Docker, Caddy con header di sicurezza, Flyway e backup su Cloudflare R2.", 'proj1.link': '🔒 Repository privato — demo su richiesta',
      'proj2.d': 'Piattaforma unificata per valutare la cultura pop: film, serie, giochi, libri, album e fumetti. Autenticazione JWT con BCrypt, accettazione dei termini conforme alla LGPD e deploy completo su Oracle Cloud.', 'proj2.link': '↗ Vedi live',
      'proj3.d': "Applicazione RAG: domande sui documenti con risposte basate sulla ricerca semantica. Embedding locali con sentence-transformers e generazione tramite API di Anthropic. Unisce il mio interesse per Python, IA e dati.", 'proj3.link': '↗ GitHub',
      'proj4.d': 'Suite di sicurezza in Java con progetti collegati: cassaforte di password (SecVault), monitoraggio dei log (SIEM-Lite), API bancaria DevSecOps (SecureBank) e gestione delle identità (AuthHub).', 'proj4.link': '↗ Segui su GitHub',
      'proj5.d': 'Rifacimento del classico in puro JavaScript, senza framework — canvas, collisioni e punteggio costruiti da zero per consolidare logica e manipolazione del DOM.', 'proj5.link': '↗ Vedi codice',
      'proj6.t': 'Sfide ONE — Oracle', 'proj6.d': 'Progetti del programma Oracle Next Education con Alura: gioco del Numero Segreto e Amico Segreto. Logica di programmazione, funzioni, array ed eventi con JavaScript.', 'proj6.link1': '↗ Numero Segreto', 'proj6.link2': '↗ Amico Segreto',
      's6.tag': 'SEZIONE 06 / PERCORSO', 's6.title': 'Il mio percorso',
      'filtro.prof': '[ PROFESSIONALE ]', 'filtro.acad': '[ ACCADEMICA ]',
      'prof1.d1': '11/2025 → attuale', 'prof1.d2': '≈ 8 mesi e in aumento', 'prof1.r': 'Addetto al Parcheggio <em>· Estapar — Petrópolis, RJ</em>', 'prof1.d': 'Gestione di sistemi di controllo accessi e monitoraggio del flusso in un ambiente ad alta affluenza. Risoluzione di incidenti in tempo reale con protocolli di sicurezza.',
      'prof2.d1': '03/2025 → 07/2025', 'prof2.d2': '≈ 5 mesi', 'prof2.r': 'Receptionist <em>· Odonto Company — Petrópolis, RJ</em>', 'prof2.d': "Accoglienza di persona, telefonica e online; gestione degli appuntamenti e dell'esperienza del paziente.",
      'prof3.d1': '06/2024 → 03/2025', 'prof3.d2': '≈ 10 mesi', 'prof3.r': 'Apprendista <em>· CIEE — Petrópolis, RJ</em>', 'prof3.d': 'Assistenza clienti, presentazione di prodotti e servizi e supporto alle attività amministrative.',
      'prof4.d1': '02/2022 → 12/2023', 'prof4.d2': '≈ 2 anni di leadership', 'prof4.r': 'Vice Responsabile <em>· Mega Lanches — São Paulo, SP</em>', 'prof4.d': "Guida di un'operazione ad alto volume (700+ clienti/giorno): delega, gestione delle risorse e miglioramento dei processi con focus su comunicazione ed efficienza.",
      'prof5.d1': '08/2018 → 12/2020', 'prof5.d2': '≈ 2 anni e 5 mesi', 'prof5.r': 'Addetto <em>· Mega Lanches — São Paulo, SP</em>', 'prof5.d': 'Servizio clienti rapido e uso di macchine e attrezzature con attenzione alla qualità.',
      'acad1.d1': '02/2025 → 03/2026', 'acad1.d2': '≈ 13 mesi di formazione', 'acad1.r': 'Ethical Hacking / Cybersecurity <em>· HackerX</em>', 'acad1.d': 'Reti e protocolli (TCP/IP, DNS, HTTP/HTTPS), OSINT, analisi delle vulnerabilità, pentest web (OWASP Top 10), crittografia e laboratori di attacco e difesa.',
      'acad2.d1': '05/2025 → 07/2025', 'acad2.d2': '≈ 3 mesi intensivi', 'acad2.r': 'Residenza in IT <em>· Serratec — Petrópolis, RJ</em>', 'acad2.d': 'Immersione in IA, IoT, Python e Cloud, con discussioni sui vettori di attacco e sulla sicurezza di ogni tecnologia.',
      'acad3.d1': '05/2024 → attuale', 'acad3.d2': '≈ 2 anni e in aumento', 'acad3.r': "Consigliere Accademico &amp; Presidente dell'Atlética Dragões <em>· FAETERJ</em>", 'acad3.d': "Coordinamento di attività extracurricolari, supporto all'integrazione degli studenti, ponte tra studenti e amministrazione e inclusione negli sport fisici e virtuali.",
      'acad4.d1': '03/2024 → in corso', 'acad4.d2': '≈ 2 anni e in aumento', 'acad4.r': 'Laurea in IT <em>· FAETERJ — Petrópolis, RJ</em>', 'acad4.d': 'Reti e protocolli, integrazione di sistemi, gestione delle reti, amministrazione di server e tecnologie emergenti.',
      's7.tag': 'SEZIONE 07 / CONTATTI', 's7.title': 'Parliamone',
      's7.text': 'Sono in cerca del mio primo stage in IT — aperto a qualsiasi ambito: sviluppo, dati, infrastruttura, supporto o sicurezza. Se il mio profilo è in linea con la vostra posizione, sarò felice di parlarne.',
      'contact.whats': '↗ Scrivimi su WhatsApp', 'contact.whatsA': 'risposta rapida garantita ✓',
      'ch.phone': 'TELEFONO',
      'footer.end': '— GRAZIE PER LA VISITA —', 'footer.signed': 'firmato:',
      'cert.title': 'Archivio Certificati — Gildean Monteiro',
      'cert.desc': 'Archivio completo dei certificati di Gildean Monteiro, catalogati per area di studio: cybersecurity, front-end, Python & IA, cloud, gestione e lingue.',
      'cert.faixa': 'ARCHIVIO CERTIFICATI ✦ GILDEAN MONTEIRO ✦ OLTRE 40 CERTIFICATI ✦ CATALOGATI PER AREA DI STUDIO ✦\u00A0',
      'cert.back': '← Torna all\u2019inizio', 'cert.projetos': 'Progetti', 'cert.contato': 'Contatti',
      'arch.tag': 'ALLEGATO A / ARCHIVIO CERTIFICATI', 'arch.title': 'Tutti i miei certificati',
      'arch.note': '// catalogati per area di studio — filtra o cerca per nome',
      'arch.searchPh': 'cerca per nome o ente...', 'arch.loading': 'caricamento record…',
      'arch.count': 'mostrati {n} di {total} record',
      'farea.todas': '[ TUTTE ]', 'farea.ciber': '[ CYBERSECURITY ]', 'farea.java': '[ JAVA & BACK-END ]', 'farea.python-ia': '[ PYTHON & IA ]', 'farea.front': '[ FRONT-END ]', 'farea.cloud': '[ CLOUD & DEVOPS ]', 'farea.redes': '[ RETI & INFRA ]', 'farea.gestao': '[ GESTIONE & SOFT SKILLS ]', 'farea.idiomas': '[ LINGUE ]',
      'area.ciber': 'CYBERSECURITY', 'area.java': 'JAVA & BACK-END', 'area.python-ia': 'PYTHON & IA', 'area.front': 'FRONT-END', 'area.cloud': 'CLOUD & DEVOPS', 'area.redes': 'RETI & INFRA', 'area.gestao': 'GESTIONE & SOFT SKILLS', 'area.idiomas': 'LINGUE',
      'arch.empty': '// nessun record trovato — modifica il filtro o la ricerca',
      'arch.back': '← Torna all\u2019inizio', 'arch.backA': 'torna al portfolio',
      'card.inspect': '↗ ispeziona', 'card.noImg': '// immagine non allegata',
      'modal.closeA': 'Chiudi', 'modal.noImg': '// immagine originale non ancora allegata', 'modal.verify': "↗ verifica l'autenticità alla fonte", 'modal.noDetails': 'Dettagli non ancora catalogati per questo certificato.'
    },

    fr: {
      'meta.title': 'Gildean Monteiro — Développeur Full Stack Junior & Cybersécurité',
      'meta.desc': "Portfolio de Gildean Monteiro do Nascimento — Développeur Full Stack Junior à la recherche d'un stage en informatique. Java, Spring Boot, Python, React, PostgreSQL, Docker, Cloud et cybersécurité.",
      'switch.aria': 'Choisir la langue',
      'faixa': "PROFIL PROFESSIONNEL ✦ REF: GM-2026 ✦ GILDEAN MONTEIRO ✦ DÉVELOPPEUR FULL STACK JUNIOR ✦ À LA RECHERCHE D'UN STAGE EN INFORMATIQUE ✦ DISPONIBLE ✦\u00A0",
      'nav.perfil': '01·Profil', 'nav.resumo': '02·À propos', 'nav.capacidades': '03·Compétences', 'nav.credenciais': '04·Diplômes', 'nav.projetos': '05·Projets', 'nav.atividade': '06·Parcours', 'nav.contato': '07·Contact',
      's1.tag': 'SECTION 01 / PROFIL PROFESSIONNEL',
      'hero.srRole': "Développeur Full Stack Junior à la recherche d'un stage en informatique",
      'hero.tese': "Développeur full stack junior qui <span class=\"marca\">conçoit et maintient de vrais systèmes en production</span> — de la base de données au déploiement dans le cloud — avec de bonnes pratiques de sécurité à chaque couche. <span class=\"marca\">À la recherche d'un stage en informatique</span> pour apprendre vite et apporter de la valeur à l'équipe.",
      'btn.github': '↗ GitHub', 'btn.githubA': 'voir mes projets',
      'btn.linkedin': '↗ LinkedIn', 'btn.linkedinA': 'voir mon profil',
      'btn.contato': 'Me contacter', 'btn.contatoA': 'discutons →',
      'stamp.l1': 'CHERCHE STAGE', 'stamp.l2': 'EN INFO · DISPONIBLE',
      'ficha.top': 'FICHE PROFESSIONNELLE — GILDEAN MONTEIRO',
      'ficha.nome': 'NOM', 'ficha.usuario': 'IDENTIFIANT', 'ficha.base': 'BASÉ À', 'ficha.baseVal': 'Petrópolis — RJ, Brésil',
      'ficha.formacao': 'FORMATION', 'ficha.formacaoVal': 'Informatique — FAETERJ (en cours)',
      'ficha.objetivo': 'OBJECTIF', 'ficha.objetivoVal': 'Stage en informatique',
      'ficha.dif': 'ATOUT', 'ficha.difVal': 'Cybersécurité — HackerX',
      'ficha.idiomas': 'LANGUES', 'ficha.idiomasVal': 'PT natif · EN C2 · IT A1',
      'ficha.status': 'STATUT', 'ficha.statusVal': 'DISPONIBLE — ouvert aux offres',
      'ficha.curio': 'ANECDOTE', 'ficha.secret': 'ne refuse jamais un défi technique',
      'ficha.rodape': '// touchez la barre noire pour révéler',
      's2.tag': 'SECTION 02 / RÉSUMÉ PROFESSIONNEL', 's2.title': 'Qui je suis',
      's2.p1': "Je suis développeur full stack junior et étudiant en <span class=\"marca\">informatique à la FAETERJ</span>. J'aime résoudre les problèmes de bout en bout : je modélise la base de données, j'écris le back-end, je construis l'interface et je mets le tout en ligne — et c'est en pratiquant que j'apprends le plus vite.",
      's2.p2': "Avant l'informatique, je gérais déjà la pression et le travail d'équipe : j'ai dirigé un restaurant accueillant <span class=\"marca\">plus de 700 clients par jour</span>, en encadrant une équipe et en gérant les imprévus. J'en ai tiré de l'organisation, de la communication et le sens des responsabilités.",
      's2.p3': "Côté technique, j'ai de <span class=\"marca\">vrais projets en production</span> avec Docker, des bases de données, des migrations versionnées et du déploiement dans le cloud. Comme atout, j'investis beaucoup dans la <span class=\"marca\">cybersécurité</span> (certification HackerX, OWASP Top 10, OSINT), ce qui me pousse à écrire un code plus attentif à la sécurité. Je suis aussi Conseiller Académique et Président de l'Atlética Dragões à la FAETERJ, où je développe le travail d'équipe et la communication.",
      's2.veredito': 'OBJECTIF : mon premier stage en informatique.',
      'ind.prod': 'systèmes en production<br>AWS &amp; Oracle Cloud',
      'ind.certs': 'certificats<br>dans plusieurs domaines IT',
      'ind.clientes': 'clients/jour gérés<br>sous pression',
      'ind.ingles': 'anglais courant<br>certifié EF SET',
      's3.tag': 'SECTION 03 / COMPÉTENCES TECHNIQUES', 's3.title': 'Ce que je sais faire',
      's3.hId': 'ID', 's3.hCap': 'COMPÉTENCE', 's3.hDet': 'DÉTAIL', 's3.hSig': 'NIVEAU',
      'cap1.n': 'Back-end Java', 'cap1.d': 'Java 21, Spring Boot, API REST, JWT/BCrypt et Flyway — appliqués dans de vrais projets en production.',
      'cap2.n': 'Front-end & PWA', 'cap2.d': 'HTML, CSS et JavaScript, React et applications installables (PWA), responsives et légères — y compris ce site.',
      'cap3.n': 'Bases de données — PostgreSQL', 'cap3.d': 'Modélisation, schéma versionné, index et extensions comme pgvector — standard sur tous les projets.',
      'cap4.n': 'Cloud & DevOps', 'cap4.d': 'Déploiement réel sur AWS EC2 et Oracle Cloud avec Docker Compose, Caddy, DuckDNS, Git et CI avec GitHub Actions.',
      'cap5.n': 'Python & IA', 'cap5.d': 'FastAPI, intégration de LLM, RAG avec embeddings et automatisation. Résidence technologique chez Serratec.',
      'cap6.n': 'Cybersécurité <em>(mon atout)</em>', 'cap6.d': 'Certification HackerX : pentest web (OWASP Top 10), OSINT, analyse de vulnérabilités et cryptographie. Cela me pousse à écrire un code plus sûr.',
      'cap7.n': "Travail d'équipe & communication", 'cap7.d': "Gestion d'opérations à fort volume, délégation et représentation étudiante en tant que Conseiller Académique.",
      'cap8.n': 'Résolution de problèmes', 'cap8.d': "Débogage d'incidents en production, raisonnement structuré, envie d'apprendre et prise de décision sous pression.",
      's4.tag': 'SECTION 04 / DIPLÔMES VÉRIFIÉS', 's4.title': 'Mes certificats',
      's4.note': '// survolez pour inspecter le sceau — plus de 40 dans les archives complètes',
      'tag.emitida': 'DÉLIVRÉ', 'tag.concluida': 'TERMINÉ', 'tag.emcurso': 'EN COURS',
      'cred.verify': '↗ vérifier',
      'cred1.d': "Pentest web (OWASP Top 10), OSINT, analyse de vulnérabilités, réseaux et protocoles (TCP/IP, DNS, HTTP/HTTPS), cryptographie et pratique en laboratoires contrôlés d'attaque et de défense.",
      'cred2.t': 'Résidence en informatique', 'cred2.d': "Immersion en Intelligence Artificielle, Internet des Objets, Python et Cloud Computing, axée sur les vecteurs d'attaque et la sécurité propre à chaque technologie.",
      'cred3.d': 'Formation en logique de programmation et développement front-end avec JavaScript, HTML et CSS, consolidée par des défis pratiques publiés sur GitHub.', 'cred3.data': 'PROGRAMME ONE',
      'cred4.t': 'Licence en informatique', 'cred4.d': "Technologies de l'Information et de la Communication : réseaux et protocoles, intégration de systèmes, administration de serveurs et technologies émergentes pour les environnements d'entreprise.", 'cred4.data': '03/2024 → présent',
      'cred5.d': "Maîtrise de l'anglais certifiée avec un score de 82/100 — niveau C2 Proficient sur l'échelle CECR, le plus élevé du cadre européen. Compréhension écrite et orale évaluées.",
      'slot.anexo': 'ANNEXE A', 'slot.title': 'archives complètes des certificats', 'slot.sub': '// plus de 40 certificats classés par domaine d\u2019étude — et ça continue', 'slot.btn': '↗ Voir tous les certificats', 'slot.btnA': 'ouvrir les archives →',
      's5.tag': 'SECTION 05 / PROJETS', 's5.title': 'Du code qui tourne dans le monde réel',
      'tag.prod': 'EN PRODUCTION', 'tag.dev': 'EN DÉVELOPPEMENT', 'tag.plan': 'ROADMAP', 'tag.done': 'TERMINÉ',
      'proj.selo': 'PLUS ✓',
      'proj1.d': "PWA complète pour les étudiants en informatique de la FAETERJ : assistant IA, notes, agenda, supports de cours, examens blancs et jeux multijoueurs. Déployée sur AWS EC2 avec Docker, Caddy avec en-têtes de sécurité, Flyway et sauvegardes sur Cloudflare R2.", 'proj1.link': '🔒 Dépôt privé — démo sur demande',
      'proj2.d': "Plateforme unifiée de notation de la culture pop : films, séries, jeux, livres, albums et BD. Authentification JWT avec BCrypt, acceptation des conditions conforme à la LGPD et déploiement complet sur Oracle Cloud.", 'proj2.link': '↗ Voir en ligne',
      'proj3.d': "Application RAG : posez des questions sur vos documents et obtenez des réponses fondées sur la recherche sémantique. Embeddings locaux avec sentence-transformers et génération via l'API d'Anthropic. Elle réunit mon intérêt pour Python, l'IA et les données.", 'proj3.link': '↗ GitHub',
      'proj4.d': "Suite de sécurité en Java avec des projets interconnectés : coffre-fort de mots de passe (SecVault), surveillance des logs (SIEM-Lite), API bancaire DevSecOps (SecureBank) et gestion des identités (AuthHub).", 'proj4.link': '↗ Suivre sur GitHub',
      'proj5.d': "Remake du classique en JavaScript pur, sans framework — canvas, collisions et score construits de zéro pour consolider la logique et la manipulation du DOM.", 'proj5.link': '↗ Voir le code',
      'proj6.t': 'Défis ONE — Oracle', 'proj6.d': "Projets du programme Oracle Next Education avec Alura : jeu du Nombre Secret et Ami Secret. Logique de programmation, fonctions, tableaux et événements avec JavaScript.", 'proj6.link1': '↗ Nombre Secret', 'proj6.link2': '↗ Ami Secret',
      's6.tag': 'SECTION 06 / PARCOURS', 's6.title': 'Mon parcours',
      'filtro.prof': '[ PROFESSIONNEL ]', 'filtro.acad': '[ ACADÉMIQUE ]',
      'prof1.d1': '11/2025 → présent', 'prof1.d2': '≈ 8 mois et ça continue', 'prof1.r': 'Agent de Stationnement <em>· Estapar — Petrópolis, RJ</em>', 'prof1.d': "Gestion des systèmes de contrôle d'accès et surveillance du flux dans un environnement à forte affluence. Résolution d'incidents en temps réel avec des protocoles de sécurité.",
      'prof2.d1': '03/2025 → 07/2025', 'prof2.d2': '≈ 5 mois', 'prof2.r': 'Réceptionniste <em>· Odonto Company — Petrópolis, RJ</em>', 'prof2.d': "Accueil en personne, par téléphone et en ligne ; prise de rendez-vous et gestion de l'expérience patient.",
      'prof3.d1': '06/2024 → 03/2025', 'prof3.d2': '≈ 10 mois', 'prof3.r': 'Jeune Apprenti <em>· CIEE — Petrópolis, RJ</em>', 'prof3.d': "Service client, présentation de produits et services et soutien aux tâches administratives.",
      'prof4.d1': '02/2022 → 12/2023', 'prof4.d2': '≈ 2 ans de management', 'prof4.r': 'Adjoint de Direction <em>· Mega Lanches — São Paulo, SP</em>', 'prof4.d': "Direction d'une opération à fort volume (700+ clients/jour) : délégation, gestion des ressources et amélioration des processus axées sur la communication et l'efficacité.",
      'prof5.d1': '08/2018 → 12/2020', 'prof5.d2': '≈ 2 ans et 5 mois', 'prof5.r': 'Employé <em>· Mega Lanches — São Paulo, SP</em>', 'prof5.d': "Service client rapide et utilisation de machines et d'équipements avec un souci de qualité.",
      'acad1.d1': '02/2025 → 03/2026', 'acad1.d2': '≈ 13 mois de formation', 'acad1.r': 'Ethical Hacking / Cybersécurité <em>· HackerX</em>', 'acad1.d': "Réseaux et protocoles (TCP/IP, DNS, HTTP/HTTPS), OSINT, analyse de vulnérabilités, pentest web (OWASP Top 10), cryptographie et laboratoires d'attaque et de défense.",
      'acad2.d1': '05/2025 → 07/2025', 'acad2.d2': '≈ 3 mois intensifs', 'acad2.r': 'Résidence en informatique <em>· Serratec — Petrópolis, RJ</em>', 'acad2.d': "Immersion en IA, IoT, Python et Cloud, avec des discussions sur les vecteurs d'attaque et la sécurité de chaque technologie.",
      'acad3.d1': '05/2024 → présent', 'acad3.d2': '≈ 2 ans et ça continue', 'acad3.r': "Conseiller Académique &amp; Président de l'Atlética Dragões <em>· FAETERJ</em>", 'acad3.d': "Coordination d'activités extrascolaires, soutien à l'intégration des étudiants, lien entre les étudiants et l'administration et inclusion dans les sports physiques et virtuels.",
      'acad4.d1': '03/2024 → en cours', 'acad4.d2': '≈ 2 ans et ça continue', 'acad4.r': 'Licence en informatique <em>· FAETERJ — Petrópolis, RJ</em>', 'acad4.d': 'Réseaux et protocoles, intégration de systèmes, gestion de réseaux, administration de serveurs et technologies émergentes.',
      's7.tag': 'SECTION 07 / CONTACT', 's7.title': 'Discutons',
      's7.text': "Je recherche mon premier stage en informatique — ouvert à tout domaine : développement, données, infrastructure, support ou sécurité. Si mon profil correspond à votre offre, je serai ravi d'en discuter.",
      'contact.whats': '↗ Écrivez-moi sur WhatsApp', 'contact.whatsA': 'réponse rapide garantie ✓',
      'ch.phone': 'TÉLÉPHONE',
      'footer.end': '— MERCI DE VOTRE VISITE —', 'footer.signed': 'signé :',
      'cert.title': 'Archives des Certificats — Gildean Monteiro',
      'cert.desc': "Archives complètes des certificats de Gildean Monteiro, classés par domaine d'étude : cybersécurité, front-end, Python & IA, cloud, gestion et langues.",
      'cert.faixa': "ARCHIVES DES CERTIFICATS ✦ GILDEAN MONTEIRO ✦ PLUS DE 40 CERTIFICATS ✦ CLASSÉS PAR DOMAINE D'ÉTUDE ✦\u00A0",
      'cert.back': "← Retour à l'accueil", 'cert.projetos': 'Projets', 'cert.contato': 'Contact',
      'arch.tag': 'ANNEXE A / ARCHIVES DES CERTIFICATS', 'arch.title': 'Tous mes certificats',
      'arch.note': "// classés par domaine d'étude — filtrez ou cherchez par nom",
      'arch.searchPh': 'rechercher par nom ou organisme...', 'arch.loading': 'chargement des enregistrements…',
      'arch.count': 'affichage de {n} sur {total} enregistrements',
      'farea.todas': '[ TOUS ]', 'farea.ciber': '[ CYBERSÉCURITÉ ]', 'farea.java': '[ JAVA & BACK-END ]', 'farea.python-ia': '[ PYTHON & IA ]', 'farea.front': '[ FRONT-END ]', 'farea.cloud': '[ CLOUD & DEVOPS ]', 'farea.redes': '[ RÉSEAUX & INFRA ]', 'farea.gestao': '[ GESTION & SOFT SKILLS ]', 'farea.idiomas': '[ LANGUES ]',
      'area.ciber': 'CYBERSÉCURITÉ', 'area.java': 'JAVA & BACK-END', 'area.python-ia': 'PYTHON & IA', 'area.front': 'FRONT-END', 'area.cloud': 'CLOUD & DEVOPS', 'area.redes': 'RÉSEAUX & INFRA', 'area.gestao': 'GESTION & SOFT SKILLS', 'area.idiomas': 'LANGUES',
      'arch.empty': '// aucun enregistrement trouvé — ajustez le filtre ou la recherche',
      'arch.back': "← Retour à l'accueil", 'arch.backA': 'retour au portfolio',
      'card.inspect': '↗ inspecter', 'card.noImg': '// image non jointe',
      'modal.closeA': 'Fermer', 'modal.noImg': '// image originale pas encore jointe', 'modal.verify': "↗ vérifier l'authenticité à la source", 'modal.noDetails': 'Détails pas encore catalogués pour ce certificat.'
    }
  };

  /* ---------------- MOTOR ---------------- */
  function guardar(lang) {
    try { localStorage.setItem('gm_lang', lang); } catch (e) { /* modo restrito: ignora */ }
  }
  function recuperar() {
    try { return localStorage.getItem('gm_lang'); } catch (e) { return null; }
  }
  function detectar() {
    var salvo = recuperar();
    if (salvo && IDIOMAS.indexOf(salvo) !== -1) return salvo;
    var nav = (navigator.language || navigator.userLanguage || 'pt').slice(0, 2).toLowerCase();
    return IDIOMAS.indexOf(nav) !== -1 ? nav : PADRAO;
  }

  var atual = detectar();

  function t(chave, lang) {
    var L = lang || atual;
    var dic = TRAD[L] || TRAD[PADRAO];
    if (dic[chave] != null) return dic[chave];
    if (TRAD[PADRAO][chave] != null) return TRAD[PADRAO][chave];  // fallback PT
    return chave;
  }

  function aplicar() {
    var dic = TRAD[atual] || TRAD[PADRAO];

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    // innerHTML (strings confiáveis do dicionário: contêm <span>, <em>, <br>)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    // atributos específicos
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    document.querySelectorAll('[data-i18n-al]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-al')));
    });
    document.querySelectorAll('[data-i18n-secret]').forEach(function (el) {
      var seg = t(el.getAttribute('data-i18n-secret'));
      el.setAttribute('data-segredo', seg);
      // se a tarja já foi revelada, atualiza o texto exibido também
      if (el.classList.contains('revelada')) el.textContent = seg;
    });

    // <title> e meta description (usa chaves específicas se existirem)
    var tituloKey = document.querySelector('[data-i18n-title]');
    if (tituloKey) document.title = t(tituloKey.getAttribute('data-i18n-title'));
    var descKey = document.querySelector('meta[data-i18n-desc]');
    if (descKey) descKey.setAttribute('content', t(descKey.getAttribute('data-i18n-desc')));

    // <html lang>
    document.documentElement.setAttribute('lang', HTML_LANG[atual] || 'pt-BR');

    // marca botão do idioma ativo
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === atual;
      b.classList.toggle('ativo', on);
      b.setAttribute('aria-pressed', String(on));
    });
  }

  function definir(lang) {
    if (IDIOMAS.indexOf(lang) === -1 || lang === atual) return;
    atual = lang;
    guardar(lang);
    aplicar();
    // avisa o resto do site (ex.: máquina de escrever no main.js)
    document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: lang } }));
  }

  // liga os botões do seletor
  function ligarSeletor() {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () { definir(b.getAttribute('data-lang')); });
    });
  }

  // expõe API para os outros scripts
  window.i18n = {
    t: t,
    get lang() { return atual; },
    set: definir,
    frases: function () { return FRASES[atual] || FRASES[PADRAO]; }
  };

  // aplica assim que o DOM estiver pronto (script no fim do body já garante isso)
  ligarSeletor();
  aplicar();
})();
