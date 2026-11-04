# Diagnóstico e Direção de Arte — Redesign v3

Documento de trabalho do redesign do portfólio de **Ytalo Lima**.
Registra a auditoria da versão anterior, as decisões de direção de arte e o que foi preservado por ser funcional.

---

## 1. Auditoria da versão anterior (v2)

### 1.1 Inventário técnico

| Métrica | v2 | Leitura |
|---|---|---|
| `index.html` | 1.842 linhas / 111 KB | Conteúdo rico, porém com blocos repetitivos e extensão excessiva |
| `styles.css` | 3.440 linhas / 73 KB | Sistema extenso, com sobreposição de camadas de correção |
| `script.js` | 1.127 linhas | Comportamentos bem separados por função |
| `font-size` distintos no CSS | 55 | Escala tipográfica sem ritmo único |
| Media queries | 42, em 24 breakpoints diferentes (580, 600, 620, 639, 640, 680, 780, 820, 860, 920, 940, 960, 980, 1024, 1040, 1080, 1100, 1220…) | Responsividade por acúmulo, não por sistema |
| `!important` | 10 | Sintoma de conflito de especificidade |
| Valores de `border-radius` diferentes | ~10 (de 2px a 999px) | Falta de regra formal de forma |
| Gradientes | 19 | Atmosfera genérica em vez de identidade |
| `box-shadow` | 7 + *glow* | Profundidade aplicada por padrão, não por hierarquia |
| Estilos inline no HTML | 18 | Mistura de camadas de apresentação e estrutura |

### 1.2 Problemas identificados

**Hierarquia e composição**
1. O Hero era um grid de duas colunas correto, mas o título (com `clamp` limitado) e o painel técnico dividiam o peso visual — não havia um ponto focal dominante.
2. Todas as seções usavam exatamente o mesmo cabeçalho (índice + título + lead) e o mesmo contêiner de 1320px, criando ritmo uniforme e previsível.
3. Componentes repetidos como cartões idênticos em cinco contextos diferentes: 20 `tech-card`, 8 `screen-card`, 18 `feature-cell`, 9 `pillar-card`, 4 `process-card`. O visitante perdia a noção de qual conteúdo era principal.
4. A marca ATHLETIX — que deve ocupar ~50% da narrativa — não dominava visualmente a seção; o nome tinha menos peso que o título da seção.

**Tipografia**
5. Três famílias boas, mas a escala não era tokenizada: 55 tamanhos avulsos, com títulos de seção entre 2rem e 3rem e textos de apoio com pouca diferenciação.
6. Uso intenso de `mono` em etiquetas decorativas (32 `mono-tag`) sem função de leitura, reduzindo a legibilidade do conjunto.

**Cor e superfície**
7. Paleta escura verde-limão coerente, mas saturada por gradientes radiais no Hero e na seção do caso, *glow* em botões e sombras em quase todos os painéis — resultado próximo do "dashboard" genérico.
8. Verde-limão aplicado simultaneamente como cor de ação, de destaque, de estado e de decoração: sem semântica de cor.

**Navegação e UX**
9. Menu fixo com indicador de seção ativa funcionando, porém sem relação espacial com o documento longo (mais de 12.000 px no desktop).
10. Índice rápido do Hero pulava a seção 06 (numeração 01–05 + 07).
11. Nenhuma indicação de progresso por seção na leitura; apenas uma barra global.
12. Formulário de contato com validação local honesta e boa, mas enterrado em um painel visualmente igual aos outros.

**Motion**
13. Apenas um padrão de entrada (`opacity` + `translateY`) aplicado a 33 blocos + transições de 180–360 ms. Sem revelação tipográfica, sem máscaras, sem motion ligado ao scroll.
14. Nenhuma diferenciação entre motion de leitura, de hierarquia e de feedback.

**Acessibilidade e performance**
15. Base boa: `skip-link`, `aria-*`, foco visível, `prefers-reduced-motion`, `<dialog>` nativo. Pontos a corrigir: foco preso dentro do menu mobile, contraste de etiquetas `mono` pequenas em `--text-muted`, alvos de toque de 32px em alguns chips, `<h3>` usado apenas para estilo no `subhead`.
16. Imagens pesadas sem `width/height` em alguns casos e sem `decoding="async"`; fontes com preload apenas de duas das três famílias.

---

## 2. Estratégia do redesign

O redesign **não reescreve o conteúdo nem descarta comportamentos**. Ele substitui a camada de apresentação e adiciona uma camada de movimento, mantendo: tema claro/escuro com persistência, menu mobile, filtros com contadores, lightbox com miniaturas, inspeção de camadas, formulário validado, cópia de e-mail e estrutura de dados dos projetos.

### 2.1 Conceito: **OFÍCIO — caderno técnico**

O portfólio é tratado como um **documento de engenharia impresso**: papel, tinta, réguas de medida, coordenadas de seção e tipografia industrial. Isso traduz o que o autor realmente é — alguém que aprende construindo e documenta o que constrói — e diferencia o site de portfólios "dark neon" genéricos.

Consequências formais:
- **Cantos retos** (0–2px). Nada de *glassmorphism*.
- **Régua e coordenada** como motivo recorrente: filetes de 1px, marcas de corte nos painéis, índices numéricos.
- **Assimetria controlada**: coluna editorial de 12 grids, com blocos deslocados e painéis que sangram para a margem.
- **Um único gesto de cor forte por seção**, não cor em tudo.

### 2.2 Paleta

Semântica de cor, não decoração:

| Papel | Escuro (padrão) | Claro | Uso |
|---|---|---|---|
| `--bg` | `#080907` | `#F3F0E6` | Fundo do documento |
| `--bg-alt` | `#0D0F0C` | `#EAE6D8` | Seções alternadas |
| `--surface` | `#131612` | `#FBF9F2` | Painéis e mockups |
| `--ink` | `#F1EEE3` | `#14160F` | Texto principal |
| `--accent` (sinal) | `#CDF564` | `#CDF564` | Ação, foco, estado ativo, dados verificados |
| `--accent-text` | `#CDF564` | `#3B5A00` | Texto em cor de destaque sobre o fundo |
| `--mark` (brasa) | `#F0834F` | `#A03D14` | Narrativa humana, coordenadas, citações |
| `--line` | `#2A2F28` | `#D2CCBC` | Réguas e divisores |

O verde-limão continua sendo o **sinal** (sistema, código, verificação). O cobre entra como **brasa**: a parte humana da história — trajetória, família, contato. Nenhuma cor é usada apenas para enfeitar.

### 2.3 Tipografia

- **Display**: Space Grotesk 500/600, tracking `-0.035em`, escala fluida de 2rem a 11rem.
- **Texto**: Manrope 400/500, medida máxima de 68 caracteres.
- **Técnica**: JetBrains Mono 400/500, caixa alta com tracking `0.14em`, sempre em tamanho pequeno e com função (coordenada, rota, estado).
- Escala tokenizada (`--fs-0` a `--fs-8`), com apenas 3 pesos efetivos por família.

### 2.4 Grid, espaço e forma

- 12 colunas, `gap` fluido, contêiner de 1440px com gutter `clamp(1.25rem, 4vw, 3.5rem)`.
- Espaçamento em base 4 (`--space-1` … `--space-12`); seções com `clamp(4.5rem, 9vw, 9rem)`.
- Bordas de 1px como sistema; zero sombras decorativas (profundidade só em mockups e no lightbox).
- Breakpoints reduzidos a cinco: 640, 860, 1080, 1280 e 1440.

### 2.5 Assinatura de interface

1. **Trilho lateral fixo** (≥1280px) com coordenadas e progresso real de leitura.
2. **Nome em duas linhas mascaradas** no Hero, com revelação tipográfica em sequência.
3. **Faixa tipográfica em movimento** entre Hero e Sobre, funcionando como respiro editorial.
4. **Painéis com marcas de corte** e barra de título monoespaçada.
5. **Listas em vez de cartões**: funcionalidades, pilares e tecnologias viram índices com réguas — cada seção tem composição própria.

### 2.6 Motion

| Camada | Implementação |
|---|---|
| Entrada do Hero | Máscara por linha + escala de tracking, com `animation-delay` em sequência |
| Revelação por scroll | `IntersectionObserver` + `clip-path`/`translate` com atraso escalonado por `nth-child` |
| Microinterações | Sublinhado que cresce, seta que desliza, borda de foco de 2px, contador de filtro com `aria-live` |
| Profundidade | *Spotlight* de cursor restrito ao Hero e parallax de 12px no painel técnico — apenas `pointer: fine` |
| Respeito ao usuário | `prefers-reduced-motion` desliga animações, parallax, marquee e rolagem suave |

Tudo em `transform`/`opacity`, sem bibliotecas, com um único listener de scroll em `requestAnimationFrame`.

---

## 3. O que é preservado (e por quê)

- Todo o conteúdo textual, dados verificáveis, links reais e avisos de transparência.
- Arquitetura em HTML/CSS/JS puros, fontes auto-hospedadas e zero dependências.
- Comportamentos: tema persistente, menu mobile com `Escape`, filtros com contadores, lightbox com teclado e swipe, inspeção de camadas, validação do formulário, cópia de e-mail, botão de topo.
- Estrutura de dados `PROJECTS_DATA` para novos projetos.

## 4. Critérios de aceite aplicados

- Contraste mínimo 4.5:1 em texto e 3:1 em elementos de interface, nos dois temas.
- Nenhuma rolagem horizontal entre 320px e 1920px.
- Navegação completa por teclado, com foco visível e ordem lógica.
- Sem conteúdo ou link fictício; sem métricas inventadas.
- `prefers-reduced-motion` funcional em todas as camadas de movimento.

---

## 5. Refinamento final (executado após o primeiro build)

Auditoria feita com o site rodando em navegador real (Chromium headless), em 320, 390, 834, 1440 e 1600 px, nos dois temas. Cada item abaixo foi reproduzido, corrigido e reconferido por captura de tela.

| Achado | Decisão | Motivo |
|---|---|---|
| Ícones técnicos apareciam como quadrados pretos | Troca de `filter: grayscale(1)` por `invert(1)`, com `filter: none` no tema claro e realce de borda no hover | Os SVGs são traçados em `currentColor`; dentro de `<img>` o cinza os colapsava em preto sólido |
| Rótulos mono em 8–9 px ilegíveis | Piso tipográfico de 10 px (`0.625rem`) em toda a interface | Legibilidade acima de estética; 9 px permanece apenas na barra de URL do mockup em telas pequenas |
| Contradição nos contadores de tecnologia (18/16/18) | Rótulos passam a refletir o DOM: **Todas (20) · Comprovadas (18) · Em estudo (2)** | Inventário honesto: o número exibido é recalculado em runtime, sem valor fixo no HTML |
| Lightbox com fundo transparente e imagem cortada | Diálogo com fundo sólido do tema e imagem em `object-fit: contain` dentro de moldura fixa | Leitura da captura sem interferência da página atrás |
| `skip-link` centralizado sobre o menu | Ancorado no canto superior esquerdo, revelado apenas com foco de teclado | Convenção de acessibilidade e zero conflito com a navegação |
| Galeria em grade de cartões idênticos | Folha de contato com coluna central escalonada, moldura em régua de 1 px e capturas mobile em proporção vertical | Evita o efeito “template”; cada captura ganha leitura própria |
| Trilho lateral colidindo com o grid em notebooks | Visível apenas a partir de 1600 px | O índice já é redundante em telas médias, onde o menu superior cumpre o papel |
| Abas do tour com fundo branco e URL truncada no mobile | Abas em verde-lima (mesma gramática do painel do Hero) e domínio oculto abaixo de 640 px, mantendo só a rota | Consistência de estados e leitura limpa da barra do navegador |
| 404 com vazio de 144 px sob o número | Remoção do `margin-bottom: 1em` herdado de `p` e inclusão de barra superior com marca e contexto | Ritmo vertical e orientação do usuário na página de erro |
| *Kickers* com “·” órfão ao quebrar linha | Separadores trocados por vírgulas | Tipografia editorial sem pontuação pendurada |

**Verificações finais:** zero erros de console; zero rolagem horizontal em 320/390/834/1440; contraste AA em ambos os temas (mínimo 4,95:1); `prefers-reduced-motion` desativa todas as camadas de movimento sem esconder conteúdo; todas as interações (tema, filtros, lightbox, camadas, formulário, cópia de e-mail, menu mobile) validadas por teste automatizado.
