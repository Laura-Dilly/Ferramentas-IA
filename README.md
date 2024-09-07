# Ferramentas IA

Este projeto é uma plataforma web desenvolvida para ajudar os usuários a descobrirem ferramentas de Inteligência Artificial (IA) categorizadas por diferentes funcionalidades, como Design, Imagens e Vídeos, Música e Voz, Educação, e outras. O usuário pode pesquisar por ferramentas de IA, filtrá-las por categoria e visualizar descrições detalhadas com links para as respectivas páginas das ferramentas.

A ideia do projeto surgiu na tentativa de aplicar os conhecimentos de HTML, CSS e JavaScript obtidos na Imersão Dev com Gemini da Alura, na intenção de criar uma ferramenta de busca. Essa ferramenta foi desenvolvida pensando-se na necessidade de conhecer as diversas ferramentas de Inteligência Artificial atuais, sendo um bom catálogo para necessidades de ajuda futuras em diversas áreas do conhecimento. 


## Funcionalidades

- **Filtros por Categoria**: O usuário pode filtrar as ferramentas em categorias como "Design", "Imagens e Vídeos", "Música e Voz", "Educação", entre outras.
- **Campo de Busca**: Permite que o usuário encontre ferramentas de IA por palavras-chave inseridas no campo de busca.
- **Design Responsivo**: O layout da página ajusta-se automaticamente para diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.

## Ferramentas Utilizadas
- Google Gemini para auxílio de construção de códigos e textos
- API Google Fonts para estilos da fontes da página

## Estrutura do Projeto

O projeto consiste nos seguintes arquivos principais:

### 1. `index.html`
Este arquivo define a estrutura da página web. Inclui:

- **Cabeçalho (Head)**: Define metadados para responsividade e links para bibliotecas externas de CSS.
- **Corpo (Body)**:
  - **Filtros de Categoria**: Os usuários podem filtrar as ferramentas de IA por diferentes categorias.
  - **Campo de Busca**: Os usuários podem pesquisar ferramentas de IA usando palavras-chave.
  - **Seção de Resultados**: Exibe a lista de ferramentas de IA filtradas ou pesquisadas.

### 2. `app.js`
Este arquivo implementa as funcionalidades principais da página web, incluindo:

- **Filtro por Categoria**: Permite aos usuários filtrar ferramentas de IA com base em diferentes categorias.
- **Funcionalidade de Busca**: Os usuários podem pesquisar ferramentas de IA por nome, descrição ou tags.
- **Exibição Dinâmica de Conteúdo**: Os resultados são renderizados dinamicamente com base na pesquisa ou filtro selecionado pelo usuário.

### 3. `dados.js`
Este arquivo reúne os dados das Inteligências Artificiais que serão exibidos.

### 4. `style.css`
Este arquivo é responsável por estilizar a página HTML.
