document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastroProduto");
    const listaProdutos = document.getElementById("listaProdutos");
    const novoProdutoBtn = document.getElementById("novoProdutoBtn");

    cadastroForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nomeProduto = document.getElementById("nomeProduto").value;
        const valorProduto = document.getElementById("valorProduto").value;

        // Adicione o novo produto à lista
        const newRow = listaProdutos.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.innerHTML = nomeProduto;
        cell2.innerHTML = valorProduto;

        // Limpe o formulário
        cadastroForm.reset();

        // Ordena a lista de produtos com base no valor (coluna 1)
        const rows = Array.from(listaProdutos.rows);
        rows.sort((a, b) => parseFloat(a.cells[1].textContent) - parseFloat(b.cells[1].textContent));
        rows.forEach(row => listaProdutos.appendChild(row));
    });

    novoProdutoBtn.addEventListener("click", function () {
        // Mostra o formulário de cadastro
        cadastroForm.style.display = "block";
    });

    // Oculta o formulário de cadastro inicialmente
    cadastroForm.style.display = "none";
});
