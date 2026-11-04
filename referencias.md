# referencias.md — Pesquisa e Análise de Referências Visuais

Antes da definição final do sistema visual do portfólio de **Ytalo Lima**, foram consultadas e analisadas as quatro referências principais indicadas no planejamento, além dos diretórios curatoriais **Awwwards** (`https://www.awwwards.com/`) e **SiteInspire — Categoria Portfolio** (`https://www.siteinspire.com/websites/category/portfolio`).

Nenhuma característica abaixo foi suposta: todas as observações derivam da inspeção direta das páginas e estudos de caso publicados.

---

## Referência 01 — Davide Perozzi (por Norman Dubois / Perozzi Studio)
- **Nome do site**: Developer Portfolio with Davide Perozzi (2019)
- **Endereço**: `https://norman.perozzi.studio/projects/davideperozzi/`
- **Cores observadas**:
  - Uso contido e de altíssimo contraste centrado em **uma única cor de destaque vibrante** (vermelho intenso) combinada com base neutra limpa (tons escuros/grafite e superfícies claras neutras no estudo de caso), evitando poluição cromática.
- **Tipografia**:
  - Dupla de fontes sem serifa com papéis rigorosamente separados: **Neue Plak** nos títulos (caráter técnico, geométrico e expressivo) e **Neue Haas Unica** no corpo de texto e links (leitura neutra, limpa e contemporânea).
- **Organização do layout**:
  - Estrutura *one-pager* apoiada em um grid rigoroso de **36 colunas** com linha de base (*baseline*) de **18px**.
  - Uso recorrente do **retângulo geométrico** inspirado no cursor de linha de comando (CLI) como motivo gráfico unificador em títulos de seção e sublinhados de links.
- **Animações**:
  - Animações coordenadas à rolagem (*scroll animations*) que sustentam o ritmo da leitura sem desorganizar o grid.
- **Navegação**:
  - Fluxo contínuo de página única (*single-page*) com progressão clara entre apresentação pessoal, projetos e contato, além de indicador percentual no estudo do estúdio.
- **O que será aproveitado**:
  - A disciplina de usar **uma cor de destaque energética principal** (`#CDF564` sobre `#080907`) em vez de múltiplas cores concorrentes.
  - O contraste entre uma fonte de título com personalidade técnica (`Space Grotesk`) e uma fonte de leitura fluida (`Manrope`), somada a marcadores inspirados em terminal (`JetBrains Mono` e índices retangulares).
  - Grid estruturado com divisores precisos.
- **O que não será utilizado**:
  - **Cursor personalizado sensível ao contexto** (descartado para preservar acessibilidade integral e previsibilidade do ponteiro nativo).
  - GIFs humorísticos, pois o portfólio de Ytalo pede sobriedade editorial e foco em engenharia de software.

---

## Referência 02 — Andrew Reff ("A portfolio that answered back")
- **Nome do site**: Portfolio, 2025–26: *A portfolio that answered back* — Andy Reff
- **Endereço**: `https://andrewreff.com/projects/a-portfolio-that-talks-back`
- **Cores observadas**:
  - Base monocromática de alto contraste (`#000000` e `#FFFFFF` com cinzas editoriais), deixando as capturas de interface e os metadados conduzirem o olhar.
- **Tipografia**:
  - Títulos condensados/expressivos de grande impacto combinados com metadados estruturados em colunas curtas (*My role*, *In collaboration*, *Timeframe*) e listas numeradas (`1.`, `2.`, `3.`) que organizam argumentos técnicos.
- **Organização do layout**:
  - Estrutura de **estudo de caso narrativo**: parte da premissa (*"A minute is all a portfolio gets"*), apresenta decisões numeradas, detalha a construção ponta a ponta (*"Designed and built end to end"*), compara estados (*Before / After*) e comprova a capacidade técnica pela qualidade da própria interface (*"Let the craft be the proof"*).
- **Animações**:
  - Transições suaves inspiradas na passagem entre pranchetas (*artboards*) e revelação progressiva de conteúdo conforme a leitura avança.
- **Navegação**:
  - Link direto de acessibilidade (*Skip to content*) logo no início, cabeçalho enxuto com contato direto e trilha clara de capítulos numerados (*Arrive → Explore → Ask → Listen → Remember*).
- **O que será aproveitado**:
  - O princípio central **"Let the craft be the proof"**: o próprio portfólio demonstra cuidado técnico em cada estado de foco, validação e resposta visual.
  - A arquitetura narrativa de estudo de caso para o **ATHLETIX** (contexto, decisões técnicas numeradas, ficha de metadados de engenharia, arquitetura ponta a ponta e transparência sobre limites).
  - Presença obrigatória de `Skip to content` e leitura escaneável em menos de um minuto.
- **O que não será utilizado**:
  - Segundo cursor autônomo comentando a tela, assistente de voz com IA e efeitos 3D em Three.js/WebGL (incompatíveis com a restrição de HTML/CSS/JS puro e desnecessários para a clareza escolar/técnica).

---

## Referência 03 — Gil Huybrecht
- **Nome do site**: Gil Huybrecht — Freelance Designer & Art Director
- **Endereço**: `https://gilhuybrecht.com/` (e `https://www.gilhuybrecht.com/about`)
- **Cores observadas**:
  - Paleta minimalista e sóbria, com fundos neutros escuros/claros que funcionam como moldura silenciosa para fotografias e telas de projetos em grande escala.
- **Tipografia**:
  - Forte direção editorial: combinação de numeração explícita de seções e etapas (`01.`, `02.`, `(004)`) com títulos amplos e blocos curtos de texto analítico.
- **Organização do layout**:
  - Apresentação de trabalhos por meio de **sequências visuais amplas e numeradas** (`1`, `2`, `3`, `4`...) que valorizam a direção de arte e o respiro entre imagens, evitando amontoar dezenas de miniaturas pequenas.
  - Na área institucional, divisão clara entre arquitetura de informação, design visual estratégico e interação.
- **Animações**:
  - Transições contidas e elegantes voltadas à entrada de imagens e leitura cadenciada.
- **Navegação**:
  - Navegação enxuta e direta, mantendo o foco absoluto no trabalho apresentado e na chamada de conexão (*Let's connect*).
- **O que será aproveitado**:
  - **Numeração editorial de seções e itens** (`01` a `08` e contadores `(01/18)` nas funcionalidades do ATHLETIX).
  - Uso de **imagens grandes, mockups generosos e respiro negativo**, evitando excesso de cards pequenos arredondados ou sombras pesadas.
  - Linhas divisórias finas (`1px`) para separar blocos de conteúdo com elegância de revista impressa.
- **O que não será utilizado**:
  - Páginas compostas quase exclusivamente por imagens sem texto explicativo, pois um portfólio de engenharia precisa explicitar arquitetura, banco de dados, testes e decisões de código.

---

## Referência 04 — Edvard Scott
- **Nome do site**: Edvard Scott — Portfolio
- **Endereço**: `https://www.edvardscott.com/`
- **Cores observadas**:
  - Predominância de fundos escuros profundos (preto/azul-noturno) contrastados com acentos pontuais intensos (verde vibrante e texto claro) e registros fotográficos autênticos.
- **Tipografia**:
  - Tipografia autoral direta acompanhada de **legendas documentais concisas com ano, contexto e crédito** (ex.: `2025`, `2023`, `2020`, tipo de entrega e links contextuais).
- **Organização do layout**:
  - Fluxo cronológico/documental assimétrico que alterna peças individuais grandes com séries horizontais/grupos comparativos, mesclando projetos digitais, identidade visual e registros reais de trajetória sem parecer um template corporativo rígido.
- **Animações**:
  - Movimento pontual apenas onde há conteúdo dinâmico real (vídeo/loop curto), mantendo o restante da página estável, rápido e legível.
- **Navegação**:
  - Estrutura extremamente limpa, permitindo explorar o acervo de ponta a ponta sem menus labirínticos, com contato direto por e-mail.
- **O que será aproveitado**:
  - **Autenticidade documental**: legendas técnicas honestas que identificam exatamente o que cada imagem mostra (diferenciando capturas reais da aplicação, diagramas autorais e limites de ambiente).
  - Composições assimétricas em fundo escuro profundo com acento verde/lima.
  - Integração natural entre trajetória humana e repertório técnico.
- **O que não será utilizado**:
  - Fluxo único de dezenas de itens sem barra de navegação por seções, já que nosso portfólio exige menu fixo com indicador de seção ativa (`Início`, `Sobre`, `Projetos`, `Tecnologias`, `Contato`).

---

## Diretórios Complementares Consultados
1. **SiteInspire — Portfolio (`https://www.siteinspire.com/websites/category/portfolio`)**:
   - Confirmou a tendência dos melhores portfólios contemporâneos em torno das categorias *Typographic*, *Minimal* e *Grid Layout*: grades bem marcadas, ausência de ornamentos gratuitos e foco imediato na obra principal.
2. **Awwwards (`https://www.awwwards.com/`)**:
   - Evidenciou o equilíbrio entre impacto visual na primeira dobra (*Hero*) e clareza de leitura técnica nos estudos de caso premiados.

---

## Síntese das Decisões para o Portfólio de Ytalo Lima
| Dimensão | Decisão Autoral Adotada |
|---|---|
| **Atmosfera** | Editorial técnico escuro (`#080907`, `#0D0F0C`, `#131612`, `#1A1E19`) com modo claro quente (`#F3F0E6`) completo e persistente |
| **Destaque cromático** | Verde-lima técnico (`#CDF564`) para sistema e ações, com cobre (`#F08A5D`) reservado à narrativa humana e ao contato |
| **Sistema tipográfico** | `Space Grotesk` (impacto nos títulos) + `Manrope` (corpo fluido) + `JetBrains Mono` (índices, metadados e rótulos de engenharia) |
| **Estrutura** | Grid editorial assimétrico com linhas finas (`#343B35`), numeração de seções e 50% do peso narrativo dedicado ao estudo de caso do **ATHLETIX** |
| **Interatividade** | Funcional e acessível: tema claro/escuro, barra de progresso, galeria filtrável, lightbox acessível por teclado e validação honesta de formulário |
