/* ============================================================
   DOSSIÊ GM-2026 — interações (v2)
   ============================================================ */
(function () {
  'use strict';

  var semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var GLIFOS = '!<>-_\\/[]{}=+*^?#01';

  /* ---------- menu mobile ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    var aberto = navLinks.classList.toggle('aberto');
    hamburger.classList.toggle('aberto', aberto);
    hamburger.setAttribute('aria-expanded', String(aberto));
  });

  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('aberto');
      hamburger.classList.remove('aberto');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- efeito "descriptografar" no nome (carga) ---------- */
  function descriptografar(el, atraso) {
    var alvo = el.dataset.texto;
    if (semAnimacao) { el.textContent = alvo; return; }

    setTimeout(function () {
      var tick = 0;
      var intervalo = setInterval(function () {
        tick++;
        var revelados = Math.floor(tick / 3);
        var saida = '';
        for (var i = 0; i < alvo.length; i++) {
          saida += i < revelados
            ? alvo[i]
            : GLIFOS[Math.floor(Math.random() * GLIFOS.length)];
        }
        el.textContent = saida;
        if (revelados >= alvo.length) {
          clearInterval(intervalo);
          el.textContent = alvo;
        }
      }, 38);
    }, atraso);
  }

  document.querySelectorAll('.scramble').forEach(function (el, i) {
    descriptografar(el, 300 + i * 420);
  });

  /* ---------- "descriptografar" no hover (títulos, logo) ---------- */
  document.querySelectorAll('.scramble-hover').forEach(function (el) {
    var original = el.innerHTML;          // preserva spans internos (ex.: logo)
    var texto = el.textContent;

    function rodar() {
      if (semAnimacao || el.dataset.rodando) return;
      el.dataset.rodando = '1';
      var tick = 0;
      var intervalo = setInterval(function () {
        tick++;
        var revelados = Math.floor(tick / 2);
        var saida = '';
        for (var i = 0; i < texto.length; i++) {
          saida += i < revelados
            ? texto[i]
            : GLIFOS[Math.floor(Math.random() * GLIFOS.length)];
        }
        el.textContent = saida;
        if (revelados >= texto.length) {
          clearInterval(intervalo);
          el.innerHTML = original;        // restaura HTML original intacto
          delete el.dataset.rodando;
        }
      }, 26);
    }

    el.addEventListener('mouseenter', rodar);
  });

  /* ---------- máquina de escrever no cargo (reage ao idioma) ---------- */
  var frasesFallback = [
    'Desenvolvedor Full Stack Jr',
    'Em busca de estágio em TI',
    'Java · Spring Boot · PostgreSQL',
    'Front-end · React · JavaScript',
    'Cloud · Docker · deploy próprio',
    'Cibersegurança como diferencial'
  ];
  function obterFrases() {
    return (window.i18n && typeof window.i18n.frases === 'function') ? window.i18n.frases() : frasesFallback;
  }
  var maquina = document.getElementById('maquina');
  var timerMaquina = null;
  var geracao = 0;   // invalida loops antigos ao reiniciar

  function iniciarMaquina(primeiraVez) {
    if (!maquina) return;
    var frases = obterFrases();

    if (semAnimacao) {
      maquina.textContent = frases[0];
      return;
    }

    if (timerMaquina) { clearTimeout(timerMaquina); timerMaquina = null; }
    var minhaGeracao = ++geracao;

    var f = 0;
    var pos = 0;
    var apagando = false;
    maquina.textContent = '';

    var digitar = function () {
      if (minhaGeracao !== geracao) return;   // um novo idioma assumiu: encerra
      var atual = frases[f % frases.length];
      pos += apagando ? -1 : 1;
      maquina.textContent = atual.slice(0, pos);

      var espera = apagando ? 32 : 58;
      if (!apagando && pos === atual.length) {
        apagando = true;
        espera = 2100;                       // pausa com a frase completa
      } else if (apagando && pos === 0) {
        apagando = false;
        f = (f + 1) % frases.length;         // próxima frase, em loop
        espera = 380;
      }
      timerMaquina = setTimeout(digitar, espera);
    };

    timerMaquina = setTimeout(digitar, primeiraVez ? 2400 : 200);
  }

  iniciarMaquina(true);
  /* ao trocar de idioma, reinicia com as novas frases */
  document.addEventListener('i18n:changed', function () { iniciarMaquina(false); });

  /* ---------- tarjas de redação (revelar ao toque) ---------- */
  document.querySelectorAll('.redacao').forEach(function (tarja) {
    tarja.addEventListener('click', function () {
      var revelada = tarja.classList.toggle('revelada');
      tarja.textContent = revelada
        ? tarja.dataset.segredo
        : '██████████████';
    });
  });

  /* ---------- contadores animados dos indicadores ---------- */
  function animarContador(b) {
    var alvo = parseInt(b.dataset.contar, 10);
    var pad = parseInt(b.dataset.pad || '0', 10);
    var sufixo = b.dataset.sufixo || '';

    function formatar(n) {
      var s = String(n);
      while (s.length < pad) s = '0' + s;
      return s + sufixo;
    }

    var inicio = null;
    var duracao = 950;

    function passo(t) {
      if (!inicio) inicio = t;
      var p = Math.min((t - inicio) / duracao, 1);
      var suave = 1 - Math.pow(1 - p, 3);       // easeOutCubic
      b.textContent = formatar(Math.round(alvo * suave));
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }

  var contadores = document.querySelectorAll('[data-contar]');
  if (contadores.length && 'IntersectionObserver' in window && !semAnimacao) {
    var obsContador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          animarContador(e.target);
          obsContador.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    contadores.forEach(function (b) { obsContador.observe(b); });
  }
  /* sem suporte ou com reduced-motion: o HTML já traz os valores finais */

  /* ---------- filtros do registro de atividade ---------- */
  document.querySelectorAll('.filtro').forEach(function (filtro) {
    filtro.addEventListener('click', function () {
      document.querySelectorAll('.filtro').forEach(function (f) { f.classList.remove('ativa'); });
      document.querySelectorAll('.log').forEach(function (l) { l.classList.remove('ativa'); });
      filtro.classList.add('ativa');
      var alvo = document.getElementById(filtro.dataset.alvo);
      alvo.classList.add('ativa');
      alvo.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visivel'); });
    });
  });

  /* ---------- reveal on scroll ---------- */
  if ('IntersectionObserver' in window && !semAnimacao) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          observador.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(function (el) { observador.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visivel'); });
  }
})();
