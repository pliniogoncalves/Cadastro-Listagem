class Produto {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroProduto");
    const listaProdutos = document.getElementById("listaProdutos");
    const novoProdutoBtn = document.getElementById("novoProdutoBtn");

    // Cria um array para armazenar os objetos de produtos
    const produtos = [];

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nomeProduto = document.getElementById("nomeProduto").value;
        const valorProduto = parseFloat(document.getElementById("valorProduto").value);

        // Cria um novo objeto Produto com os dados do formulário
        const novoProduto = new Produto(nomeProduto, valorProduto);

        // Adiciona o novo produto ao array de produtos
        produtos.push(novoProduto);

        // Limpa o formulário
        cadastroForm.reset();

        // Atualiza a tabela de listagem de produtos
        atualizarTabela(listaProdutos, produtos);
    });

    novoProdutoBtn.addEventListener("click", function () {
        // Mostra o formulário de cadastro
        cadastroForm.style.display = "block";
    });

    // Oculta o formulário de cadastro inicialmente
    cadastroForm.style.display = "none";

    // Função para atualizar a tabela de listagem de produtos
    function atualizarTabela(listaProdutos, produtos) {
        const tbody = listaProdutos.querySelector("tbody");

        // Limpa a tabela removendo todas as linhas
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        // Preencha a tabela com os produtos
        produtos.forEach(function (produto) {
            const newRow = tbody.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            cell1.innerHTML = produto.nome;
            cell2.innerHTML = produto.valor;
        });

        // Ordena a lista de produtos com base no valor (coluna 1)
        const rows = Array.from(tbody.rows);
        rows.sort((a, b) => parseFloat(a.cells[1].textContent) - parseFloat(b.cells[1].textContent));
        rows.forEach(row => tbody.appendChild(row));
    }
});