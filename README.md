# 📝 Projeto de Exibição de Posts com Comentários

## 🌟 Funcionalidades
- **🔄 Loading Customizado**: Exibido sempre que uma chamada HTTP está em andamento.
- **📝 Exibição de Posts**:
  - Lista todos os posts da API `https://jsonplaceholder.typicode.com/posts` utilizando **AJAX**.
  - Cada post exibe 4 propriedades formatadas em HTML.
- **💬 Comentários Sob Demanda**:
  - Botão para carregar **comentários específicos** do post via **FETCH**.
  - Botão para carregar **todos os comentários** de uma só vez.
  - Comentários são exibidos diretamente abaixo do post correspondente.

## 🛠️ Tecnologias Utilizadas
- **HTML/CSS**: Estrutura e estilo da página.
- **JavaScript**: 
  - **AJAX** para obter posts.
  - **FETCH** para carregar comentários.
  - Tratamento de erros e manipulação do DOM.
- **Custom Loading**: Inspirado em ideias do [uiverse.io](https://uiverse.io/elements?search=loading) e outras referências.

## ⚙️ Como Funciona
1. **Ao abrir a página**: 
   - Posts são exibidos automaticamente (em colunas, um abaixo do outro).
2. **Carregar Comentários**:
   - Clique no botão de um post para carregar comentários específicos.
   - Clique no botão geral para carregar comentários de todos os posts.
3. **Loading**:
   - Mostrado enquanto os dados são buscados.

## 🖼️ Visual
- Layout limpo com posts listados e botões para interação.
- Comentários são organizados e vinculados ao post correspondente.

🎯 *Prático, eficiente e responsivo!*
