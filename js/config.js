
// Vetor para armazenar os produtos
let produtos = [];
let quantidade = [];
let unidade = [];

// Função para adicionar um produto
function adicionarProduto() {
    let nomeProduto = document.getElementById("produto").value;

    produtos.push(nomeProduto);

    document.getElementById("produto").value = '';

    adicionarProdutosNaTela();
}


// Função para adicionar os produtos na tela
function adicionarProdutosNaTela() {
    // Obtém o elemento onde os produtos serão adicionados
    let listaDeProdutos = document.getElementById("lista-de-produtos");

    // Limpa o conteúdo atual da lista
    listaDeProdutos.innerHTML = '';

    // Foca no campo de entrada novamente
    document.getElementById("produto").focus();

    // Itera sobre o vetor de produtos
    produtos.forEach(function(produto) {
        // Cria um novo elemento de lista (li) para cada produto
        let elementoProduto = document.createElement("li");

        // Define o texto do elemento como o nome do produto
        elementoProduto.textContent = produto;

        // Adiciona o elemento à lista
        listaDeProdutos.appendChild(elementoProduto);
    });
}

function limparLista() {
    // Obtém o elemento da lista
    let lista = document.getElementById("lista-de-produtos");
    
    // Enquanto houver um primeiro filho na lista, remove-o
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

const lixeira = document.getElementById('lixeira');

lixeira.addEventListener('click', function() {
    // Adiciona a classe 'clicked' quando a lixeira é clicada
    lixeira.classList.add('clicked');

    // Coloque aqui o código que deseja executar quando a lixeira é clicada
    console.log('Lixeira clicada!');
});

lixeira.addEventListener('mouseenter', function() {
    // Coloque aqui o código que deseja executar quando o mouse entra na lixeira
    console.log('Mouse sobre a lixeira!');
});

lixeira.addEventListener('mouseleave', function() {
    // Coloque aqui o código que deseja executar quando o mouse sai da lixeira
    console.log('Mouse fora da lixeira!');
});
