var jogador = "X";

function jogar (celula){
    if(celula.innerHTML == ""){
     celula.innerHTML = jogador;
     if(jogador == "X"){
        jogador = "O";
     }else{
        jogador = "X";
     }
    }
}


function checkWin() {
   var cells = document.getElementsByTagName("td");
   var winPatterns = [
       [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
       [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
       [0, 4, 8], [2, 4, 6]             // Diagonais
   ];

   for (var i = 0; i < winPatterns.length; i++) {
       var [a, b, c] = winPatterns[i];
       if (cells[a].innerHTML !== "" && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
           return true;
       }
   }
   return false;
}

function reiniciar(){
         window.location.reload();
}



