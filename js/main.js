/* ============================================================
   Portfólio · interações
   - revela as seções ao rolar e anima os números
   - destaca na navegação a seção visível
   - duplica a faixa de tecnologias para o loop contínuo
   - mostra a foto (img/perfil.jpg) se ela existir
   - formulário de contato: monta a mensagem e abre o WhatsApp
   ============================================================ */
(function () {
  'use strict';

  var raiz = document.documentElement;
  raiz.classList.add('js');
  var semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WHATSAPP = '5511982953630';

  function idioma() { return (window.i18n && window.i18n.lang) || 'pt'; }
  function texto(chave, alt) {
    var v = window.i18n && window.i18n.t(chave);
    return v || alt;
  }
  function formatar(n) { return n.toLocaleString(idioma() === 'en' ? 'en-US' : 'pt-BR'); }

  /* ---------- números (contadores) ---------- */
  var contadores = Array.prototype.slice.call(document.querySelectorAll('[data-contar]'));
  contadores.forEach(function (el) { el.textContent = formatar(+el.dataset.contar); });

  function animarNumero(el) {
    if (el.dataset.animado) return;
    el.dataset.animado = '1';
    var alvo = +el.dataset.contar;
    if (semAnimacao || alvo < 3) { el.textContent = formatar(alvo); return; }
    var inicio = null, duracao = 1400;
    function passo(ts) {
      if (!inicio) inicio = ts;
      var p = Math.min((ts - inicio) / duracao, 1);
      var suave = 1 - Math.pow(1 - p, 3);
      el.textContent = formatar(Math.round(alvo * suave));
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  /* ---------- revelar ao rolar ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !semAnimacao) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('visivel');
        e.target.querySelectorAll('[data-contar]').forEach(animarNumero);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { obs.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visivel'); });
  }

  /* reformatar números ao trocar de idioma (1.275 ↔ 1,275) */
  document.addEventListener('i18n:changed', function () {
    contadores.forEach(function (el) { el.textContent = formatar(+el.dataset.contar); });
  });

  /* ---------- navegação: seção ativa ---------- */
  var linksNav = document.querySelectorAll('.nav-link');
  var mapa = {};
  linksNav.forEach(function (a) { mapa[a.getAttribute('href').slice(1)] = a; });
  var secoes = Object.keys(mapa).map(function (id) { return document.getElementById(id); }).filter(Boolean);

  function marcar(id) {
    linksNav.forEach(function (a) { a.classList.toggle('ativo', a === mapa[id]); });
  }
  if ('IntersectionObserver' in window && secoes.length) {
    var obsNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { if (e.isIntersecting) marcar(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secoes.forEach(function (s) { obsNav.observe(s); });
  }

  /* ---------- faixa de tecnologias: duplica para o loop ---------- */
  var trilho = document.getElementById('marquee');
  if (trilho) {
    Array.prototype.slice.call(trilho.children).forEach(function (item) {
      var copia = item.cloneNode(true);
      copia.setAttribute('aria-hidden', 'true');
      trilho.appendChild(copia);
    });
  }

  /* ---------- foto opcional (data-foto no .retrato) ---------- */
  var retrato = document.querySelector('.retrato[data-foto]');
  if (retrato && retrato.dataset.foto) {
    var foto = new Image();
    foto.className = 'retrato-foto';
    foto.width = 400; foto.height = 533;
    foto.alt = texto('hero.fotoAlt', 'Foto de Gildean Monteiro');
    foto.addEventListener('load', function () {
      retrato.insertBefore(foto, retrato.firstChild);
      retrato.classList.add('com-foto');
    });
    foto.src = retrato.dataset.foto;
  }

  /* ---------- FAQ: uma resposta aberta por vez ---------- */
  var perguntas = document.querySelectorAll('.faq details');
  perguntas.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      perguntas.forEach(function (outro) { if (outro !== d) outro.open = false; });
    });
  });

  /* ---------- formulário → WhatsApp ---------- */
  var form = document.getElementById('formContato');
  if (form) {
    var erro = document.getElementById('formErro');
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var nome = form.nome.value.trim();
      var empresa = form.empresa.value.trim();
      var msg = form.mensagem.value.trim();
      if (!nome || !msg) {
        erro.hidden = false;
        (nome ? form.mensagem : form.nome).focus();
        return;
      }
      erro.hidden = true;
      var linhas = [
        texto('f.whatsIntro', 'Olá, Gildean! Vi seu portfólio e gostaria de conversar.'),
        '',
        texto('f.whatsNome', 'Nome') + ': ' + nome
      ];
      if (empresa) linhas.push(texto('f.whatsEmpresa', 'Empresa') + ': ' + empresa);
      linhas.push(texto('f.whatsMsg', 'Mensagem') + ': ' + msg);
      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n'));
      window.open(url, '_blank', 'noopener');
    });
  }
})();
