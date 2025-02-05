document.addEventListener("DOMContentLoaded", function () {
    let nomes = [];

    function adicionarNome() {
        let input = document.getElementById("nome");
        let nome = input.value.trim();
        if (nome === "") {
            alert("Por favor, digite um nome válido.");
            return;
        }
        nomes.push(nome);
        atualizarLista();
        input.value = "";
    }

    function atualizarLista() {
        let listaDiv = document.getElementById("lista");
        listaDiv.innerHTML = `<h3>Participantes:</h3><p>${nomes.join(", ")}</p>`;
    }

    function sortear() {
        if (nomes.length < 2) {
            alert("Adicione pelo menos dois nomes para realizar o sorteio.");
            return;
        }
        let sorteados = [...nomes];
        sorteados.sort(() => Math.random() - 0.5);
        let sorteado = sorteados[Math.floor(Math.random() * sorteados.length)];
        document.getElementById("resultado").innerHTML = `<h3>Nome Sorteado:</h3><p>${sorteado}</p>`;
    }

    function reiniciarJogo() {
        nomes = [];
        document.getElementById("lista").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    }

    document.getElementById("btnAdicionar").addEventListener("click", adicionarNome);
    document.getElementById("btnSortear").addEventListener("click", sortear);
    document.getElementById("btnReiniciar").addEventListener("click", reiniciarJogo);
});