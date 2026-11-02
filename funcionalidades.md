# funcionalidades.md — Mapa e Classificação de Funcionalidades do Portfólio

Este documento cataloga todas as funcionalidades implementadas no portfólio profissional de **Ytalo Lima**, organizadas em três níveis de criticidade (**Essenciais**, **Importantes** e **Complementares**), garantindo que cada elemento anunciado possua implementação real, acessível e verificável.

---

## 1. Funcionalidades Essenciais
Recursos indispensáveis para cumprir os objetivos pedagógicos, técnicos e comunicacionais do portfólio:

1. **Apresentação Inicial Autoral (Hero — `#inicio`)**
   - Exibição de impacto com o nome `YTALO LIMA`, identificação profissional, frase-manifesto, texto complementar, CTAs diretos (*Conhecer o ATHLETIX* e *Minha trajetória*), link para o GitHub, indicador de rolagem e composição gráfica vetorial autoral (sem uso de rostos fictícios).
2. **Narrativa Pessoal e Trajetória (`#sobre` e `#trajetoria`)**
   - Seção humana e verdadeira sobre Ytalo Gabriel de Lima Silva, sua curiosidade inicial, aprendizado com recursos gratuitos, evolução prática em múltiplas linguagens, apoio da família e processo estruturado de desenvolvimento em 4 etapas.
3. **Estudo de Caso Completo do ATHLETIX (`#athletix` e `#arquitetura`)**
   - Apresentação aprofundada ocupando cerca de 50% da narrativa do site: descrição oficial, links reais para a aplicação na Vercel e repositório no GitHub, matriz completa das **18 funcionalidades documentadas**, destaques técnicos verificados no relatório `PROMAX-V10.md`, mockups desktop e mobile com capturas reais da interface do código-fonte, narrativa técnica de 9 pilares, diagrama de arquitetura (`USUÁRIO → INTERFACE REACT → SERVIÇOS E VALIDAÇÕES → SUPABASE → POSTGRESQL` + integrações externas) e quadro explícito de limitações externas (Google OAuth, IA opcional e SMTP).
4. **Mapa de Tecnologias e Conhecimentos (`#tecnologias`)**
   - Organização em 6 categorias (*Linguagens*, *Front-end*, *Backend*, *Banco de dados*, *Ferramentas* e *Testes e qualidade*) com ícones SVG dedicados e distinção explícita entre tecnologias com **aplicação comprovada no ATHLETIX/portfólio** e tecnologias **em estudo e prática**.
5. ** Navegação Fixa Acessível e Responsiva**
   - Menu superior fixo com os 5 destinos principais (*Início*, *Sobre*, *Projetos*, *Tecnologias*, *Contato*), indicador automático de seção ativa, suporte completo a teclado, menu mobile dedicado que fecha ao selecionar uma seção ou pressionar `Escape`, e `skip-link` para saltar direto ao conteúdo.
6. **Seção de Contato com Validação Honesta (`#contato`)**
   - Exibição de canais reais (e-mail editável e GitHub oficial, além de status transparente do LinkedIn), formulário com validação de *Nome*, *E-mail*, *Assunto* e *Mensagem*, mensagens de erro acessíveis por campo e aviso claro de que a validação foi concluída localmente sem simular envio por servidor inexistente.
7. **Layout Responsivo Integral (320px a 1920px)**
   - Adaptação fluida e composições específicas para mobile, tablet e desktop, testadas em `320px`, `360px`, `390px`, `430px`, `768px`, `1024px`, `1280px`, `1440px` e `1920px` sem rolagem horizontal acidental.

---

## 2. Funcionalidades Importantes
Recursos que elevam a qualidade de engenharia de produto, usabilidade e exploração do conteúdo:

8. **Modo Escuro e Modo Claro com Persistência**
   - Alternância imediata entre a paleta escura autoral (`#0B0D0C` / `#C4F55A`) e a paleta clara editorial (`#F4F3EC` / `#2F5E00`), salva em `localStorage` e aplicada antes da primeira pintura da página para evitar *flash* visual.
9. **Galeria Interativa de Capturas Reais do ATHLETIX**
   - Navegação por abas/categorias entre diferentes telas reais do ATHLETIX (Login multilíngue, Dashboard/Treinos, Biblioteca de 317 exercícios, Execução de sessão mobile com cronômetro, Nutrição e Evolução com gráficos SVG), atualizando contexto técnico e legendas documentais.
10. **Visualização Ampliada de Imagens (Lightbox Acessível)**
    - Modal `<dialog>` para inspecionar qualquer captura do ATHLETIX em alta definição, com título, descrição técnica, navegação anterior/próxima por botões ou setas do teclado (`←` / `→`), fechamento por `Escape` e retorno automático de foco.
11. **Botão de Copiar E-mail com Feedback Visual**
    - Cópia instantânea via `navigator.clipboard` (com fallback seguro) e confirmação visual/textual anunciada via `aria-live`.
12. **Estrutura Extensível para Outros Projetos (`#projetos`)**
    - Acervo alimentado por estrutura de dados limpa em JavaScript (`PROJECTS_DATA`), destacando o ATHLETIX como projeto principal e preparando slots documentados para adição futura de novos projetos reais.
13. **Filtro Interativo na Seção de Tecnologias e nas 18 Funcionalidades**
    - Permite filtrar tecnologias por contexto (*Todas*, *Aplicadas no ATHLETIX*, *Em estudo*) e explorar os módulos funcionais do ATHLETIX (*Treinamento*, *Nutrição*, *Plataforma & Dados*) sem perder a visão completa.

---

## 3. Funcionalidades Complementares
Refinamentos de experiência, SEO, publicação e entrega documental:

14. **Indicador de Progresso de Leitura da Página**
    - Barra superior fina que reflete em tempo real a posição de leitura ao longo do documento.
15. **Scroll Suave e Botão "Voltar ao Topo"**
    - Rolagem suave compensando a altura do cabeçalho fixo e botão flutuante discreto que surge após a primeira dobra para retorno rápido ao início.
16. **Animações de Entrada e Microinterações com Respeito a `prefers-reduced-motion`**
    - Revelação sutil de blocos via `IntersectionObserver` e microinterações táteis em botões e links, automaticamente desativadas quando o usuário prefere redução de movimento no sistema operacional.
17. **Estados de Carregamento, Feedback de Ação e Cópia da Mensagem Validada**
    - Tratamento de carregamento de imagens e botão auxiliar no formulário validado que permite copiar o texto formatado da mensagem ou abrir o cliente de e-mail local (`mailto:`), oferecendo utilidade real mesmo sem backend SMTP.
18. **SEO, Open Graph, Favicon, Página `404.html` e Preparação para Vercel**
    - Metadados completos, imagem de compartilhamento autoral (`assets/images/og-image.svg` / `.png`), ícone vetorial (`assets/images/favicon.svg`), página `404.html` consistente com a identidade visual e `vercel.json` com cabeçalhos de segurança.
19. **Documento Escolar em PDF de Página Única (`docs/referencias-visuais.pdf`)**
    - Síntese editorial em formato A4 (exatamente 1 página) contendo as quatro referências consultadas, amostras visuais/diagramáticas, observações de design e justificativa da direção de arte adotada.
