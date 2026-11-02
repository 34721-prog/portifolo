/**
 * ============================================================================
 * PORTFÓLIO PROFISSIONAL — YTALO LIMA
 * JavaScript Puro (ES6+) · Sem Frameworks · Acessível e Modular · UI/UX v2
 * ============================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   01. CONFIGURAÇÃO EDITÁVEL DO DESENVOLVEDOR
   Revisar/atualizar caso o e-mail ou LinkedIn mudem antes da entrega final.
   -------------------------------------------------------------------------- */
const DEVELOPER_CONFIG = {
  fullName: 'Ytalo Gabriel de Lima Silva',
  displayName: 'Ytalo Lima',
  email: 'ytalo6411@gmail.com',
  githubUrl: 'https://github.com/ytalo6411-art',
  // Quando confirmado, informe a URL completa (ex.: 'https://www.linkedin.com/in/seu-perfil'):
  linkedinUrl: null,
};

/* --------------------------------------------------------------------------
   02. GALERIA DOCUMENTADA DE CAPTURAS REAIS DO ATHLETIX
   -------------------------------------------------------------------------- */
const ATHLETIX_SCREENS = [
  {
    src: 'assets/projects/athletix-login-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app/login — Acesso & 4 Idiomas',
    shortBadge: '/app/login · Desktop',
    captionHtml:
      '<strong>Mockup Desktop · /app/login:</strong> tela pública oficial publicada na Vercel com troca ao vivo entre pt-BR, en, es e fr e verificação preventiva de Google OAuth.',
    title: 'Autenticação e Seletor em 4 Idiomas (/app/login)',
    desc: 'Tela pública oficial do ATHLETIX com suporte a português (pt-BR), inglês, espanhol e francês, login por e-mail/senha e verificação preventiva do provedor Google OAuth.',
    alt: 'Tela real de login do ATHLETIX com seletor de idiomas PT, EN, ES e FR, botão Entrar com Google e campos de e-mail e senha',
  },
  {
    src: 'assets/projects/athletix-dashboard-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app — Painel do Atleta',
    shortBadge: '/app · Desktop',
    captionHtml:
      '<strong>Mockup Desktop · /app:</strong> painel inicial do ATHLETIX com objetivo ativo, sequência semanal, indicação transparente de plano gerado por regras e atalho direto de sessão.',
    title: 'Painel do Atleta e Plano da Semana (/app)',
    desc: 'Visão inicial consolidada com objetivo ativo, frequência semanal, indicação transparente de plano gerado por regras e atalho direto para iniciar o próximo treino.',
    alt: 'Painel principal do ATHLETIX com saudação, objetivo atual, faixa semanal e próximo treino recomendado',
  },
  {
    src: 'assets/projects/athletix-exercises-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app/exercises — 317 Exercícios',
    shortBadge: '/app/exercises · Catálogo',
    captionHtml:
      '<strong>Mockup Desktop · /app/exercises:</strong> catálogo com 317 exercícios semeados, busca com debounce de 350ms, filtros combinados e vídeo carregado sob demanda.',
    title: 'Biblioteca de 317 Exercícios Catalogados (/app/exercises)',
    desc: 'Busca com debounce de 350ms, filtros combinados por grupo muscular, equipamento e nível de dificuldade, nomes revisados em pt-BR e vídeo carregado sob demanda.',
    alt: 'Biblioteca de exercícios do ATHLETIX exibindo filtros de músculo, equipamento e dificuldade e cards de exercícios em português',
  },
  {
    src: 'assets/projects/athletix-workouts-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app/workouts — Divisão Semanal',
    shortBadge: '/app/workouts · Planos',
    captionHtml:
      '<strong>Mockup Desktop · /app/workouts:</strong> programa semanal agrupado por program_id com séries, repetições, justificativa biomecânica e histórico editável.',
    title: 'Gerador de Planos e Divisão Semanal ABC (/app/workouts)',
    desc: 'Programa semanal agrupado por program_id exibindo exercícios reais, séries, repetições, justificativa técnica do dia e abas para Modelos e Histórico editável.',
    alt: 'Tela de treinos do ATHLETIX com divisão semanal ABC e exercícios listados com séries e repetições',
  },
  {
    src: 'assets/projects/athletix-nutrition-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app/nutrition — Nutrição & Água',
    shortBadge: '/app/nutrition · Nutrição',
    captionHtml:
      '<strong>Mockup Desktop · /app/nutrition:</strong> sugestões visuais de refeições, separação rigorosa entre sugestão e consumo real, pesquisa de alimentos e meta hídrica.',
    title: 'Nutrição Visual, Diário e Hidratação (/app/nutrition)',
    desc: 'Montagem visual de refeições com porções claras, separação estrita entre sugestão e consumo registrado, pesquisa de alimentos em múltiplas fontes e hidratação.',
    alt: 'Módulo de nutrição do ATHLETIX mostrando receitas ilustradas com porções e abas de diário alimentar e preferências',
  },
  {
    src: 'assets/projects/athletix-progress-desktop.jpg',
    route: 'athletix-lilac.vercel.app/app/progress — Evolução SVG',
    shortBadge: '/app/progress · Gráficos SVG',
    captionHtml:
      '<strong>Mockup Desktop · /app/progress:</strong> gráfico vetorial de volume construído em SVG puro, consistência semanal, medidas e recordes pessoais.',
    title: 'Evolução do Atleta e Gráficos SVG (/app/progress)',
    desc: 'Gráfico vetorial de volume por sessão construído em SVG puro (sem bibliotecas externas), frequência semanal e comparativo de períodos de 30 dias.',
    alt: 'Tela de evolução do ATHLETIX com gráfico SVG de volume por sessão e barras de sessões por semana',
  },
  {
    src: 'assets/projects/athletix-session-mobile.jpg',
    route: 'Mobile 390px · /app/session',
    shortBadge: '/app/session · Mobile 390px',
    captionHtml:
      '<strong>Mobile 390px · Sessão:</strong> execução de treino com cronômetro de descanso pausável e alvos de toque ≥ 44px.',
    title: 'Execução de Sessão Mobile com Cronômetro (390px)',
    desc: 'Modo de execução em tela móvel com instruções do exercício, cronômetro de descanso pausável, persistência de séries no banco e encerramento transacional.',
    alt: 'Tela mobile de execução de treino do ATHLETIX em 390px com instruções, cronômetro de descanso e navegação inferior',
  },
  {
    src: 'assets/projects/athletix-dashboard-mobile.jpg',
    route: 'Mobile 390px · /app',
    shortBadge: '/app · Mobile 390px',
    captionHtml:
      '<strong>Mobile 390px · Painel:</strong> navegação inferior de 5 destinos, leitura limpa e zero overflow horizontal desde 320px.',
    title: 'Shell Mobile Responsivo sem Overflow (390px)',
    desc: 'Adaptação móvel com barra de navegação inferior de 5 destinos, alvos de toque mínimos de 44px e ausência de rolagem horizontal verificada desde 320px.',
    alt: 'Tela mobile do painel inicial do ATHLETIX em 390px com barra de navegação inferior',
  },
];

/* --------------------------------------------------------------------------
   03. DADOS DOS DIAGRAMAS INTERATIVOS (HERO & ARQUITETURA)
   -------------------------------------------------------------------------- */
const HERO_LAYERS_INFO = [
  {
    label: 'CAMADA 01 · INTERFACE & ACESSIBILIDADE',
    text: 'Semântica HTML5, responsividade testada de 320px a 1920px, temas escuro/claro e navegação acessível por teclado neste portfólio e no ATHLETIX.',
  },
  {
    label: 'CAMADA 02 · LÓGICA, REGRAS & CONTRATOS',
    text: 'TypeScript em modo estrito, motor determinístico de planos biomecânicos, validação Zod nas fronteiras e suíte automatizada com Vitest e Playwright.',
  },
  {
    label: 'CAMADA 03 · DADOS RELACIONAIS & SEGURANÇA RLS',
    text: 'PostgreSQL 17 gerenciado no Supabase com políticas Row Level Security por usuário (auth.uid()) e encerramento de sessão via RPC transacional.',
  },
];

const ARCH_LAYERS_INFO = {
  client: {
    label: 'INSPEÇÃO · CAMADA 01 (CLIENTE & SHELL PWA)',
    text: 'Entrega instalável com manifesto web, precache otimizado de ativos estáticos, página offline dedicada e layout fluido sem overflow horizontal desde 320px.',
  },
  frontend: {
    label: 'INSPEÇÃO · CAMADA 02 (INTERFACE REATIVA)',
    text: 'Rotas divididas com React.lazy e Suspense, estado enxuto em Zustand, gráficos em SVG nativo e troca instantânea entre pt-BR, en, es e fr.',
  },
  domain: {
    label: 'INSPEÇÃO · CAMADA 03 (DOMÍNIO & CONTRATOS ZOD)',
    text: 'Questionário de 7 etapas e planos semanais validados com Zod sobre UUIDs reais do catálogo de 317 exercícios, funcionando sem depender de IA externa.',
  },
  backend: {
    label: 'INSPEÇÃO · CAMADA 04 (SUPABASE AUTH & ROTAS SERVERLESS)',
    text: 'Sessão JWT real com PKCE, guardas de rota e Vercel Functions opcionais (/api/ai/*) que validam token e cota no servidor sem expor segredos no navegador.',
  },
  database: {
    label: 'INSPEÇÃO · CAMADA 05 (POSTGRESQL 17 + RLS + RPCS)',
    text: 'Mais de 23 tabelas protegidas por Row Level Security (own-only), RPC idempotente complete_workout_session e testes de isolamento em PGlite.',
  },
};

/* --------------------------------------------------------------------------
   04. ESTRUTURA DE DADOS EXTENSÍVEL PARA PROJETOS (SEÇÃO ACERVO)
   -------------------------------------------------------------------------- */
const PROJECTS_DATA = [
  {
    id: 'athletix',
    featured: true,
    image: 'assets/projects/athletix-workouts-desktop.jpg',
    imageAlt: 'Tela do programa semanal de treinos do ATHLETIX',
    name: 'ATHLETIX',
    description:
      'Plataforma esportiva completa que reúne planejamento de treinamento, biblioteca de 317 exercícios com vídeo, acompanhamento nutricional e evolução do atleta em um único ambiente digital.',
    technologies: ['React 18', 'TypeScript', 'Vite 6', 'Supabase', 'PostgreSQL + RLS', 'PWA'],
    liveUrl: 'https://athletix-lilac.vercel.app',
    githubUrl: 'https://github.com/ytalo6411-art/marabras',
    status: 'Publicado · Em evolução contínua',
  },
  {
    id: 'portfolio-ytalo',
    featured: false,
    image: 'assets/images/og-image.png',
    imageAlt: 'Cartão visual de apresentação do Portfólio Autoral Ytalo Lima',
    name: 'Portfólio Autoral — Ytalo Lima',
    description:
      'Aplicação web estática e editorial desenvolvida do zero sem frameworks, com fontes variáveis locais, diagramas interativos em SVG, estudo de caso completo, Lightbox acessível e dossiê A4.',
    technologies: ['HTML5 Semântico', 'CSS3 Custom Properties', 'JavaScript ES6+', 'SVG Interativo', 'Acessibilidade'],
    liveUrl: '#inicio',
    githubUrl: 'https://github.com/ytalo6411-art',
    status: 'Publicado · Arquitetura Nativa',
  },
];

/* --------------------------------------------------------------------------
   05. UTILITÁRIOS DE MOVIMENTO, ÁREA DE TRANSFERÊNCIA E TOAST
   -------------------------------------------------------------------------- */
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

function prefersReducedMotion() {
  return reducedMotionQuery.matches;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
  return ok;
}

let toastTimer = null;
function showToast(message) {
  const toastEl = document.getElementById('ui-toast');
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add('is-visible');
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastEl.classList.remove('is-visible');
  }, 3400);
}

/* --------------------------------------------------------------------------
   06. GERENCIAMENTO DE TEMA (MODO ESCURO & MODO CLARO COM PERSISTÊNCIA)
   -------------------------------------------------------------------------- */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const labelEl = document.getElementById('theme-toggle-label');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const metaTheme = document.getElementById('meta-theme-color');

  function applyTheme(theme) {
    const resolved = theme === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', resolved);

    if (metaTheme) {
      metaTheme.setAttribute('content', resolved === 'light' ? '#F4F3EC' : '#0B0D0C');
    }

    if (toggleBtn && labelEl && sunIcon && moonIcon) {
      if (resolved === 'dark') {
        labelEl.textContent = 'Modo claro';
        toggleBtn.setAttribute('aria-label', 'Alternar para modo claro');
        sunIcon.removeAttribute('hidden');
        moonIcon.setAttribute('hidden', '');
      } else {
        labelEl.textContent = 'Modo escuro';
        toggleBtn.setAttribute('aria-label', 'Alternar para modo escuro');
        sunIcon.setAttribute('hidden', '');
        moonIcon.removeAttribute('hidden');
      }
    }
  }

  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem('ytalo-portfolio-theme', next);
      } catch {
        // Ignora bloqueios de armazenamento privado do navegador.
      }
      showToast(next === 'light' ? 'Tema claro ativado' : 'Tema escuro ativado');
    });
  }
}

/* --------------------------------------------------------------------------
   07. MENU MOBILE ADAPTÁVEL & SCROLL SUAVE ACESSÍVEL
   -------------------------------------------------------------------------- */
function initNavigation() {
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  function setMobileMenuState(open) {
    if (!menuBtn || !mobileNav) return;
    mobileNav.classList.toggle('is-open', open);
    mobileNav.setAttribute('aria-hidden', String(!open));
    if (backdrop) {
      backdrop.classList.toggle('is-open', open);
    }
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    if (iconOpen && iconClose) {
      iconOpen.toggleAttribute('hidden', open);
      iconClose.toggleAttribute('hidden', !open);
    }
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      setMobileMenuState(!isOpen);
    });

    if (backdrop) {
      backdrop.addEventListener('click', () => setMobileMenuState(false));
    }

    mobileNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuState(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMobileMenuState(false);
        menuBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 940 && menuBtn.getAttribute('aria-expanded') === 'true') {
        setMobileMenuState(false);
      }
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const targetEl = document.querySelector(href);
    if (!targetEl) return;

    event.preventDefault();
    const headerOffset = 82;
    const top = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });

    if (href === '#conteudo-principal') {
      targetEl.setAttribute('tabindex', '-1');
      targetEl.focus({ preventScroll: true });
    }
  });
}

/* --------------------------------------------------------------------------
   08. TELEMETRIA DE SCROLL, HEADER ELEVADO & ANEL VOLTAR AO TOPO
   -------------------------------------------------------------------------- */
function initScrollTelemetry() {
  const headerEl = document.getElementById('topo');
  const progressBar = document.getElementById('scroll-progress-bar');
  const telemetryText = document.getElementById('reading-telemetry-text');
  const backToTopBtn = document.getElementById('back-to-top');
  const ringCircle = document.getElementById('back-to-top-progress');
  const sections = Array.from(document.querySelectorAll('main section[data-section-group]'));
  const navLinks = Array.from(document.querySelectorAll('[data-nav-target]'));
  const circumference = 138;

  let ticking = false;

  function updateOnScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

    if (headerEl) {
      headerEl.classList.toggle('is-scrolled', scrollTop > 24);
    }

    if (progressBar) {
      progressBar.style.width = `${progress.toFixed(2)}%`;
    }

    if (ringCircle) {
      const offset = circumference - (progress / 100) * circumference;
      ringCircle.style.strokeDashoffset = offset.toFixed(2);
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle('is-visible', scrollTop > 420);
    }

    const probeY = scrollTop + window.innerHeight * 0.34;
    let activeGroup = 'inicio';
    let activeLabel = 'INÍCIO';

    for (const sec of sections) {
      if (sec.offsetTop <= probeY) {
        activeGroup = sec.getAttribute('data-section-group') || activeGroup;
        activeLabel = sec.getAttribute('data-section-label') || activeLabel;
      }
    }

    if (telemetryText) {
      telemetryText.textContent = `${activeLabel} · ${Math.round(progress)}%`;
    }

    navLinks.forEach((link) => {
      const matches = link.getAttribute('data-nav-target') === activeGroup;
      if (matches) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true },
  );

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    });
  }

  updateOnScroll();
}

/* --------------------------------------------------------------------------
   09. BLUEPRINT INTERATIVO DO HERO (3 CAMADAS)
   -------------------------------------------------------------------------- */
function initHeroBlueprint() {
  const tabs = Array.from(document.querySelectorAll('[data-blueprint-tab]'));
  const svgLayers = Array.from(document.querySelectorAll('[data-blueprint-layer]'));
  const labelEl = document.getElementById('hero-readout-label');
  const textEl = document.getElementById('hero-readout-text');

  if (tabs.length === 0 || !labelEl || !textEl) return;

  function selectLayer(index) {
    const info = HERO_LAYERS_INFO[index];
    if (!info) return;

    tabs.forEach((tab, idx) => {
      tab.setAttribute('aria-selected', String(idx === index));
    });

    svgLayers.forEach((layer, idx) => {
      layer.classList.toggle('is-active', idx === index);
    });

    labelEl.textContent = info.label;
    textEl.textContent = info.text;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = Number.parseInt(tab.getAttribute('data-blueprint-tab') || '0', 10);
      selectLayer(idx);
    });
  });

  svgLayers.forEach((layer) => {
    layer.addEventListener('click', () => {
      const idx = Number.parseInt(layer.getAttribute('data-blueprint-layer') || '0', 10);
      selectLayer(idx);
    });
  });
}

/* --------------------------------------------------------------------------
   10. PALCO INTERATIVO DE MOCKUPS DO ATHLETIX (DESKTOP & MOBILE)
   -------------------------------------------------------------------------- */
function initStageSwitcher() {
  const desktopTabs = Array.from(document.querySelectorAll('[data-stage-desktop]'));
  const desktopImg = document.getElementById('stage-desktop-img');
  const desktopUrl = document.getElementById('stage-desktop-url');
  const desktopCaption = document.getElementById('stage-desktop-caption');
  const desktopTrigger = document.getElementById('stage-desktop-trigger');

  desktopTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = Number.parseInt(tab.getAttribute('data-stage-desktop') || '1', 10);
      const item = ATHLETIX_SCREENS[idx];
      if (!item || !desktopImg) return;

      desktopTabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));

      if (!prefersReducedMotion()) {
        desktopImg.classList.add('is-swapping');
      }
      window.setTimeout(
        () => {
          desktopImg.src = item.src;
          desktopImg.alt = item.alt;
          if (desktopUrl) desktopUrl.textContent = item.route;
          if (desktopCaption) desktopCaption.innerHTML = item.captionHtml;
          if (desktopTrigger) desktopTrigger.setAttribute('data-lightbox-index', String(idx));
          desktopImg.classList.remove('is-swapping');
        },
        prefersReducedMotion() ? 0 : 90,
      );
    });
  });

  const mobileTabs = Array.from(document.querySelectorAll('[data-stage-mobile]'));
  const mobileImg = document.getElementById('stage-mobile-img');
  const mobileCaption = document.getElementById('stage-mobile-caption');
  const mobileTrigger = document.getElementById('stage-mobile-trigger');

  mobileTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const idx = Number.parseInt(tab.getAttribute('data-stage-mobile') || '6', 10);
      const item = ATHLETIX_SCREENS[idx];
      if (!item || !mobileImg) return;

      mobileTabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
      mobileImg.src = item.src;
      mobileImg.alt = item.alt;
      if (mobileCaption) mobileCaption.innerHTML = item.captionHtml;
      if (mobileTrigger) mobileTrigger.setAttribute('data-lightbox-index', String(idx));
    });
  });
}

/* --------------------------------------------------------------------------
   11. EXPLORADOR INTERATIVO DA ARQUITETURA DO ATHLETIX
   -------------------------------------------------------------------------- */
function initArchitectureExplorer() {
  const nodes = Array.from(document.querySelectorAll('[data-arch-layer]'));
  const stackBoxes = Array.from(document.querySelectorAll('[data-arch-box]'));
  const labelEl = document.getElementById('arch-inspector-label');
  const textEl = document.getElementById('arch-inspector-text');

  if (nodes.length === 0 || !labelEl || !textEl) return;

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      const layer = node.getAttribute('data-arch-layer') || 'client';
      const info = ARCH_LAYERS_INFO[layer];
      if (!info) return;

      nodes.forEach((n) => n.setAttribute('aria-selected', String(n === node)));
      labelEl.textContent = info.label;
      textEl.textContent = info.text;

      stackBoxes.forEach((box) => {
        const layers = (box.getAttribute('data-arch-box') || '').split(/\s+/);
        box.classList.toggle('is-highlighted', layers.includes(layer));
      });
    });
  });
}

/* --------------------------------------------------------------------------
   12. ANIMAÇÕES DE ENTRADA COM RESPEITO A REDUÇÃO DE MOVIMENTO
   -------------------------------------------------------------------------- */
function initRevealAnimations() {
  const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));
  if (revealNodes.length === 0) return;

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    revealNodes.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
  );

  revealNodes.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   13. FILTROS INTERATIVOS COM CONTADORES EM TEMPO REAL
   -------------------------------------------------------------------------- */
function setupFilterGroup(buttonSelector, buttonAttr, itemSelector, itemAttr, countId, noun, afterFilter) {
  const buttons = Array.from(document.querySelectorAll(buttonSelector));
  const items = Array.from(document.querySelectorAll(itemSelector));
  const countEl = countId ? document.getElementById(countId) : null;
  if (buttons.length === 0 || items.length === 0) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute(buttonAttr) || 'all';
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));

      let visibleCount = 0;
      items.forEach((item) => {
        const value = item.getAttribute(itemAttr);
        const visible = selected === 'all' || value === selected;
        item.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (countEl) {
        countEl.textContent = `Exibindo ${visibleCount} de ${items.length} ${noun}`;
      }

      if (typeof afterFilter === 'function') {
        afterFilter(selected);
      }
    });
  });
}

function initInteractiveFilters() {
  setupFilterGroup(
    '[data-screen-filter]',
    'data-screen-filter',
    '[data-screen-category]',
    'data-screen-category',
    'screen-filter-count',
    'capturas',
  );

  setupFilterGroup(
    '[data-feature-filter]',
    'data-feature-filter',
    '[data-feature-domain]',
    'data-feature-domain',
    'feature-filter-count',
    'funcionalidades',
  );

  setupFilterGroup(
    '[data-tech-filter]',
    'data-tech-filter',
    '[data-tech-kind]',
    'data-tech-kind',
    'tech-filter-count',
    'tecnologias',
    () => {
      document.querySelectorAll('.tech-group').forEach((group) => {
        const anyVisible = Array.from(group.querySelectorAll('[data-tech-kind]')).some(
          (card) => !card.hidden,
        );
        group.hidden = !anyVisible;
      });
    },
  );
}

/* --------------------------------------------------------------------------
   14. LIGHTBOX COM MINIATURAS CLICÁVEIS & GESTO SWIPE MOBILE
   -------------------------------------------------------------------------- */
function initLightbox() {
  const dialog = document.getElementById('image-lightbox');
  const viewportEl = document.getElementById('lightbox-viewport');
  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const counterEl = document.getElementById('lightbox-counter');
  const routeEl = document.getElementById('lightbox-route');
  const thumbsEl = document.getElementById('lightbox-thumbs');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!dialog || !imgEl || !titleEl || !descEl || !counterEl) return;

  let currentIndex = 0;
  let lastTrigger = null;
  const thumbButtons = [];

  if (thumbsEl) {
    ATHLETIX_SCREENS.forEach((screen, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lightbox__thumb';
      btn.setAttribute('aria-label', `Ver captura ${idx + 1}: ${screen.title}`);
      const thumbImg = document.createElement('img');
      thumbImg.src = screen.src;
      thumbImg.alt = '';
      thumbImg.loading = 'lazy';
      btn.appendChild(thumbImg);
      btn.addEventListener('click', () => renderSlide(idx));
      thumbsEl.appendChild(btn);
      thumbButtons.push(btn);
    });
  }

  function renderSlide(index) {
    const total = ATHLETIX_SCREENS.length;
    currentIndex = (index + total) % total;
    const item = ATHLETIX_SCREENS[currentIndex];
    if (!item) return;

    imgEl.src = item.src;
    imgEl.alt = item.alt;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
    counterEl.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    if (routeEl) {
      routeEl.textContent = item.shortBadge || '';
    }

    thumbButtons.forEach((btn, idx) => {
      if (idx === currentIndex) {
        btn.setAttribute('aria-current', 'true');
        btn.scrollIntoView({ behavior: 'auto', block: 'nearest', inline: 'nearest' });
      } else {
        btn.removeAttribute('aria-current');
      }
    });
  }

  function openLightbox(index, triggerEl) {
    lastTrigger = triggerEl || document.activeElement;
    renderSlide(index);
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (typeof dialog.close === 'function' && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.querySelectorAll('[data-lightbox-index]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number.parseInt(btn.getAttribute('data-lightbox-index') || '0', 10);
      openLightbox(Number.isNaN(idx) ? 0 : idx, btn);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => renderSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => renderSlide(currentIndex + 1));

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      closeLightbox();
    }
  });

  dialog.addEventListener('close', () => {
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      renderSlide(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      renderSlide(currentIndex + 1);
    }
  });

  // Suporte a swipe horizontal em dispositivos móveis
  if (viewportEl) {
    let touchStartX = 0;
    viewportEl.addEventListener(
      'touchstart',
      (e) => {
        if (e.changedTouches[0]) touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );
    viewportEl.addEventListener(
      'touchend',
      (e) => {
        if (!e.changedTouches[0]) return;
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(deltaX) > 48) {
          renderSlide(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
        }
      },
      { passive: true },
    );
  }
}

/* --------------------------------------------------------------------------
   15. ACERVO EXTENSÍVEL DE PROJETOS (SEÇÃO OUTROS PROJETOS)
   -------------------------------------------------------------------------- */
function initProjectsArchive() {
  const archiveEl = document.getElementById('projects-archive');
  const toggleSchemaBtn = document.getElementById('toggle-schema-btn');
  const schemaBox = document.getElementById('projects-schema-box');

  if (toggleSchemaBtn && schemaBox) {
    toggleSchemaBtn.addEventListener('click', () => {
      const expanded = toggleSchemaBtn.getAttribute('aria-expanded') === 'true';
      toggleSchemaBtn.setAttribute('aria-expanded', String(!expanded));
      schemaBox.hidden = expanded;
      toggleSchemaBtn.textContent = expanded
        ? 'Ver modelo de dados JS'
        : 'Ocultar modelo de dados JS';
    });
  }

  if (!archiveEl || PROJECTS_DATA.length <= 1) return;

  const futureSlot = archiveEl.querySelector('.future-slot');
  PROJECTS_DATA.slice(1).forEach((proj, idx) => {
    const article = document.createElement('article');
    article.className = 'project-featured';

    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'project-featured__media';
    const img = document.createElement('img');
    img.src = proj.image;
    img.alt = proj.imageAlt || `Captura do projeto ${proj.name}`;
    img.loading = 'lazy';
    mediaDiv.appendChild(img);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'project-featured__content';

    const statusSpan = document.createElement('span');
    statusSpan.className = 'project-featured__status';
    statusSpan.textContent = `${String(idx + 2).padStart(2, '0')} · ${proj.status.toUpperCase()}`;

    const h3 = document.createElement('h3');
    h3.className = 'project-featured__title';
    h3.textContent = proj.name;

    const p = document.createElement('p');
    p.className = 'project-featured__desc';
    p.textContent = proj.description;

    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'project-featured__tags';
    (proj.technologies || []).forEach((tech) => {
      const tag = document.createElement('span');
      tag.className = 'mono-tag';
      tag.textContent = tech;
      tagsDiv.appendChild(tag);
    });

    const linksDiv = document.createElement('div');
    linksDiv.className = 'project-featured__links';
    if (proj.liveUrl) {
      const liveLink = document.createElement('a');
      liveLink.className = 'btn btn--primary btn--sm';
      liveLink.href = proj.liveUrl;
      if (!proj.liveUrl.startsWith('#')) {
        liveLink.target = '_blank';
        liveLink.rel = 'noopener noreferrer';
        liveLink.textContent = 'Projeto publicado ↗';
      } else {
        liveLink.textContent = 'Você está neste projeto ↑';
      }
      linksDiv.appendChild(liveLink);
    }
    if (proj.githubUrl) {
      const ghLink = document.createElement('a');
      ghLink.className = 'btn btn--secondary btn--sm';
      ghLink.href = proj.githubUrl;
      ghLink.target = '_blank';
      ghLink.rel = 'noopener noreferrer';
      ghLink.textContent = 'Perfil GitHub ↗';
      linksDiv.appendChild(ghLink);
    }

    contentDiv.append(statusSpan, h3, p, tagsDiv, linksDiv);
    article.append(mediaDiv, contentDiv);

    if (futureSlot) {
      archiveEl.insertBefore(article, futureSlot);
    } else {
      archiveEl.appendChild(article);
    }
  });
}

/* --------------------------------------------------------------------------
   16. CANAIS DE CONTATO, PRESETS DE ASSUNTO E FORMULÁRIO VALIDADO
   -------------------------------------------------------------------------- */
function initContactSection() {
  const emailDisplay = document.getElementById('developer-email-display');
  const mailtoDirect = document.getElementById('mailto-direct-link');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyFeedback = document.getElementById('copy-email-feedback');
  const linkedinStatus = document.getElementById('linkedin-status-text');

  if (emailDisplay) emailDisplay.textContent = DEVELOPER_CONFIG.email;
  if (mailtoDirect) mailtoDirect.href = `mailto:${DEVELOPER_CONFIG.email}`;

  if (linkedinStatus && DEVELOPER_CONFIG.linkedinUrl) {
    linkedinStatus.innerHTML = '';
    const link = document.createElement('a');
    link.href = DEVELOPER_CONFIG.linkedinUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = DEVELOPER_CONFIG.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '');
    linkedinStatus.appendChild(link);
  }

  if (copyEmailBtn && copyFeedback) {
    let feedbackTimer = null;
    copyEmailBtn.addEventListener('click', async () => {
      try {
        const ok = await copyTextToClipboard(DEVELOPER_CONFIG.email);
        const msg = ok
          ? 'E-mail copiado para a área de transferência.'
          : 'Selecione e copie o endereço manualmente.';
        copyFeedback.textContent = msg;
        if (ok) showToast(`Copiado: ${DEVELOPER_CONFIG.email}`);
      } catch {
        copyFeedback.textContent = 'Não foi possível copiar automaticamente.';
      }
      if (feedbackTimer) window.clearTimeout(feedbackTimer);
      feedbackTimer = window.setTimeout(() => {
        copyFeedback.textContent = '';
      }, 4000);
    });
  }

  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const counterEl = document.getElementById('message-counter');
  const statusBox = document.getElementById('form-status');
  const statusTitle = document.getElementById('form-status-title');
  const statusText = document.getElementById('form-status-text');
  const statusActions = document.getElementById('form-status-actions');
  const copyMsgBtn = document.getElementById('copy-formatted-msg-btn');
  const openMailtoPrepared = document.getElementById('open-mailto-prepared');

  if (!form || !nameInput || !emailInput || !subjectInput || !messageInput) return;

  let lastFormattedMessage = '';

  const validators = {
    'contact-name': (val) => {
      const trimmed = val.trim();
      if (!trimmed) return 'Informe seu nome.';
      if (trimmed.length < 2) return 'O nome precisa ter pelo menos 2 caracteres.';
      return '';
    },
    'contact-email': (val) => {
      const trimmed = val.trim();
      if (!trimmed) return 'Informe seu endereço de e-mail.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(trimmed)) return 'Digite um endereço de e-mail válido (ex.: nome@dominio.com).';
      return '';
    },
    'contact-subject': (val) => {
      const trimmed = val.trim();
      if (!trimmed) return 'Informe o assunto da mensagem.';
      if (trimmed.length < 3) return 'O assunto precisa ter pelo menos 3 caracteres.';
      return '';
    },
    'contact-message': (val) => {
      const trimmed = val.trim();
      if (!trimmed) return 'Escreva o conteúdo da mensagem.';
      if (trimmed.length < 15) return 'A mensagem precisa ter pelo menos 15 caracteres para contextualizar o contato.';
      return '';
    },
  };

  function validateField(inputEl) {
    const rule = validators[inputEl.id];
    if (!rule) return true;
    const errorMsg = rule(inputEl.value);
    const errorEl = document.getElementById(`error-${inputEl.id}`);
    if (errorMsg) {
      inputEl.setAttribute('aria-invalid', 'true');
      inputEl.removeAttribute('data-valid');
      if (errorEl) errorEl.textContent = errorMsg;
      return false;
    }
    inputEl.setAttribute('aria-invalid', 'false');
    inputEl.setAttribute('data-valid', 'true');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  // Atalhos rápidos de assunto
  document.querySelectorAll('[data-subject-preset]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const preset = chip.getAttribute('data-subject-preset') || '';
      subjectInput.value = preset;
      validateField(subjectInput);
      messageInput.focus();
    });
  });

  [nameInput, emailInput, subjectInput, messageInput].forEach((field) => {
    field.addEventListener('blur', () => {
      if (field.value.trim().length > 0 || field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
    });
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') {
        validateField(field);
      }
      if (field === messageInput && counterEl) {
        counterEl.textContent = `${messageInput.value.length} / 1000`;
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = [nameInput, emailInput, subjectInput, messageInput];
    let firstInvalid = null;

    fields.forEach((field) => {
      const ok = validateField(field);
      if (!ok && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (!statusBox || !statusTitle || !statusText || !statusActions) return;

    if (firstInvalid) {
      statusBox.hidden = false;
      statusBox.className = 'form-status form-status--error';
      statusTitle.textContent = 'Revise os campos destacados antes de prosseguir.';
      statusText.textContent = 'Todos os campos obrigatórios precisam estar preenchidos corretamente.';
      statusActions.hidden = true;
      firstInvalid.focus();
      return;
    }

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const subjectVal = subjectInput.value.trim();
    const msgVal = messageInput.value.trim();

    lastFormattedMessage = [
      `Nome: ${nameVal}`,
      `E-mail de retorno: ${emailVal}`,
      `Assunto: ${subjectVal}`,
      '',
      msgVal,
    ].join('\n');

    if (openMailtoPrepared) {
      const encodedSub = encodeURIComponent(`[Portfólio Ytalo Lima] ${subjectVal}`);
      const encodedBody = encodeURIComponent(lastFormattedMessage);
      openMailtoPrepared.href = `mailto:${DEVELOPER_CONFIG.email}?subject=${encodedSub}&body=${encodedBody}`;
    }

    statusBox.hidden = false;
    statusBox.className = 'form-status form-status--valid';
    statusTitle.textContent = 'Validação concluída — envio automático ainda não configurado.';
    statusText.textContent =
      'Seus dados foram validados localmente com sucesso. Como este portfólio opera em arquitetura estática pura (sem backend ou serviço SMTP acoplado), nenhuma mensagem foi transmitida silenciosamente. Você pode copiar o texto formatado abaixo ou abri-lo diretamente no seu cliente de e-mail.';
    statusActions.hidden = false;
    showToast('Mensagem validada e pronta para cópia ou envio');
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      [nameInput, emailInput, subjectInput, messageInput].forEach((field) => {
        field.removeAttribute('aria-invalid');
        field.removeAttribute('data-valid');
        const err = document.getElementById(`error-${field.id}`);
        if (err) err.textContent = '';
      });
      if (counterEl) counterEl.textContent = '0 / 1000';
      if (statusBox) statusBox.hidden = true;
    }, 0);
  });

  if (copyMsgBtn) {
    copyMsgBtn.addEventListener('click', async () => {
      if (!lastFormattedMessage) return;
      const ok = await copyTextToClipboard(lastFormattedMessage);
      copyMsgBtn.textContent = ok ? 'Mensagem copiada!' : 'Erro ao copiar';
      if (ok) showToast('Mensagem formatada copiada!');
      window.setTimeout(() => {
        copyMsgBtn.textContent = 'Copiar mensagem pronta';
      }, 3000);
    });
  }
}

/* --------------------------------------------------------------------------
   17. INICIALIZAÇÃO SEGURA
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initScrollTelemetry();
  initHeroBlueprint();
  initStageSwitcher();
  initArchitectureExplorer();
  initRevealAnimations();
  initInteractiveFilters();
  initLightbox();
  initProjectsArchive();
  initContactSection();
});
