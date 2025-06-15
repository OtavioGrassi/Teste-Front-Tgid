//Carrega o banco de dados json utilizando o fetch

function carga() {
    fetch('http://localhost:3000/produtos')
        .then(resp => resp.json())
        .then(produtos => {
            const container = document.getElementById('lista-produtos');
            produtos.forEach(produto => {
                const div = document.createElement('div');
                div.className = 'produto';
                div.innerHTML = `
                <img class="imagens-produtos" src="${produto.imagem}" alt="${produto.nome}" style="max-width: 150px;">
                    <h3>${produto.nome}</h3>
                    <p>Marca: ${produto.marca}</p>
                    <p>Preço: <strong>R$ ${produto.preco.toFixed(2)}</strong></p>
                    <p>Unidade: ${produto.unidade}</p>
                `;

                // Botão p/ adicionar produtos ao carrinho
                const buttonAdd = document.createElement('button');
                buttonAdd.className = 'button-adicionar';
                buttonAdd.textContent = 'COMPRAR';
                buttonAdd.addEventListener('click', () => adicionarCarrinho(produto));
                div.appendChild(buttonAdd);

                container.appendChild(div);
            });
        })
        .catch(erro => console.error('Erro ao carregar produtos:', erro));
}

//Carrinho de compras

const carrinho = {}; // Armazena os produtos e suas quantidades

function adicionarCarrinho(produto) {
    const carrinhoContainer = document.getElementById('carrinho');
    mostrarNotificacaoCarrinho()

    if (!carrinhoContainer) {
        console.error('Elemento com id="carrinho" não encontrado.');
        return;
    }

    const idProduto = produto.id || produto.nome;

    if (carrinho[idProduto]) {
        carrinho[idProduto].quantidade += 1;
        document.getElementById(`qtd-${idProduto}`).textContent = `Quantidade: ${carrinho[idProduto].quantidade}`;
    } else {
        carrinho[idProduto] = {
            produto: produto,
            quantidade: 1
        };

        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrinho';
        itemDiv.id = `item-${idProduto}`;
        itemDiv.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" style="width: 50px; height: auto; margin-right: 10px;">
            <h3>${produto.nome}</h3>
            <p id="qtd-${idProduto}">Quantidade: 1</p>
            <button id="botão-incrementar" onclick="incrementarItemCarrinho('${idProduto}')">+</button>
            <button id="botão-remover" onclick="removerItemCarrinho('${idProduto}')">-</button>
        `;
        carrinhoContainer.appendChild(itemDiv);
    }

    console.log(`Produto "${produto.nome}" adicionado ao carrinho.`);
}

//Apagar itens do carrinho de compras

function removerItemCarrinho(idProduto) {
    if (!carrinho[idProduto]) return;

    carrinho[idProduto].quantidade -= 1;

    if (carrinho[idProduto].quantidade > 0) {
        document.getElementById(`qtd-${idProduto}`).textContent = `Quantidade: ${carrinho[idProduto].quantidade}`;
    } else {
        delete carrinho[idProduto];
        const itemDiv = document.getElementById(`item-${idProduto}`);
        if (itemDiv) itemDiv.remove();
    }

    console.log(`Produto ${idProduto} removido.`);
}

//Limpar todos os itens no carrinho

function limparCarrinho() {
    const carrinhoContainer = document.getElementById('carrinho');
    carrinhoContainer.innerHTML = ''; // Remove todos os elementos do DOM
    for (let id in carrinho) {
        delete carrinho[id]; // Limpa o objeto JS
    }
    console.log('Carrinho limpo.');
    apagarNotificacaoCarrinho()
}

//Adicionar mais itens dentro do carrinho

function incrementarItemCarrinho(idProduto) {
    if (!carrinho[idProduto]) return;

    carrinho[idProduto].quantidade += 1;
    document.getElementById(`qtd-${idProduto}`).textContent = `Quantidade: ${carrinho[idProduto].quantidade}`;

    console.log(`Produto ${idProduto} incrementado.`);
}

//Finalizar compra e mostrar itens comprados e valor total

function finalizarCompra() {
    if (Object.keys(carrinho).length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    // Monta um array com os dados dos produtos
    const itensComprados = Object.values(carrinho).map(entry => ({
        nome: entry.produto.nome,
        imagem: entry.produto.imagem,
        quantidade: entry.quantidade,
        preco: entry.produto.preco,
        total: entry.quantidade * entry.produto.preco
    }));

    // Salva os dados no localStorage
    localStorage.setItem('compraFinalizada', JSON.stringify(itensComprados));

    // Redireciona para a página de confirmação
    window.location.href = 'confirmacao.html';
}

//funções do modal carrinho de compras ao clicar no icone

const mostrarCarrinho = document.getElementById('mostrar-carrinho')
function produtoCarrinho() {
    mostrarCarrinho.showModal();
}

window.onclick = function (event) {
    if (event.target === mostrarCarrinho) {
        mostrarCarrinho.close();
    }
}

//notificação no icone carrinho ao clicar em comprar qualquer item

function mostrarNotificacaoCarrinho() {
    const notificacao = document.getElementById('notificacao-carrinho');
    if (notificacao) {
        notificacao.style.display = 'block';
    }
}

function apagarNotificacaoCarrinho() {
    const notificacao = document.getElementById('notificacao-carrinho');
    notificacao.style.display = 'none';
}

carga();

