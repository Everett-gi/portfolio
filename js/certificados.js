/* ============================================================
   ANEXO A — arquivo de credenciais
   Para adicionar um certificado: copie uma linha do array
   CREDENCIAIS, cole no grupo da área correspondente e edite.
   Coloque a imagem em img/certificados/ e aponte no campo img.
   Numeração, filtros, busca, contagem e modal são automáticos.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- helpers de idioma (usam o i18n.js; caem para PT se ausente) ---------- */
  function i18nT(chave, alt) {
    return (window.i18n && typeof window.i18n.t === 'function') ? window.i18n.t(chave) : alt;
  }
  function idiomaAtual() {
    return (window.i18n && window.i18n.lang) ? window.i18n.lang : 'pt';
  }
  function rotuloArea(area) {
    return i18nT('area.' + area, AREAS[area] || area.toUpperCase());
  }
  /* detalhes pode ser string (mesmo texto em todo idioma) ou objeto {pt,en,it,fr} */
  function textoDetalhe(cred) {
    var d = cred.detalhes;
    if (d && typeof d === 'object') {
      return d[idiomaAtual()] || d.pt || '';
    }
    return d || '';
  }

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
      detalhes: { pt: 'Certificação final do programa de Ethical Hacking & Cybersecurity da HackerX, atestando a conclusão de todos os cursos da trilha e a aprovação no teste de conhecimento do domínio. A trilha cobre redes e protocolos (TCP/IP, DNS, HTTP/HTTPS), OSINT, análise de vulnerabilidades, Pentest web (OWASP Top 10) e criptografia. Certificate ID: 0b2e417953aa451.', en: 'Final certification of HackerX\'s Ethical Hacking & Cybersecurity program, attesting completion of every course in the track and passing the domain knowledge test. The track covers networks and protocols (TCP/IP, DNS, HTTP/HTTPS), OSINT, vulnerability analysis, web pentesting (OWASP Top 10) and cryptography. Certificate ID: 0b2e417953aa451.', it: 'Certificazione finale del programma Ethical Hacking & Cybersecurity di HackerX, che attesta il completamento di tutti i corsi del percorso e il superamento del test di conoscenza del dominio. Il percorso copre reti e protocolli (TCP/IP, DNS, HTTP/HTTPS), OSINT, analisi delle vulnerabilità, pentest web (OWASP Top 10) e crittografia. Certificate ID: 0b2e417953aa451.', fr: 'Certification finale du programme Ethical Hacking & Cybersecurity de HackerX, attestant l\'achèvement de tous les cours du parcours et la réussite du test de connaissances du domaine. Le parcours couvre les réseaux et protocoles (TCP/IP, DNS, HTTP/HTTPS), l\'OSINT, l\'analyse de vulnérabilités, le pentest web (OWASP Top 10) et la cryptographie. Certificate ID: 0b2e417953aa451.' }, link: '' },

    { titulo: 'Know the OS — Módulo de Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2025',
      data: '06/02/2025', carga: 'Módulo', img: 'img/certificados/hackerx-know-the-os.jpg',
      detalhes: { pt: 'Certificado do módulo "Know the OS" da trilha de Ethical Hacking, comprovando domínio dos conceitos de sistemas operacionais aplicados à segurança ofensiva. Certificate ID: ae00c9cf3063d93.', en: 'Certificate for the "Know the OS" module of the Ethical Hacking track, proving mastery of operating-system concepts applied to offensive security. Certificate ID: ae00c9cf3063d93.', it: 'Certificato del modulo "Know the OS" del percorso di Ethical Hacking, che attesta la padronanza dei concetti dei sistemi operativi applicati alla sicurezza offensiva. Certificate ID: ae00c9cf3063d93.', fr: 'Certificat du module « Know the OS » du parcours Ethical Hacking, prouvant la maîtrise des concepts de systèmes d\'exploitation appliqués à la sécurité offensive. Certificate ID: ae00c9cf3063d93.' }, link: '' },

    { titulo: 'Vulnerability Scanning and Reporting — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-vuln-scanning.jpg',
      detalhes: { pt: 'Módulo de varredura de vulnerabilidades e elaboração de relatórios: uso de scanners, priorização de riscos e documentação de achados — o núcleo do trabalho de um pentester. Certificate ID: 1d218c228530f6a.', en: 'Vulnerability scanning and reporting module: using scanners, prioritizing risks and documenting findings — the core of a pentester\'s work. Certificate ID: 1d218c228530f6a.', it: 'Modulo di scansione delle vulnerabilità e reportistica: uso di scanner, prioritizzazione dei rischi e documentazione dei risultati — il cuore del lavoro di un pentester. Certificate ID: 1d218c228530f6a.', fr: 'Module d\'analyse de vulnérabilités et de reporting : utilisation de scanners, priorisation des risques et documentation des résultats — le cœur du travail d\'un pentester. Certificate ID: 1d218c228530f6a.' }, link: '' },

    { titulo: 'Cross-Site Scripting (XSS) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-xss.jpg',
      detalhes: { pt: 'Exploração de falhas de Cross-Site Scripting — item do OWASP Top 10. Conhecimento aplicado diretamente no hardening anti-XSS do Hub Atlética Dragões (escape de saída no frontend). Certificate ID: 968e89725bc66f2.', en: 'Exploiting Cross-Site Scripting flaws — an OWASP Top 10 item. Knowledge applied directly to the anti-XSS hardening of Hub Atlética Dragões (output escaping on the frontend). Certificate ID: 968e89725bc66f2.', it: 'Sfruttamento di falle Cross-Site Scripting — voce dell\'OWASP Top 10. Conoscenza applicata direttamente all\'hardening anti-XSS di Hub Atlética Dragões (escape dell\'output nel frontend). Certificate ID: 968e89725bc66f2.', fr: 'Exploitation de failles Cross-Site Scripting — un élément de l\'OWASP Top 10. Connaissance appliquée directement au durcissement anti-XSS de Hub Atlética Dragões (échappement en sortie côté frontend). Certificate ID: 968e89725bc66f2.' }, link: '' },

    { titulo: 'Database Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '26/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-database-hacking.jpg',
      detalhes: { pt: 'Ataques a bancos de dados, incluindo injeção de SQL (OWASP Top 10): identificação, exploração e mitigação. Base direta para escrever back-ends seguros com PostgreSQL. Certificate ID: 92217efb8268b14.', en: 'Database attacks, including SQL injection (OWASP Top 10): identification, exploitation and mitigation. A direct basis for writing secure back-ends with PostgreSQL. Certificate ID: 92217efb8268b14.', it: 'Attacchi ai database, inclusa la SQL injection (OWASP Top 10): identificazione, sfruttamento e mitigazione. Base diretta per scrivere back-end sicuri con PostgreSQL. Certificate ID: 92217efb8268b14.', fr: 'Attaques sur les bases de données, dont l\'injection SQL (OWASP Top 10) : identification, exploitation et atténuation. Une base directe pour écrire des back-ends sécurisés avec PostgreSQL. Certificate ID: 92217efb8268b14.' }, link: '' },

    { titulo: 'Bringing Down a Website (DoS) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-bringing-down-website.jpg',
      detalhes: { pt: 'Ataques de negação de serviço (DoS/DDoS): como sobrecarregam aplicações web e quais defesas de infraestrutura os mitigam. Certificate ID: 2a89145698c440e.', en: 'Denial-of-service attacks (DoS/DDoS): how they overwhelm web applications and which infrastructure defenses mitigate them. Certificate ID: 2a89145698c440e.', it: 'Attacchi denial-of-service (DoS/DDoS): come sovraccaricano le applicazioni web e quali difese infrastrutturali li mitigano. Certificate ID: 2a89145698c440e.', fr: 'Attaques par déni de service (DoS/DDoS) : comment elles saturent les applications web et quelles défenses d\'infrastructure les atténuent. Certificate ID: 2a89145698c440e.' }, link: '' },

    { titulo: 'Vulnerability & Network Spying — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '26/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-network-spying.jpg',
      detalhes: { pt: 'Interceptação e análise de tráfego de rede: sniffing, ataques man-in-the-middle e a importância da criptografia em trânsito (HTTPS/TLS). Certificate ID: e127dbdb4d6b0e2.', en: 'Interception and analysis of network traffic: sniffing, man-in-the-middle attacks and the importance of encryption in transit (HTTPS/TLS). Certificate ID: e127dbdb4d6b0e2.', it: 'Intercettazione e analisi del traffico di rete: sniffing, attacchi man-in-the-middle e l\'importanza della crittografia in transito (HTTPS/TLS). Certificate ID: e127dbdb4d6b0e2.', fr: 'Interception et analyse du trafic réseau : sniffing, attaques de l\'homme du milieu (MITM) et l\'importance du chiffrement en transit (HTTPS/TLS). Certificate ID: e127dbdb4d6b0e2.' }, link: '' },

    { titulo: 'WiFi Hacking — WPA/WPA2 Cracking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '24/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-wifi-wpa.jpg',
      detalhes: { pt: 'Quebra de segurança em redes sem fio protegidas por WPA/WPA2: captura de handshake e ataques de dicionário, com foco em como proteger redes reais. Certificate ID: fb0fdd0b65f8075.', en: 'Breaking security on wireless networks protected by WPA/WPA2: handshake capture and dictionary attacks, focusing on how to protect real networks. Certificate ID: fb0fdd0b65f8075.', it: 'Violazione della sicurezza di reti wireless protette da WPA/WPA2: cattura dell\'handshake e attacchi a dizionario, con focus su come proteggere reti reali. Certificate ID: fb0fdd0b65f8075.', fr: 'Contournement de la sécurité des réseaux sans fil protégés par WPA/WPA2 : capture du handshake et attaques par dictionnaire, en mettant l\'accent sur la protection de vrais réseaux. Certificate ID: fb0fdd0b65f8075.' }, link: '' },

    { titulo: 'WiFi Hacking — WEP Cracking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '21/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-wifi-wep.jpg',
      detalhes: { pt: 'Exploração das fragilidades do protocolo WEP, demonstrando por que ele foi descontinuado — fundamento de segurança em redes sem fio. Certificate ID: 856cc6c0539db2f.', en: 'Exploiting the weaknesses of the WEP protocol, showing why it was deprecated — a foundation of wireless network security. Certificate ID: 856cc6c0539db2f.', it: 'Sfruttamento delle debolezze del protocollo WEP, dimostrando perché è stato dismesso — fondamento della sicurezza delle reti wireless. Certificate ID: 856cc6c0539db2f.', fr: 'Exploitation des faiblesses du protocole WEP, démontrant pourquoi il a été abandonné — un fondement de la sécurité des réseaux sans fil. Certificate ID: 856cc6c0539db2f.' }, link: '' },

    { titulo: 'Hacking Passwords — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-hacking-passwords.jpg',
      detalhes: { pt: 'Ataques a senhas — força bruta, dicionário e rainbow tables — e as defesas correspondentes: hashing com sal (BCrypt) e políticas de senha forte, ambas aplicadas nos meus projetos. Certificate ID: d15a11b24f50415.', en: 'Password attacks — brute force, dictionary and rainbow tables — and the matching defenses: salted hashing (BCrypt) and strong password policies, both applied in my projects. Certificate ID: d15a11b24f50415.', it: 'Attacchi alle password — forza bruta, dizionario e rainbow table — e le relative difese: hashing con sale (BCrypt) e criteri di password forti, entrambi applicati nei miei progetti. Certificate ID: d15a11b24f50415.', fr: 'Attaques sur les mots de passe — force brute, dictionnaire et rainbow tables — et les défenses correspondantes : hachage salé (BCrypt) et politiques de mots de passe forts, appliqués dans mes projets. Certificate ID: d15a11b24f50415.' }, link: '' },

    { titulo: 'Android Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-android-hacking.jpg',
      detalhes: { pt: 'Superfície de ataque de dispositivos e aplicativos Android: permissões, engenharia reversa de APKs e vetores de comprometimento em mobile. Certificate ID: 82613722ea291b0.', en: 'Attack surface of Android devices and apps: permissions, APK reverse engineering and mobile compromise vectors. Certificate ID: 82613722ea291b0.', it: 'Superficie di attacco di dispositivi e app Android: permessi, reverse engineering di APK e vettori di compromissione su mobile. Certificate ID: 82613722ea291b0.', fr: 'Surface d\'attaque des appareils et applications Android : permissions, rétro-ingénierie d\'APK et vecteurs de compromission sur mobile. Certificate ID: 82613722ea291b0.' }, link: '' },

    { titulo: 'Make Your Data Safe — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-make-data-safe.jpg',
      detalhes: { pt: 'Práticas de proteção de dados: criptografia em repouso, backups seguros e higiene de credenciais — princípios que aplico em produção (backups offsite no Cloudflare R2). Certificate ID: 201875356e842a9.', en: 'Data protection practices: encryption at rest, secure backups and credential hygiene — principles I apply in production (offsite backups on Cloudflare R2). Certificate ID: 201875356e842a9.', it: 'Pratiche di protezione dei dati: crittografia a riposo, backup sicuri e igiene delle credenziali — principi che applico in produzione (backup offsite su Cloudflare R2). Certificate ID: 201875356e842a9.', fr: 'Pratiques de protection des données : chiffrement au repos, sauvegardes sécurisées et hygiène des identifiants — des principes que j\'applique en production (sauvegardes hors site sur Cloudflare R2). Certificate ID: 201875356e842a9.' }, link: '' },

    { titulo: 'Keyboard Spying (Keyloggers) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '21/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-keyboard-spying.jpg',
      detalhes: { pt: 'Funcionamento de keyloggers de hardware e software, como detectá-los e medidas de proteção contra captura de teclado. Certificate ID: 7fe8f847124bf23.', en: 'How hardware and software keyloggers work, how to detect them and measures to protect against keystroke capture. Certificate ID: 7fe8f847124bf23.', it: 'Funzionamento dei keylogger hardware e software, come rilevarli e misure di protezione contro la cattura della tastiera. Certificate ID: 7fe8f847124bf23.', fr: 'Fonctionnement des keyloggers matériels et logiciels, comment les détecter et mesures de protection contre la capture de frappe. Certificate ID: 7fe8f847124bf23.' }, link: '' },

    { titulo: 'Credit and Debit Card Frauds — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '02/02/2026', carga: 'Módulo', img: 'img/certificados/hackerx-card-frauds.jpg',
      detalhes: { pt: 'Anatomia das fraudes com cartões — skimming, carding e clonagem — e os controles de segurança que as previnem em sistemas de pagamento. Certificate ID: 7baf1a95a72f239.', en: 'Anatomy of card fraud — skimming, carding and cloning — and the security controls that prevent it in payment systems. Certificate ID: 7baf1a95a72f239.', it: 'Anatomia delle frodi con carte — skimming, carding e clonazione — e i controlli di sicurezza che le prevengono nei sistemi di pagamento. Certificate ID: 7baf1a95a72f239.', fr: 'Anatomie de la fraude à la carte — skimming, carding et clonage — et les contrôles de sécurité qui la préviennent dans les systèmes de paiement. Certificate ID: 7baf1a95a72f239.' }, link: '' },

    { titulo: 'Social Media Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '29/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-social-media-hacking.jpg',
      detalhes: { pt: 'Vetores de comprometimento de contas em redes sociais: engenharia social, reutilização de senhas e a importância do 2FA. Certificate ID: b3a07952f5be1af.', en: 'Vectors for compromising social media accounts: social engineering, password reuse and the importance of 2FA. Certificate ID: b3a07952f5be1af.', it: 'Vettori di compromissione degli account sui social media: ingegneria sociale, riutilizzo delle password e l\'importanza della 2FA. Certificate ID: b3a07952f5be1af.', fr: 'Vecteurs de compromission des comptes de réseaux sociaux : ingénierie sociale, réutilisation des mots de passe et l\'importance de la 2FA. Certificate ID: b3a07952f5be1af.' }, link: '' },

    { titulo: 'Hiding Messages (Esteganografia) — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '28/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-hiding-messages.jpg',
      detalhes: { pt: 'Esteganografia: ocultação de informações dentro de imagens e arquivos, técnicas de detecção e aplicações em segurança ofensiva e defensiva. Certificate ID: 46e0f3b67b7648a.', en: 'Steganography: hiding information inside images and files, detection techniques and applications in offensive and defensive security. Certificate ID: 46e0f3b67b7648a.', it: 'Steganografia: occultamento di informazioni dentro immagini e file, tecniche di rilevamento e applicazioni nella sicurezza offensiva e difensiva. Certificate ID: 46e0f3b67b7648a.', fr: 'Stéganographie : dissimulation d\'informations dans des images et des fichiers, techniques de détection et applications en sécurité offensive et défensive. Certificate ID: 46e0f3b67b7648a.' }, link: '' },

    { titulo: 'Leveraging AI for Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-ai-hacking.jpg',
      detalhes: { pt: 'Uso de Inteligência Artificial aplicada à segurança ofensiva: automação de coleta e análise — a interseção entre minhas duas áreas de estudo, IA e cibersegurança. Certificate ID: 2a71d0029ebff00.', en: 'Using Artificial Intelligence for offensive security: automating collection and analysis — the intersection of my two fields of study, AI and cybersecurity. Certificate ID: 2a71d0029ebff00.', it: 'Uso dell\'Intelligenza Artificiale applicata alla sicurezza offensiva: automazione di raccolta e analisi — l\'intersezione tra le mie due aree di studio, IA e cybersecurity. Certificate ID: 2a71d0029ebff00.', fr: 'Utilisation de l\'Intelligence Artificielle appliquée à la sécurité offensive : automatisation de la collecte et de l\'analyse — l\'intersection de mes deux domaines d\'étude, l\'IA et la cybersécurité. Certificate ID: 2a71d0029ebff00.' }, link: '' },

    { titulo: 'Prompt Guide for Hacking — Ethical Hacking', emissor: 'HackerX', area: 'ciber', ano: '2026',
      data: '27/01/2026', carga: 'Módulo', img: 'img/certificados/hackerx-prompt-guide.jpg',
      detalhes: { pt: 'Engenharia de prompts aplicada a tarefas de segurança: como orientar modelos de IA para apoiar a análise de vulnerabilidades. Certificate ID: c2dbef3ae8559ec.', en: 'Prompt engineering applied to security tasks: how to guide AI models to support vulnerability analysis. Certificate ID: c2dbef3ae8559ec.', it: 'Prompt engineering applicato ad attività di sicurezza: come guidare i modelli di IA per supportare l\'analisi delle vulnerabilità. Certificate ID: c2dbef3ae8559ec.', fr: 'Ingénierie de prompts appliquée aux tâches de sécurité : comment guider les modèles d\'IA pour soutenir l\'analyse de vulnérabilités. Certificate ID: c2dbef3ae8559ec.' }, link: '' },

    { titulo: 'Segurança em Tecnologia da Informação', emissor: 'Fundação Bradesco — Escola Virtual', area: 'ciber', ano: '2024',
      data: '26/02 a 02/03/2024', carga: '12h', img: 'img/certificados/bradesco-seguranca-ti.jpg',
      detalhes: { pt: 'Fundamentos de segurança da informação: princípios de proteção de dados, ameaças digitais e boas práticas em ambientes corporativos. Curso da Escola Virtual da Fundação Bradesco, com código de autenticidade verificável no portal da EV.', en: 'Information security fundamentals: data protection principles, digital threats and best practices in corporate environments. A course from Fundação Bradesco\'s Escola Virtual, with an authenticity code verifiable on the EV portal.', it: 'Fondamenti di sicurezza dell\'informazione: principi di protezione dei dati, minacce digitali e buone pratiche in ambienti aziendali. Corso della Escola Virtual della Fundação Bradesco, con codice di autenticità verificabile sul portale EV.', fr: 'Fondamentaux de la sécurité de l\'information : principes de protection des données, menaces numériques et bonnes pratiques en entreprise. Cours de l\'Escola Virtual de la Fundação Bradesco, avec un code d\'authenticité vérifiable sur le portail EV.' }, link: '' },

    { titulo: 'Lei Geral de Proteção de Dados (LGPD)', emissor: 'Fundação Bradesco — Escola Virtual', area: 'ciber', ano: '2024',
      data: '02/03 a 04/03/2024', carga: '2h', img: 'img/certificados/bradesco-lgpd.jpg',
      detalhes: { pt: 'Panorama da LGPD: bases legais do tratamento de dados pessoais, direitos dos titulares e obrigações das organizações. Conhecimento aplicado diretamente nos projetos OmniRate e Hub Atlética (aceite de termos e conformidade).', en: 'Overview of the LGPD (Brazil\'s data protection law): legal bases for processing personal data, data-subject rights and organizations\' obligations. Knowledge applied directly in the OmniRate and Hub Atlética projects (terms acceptance and compliance).', it: 'Panoramica della LGPD (legge brasiliana sulla protezione dei dati): basi giuridiche del trattamento dei dati personali, diritti degli interessati e obblighi delle organizzazioni. Conoscenza applicata direttamente nei progetti OmniRate e Hub Atlética (accettazione dei termini e conformità).', fr: 'Panorama de la LGPD (loi brésilienne sur la protection des données) : bases légales du traitement des données personnelles, droits des personnes concernées et obligations des organisations. Connaissance appliquée directement dans les projets OmniRate et Hub Atlética (acceptation des conditions et conformité).' }, link: '' },

    { titulo: 'Introdução à Cybersegurança', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h15', img: 'img/certificados/estapar-intro-cyber.jpg',
      detalhes: { pt: 'Treinamento corporativo de conscientização em segurança digital: conceitos fundamentais de cibersegurança aplicados ao ambiente de trabalho. Emitido pela plataforma SmartLeader da Academia Estapar.', en: 'Corporate awareness training in digital security: fundamental cybersecurity concepts applied to the workplace. Issued through Academia Estapar\'s SmartLeader platform.', it: 'Formazione aziendale di sensibilizzazione alla sicurezza digitale: concetti fondamentali di cybersecurity applicati all\'ambiente di lavoro. Rilasciato dalla piattaforma SmartLeader di Academia Estapar.', fr: 'Formation de sensibilisation en entreprise à la sécurité numérique : concepts fondamentaux de cybersécurité appliqués au milieu de travail. Délivré via la plateforme SmartLeader d\'Academia Estapar.' }, link: '' },

    { titulo: 'Engenharia Social', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-engenharia-social.jpg',
      detalhes: { pt: 'Táticas de manipulação psicológica usadas por atacantes — pretexting, baiting e abordagens presenciais — e como reconhecê-las e reportá-las no ambiente corporativo.', en: 'Psychological manipulation tactics used by attackers — pretexting, baiting and in-person approaches — and how to recognize and report them in the workplace.', it: 'Tattiche di manipolazione psicologica usate dagli attaccanti — pretexting, baiting e approcci di persona — e come riconoscerle e segnalarle in ambito aziendale.', fr: 'Tactiques de manipulation psychologique utilisées par les attaquants — pretexting, baiting et approches en personne — et comment les reconnaître et les signaler en entreprise.' }, link: '' },

    { titulo: 'Phishing', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-phishing.jpg',
      detalhes: { pt: 'Identificação de e-mails, links e páginas fraudulentas: indicadores de phishing, spear phishing e boas práticas de verificação antes do clique.', en: 'Spotting fraudulent emails, links and pages: indicators of phishing and spear phishing, and good verification habits before clicking.', it: 'Identificazione di e-mail, link e pagine fraudolente: indicatori di phishing, spear phishing e buone pratiche di verifica prima del clic.', fr: 'Repérer les e-mails, liens et pages frauduleux : indicateurs de phishing, spear phishing et bonnes pratiques de vérification avant de cliquer.' }, link: '' },

    { titulo: 'Malware', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-malware.jpg',
      detalhes: { pt: 'Tipos de software malicioso — vírus, trojans, ransomware e spyware — vetores de infecção e medidas de prevenção e contenção.', en: 'Types of malicious software — viruses, trojans, ransomware and spyware — infection vectors and measures for prevention and containment.', it: 'Tipi di software malevolo — virus, trojan, ransomware e spyware — vettori di infezione e misure di prevenzione e contenimento.', fr: 'Types de logiciels malveillants — virus, chevaux de Troie, rançongiciels et logiciels espions — vecteurs d\'infection et mesures de prévention et de confinement.' }, link: '' },

    { titulo: 'Ameaças Internas', emissor: 'Academia Estapar', area: 'ciber', ano: '2026',
      data: '18/02/2026', carga: '1h', img: 'img/certificados/estapar-ameacas-internas.jpg',
      detalhes: { pt: 'Riscos originados dentro da organização: uso indevido de credenciais, vazamento de informações e sinais de alerta de ameaças internas, intencionais ou acidentais.', en: 'Risks originating inside the organization: credential misuse, information leaks and warning signs of insider threats, whether intentional or accidental.', it: 'Rischi originati all\'interno dell\'organizzazione: uso improprio delle credenziali, fuga di informazioni e segnali d\'allarme di minacce interne, intenzionali o accidentali.', fr: 'Risques venant de l\'intérieur de l\'organisation : usage abusif des identifiants, fuites d\'informations et signaux d\'alerte de menaces internes, intentionnelles ou accidentelles.' }, link: '' },

    /* ===== PYTHON & IA ===== */
    { titulo: 'Residência em TIC — IA, IoT, Python e Cloud', emissor: 'Serratec', area: 'python-ia', ano: '2025',
      data: '05 a 07/2025', carga: 'Residência', img: '',
      detalhes: { pt: 'Residência tecnológica do Serratec (Parque Tecnológico da Região Serrana): imersão em Inteligência Artificial, Internet das Coisas, Python e Computação em Nuvem, com discussões sobre os vetores de ataque e a segurança inerente a cada tecnologia.', en: 'Tech residency at Serratec (Serrana Region Technology Park): immersion in Artificial Intelligence, Internet of Things, Python and Cloud Computing, with discussions on attack vectors and the security inherent to each technology.', it: 'Residenza tecnologica presso Serratec (Parco Tecnologico della Regione Serrana): immersione in Intelligenza Artificiale, Internet of Things, Python e Cloud Computing, con discussioni sui vettori di attacco e sulla sicurezza propria di ogni tecnologia.', fr: 'Résidence technologique chez Serratec (Parc technologique de la région de Serrana) : immersion en Intelligence Artificielle, Internet des Objets, Python et Cloud Computing, avec des discussions sur les vecteurs d\'attaque et la sécurité propre à chaque technologie.' }, link: '' },

    { titulo: 'Imersão Agentes IA', emissor: 'Hashtag Treinamentos', area: 'python-ia', ano: '2026',
      data: '21/05/2026', carga: '8h', img: 'img/certificados/hashtag-agentes-ia.jpg',
      detalhes: { pt: 'Imersão prática em construção de agentes de Inteligência Artificial: automação de tarefas com LLMs e orquestração de fluxos inteligentes. Evento da Hashtag Treinamentos com 8 horas de duração.', en: 'Hands-on immersion in building Artificial Intelligence agents: task automation with LLMs and orchestration of intelligent workflows. An 8-hour event by Hashtag Treinamentos.', it: 'Immersione pratica nella costruzione di agenti di Intelligenza Artificiale: automazione di attività con LLM e orchestrazione di flussi intelligenti. Evento di Hashtag Treinamentos della durata di 8 ore.', fr: 'Immersion pratique dans la création d\'agents d\'Intelligence Artificielle : automatisation de tâches avec des LLM et orchestration de flux intelligents. Événement de 8 heures organisé par Hashtag Treinamentos.' }, link: '' },

    /* ===== FRONT-END ===== */
    { titulo: 'Formação Iniciante em Programação — G8 (9 cursos · 70h)', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/03/2025', carga: '70h', img: 'img/certificados/one-formacao-g8.jpg',
      detalhes: { pt: 'Certificado de conclusão da formação completa "Iniciante em Programação" da turma G8 do Oracle Next Education: 9 cursos somando 70 horas, cobrindo lógica de programação, JavaScript, HTML, CSS, Git e desenvolvimento pessoal.', en: 'Completion certificate for the full "Beginner in Programming" track of Oracle Next Education\'s G8 cohort: 9 courses totaling 70 hours, covering programming logic, JavaScript, HTML, CSS, Git and personal development.', it: 'Certificato di completamento del percorso completo "Principiante in Programmazione" della classe G8 di Oracle Next Education: 9 corsi per un totale di 70 ore, che coprono logica di programmazione, JavaScript, HTML, CSS, Git e sviluppo personale.', fr: 'Certificat de fin de la formation complète « Débutant en Programmation » de la promotion G8 d\'Oracle Next Education : 9 cours totalisant 70 heures, couvrant la logique de programmation, JavaScript, HTML, CSS, Git et le développement personnel.' }, link: '' },

    { titulo: 'Lógica de Programação: mergulhe em programação com JavaScript', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '20/01/2025', carga: '6h', img: 'img/certificados/alura-logica-js.jpg',
      detalhes: { pt: 'Primeiros fundamentos de lógica: variáveis, condicionais, laços e funções aplicados na construção do Jogo do Número Secreto — projeto publicado no GitHub (Everett-gi/ONE-jogoDoNumeroSecreto).', en: 'First logic fundamentals: variables, conditionals, loops and functions applied to building the Secret Number game — a project published on GitHub (Everett-gi/ONE-jogoDoNumeroSecreto).', it: 'Primi fondamenti di logica: variabili, condizionali, cicli e funzioni applicati alla costruzione del gioco del Numero Segreto — progetto pubblicato su GitHub (Everett-gi/ONE-jogoDoNumeroSecreto).', fr: 'Premiers fondamentaux de la logique : variables, conditions, boucles et fonctions appliqués à la création du jeu du Nombre Secret — projet publié sur GitHub (Everett-gi/ONE-jogoDoNumeroSecreto).' }, link: '' },

    { titulo: 'Praticando Lógica de Programação: Challenge Amigo Secreto', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/02/2025', carga: '8h', img: 'img/certificados/alura-amigo-secreto.jpg',
      detalhes: { pt: 'Challenge prático consolidando lógica de programação: manipulação de arrays, sorteio aleatório e interação com o DOM no projeto Amigo Secreto — publicado no GitHub (Everett-gi/ONE-challengeAmigoSecreto).', en: 'Hands-on challenge consolidating programming logic: array manipulation, random draw and DOM interaction in the Secret Friend project — published on GitHub (Everett-gi/ONE-challengeAmigoSecreto).', it: 'Challenge pratico che consolida la logica di programmazione: manipolazione di array, estrazione casuale e interazione con il DOM nel progetto Amico Segreto — pubblicato su GitHub (Everett-gi/ONE-challengeAmigoSecreto).', fr: 'Défi pratique consolidant la logique de programmation : manipulation de tableaux, tirage aléatoire et interaction avec le DOM dans le projet Ami Secret — publié sur GitHub (Everett-gi/ONE-challengeAmigoSecreto).' }, link: '' },

    { titulo: 'Lógica de Programação: explore funções e listas', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '01/2025', carga: '6h', img: 'img/certificados/alura-funcoes-listas.jpg',
      detalhes: { pt: 'Aprofundamento em funções e estruturas de lista em JavaScript: parâmetros, retorno, escopo e métodos de array aplicados em exercícios práticos.', en: 'Deeper dive into functions and list structures in JavaScript: parameters, return values, scope and array methods applied in hands-on exercises.', it: 'Approfondimento su funzioni e strutture di lista in JavaScript: parametri, valori di ritorno, scope e metodi degli array applicati in esercizi pratici.', fr: 'Approfondissement des fonctions et des structures de listes en JavaScript : paramètres, valeurs de retour, portée et méthodes de tableau appliqués dans des exercices pratiques.' }, link: '' },

    { titulo: 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '05/03/2025', carga: '8h', img: 'img/certificados/alura-htmlcss-ambientes.jpg',
      detalhes: { pt: 'Base do desenvolvimento web: configuração de ambiente, organização de arquivos, semântica de tags HTML e primeiros estilos com CSS.', en: 'Web development basics: environment setup, file organization, HTML tag semantics and first styles with CSS.', it: 'Basi dello sviluppo web: configurazione dell\'ambiente, organizzazione dei file, semantica dei tag HTML e primi stili con CSS.', fr: 'Bases du développement web : configuration de l\'environnement, organisation des fichiers, sémantique des balises HTML et premiers styles avec CSS.' }, link: '' },

    { titulo: 'HTML e CSS: classes, posicionamento e Flexbox', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '09/03/2025', carga: '8h', img: 'img/certificados/alura-htmlcss-flexbox.jpg',
      detalhes: { pt: 'Layouts com CSS: seletores de classe, modelos de posicionamento e construção de interfaces flexíveis com Flexbox.', en: 'Layouts with CSS: class selectors, positioning models and building flexible interfaces with Flexbox.', it: 'Layout con CSS: selettori di classe, modelli di posizionamento e costruzione di interfacce flessibili con Flexbox.', fr: 'Mises en page avec CSS : sélecteurs de classe, modèles de positionnement et création d\'interfaces flexibles avec Flexbox.' }, link: '' },

    { titulo: 'HTML e CSS: cabeçalho, footer e variáveis CSS', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '11/03/2025', carga: '6h', img: 'img/certificados/alura-htmlcss-cabecalho.jpg',
      detalhes: { pt: 'Componentes estruturais de páginas — cabeçalhos e rodapés — e uso de custom properties (variáveis CSS) para manutenção de temas.', en: 'Structural page components — headers and footers — and the use of custom properties (CSS variables) for maintaining themes.', it: 'Componenti strutturali delle pagine — intestazioni e piè di pagina — e uso delle custom properties (variabili CSS) per la manutenzione dei temi.', fr: 'Composants structurels des pages — en-têtes et pieds de page — et utilisation des custom properties (variables CSS) pour la maintenance des thèmes.' }, link: '' },

    { titulo: 'HTML e CSS: responsividade e publicação de projetos', emissor: 'Alura · Oracle Next Education', area: 'front', ano: '2025',
      data: '12/03/2025', carga: '6h', img: 'img/certificados/alura-htmlcss-responsividade.jpg',
      detalhes: { pt: 'Design responsivo com media queries e unidades flexíveis, além do fluxo de publicação de projetos web — do repositório ao ar.', en: 'Responsive design with media queries and flexible units, plus the workflow for publishing web projects — from repository to live.', it: 'Design responsive con media query e unità flessibili, oltre al flusso di pubblicazione di progetti web — dal repository alla messa online.', fr: 'Design responsive avec media queries et unités flexibles, ainsi que le flux de publication de projets web — du dépôt à la mise en ligne.' }, link: '' },

    /* ===== CLOUD & DEVOPS ===== */
    { titulo: 'Git e GitHub: compartilhando e colaborando em projetos', emissor: 'Alura · Oracle Next Education', area: 'cloud', ano: '2025',
      data: '02/2025', carga: '8h', img: 'img/certificados/alura-git-github.jpg',
      detalhes: { pt: 'Controle de versão na prática: commits, branches, merges e colaboração via GitHub — fluxo hoje aplicado no dia a dia dos projetos Hub Atlética Dragões e OmniRate, incluindo deploy via git pull.', en: 'Version control in practice: commits, branches, merges and collaboration via GitHub — a workflow I apply daily in the Hub Atlética Dragões and OmniRate projects, including deployment via git pull.', it: 'Controllo di versione in pratica: commit, branch, merge e collaborazione tramite GitHub — flusso oggi applicato quotidianamente nei progetti Hub Atlética Dragões e OmniRate, incluso il deploy via git pull.', fr: 'Gestion de versions en pratique : commits, branches, merges et collaboration via GitHub — un flux que j\'applique au quotidien dans les projets Hub Atlética Dragões et OmniRate, y compris le déploiement via git pull.' }, link: '' },

    /* ===== GESTÃO & SOFT SKILLS ===== */
    { titulo: 'Introdução à Administração', emissor: 'Fundação Bradesco — Escola Virtual', area: 'gestao', ano: '2024',
      data: '02/03 a 16/03/2024', carga: '12h', img: 'img/certificados/bradesco-intro-administracao.jpg',
      detalhes: { pt: 'Fundamentos de administração: planejamento, organização, direção e controle — base teórica que complementa a experiência prática de liderança em operação de alto volume.', en: 'Management fundamentals: planning, organizing, directing and controlling — theoretical grounding that complements my hands-on leadership experience in high-volume operations.', it: 'Fondamenti di gestione: pianificazione, organizzazione, direzione e controllo — base teorica che completa l\'esperienza pratica di leadership in operazioni ad alto volume.', fr: 'Fondamentaux du management : planification, organisation, direction et contrôle — une base théorique qui complète mon expérience pratique de management d\'opérations à fort volume.' }, link: '' },

    { titulo: 'Coletivo Online — Preparação para o Mercado de Trabalho', emissor: 'Instituto Coca-Cola Brasil', area: 'gestao', ano: '2025',
      data: '01/2025', carga: '11h', img: 'img/certificados/cocacola-coletivo-online.jpg',
      detalhes: { pt: 'Programa do Instituto Coca-Cola Brasil: plano de vida e definição de objetivos, educação financeira, comunicação oral e escrita, orientações para entrevistas, elaboração de currículo, direitos humanos e equidade racial.', en: 'Program by Instituto Coca-Cola Brasil: life planning and goal setting, financial education, oral and written communication, interview guidance, résumé writing, human rights and racial equity.', it: 'Programma dell\'Instituto Coca-Cola Brasil: progetto di vita e definizione degli obiettivi, educazione finanziaria, comunicazione orale e scritta, preparazione ai colloqui, stesura del curriculum, diritti umani ed equità razziale.', fr: 'Programme de l\'Instituto Coca-Cola Brasil : projet de vie et définition d\'objectifs, éducation financière, communication orale et écrite, préparation aux entretiens, rédaction de CV, droits humains et équité raciale.' }, link: '' },

    { titulo: 'Aprender a Aprender: técnicas para seu autodesenvolvimento', emissor: 'Alura · Oracle Next Education', area: 'gestao', ano: '2025',
      data: '16/03/2025', carga: '8h', img: 'img/certificados/alura-aprender-a-aprender.jpg',
      detalhes: { pt: 'Metacognição e técnicas de estudo: gestão de tempo, retenção ativa e construção de rotina de aprendizado contínuo — o motor por trás deste arquivo de credenciais.', en: 'Metacognition and study techniques: time management, active retention and building a continuous learning routine — the engine behind this certificate archive.', it: 'Metacognizione e tecniche di studio: gestione del tempo, ritenzione attiva e costruzione di una routine di apprendimento continuo — il motore dietro questo archivio di certificati.', fr: 'Métacognition et techniques d\'étude : gestion du temps, rétention active et construction d\'une routine d\'apprentissage continu — le moteur derrière ces archives de certificats.' }, link: '' },

    { titulo: 'LinkedIn: como fazer o seu perfil trabalhar para você', emissor: 'Alura · Oracle Next Education', area: 'gestao', ano: '2025',
      data: '17/03/2025', carga: '4h', img: 'img/certificados/alura-linkedin.jpg',
      detalhes: { pt: 'Posicionamento profissional na maior rede corporativa: construção de perfil estratégico, palavras-chave para recrutadores e networking ativo.', en: 'Professional positioning on the largest corporate network: building a strategic profile, keywords for recruiters and active networking.', it: 'Posizionamento professionale sulla più grande rete aziendale: costruzione di un profilo strategico, parole chiave per i recruiter e networking attivo.', fr: 'Positionnement professionnel sur le plus grand réseau professionnel : construction d\'un profil stratégique, mots-clés pour les recruteurs et réseautage actif.' }, link: '' },

    /* ===== IDIOMAS ===== */
    { titulo: 'EF SET English Certificate — 82/100 (C2 Proficient)', emissor: 'EF SET', area: 'idiomas', ano: '2024',
      data: '03/04/2024', carga: 'Leitura e audição', img: 'img/certificados/efset-ingles.jpg',
      detalhes: { pt: 'Proficiência em inglês certificada pelo EF Standard English Test com nota 82/100 — nível C2 Proficient, o mais alto do Quadro Europeu Comum de Referência (CEFR). Avaliação de leitura e compreensão auditiva.', en: 'English proficiency certified by the EF Standard English Test with a score of 82/100 — level C2 Proficient, the highest of the Common European Framework of Reference (CEFR). Reading and listening comprehension assessed.', it: 'Competenza in inglese certificata dall\'EF Standard English Test con punteggio 82/100 — livello C2 Proficient, il più alto del Quadro Comune Europeo di Riferimento (QCER). Valutazione di lettura e comprensione orale.', fr: 'Maîtrise de l\'anglais certifiée par l\'EF Standard English Test avec un score de 82/100 — niveau C2 Proficient, le plus élevé du Cadre Européen Commun de Référence (CECR). Évaluation de la compréhension écrite et orale.' }, link: '' }

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
    mArea.textContent = rotuloArea(cred.area);
    mTitulo.textContent = cred.titulo;

    var meta = [cred.emissor];
    if (cred.data) meta.push(cred.data);
    if (cred.carga) meta.push(cred.carga);
    mMeta.textContent = meta.join('  ·  ');

    mDetalhes.textContent = textoDetalhe(cred) || i18nT('modal.noDetails', 'Detalhes ainda não catalogados para esta credencial.');

    if (cred.img) {
      mImg.src = cred.img;
      mImg.alt = cred.titulo;
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
    card.setAttribute('aria-label', cred.titulo);
    if (!semAnimacao) card.style.animationDelay = Math.min(ordem * 35, 400) + 'ms';

    var thumb = document.createElement('figure');
    thumb.className = 'acred-thumb';
    if (cred.img) {
      var im = document.createElement('img');
      im.src = cred.img;
      im.alt = cred.titulo;
      im.loading = 'lazy';
      thumb.appendChild(im);
    } else {
      thumb.classList.add('sem-img');
      thumb.textContent = i18nT('card.noImg', '// imagem não anexada');
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
    area.textContent = rotuloArea(cred.area);

    topo.appendChild(num);
    topo.appendChild(area);

    var titulo = document.createElement('h3');
    titulo.textContent = cred.titulo;

    var emissor = document.createElement('p');
    emissor.className = 'acred-emissor';
    emissor.textContent = cred.emissor + (cred.ano ? ' · ' + cred.ano : '');

    var ver = document.createElement('span');
    ver.className = 'acred-ver';
    ver.textContent = i18nT('card.inspect', '↗ inspecionar');

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
    var tpl = i18nT('arch.count', 'exibindo {n} de {total} registros');
    contagem.textContent = tpl.replace('{n}', visiveis).replace('{total}', CREDENCIAIS.length);
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

  /* redesenha os cards quando o idioma muda (rótulos de área, textos, contagem) */
  document.addEventListener('i18n:changed', function () { aplicar(); });

  aplicar();
})();
