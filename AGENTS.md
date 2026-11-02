# AGENTS.md — Diretrizes de Engenharia e Contexto do Projeto

## 1. Propósito do Repositório
Este repositório contém o **portfólio profissional e acadêmico de Ytalo Gabriel de Lima Silva (Ytalo Lima)**, desenvolvido em conformidade com as exigências de avaliação escolar e boas práticas de engenharia front-end.

O projeto funciona como uma experiência digital autoral, combinando portfólio de desenvolvedor, publicação editorial contemporânea e estudo de caso aprofundado de engenharia de software sobre o produto **ATHLETIX**.

---

## 2. Stack Obrigatória e Restrições Arquiteturais

### Tecnologias Permitidas (Nativas)
- **HTML5 semântico** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<dialog>`, `<footer>`).
- **CSS3 moderno** (Custom Properties / Design Tokens, CSS Grid, Flexbox, `clamp()`, `@media`, `prefers-reduced-motion`, temas claro e escuro).
- **JavaScript moderno (ES6+)** puro, modularizado em funções claras, sem etapas obrigatórias de transpilação para execução no navegador.
- **SVG vetorial** para diagramas técnicos, composições gráficas autorais e ícones de tecnologias.
- **Fontes auto-hospedadas (`.woff2`)** em `assets/fonts/` (`Space Grotesk`, `Manrope` e `JetBrains Mono`) para carregamento instantâneo e independência de rede externa.

### Tecnologias Proibidas neste Portfólio
- **Proibido utilizar frameworks ou bibliotecas de UI/CSS**: React, Next.js, Vue, Angular, Svelte, Tailwind CSS, Bootstrap ou equivalentes.
- **Separação de stacks**: O fato de o projeto principal apresentado (**ATHLETIX**) ter sido construído com React 18, TypeScript, Vite e Supabase **não** altera a stack deste portfólio. O portfólio é um projeto independente em HTML, CSS e JavaScript puros.

---

## 3. Nomenclatura Oficial (Regra Estrita)
- **Ytalo Lima** (nome completo: **Ytalo Gabriel de Lima Silva**): identidade pessoal e profissional do desenvolvedor.
- **ATHLETIX**: nome oficial e único do produto principal apresentado no estudo de caso.
- **`marabras`**: identificador técnico do repositório no GitHub (`https://github.com/ytalo6411-art/marabras`), **nunca** utilizado como nome comercial do produto.
- **Proibido**: utilizar variações incorretas como *"Athletic Kids"*, *"Talatics"* ou *"Marabras"* para nomear comercialmente a plataforma.

---

## 4. Organização de Diretórios e Arquivos

```text
portfolio/
├── AGENTS.md                   # Diretrizes técnicas, regras e ética de dados
├── referencias.md              # Pesquisa verificada das 4 referências visuais
├── identidade.md               # Identidade visual, tom de voz, história e tecnologias
├── funcionalidades.md          # Matriz de funcionalidades (Essenciais, Importantes, Complementares)
├── README.md                   # Documentação pública, execução local e deploy
├── index.html                  # Documento principal do portfólio
├── 404.html                    # Página de erro personalizada e acessível
├── styles.css                  # Sistema visual, tokens, layout editorial e responsividade
├── script.js                   # Dados estruturados, interações, tema, galeria e validação
├── vercel.json                 # Configuração de cabeçalhos de segurança e rotas para deploy
├── assets/
│   ├── images/                 # Favicon, Open Graph e composições gráficas autorais
│   ├── projects/               # Capturas reais das telas do código-fonte oficial do ATHLETIX
│   ├── icons/                  # Ícones vetoriais SVG das tecnologias e interface
│   └── fonts/                  # Arquivos WOFF2 variáveis (Space Grotesk, Manrope, JetBrains Mono)
└── docs/
    └── referencias-visuais.pdf # Documento escolar A4 de página única
```

---

## 5. Padrões de Código e Qualidade
1. **Acessibilidade (WCAG AA)**:
   - Hierarquia estrita de títulos (`h1` único no Hero, `h2` por seção, `h3`/`h4` em subcomponentes).
   - `skip-link` funcional logo no topo do `<body>`.
   - Foco visível (`:focus-visible`) com alto contraste nos temas escuro e claro.
   - Modal/Lightbox com contenção de foco, fechamento por tecla `Escape` e clique externo, e restauração de foco ao gatilho original.
   - Respeito integral à preferência do sistema `@media (prefers-reduced-motion: reduce)`.
   - Proibido cursor customizado que substitua ou prejudique o ponteiro nativo do sistema operacional.
2. **Responsividade Real**:
   - Verificação obrigatória sem rolagem horizontal acidental (`overflow-x`) nas larguras: `320px`, `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px` e `1920px`.
   - Alvos de toque com dimensão mínima adequada em telas móveis e menu adaptável que fecha ao selecionar uma seção.
3. **Integridade Funcional**:
   - Nenhum botão decorativo sem ação real.
   - Nenhum link quebrado (`href="#"` vazio).
   - Formulário de contato com validação real no cliente e mensagem transparente sobre ausência de backend de envio (jamais simular envio falso).

---

## 6. Cuidados com Informações Pessoais e Veracidade (Anti-Alucinação)
1. **Privacidade**:
   - Não expor números de telefone pessoais, endereço residencial, documentos ou dados sensíveis no código público.
   - Centralizar dados de contato editáveis no objeto `DEVELOPER_CONFIG` em `script.js` para revisão rápida pelo autor.
2. **Proibição Absoluta de Informações Inventadas**:
   - **Biografia e família**: apresentar a importância da família com sensibilidade, respeito e naturalidade. **Nunca inventar** histórias de preconceito, dificuldades financeiras, dramas familiares ou episódios não informados envolvendo familiares.
   - **Carreira e formação**: **nunca inventar** empregos anteriores, anos de experiência, porcentagens arbitrárias de domínio técnico (ex.: *"90% JavaScript"*), prêmios ou certificações não confirmadas.
   - **Métricas do ATHLETIX**: utilizar exclusivamente dados verificados no repositório oficial e no relatório `PROMAX-V10.md` (ex.: 317 exercícios catalogados, 4 idiomas, 23+ tabelas PostgreSQL com RLS, suíte Vitest + PGlite + Playwright). **Nunca inventar** números de usuários ativos, avaliações ou faturamento.
   - **Limitações técnicas**: comunicar com transparência que no ATHLETIX o login Google OAuth depende de credenciais externas no Google Cloud/Supabase, o assistente de IA é opcional (requer `AI_API_KEY` no servidor) e o disparo de e-mails em escala depende de SMTP externo.
   - **Representação visual**: nunca utilizar fotografias de terceiros ou rostos gerados por IA como se fossem retratos de Ytalo Lima.
