
const JOGADOR = 0;
const COMPUTADOR = 1;

// ! guarda as jogadas realizadas ou espaços vazios
var jogo = [];

// ! onde será processado o jogo
var tabuleiro = [];
var quemJoga = JOGADOR;
var verifica;
var jogando = true;
var nivelDificuldade = 2;
var jogadaDoPlayer = [];

var quemComeca;



function jogar(linha, coluna){
   

    if( jogando && quemJoga == JOGADOR ){
        if( campoEstaVazio(linha, coluna) ){
            jogo[linha][coluna] = "X";
            
            if(nivelDificuldade == 2)
                jogadaDoPlayer = [linha, coluna];
            
            
            atualizaTabuleiro(linha,coluna);
           
        }
    } 


    
}

function jogadaDaCPU(){
  
    if(jogando){
        
        if(nivelDificuldade == 1){

            jogadaRandomica(jogada);

        }else{

            if( jogadaDoPlayer.lenght == 0){
                

            }else{
                
                if( jogadaDoPlayer[0] == 1 ){
                    if( jogo[ jogadaDoPlayer[0] + 1 ][ jogadaDoPlayer[1] ] ){
                        
                    }
                }

                atualizaTabuleiro(linha, coluna); 
            }

        }
    }
}

function jogadaRandomica(){
    var linha, coluna;
    
    do {
        linha = Math.round(Math.random() * 2);
        coluna = Math.round(Math.random() * 2);
    } while (!campoEstaVazio(linha, coluna));

    jogo[linha][coluna] = "O";

    atualizaTabuleiro(linha, coluna); 

}

function atualizaTabuleiro(linha, coluna){
   
    tabuleiro[linha][coluna].innerText = quemJoga == JOGADOR ? "X" : "O";

    verifica = verificaVitoria();
    if (verifica !== "") {
        setTimeout(function(){
            alert(verifica + " ganhou");
        },100)

        jogando = false;
        return;
    }

    quemJoga = quemJoga == JOGADOR ? COMPUTADOR : JOGADOR;

    if (quemJoga == COMPUTADOR) {
        jogadaDaCPU();
        document.getElementById("quemComeca").innerText = "Quem joga: CPU";
    }
    else {
        document.getElementById("quemComeca").innerText = "Quem joga: Jogador";
    }
}

function campoEstaVazio(linha, coluna){
    return jogo[linha][coluna] == "";
}

function verificaVitoria(){

    for(var linha = 0; linha <3; linha++){
        if (jogo[linha][0] == jogo[linha][1] && jogo[linha][0] == jogo[linha][2])
            return jogo[linha][0];
    }

    for (var coluna = 0; coluna < 3; coluna++) {
        if (jogo[0][coluna] == jogo[1][coluna] && jogo[0][coluna] == jogo[2][coluna])
            return jogo[0][coluna];
    }

    if (jogo[0][0] == jogo[1][1] && jogo[0][0] == jogo[2][2])
        return jogo[0][0];

    if (jogo[0][2] == jogo[1][1] && jogo[0][2] == jogo[2][0])
        return jogo[0][2];

    return "";
}


function iniciarJogo(){

    quemComeca = quemJoga = Math.round(Math.random() * 1);
    jogando = true;
    jogadaCpu=1;

    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    
    
    for (let index = 1, itens = [] ; index <= 9; index++) {

        document.getElementById("p" + index).innerText = "";
        
        
        itens.push( document.getElementById("p" + index) );

        if(index % 3 == 0){
            tabuleiro.push(itens);
            itens = [];
        }
    }

    if(quemComeca == COMPUTADOR){
        document.getElementById("quemComeca").innerText = "Quem joga: CPU";
        jogadaDaCPU();
        return;
    }

    document.getElementById("quemComeca").innerText = "Quem joga: Jogador";

  
    
}

window.addEventListener("load", iniciarJogo);

