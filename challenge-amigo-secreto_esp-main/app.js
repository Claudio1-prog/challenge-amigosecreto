// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigos() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim()

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(nombre);
    input.value = "";

}




