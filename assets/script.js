/* =========================================================
   LEYEN Lofts — shared interactions
   ========================================================= */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
      });
      links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { links.classList.remove('open'); });
      });
    }

    /* Mark active link based on current page */
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
      if (a.getAttribute('data-page') === path) a.classList.add('active');
    });
  }

  /* ---- FAQ accordion ---- */
  function initFaq() {
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        q.parentElement.classList.toggle('open');
      });
    });
  }

  /* ---- Demo form handler (no backend) ---- */
  function initForms() {
    document.querySelectorAll('form[data-demo]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = form.querySelector('.form-msg');
        if (msg) {
          msg.classList.add('show');
          msg.textContent = form.getAttribute('data-success') ||
            'Bedankt — je staat op de lijst. We nemen contact op bij de eerstvolgende drop.';
        }
        form.querySelectorAll('input, textarea').forEach(function (el) {
          if (el.type !== 'checkbox') el.value = '';
        });
      });
    });
  }

  /* ---- Woningzoeker filter ---- */
  function initFinder() {
    var grid = document.querySelector('[data-finder-grid]');
    if (!grid) return;

    var cards = Array.prototype.slice.call(grid.querySelectorAll('[data-unit]'));
    var state = { type: 'all', beds: 'all', status: 'all', maxPrice: 600 };

    var priceRange = document.querySelector('[data-filter="maxPrice"]');
    var priceOut = document.querySelector('[data-price-out]');
    var countEl = document.querySelector('[data-finder-count]');

    function fmt(n) { return '€ ' + n + 'K'; }

    function apply() {
      var visible = 0;
      cards.forEach(function (card) {
        var t = card.getAttribute('data-type');
        var b = card.getAttribute('data-beds');
        var s = card.getAttribute('data-status');
        var p = parseInt(card.getAttribute('data-price'), 10);
        var ok = (state.type === 'all' || state.type === t) &&
                 (state.beds === 'all' || state.beds === b) &&
                 (state.status === 'all' || state.status === s) &&
                 (p <= state.maxPrice);
        card.style.display = ok ? '' : 'none';
        if (ok) visible++;
      });
      if (countEl) countEl.innerHTML = '<strong>' + visible + '</strong> ' +
        (visible === 1 ? 'woning' : 'woningen') + ' gevonden';
    }

    document.querySelectorAll('.chip[data-group]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var group = chip.getAttribute('data-group');
        document.querySelectorAll('.chip[data-group="' + group + '"]').forEach(function (c) {
          c.classList.remove('active');
        });
        chip.classList.add('active');
        state[group] = chip.getAttribute('data-value');
        apply();
      });
    });

    if (priceRange) {
      priceRange.addEventListener('input', function () {
        state.maxPrice = parseInt(priceRange.value, 10);
        if (priceOut) priceOut.textContent = fmt(state.maxPrice);
        apply();
      });
      state.maxPrice = parseInt(priceRange.value, 10);
      if (priceOut) priceOut.textContent = fmt(state.maxPrice);
    }

    var reset = document.querySelector('[data-finder-reset]');
    if (reset) {
      reset.addEventListener('click', function () {
        state = { type: 'all', beds: 'all', status: 'all', maxPrice: 600 };
        document.querySelectorAll('.chip[data-group]').forEach(function (c) {
          c.classList.toggle('active', c.getAttribute('data-value') === 'all');
        });
        if (priceRange) { priceRange.value = 600; if (priceOut) priceOut.textContent = fmt(600); }
        apply();
      });
    }

    apply();
  }

  /* ---- Login demo ---- */
  function initLogin() {
    var form = document.querySelector('form[data-login]');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.classList.add('show');
        msg.style.background = 'var(--ink)';
        msg.textContent = 'Het bewonersportaal is binnenkort beschikbaar. Sta je op de lijst, dan ontvang je je inloggegevens per e-mail.';
      }
    });
  }

  /* ---- Omgeving slider ---- */
  function initOmgSlider() {
    var slider = document.querySelector('[data-omg-slider]');
    if (!slider) return;

    var slides = Array.prototype.slice.call(slider.querySelectorAll('.omg-slide'));
    var dots = Array.prototype.slice.call(slider.querySelectorAll('.omg-dot'));
    var prev = slider.querySelector('[data-omg-prev]');
    var next = slider.querySelector('[data-omg-next]');
    var count = slider.querySelector('[data-omg-count]');
    if (slides.length < 2) return;

    var current = 0;
    var timer = null;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function show(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
      if (count) count.textContent = pad(current + 1) + ' / ' + pad(slides.length);
    }

    function restart() {
      if (reduce) return;
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 5500);
    }

    function go(n) { show(n); restart(); }

    if (prev) prev.addEventListener('click', function () { go(current - 1); });
    if (next) next.addEventListener('click', function () { go(current + 1); });
    dots.forEach(function (d, idx) { d.addEventListener('click', function () { go(idx); }); });

    slider.addEventListener('mouseenter', function () { clearInterval(timer); });
    slider.addEventListener('mouseleave', restart);

    show(0);
    restart();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initFaq();
    initForms();
    initFinder();
    initLogin();
    initOmgSlider();
  });
})();
