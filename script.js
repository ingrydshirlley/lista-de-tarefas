let input = document.getElementById("input-principal");
let botao = document.getElementById("botao-adicionar");
let listaCompleta = document.getElementById("tarefas");

let arrayDeTarefas = [];

function mostrarNaTela() {
    listaCompleta.innerHTML = "";

    arrayDeTarefas.forEach((tarefa, index) => {
        let itemTarefa = document.createElement("li");
        itemTarefa.classList.add("item-tarefa");

        let nomeTarefa = document.createElement("p");
        nomeTarefa.classList.add("nome-tarefa");
        nomeTarefa.innerText = tarefa.nome;
        if (tarefa.concluida) {
            nomeTarefa.classList.add("concluida");
        }

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.dataset.index = index;
        checkbox.checked = tarefa.concluida;
        checkbox.addEventListener("change", () => termineiTarefa(index));

        itemTarefa.appendChild(checkbox);
        itemTarefa.appendChild(nomeTarefa);
        listaCompleta.appendChild(itemTarefa);
    });
}

function termineiTarefa(index) {
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida;
    mostrarNaTela();
}

function cliqueiNoBotao() {
    arrayDeTarefas.push({ nome: input.value, concluida: false });
    mostrarNaTela();
    input.value = "";
}

botao.addEventListener("click", cliqueiNoBotao);