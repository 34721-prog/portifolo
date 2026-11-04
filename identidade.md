# identidade.md — Identidade Pessoal, Visual e Narrativa

## 1. Identificação do Desenvolvedor
- **Nome de assinatura**: Ytalo Lima
- **Nome completo**: Ytalo Gabriel de Lima Silva
- **Posicionamento**: Desenvolvedor de software em formação
- **Perfil**: Estudante e desenvolvedor de projetos independentes
- **Localização**: Brasil
- **GitHub oficial**: `https://github.com/ytalo6411-art`
- **E-mail registrado nos commits públicos (revisável em `script.js`)**: `ytalo6411@gmail.com`
- **LinkedIn**: Em atualização (será adicionado quando o endereço oficial for confirmado)

---

## 2. Tom de Comunicação e Posicionamento
- **Idioma**: Português brasileiro (`pt-BR`).
- **Voz**: Autêntica, clara, técnica na medida certa, humana e madura.
- **Equilíbrio**:
  - Demonstra capacidade prática real por meio de código, arquitetura, banco de dados e testes verificáveis.
  - Reconhece com honestidade que está em formação contínua, sem recorrer a jargões vazios, autoelogios exagerados ou métricas fictícias.
- **Frase-manifesto (Hero)**:
  > *"Transformando curiosidade em tecnologia, ideias em sistemas e aprendizado em projetos reais."*
- **Síntese complementar**:
  > *"Desenvolvo aplicações e experiências digitais, explorando programação, arquitetura de software, bancos de dados e tecnologias modernas."*

---

## 3. Trajetória Pessoal e Relação com a Família
A narrativa pessoal de Ytalo Lima estrutura-se sobre fatos reais e valores genuínos:

1. **Origem na curiosidade**: O interesse pela área nasceu da vontade de entender como aplicações, páginas e sistemas funcionam por dentro — saindo da posição de usuário para a de quem projeta e constrói soluções.
2. **Aprendizado autônomo e acessível**: Os primeiros passos foram dados utilizando plataformas gratuitas, documentações abertas e ferramentas acessíveis na internet, transformando estudo constante em prática diária.
3. **Evolução por projetos**: Em vez de limitar o aprendizado à teoria isolada, cada novo conceito de lógica, interface, API ou banco de dados passou a ser testado na construção de projetos concretos, explorando diferentes linguagens como Java, Python, JavaScript e TypeScript.
4. **A importância da família**: A família ocupa um papel essencial como base de incentivo, apoio cotidiano e referência de valores ao longo dos estudos. Essa presença é apresentada com naturalidade, gratidão e equilíbrio — sem dramatizações artificiais nem invenção de episódios pessoais.
5. **Visão de futuro**: Vontade constante de evoluir em engenharia de software, boas práticas de arquitetura, segurança de dados e qualidade de produto.

> **Nota de revisão**: Todos os blocos biográficos e canais de contato estão claramente organizados no código para fácil edição caso Ytalo deseje ajustar qualquer detalhe pessoal antes da publicação final.

---

## 4. Sistema de Identidade Visual

### 4.1 Conceito visual — OFÍCIO

O sistema visual (v3) parte de um documento de engenharia impresso: papel, tinta, réguas de 1px, marcas de corte e coordenadas de seção. O objetivo é que a identidade seja reconhecível sem o nome do portfólio: tipografia industrial em escala generosa, assimetria editorial, cantos retos e um único sinal de cor forte por bloco.

### 4.2 Paleta de Cores — Tema Escuro (Padrão)

| Token | Hexadecimal | Aplicação |
|---|---|---|
| `--bg` | `#080907` | Fundo do documento |
| `--bg-alt` | `#0D0F0C` | Seções alternadas |
| `--surface` | `#131612` | Painéis, mockups, formulários e diálogos |
| `--ink` | `#F1EEE3` | Texto principal e títulos |
| `--ink-2` | `#B6B9AC` | Parágrafos e apoio |
| `--ink-3` | `#8D9285` | Legendas e metadados (≥ 5:1) |
| `--accent` | `#CDF564` | Sinal: ação, foco, estado ativo, verificação |
| `--accent-text` | `#CDF564` | Texto em cor de destaque sobre o fundo escuro |
| `--mark` | `#F08A5D` | Brasa: narrativa humana, coordenadas, citações |
| `--line-color` | `#2A2F28` | Réguas e divisores |
| `--line-strong` | `#454B41` | Contornos de painéis e controles |

### 4.3 Paleta de Cores — Tema Claro (Papel Quente)

| Token | Hexadecimal | Aplicação |
|---|---|---|
| `--bg` | `#F3F0E6` | Papel principal |
| `--bg-alt` | `#EAE6D8` | Seções alternadas |
| `--surface` | `#FBF9F2` | Superfícies de painéis e formulários |
| `--ink` | `#14160F` | Texto principal |
| `--ink-2` | `#4E5348` | Parágrafos |
| `--ink-3` | `#64695C` | Metadados |
| `--accent` | `#CDF564` | Preenchimentos de ação (texto escuro por cima) |
| `--accent-text` | `#3B5A00` | Verde técnico legível sobre papel |
| `--mark` | `#A03D14` | Brasa editorial em contraste AA |
| `--line-color` | `#D2CCBC` | Réguas |
| `--line-strong` | `#A9A291` | Contornos |

A cor tem função, não decoração: **verde-sinal** indica sistema, ação e dado verificado; **brasa** indica a narrativa humana (trajetória, família, contato). Gradientes existem apenas como atmosfera reativa do Hero.

### 4.4 Tipografia e Escala

- **Títulos (`--font-display`)**: `Space Grotesk` 500/600, tracking `-0.035em`, escala fluida de `2.1rem` a `10.5rem` no nome do Hero.
- **Corpo (`--font-sans`)**: `Manrope` 400/500, medida máxima de 68 caracteres.
- **Metadados (`--font-mono`)**: `JetBrains Mono` 400/500, caixa alta, tracking `0.14em`, sempre em tamanho pequeno e com função (coordenada, rota, estado).
- Escala tokenizada em `--fs-0` … `--fs-7`, `--fs-hero`, sem tamanhos avulsos.

### 4.5 Grid, Espaço e Forma

- Grid editorial de 12 colunas, contêiner de 1440px e gutter `clamp(1.25rem, 4vw, 3.5rem)`.
- Base de espaçamento em 4px; seções com `clamp(4rem, 8vw, 8.5rem)`.
- Cantos retos (0–2px), bordas de 1px e marcas de corte nos painéis. Sem sombras decorativas e sem *glassmorphism*.
- Breakpoints reduzidos a cinco (640, 860, 940, 1080, 1280) mais ajustes de toque.

### 4.6 Movimento

- Revelação mascarada do nome no Hero e revelação de blocos por `IntersectionObserver` com atraso escalonado.
- Parallax de até 22px no painel técnico, luz de cursor no Hero e atração de 3px em botões primários — somente em ponteiro fino.
- Uma faixa tipográfica em movimento entre Hero e Sobre, pausada ao passar o ponteiro.
- Tudo em `transform`/`opacity`, sem bibliotecas, e completamente desligado em `prefers-reduced-motion: reduce`.

---

## 5. Projeto Principal — ATHLETIX
- **Nome oficial do produto**: **ATHLETIX**
- **Aplicação publicada**: `https://athletix-lilac.vercel.app`
- **Repositório oficial**: `https://github.com/ytalo6411-art/marabras` (`marabras` é exclusivamente o nome do repositório no GitHub)
- **Definição oficial**:
  > *"O ATHLETIX é uma plataforma esportiva que reúne planejamento de treinamento, biblioteca de exercícios, acompanhamento nutricional e evolução do atleta em um único ambiente digital."*
- **Protagonismo no portfólio**: Recebe aproximadamente **50% do espaço visual e narrativo**, estruturado como estudo de caso completo de engenharia de software (produto, 18 funcionalidades, capturas reais da interface, arquitetura em camadas, segurança com RLS, testes automatizados e comunicação transparente de limitações externas).

---

## 6. Repertório Tecnológico Documentado
Sem atribuição de níveis percentuais ou anos fictícios, diferenciando **aplicação comprovada em projeto** de **estudo e prática em andamento**:

- **Linguagens**: JavaScript, TypeScript, HTML, CSS *(aplicação comprovada)*; Java, Python *(estudo e prática de programação)*.
- **Front-end**: React 18, TypeScript, Vite 6, Zustand, HTML5 semântico, CSS3 moderno, PWA.
- **Backend e Serviços**: Supabase Auth, Vercel Functions (endpoints serverless), Node.js (scripts de automação, migração e validação), Zod.
- **Banco de Dados**: PostgreSQL, Supabase, Row Level Security (RLS), RPCs transacionais SQL.
- **Ferramentas**: Git, GitHub, Vercel, Vite.
- **Testes e Qualidade**: Vitest, Testing Library, Playwright, PGlite, ESLint, TypeScript `strict`.
