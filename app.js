//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        exibirTextoNaTela("h2", "Digite um nome");
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}
    function atualizarLista () {
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";
    }
    function sortearAmigo() {
         if (amigos.length === 0) {
             exibirTextoNaTela("h2", "Digite um nome");
             return;

         }

         let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
         let resultado = document.getElementById("resultado");
         resultado.innerHTML = `O seu amigo secreto é: ${sorteado}`;
         
         let limparLista =document.getElementById("listaAmigos");
         limparLista.innerHTML = "";
         return;
}

