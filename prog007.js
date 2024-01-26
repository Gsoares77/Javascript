function sortear(){
    //recebe valores do input do html já fazendo o casting
    var pisoDoSorteio = Number(document.getElementById("pisoDoSorteio").value);
    var tetoDoSorteio = Number(document.getElementById("tetoDoSorteio").value);
    var minhaAposta = Number(document.getElementById("minhaAposta").value);

    //sorteio
    var numeroSorteado = Math.round(Math.random()*(tetoDoSorteio - pisoDoSorteio) + pisoDoSorteio);

    document.write( numeroSorteado == minhaAposta); //ganhei?
    console.log("o número sorteado foi: " + numeroSorteado);//qual número foi sorteado?
}