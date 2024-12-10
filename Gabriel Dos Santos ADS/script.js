// Gabriel Dos Santos Da Silveira - ADS

$(document).ready(function () {
    const loader = $('#loader');

    function mostrarLoader() {
        loader.show();
    }

    function esconderLoader() {
        loader.hide();
    }

    // Função para carregar os posts usando AJAX
    function carregarPosts() {
        mostrarLoader();
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
            success: function (posts) {
                esconderLoader();
                posts.forEach(post => {
                    $('#posts').append(`
                        <div class="post" id="post-${post.id}">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                            <button class="carregar-comentarios" data-post-id="${post.id}">Carregar Comentários</button>
                            <div class="comments"></div>
                        </div>
                    `);
                });
            },
            error: function () {
                esconderLoader();
                alert('Falha ao carregar posts.');
            }
        });
    }

    // Função para carregar comentários usando Fetch
    function carregarComentarios(postId) {
        mostrarLoader();
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(comentarios => {
                esconderLoader();
                const containerComentarios = $(`#post-${postId} .comments`);
                containerComentarios.empty(); // Limpa comentários anteriores, se houver
                comentarios.forEach(comentario => {
                    containerComentarios.append(`
                        <div class="comment">
                            <p><strong>${comentario.name}</strong>: ${comentario.body}</p>
                        </div>
                    `);
                });
            })
            .catch(() => {
                esconderLoader();
                alert('Falha ao carregar comentários.');
            });
    }

    // listener para carregar coments de posts individuais
    $('#posts').on('click', '.carregar-comentarios', function () {
        const postId = $(this).data('post-id');
        carregarComentarios(postId);
    });

    // Função para carregar todos os coments de todos os posts
    function carregarTodosComentarios() {
        mostrarLoader();
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comentarios => {
                esconderLoader();
                comentarios.forEach(comentario => {
                    const containerComentarios = $(`#post-${comentario.postId} .comments`);
                    containerComentarios.append(`
                        <div class="comment">
                            <p><strong>${comentario.name}</strong>: ${comentario.body}</p>
                        </div>
                    `);
                });
            })
            .catch(() => {
                esconderLoader();
                alert('Falha ao carregar todos os comentários.');
            });
    }

    // Função para esconder todos os comentários
    function esconderTodosComentarios() {
        $('.comments').empty();
    }


    $('#loadAllComments').on('click', carregarTodosComentarios);


    $('#hideAllComments').on('click', esconderTodosComentarios);

 
    carregarPosts();
});
