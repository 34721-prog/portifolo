/**
 * ============================================================================
 * PORTFÓLIO — YTALO LIMA
 * Camada de movimento e microinterações (ES6+, sem dependências)
 *
 * Responsabilidades:
 *  1. Escalonamento das grades reveladas por scroll.
 *  2. Parallax discreto no painel técnico do Hero.
 *  3. Luz de cursor (spotlight) restrita ao Hero.
 *  4. Atração magnética sutil nos botões primários.
 *  5. Estado ativo do trilho lateral de leitura.
 *
 * Tudo é executado apenas com transform/opacity e é desligado quando
 * o usuário pede redução de movimento ou usa ponteiro grosseiro.
 * ============================================================================
 */
'use strict';

(function () {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  const wideViewportQuery = window.matchMedia('(min-width: 1080px)');

  const prefersReducedMotion = () => reduceMotionQuery.matches;
  const hasFinePointer = () => finePointerQuery.matches;

  /* ------------------------------------------------------------------------
     01. Escalonamento de grades reveladas
     ------------------------------------------------------------------------ */
  const STAGGER_CONTAINERS = [
    '.hero-construct__specs',
    '.facts-strip',
    '.screens-grid',
    '.features-matrix',
    '.process-grid',
    '.pillars-grid',
    '.tech-cards',
    '.limits-grid',
    '.arch-external__grid',
    '.contact-channels',
    '.timeline',
    '.project-featured__tags',
  ];

  function initStaggeredGrids() {
    STAGGER_CONTAINERS.forEach((selector) => {
      document.querySelectorAll(selector).forEach((container) => {
        Array.from(container.children).forEach((child, index) => {
          if (!(child instanceof HTMLElement)) return;
          child.classList.add('stagger-item');
          child.style.setProperty('--i', String(index % 6));
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     02. Parallax + trilho lateral (um único listener de scroll)
     ------------------------------------------------------------------------ */
  function initScrollLayer() {
    const parallaxNodes = Array.from(document.querySelectorAll('[data-parallax]'));
    const railLinks = Array.from(document.querySelectorAll('[data-rail-target]'));
    const sections = Array.from(document.querySelectorAll('main section[data-section-group]'));
    const canParallax = !prefersReducedMotion() && hasFinePointer() && wideViewportQuery.matches;

    if (parallaxNodes.length === 0 && railLinks.length === 0) return;

    let ticking = false;

    function updateRail() {
      if (railLinks.length === 0 || sections.length === 0) return;
      const probe = window.scrollY + window.innerHeight * 0.35;
      let currentId = sections[0].id;

      sections.forEach((section) => {
        if (section.offsetTop <= probe) currentId = section.id;
      });

      railLinks.forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (href === '#' + currentId) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    function updateParallax() {
      if (!canParallax) return;
      const viewportHeight = window.innerHeight;

      parallaxNodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) return;
        const distance = rect.top + rect.height / 2 - viewportHeight / 2;
        const strength = Number.parseFloat(node.getAttribute('data-parallax') || '0.4');
        const offset = Math.max(-22, Math.min(22, distance * -0.045 * strength));
        node.style.setProperty('--parallax-y', offset.toFixed(2) + 'px');
      });
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateRail();
        updateParallax();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------------
     03. Luz de cursor no Hero
     ------------------------------------------------------------------------ */
  function initHeroSpotlight() {
    const hero = document.querySelector('.hero');
    if (!hero || !hasFinePointer() || prefersReducedMotion()) return;

    let frame = null;
    let pointerX = 0;
    let pointerY = 0;

    hero.addEventListener('pointerenter', () => {
      hero.classList.add('is-pointer-active');
    });

    hero.addEventListener('pointerleave', () => {
      hero.classList.remove('is-pointer-active');
    });

    hero.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((pointerX - rect.left) / rect.width) * 100;
        const y = ((pointerY - rect.top) / rect.height) * 100;
        hero.style.setProperty('--mx', x.toFixed(1) + '%');
        hero.style.setProperty('--my', y.toFixed(1) + '%');
        frame = null;
      });
    });
  }

  /* ------------------------------------------------------------------------
     04. Atração magnética discreta nos botões primários
     ------------------------------------------------------------------------ */
  function initMagneticButtons() {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const buttons = Array.from(document.querySelectorAll('.btn--primary'));
    buttons.forEach((button) => {
      let frame = null;
      let localX = 0;
      let localY = 0;

      button.addEventListener('pointermove', (event) => {
        if (!wideViewportQuery.matches) return;
        const rect = button.getBoundingClientRect();
        localX = event.clientX - (rect.left + rect.width / 2);
        localY = event.clientY - (rect.top + rect.height / 2);
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          const max = 3;
          const x = Math.max(-max, Math.min(max, localX * 0.12));
          const y = Math.max(-max, Math.min(max, localY * 0.18));
          button.style.transform = 'translate(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px)';
          frame = null;
        });
      });

      button.addEventListener('pointerleave', () => {
        button.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     05. Inicialização
     ------------------------------------------------------------------------ */
  function init() {
    initStaggeredGrids();
    initScrollLayer();
    initHeroSpotlight();
    initMagneticButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
