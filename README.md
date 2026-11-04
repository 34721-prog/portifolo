# Portfólio Autoral — Ytalo Lima

Portfólio pessoal de desenvolvedor em formação construído do zero em **HTML5 semântico**, **CSS3 moderno**, **JavaScript puro (ES6+)** e **SVG**, em português do Brasil (`pt-BR`).

Desenvolvido para apresentar a identidade técnica de **Ytalo Gabriel de Lima Silva (Ytalo Lima)**, documentar em profundidade o estudo de caso de engenharia de software do **ATHLETIX** e cumprir integralmente os requisitos técnicos e documentais da atividade escolar de portfólio web.

---

## Sumário

1. [Visão Geral e Direção de Arte](#1-visão-geral-e-direção-de-arte)
2. [Estrutura de Arquivos do Repositório](#2-estrutura-de-arquivos-do-repositório)
3. [Seções do Portfólio](#3-seções-do-portfólio)
4. [Estudo de Caso Central — ATHLETIX](#4-estudo-de-caso-central--athletix)
5. [Funcionalidades Interativas Implementadas](#5-funcionalidades-interativas-implementadas)
6. [Responsividade, Acessibilidade e Performance](#6-responsividade-acessibilidade-e-performance)
7. [Como Executar Localmente](#7-como-executar-localmente)
8. [Como Atualizar Contato, LinkedIn e Novos Projetos](#8-como-atualizar-contato-linkedin-e-novos-projetos)
9. [Publicação na Vercel ou GitHub Pages](#9-publicação-na-vercel-ou-github-pages)

---

## 1. Visão Geral e Direção de Arte

O portfólio combina quatro referências conceituais:

- **Portfólio de desenvolvedor criativo** — tipografia expressiva e composição autoral sem template pronto;
- **Estudo de caso de produto digital** — apresentação estruturada de problema, solução, telas reais e decisões técnicas;
- **Publicação editorial contemporânea** — índices numerados (`01` a `07`), linhas divisórias de `1px`, alto contraste e respiro visual;
- **Apresentação de engenharia de software** — diagrama vetorial de arquitetura em camadas, inventário de tecnologias separado por comprovação prática e transparência sobre integrações externas.

### Stack obrigatória respeitada

- **HTML5 semântico** (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `dialog`, `footer`);
- **CSS3 nativo** (Custom Properties, CSS Grid, Flexbox, `clamp()`, `@font-face` WOFF2, Media Queries);
- **JavaScript puro (ES6+)** sem jQuery, React, Next.js, Vue, Angular, Tailwind ou Bootstrap;
- **SVGs autorais** para diagrama arquitetural, construção geométrica do Hero, ícones técnicos, favicon e OpenGraph.

---

## 2. Estrutura de Arquivos do Repositório

```text
/
├── index.html                     # Página principal completa (9 blocos semânticos + Lightbox)
├── 404.html                       # Página de erro personalizada e acessível
├── styles.css                     # Sistema de design, temas escuro/claro e responsividade
├── script.js                      # Interatividade modular ES6+ e configuração centralizada
├── motion.js                      # Camada de movimento: reveal escalonado, parallax, spotlight, trilho
├── vercel.json                    # Cabeçalhos de segurança, cache de ativos e cleanUrls
├── AGENTS.md                      # Diretrizes arquiteturais, convenções e regras do projeto
├── referencias.md                 # Análise detalhada das 4 referências visuais consultadas
├── identidade.md                  # Identidade pessoal, paleta, tipografia e tom de voz
├── funcionalidades.md             # Catálogo detalhado das 19 funcionalidades do portfólio
├── README.md                      # Documentação técnica e guia de manutenção/deploy
├── docs/
│   ├── referencias-visuais.pdf    # Documento A4 de página única ("Referências Visuais — Portfólio Ytalo Lima")
│   └── diagnostico-e-direcao.md   # Auditoria da versão anterior e direção de arte do redesign
└── assets/
    ├── fonts/                     # Fontes variáveis WOFF2 auto-hospedadas (Space Grotesk, Manrope, JetBrains Mono)
    ├── icons/                     # 21 ícones vetoriais limpos das tecnologias e camadas
    ├── images/                    # favicon.svg, og-image.svg e og-image.png (1200x630)
    └── projects/                  # 8 capturas reais em alta definição da aplicação ATHLETIX
```

---

## 3. Seções do Portfólio

1. **Hero / Apresentação (`#inicio`)** — Nome em destaque, posicionamento, subtítulo autoral, CTAs reais e construção geométrica vetorial das 3 camadas de software.
2. **Sobre mim (`#sobre`)** — Quem é Ytalo Gabriel de Lima Silva, visão sobre código e sistemas, motivação familiar tratada com naturalidade e ficha editorial.
3. **Trajetória (`#trajetoria`)** — Linha do tempo em 4 marcos reais (curiosidade inicial, estudo de linguagens, construção do ATHLETIX e consolidação em arquitetura e dados).
4. **Projeto Principal — ATHLETIX (`#projetos` / `#athletix`)** — Estudo de caso completo ocupando o centro narrativo do portfólio: visão geral, problema e solução, palco visual desktop + mobile, galeria filtrável de 8 telas reais com Lightbox, catálogo filtrável das **18 funcionalidades documentadas** e quadro transparente de status/limitações externas.
5. **Arquitetura e Desenvolvimento (`#arquitetura`)** — Diagrama SVG em 5 camadas (Cliente React/PWA → Domínio/Zod → Rotas Serverless opcionais → Supabase Auth/API → PostgreSQL 17 com RLS e RPCs) + 6 cartões de engenharia.
6. **Tecnologias (`#tecnologias`)** — Inventário filtrável dividido em Linguagens, Front-end, Back-end/Dados e Ferramentas/Qualidade, diferenciando claramente **Aplicação comprovada (ATHLETIX / Portfólio)** de **Estudo e prática**.
7. **Outros Projetos (`#outros-projetos`)** — Vitrine escalável renderizada a partir de `PROJECTS_DATA`, com filtros por categoria e cartões honestos para este portfólio autoral e próximos estudos.
8. **Contato (`#contato`)** — Canais diretos (GitHub, copiar e-mail com feedback, PDF de referências, LinkedIn sob confirmação) e formulário validado com mensagem transparente sobre envio estático.
9. **Footer** — Assinatura autoral, navegação rápida, links externos e retorno ao topo.

---

## 4. Estudo de Caso Central — ATHLETIX

- **Nome oficial do produto:** `ATHLETIX`
- **Aplicação online:** [https://athletix-lilac.vercel.app](https://athletix-lilac.vercel.app)
- **Repositório de código:** [https://github.com/ytalo6411-art/marabras](https://github.com/ytalo6411-art/marabras) *(onde `marabras` é exclusivamente o identificador técnico do repositório GitHub)*

Este portfólio funciona de forma **100% independente** do ATHLETIX: todas as capturas reais da interface (`Login`, `Painel`, `Catálogo de 317 exercícios`, `Rotinas`, `Execução mobile com cronômetro`, `Nutrição e hidratação`, `Evolução` e `Painel mobile`) estão salvas localmente em `assets/projects/`, acompanhadas de links diretos para o app em produção e o código-fonte.

---

## 5. Funcionalidades Interativas Implementadas

1. Menu fixo superior com navegação responsiva desktop e menu móvel retrátil (fecha automaticamente ao selecionar item, clicar fora ou pressionar `Escape`);
2. Rolagem suave entre seções respeitando `scroll-margin-top` e `prefers-reduced-motion`;
3. Revelação de conteúdo via `IntersectionObserver`, com escalonamento por item e fallback imediato sem JS;
4. Camada de movimento própria (`motion.js`): revelação tipográfica mascarada no Hero, parallax discreto no painel técnico, luz de cursor e atração magnética em botões primários;
5. Modo escuro autoral (`#080907` + `#CDF564`);
6. Modo claro editorial completo (`#F3F0E6` + `#3B5A00`);
7. Persistência de preferência de tema em `localStorage` (`ytalo-portfolio-theme`);
8. Galeria interativa de 8 telas reais do ATHLETIX em folha de contato escalonada, com filtro por contexto (`Todas`, `Acesso & i18n`, `Treino & Catálogo`, `Nutrição & Evolução`, `Mobile 390px`);
9. Lightbox / ampliação de imagem acessível (`<dialog>`) com navegação anterior/próxima, contador e atalhos de teclado (`Escape`, `←`, `→`);
10. Microinterações táteis em botões, links e cartões;
11. Formulário de contato com validação em tempo real de nome, e-mail, assunto e mensagem, comunicando honestamente que o site é estático e oferecendo cópia da mensagem revisada ou abertura no cliente de e-mail;
12. Botão de copiar e-mail com API `navigator.clipboard`, fallback seguro e confirmação acessível (`aria-live="polite"`);
13. Botão flutuante de voltar ao topo ativado após rolagem;
14. Barra superior de progresso de leitura da página calculada via `requestAnimationFrame`;
15. Indicador automático de seção ativa no menu (`aria-current="true"`);
16. Filtros interativos para as 18 funcionalidades do ATHLETIX, tecnologias (comprovadas vs. em estudo) e vitrine de outros projetos;
17. Trilho lateral de leitura com coordenadas de seção e estado ativo sincronizado ao scroll (apenas em monitores ≥ 1600px, evitando colisão com o grid em notebooks);
18. Faixa tipográfica editorial entre Hero e Sobre, pausada ao passar o ponteiro e desativada sem movimento;
19. Suporte integral a `prefers-reduced-motion: reduce`.

---

## 6. Responsividade, Acessibilidade e Performance

- **Larguras testadas sem scroll horizontal acidental:** `320px`, `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px` e `1920px`.
- **Acessibilidade:** Link `"Pular para o conteúdo principal"`, contraste verificado nos dois temas, foco visível (`:focus-visible`), `alt` descritivo em todas as imagens e suporte completo a teclado.
- **Zero dependências externas de tempo de execução:** Fontes variáveis `.woff2`, ícones `.svg` e imagens `.jpg`/`.png` servidos localmente para carregamento imediato e funcionamento offline/isolado.

---

## 7. Como Executar Localmente

Como o projeto utiliza apenas padrões nativos da web, basta servi-lo com qualquer servidor estático local:

```bash
# Opção 1 — Python 3
python3 -m http.server 8080

# Opção 2 — Node.js (npx serve)
npx serve . -l 8080
```

Em seguida, acesse `http://localhost:8080` no navegador.

---

## 8. Como Atualizar Contato, LinkedIn e Novos Projetos

Toda a configuração pessoal editável está centralizada no topo do arquivo `script.js` no objeto `DEVELOPER_CONFIG`:

```js
const DEVELOPER_CONFIG = {
  fullName: 'Ytalo Gabriel de Lima Silva',
  displayName: 'Ytalo Lima',
  email: 'ytalo6411@gmail.com',
  githubUrl: 'https://github.com/ytalo6411-art',
  linkedinUrl: '', // Preencha com 'https://www.linkedin.com/in/seu-perfil' quando disponível
  athletixLiveUrl: 'https://athletix-lilac.vercel.app',
  athletixRepoUrl: 'https://github.com/ytalo6411-art/marabras',
};
```

- Ao preencher `linkedinUrl`, o item de LinkedIn na seção de Contato passa automaticamente de informativo para link clicável.
- Para adicionar futuros projetos à seção **Outros Projetos**, basta inserir um novo objeto no array `PROJECTS_DATA` em `script.js`.

---

## 9. Publicação na Vercel ou GitHub Pages

### Deploy na Vercel (recomendado)

1. Conecte este repositório à sua conta na [Vercel](https://vercel.com);
2. Mantenha **Framework Preset** como `Other` (projeto estático puro, sem etapa de build necessária);
3. O arquivo `vercel.json` já configura cabeçalhos de segurança e cache de ativos estáticos, e `404.html` é reconhecido automaticamente.

### Deploy no GitHub Pages

1. No repositório GitHub, acesse **Settings → Pages**;
2. Em **Build and deployment**, selecione **Deploy from a branch** → branch principal / pasta `/ (root)`;
3. Salve: `index.html`, `404.html` e todos os caminhos relativos em `assets/` e `docs/` funcionarão imediatamente tanto em domínio raiz quanto em subcaminho de repositório.
