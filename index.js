const tabuleiro = document.querySelectorAll(".casa")
let contador = 0;

function clicar(){
    contador ++;
    
    if(contador % 2){
        this.innerHTML = "X"
        this.style.color = "blue"
    }
    else{
        this.innerHTML = "O"
        this.style.color = "yellow"
    }
    this.onclick = null;

    if(contador >=5){
        verificar();
    }
    
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML && casa1.innerHTML !==""){
        return true;
    }
    return false;
}

function verificar(){
    if(comparar(tabuleiro[0], tabuleiro[1], tabuleiro[2])||
    comparar(tabuleiro[3], tabuleiro[4], tabuleiro[5])||
    comparar(tabuleiro[6], tabuleiro[7], tabuleiro[8])||
    comparar(tabuleiro[0], tabuleiro[3], tabuleiro[6])||
    comparar(tabuleiro[1], tabuleiro[4], tabuleiro[7])||
    comparar(tabuleiro[2], tabuleiro[5], tabuleiro[8])||
    comparar(tabuleiro[0], tabuleiro[4], tabuleiro[8])||
    comparar(tabuleiro[2], tabuleiro[4], tabuleiro[6])
){  
    alert("Venceu!");
       for(casa in tabuleiro){
           tabuleiro[casa].onclick = null;
       }
    }
}   



for(casa in tabuleiro){
    tabuleiro[casa].onclick = clicar;
}

/*Perguntar o nome de cada jogador e qual o simbolo que ele quer jogar (apenas 1 caractere)
-Colocar no modal o nome do jogador vencedor ou se empatou
- Exibir no modal o nome do jogador vencedor ou se empatou
- Colocar um botao para reiniciar a partida
- Implementar contador de vitorias*/ 

