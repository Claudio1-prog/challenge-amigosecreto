// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim()

    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!soloLetras.test(nombre)) {
        alert("El nombre solo puede contener letras");
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    input.value = "";
    mostarAmigos();
}



function mostarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }

}



function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000);


}





