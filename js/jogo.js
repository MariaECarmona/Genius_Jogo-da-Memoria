let btnCentralEl = document.querySelector("#btnCentral");
let btnColoridoEl = document.querySelectorAll(".btnColorido");
let msgStartStopEl = document.querySelector("#btnCentral p")
let jogoIniciado = false;
let sequencia = [];
let btnClicked = null;
let perdeu = false;

const btnVermelho = 0;
const btnAzul = 1;
const btnAmarelo = 2;
const btnVerde = 3;

function iniciaJogo(){
    jogoIniciado = true;

    btnColoridoEl[0].style.filter = "brightness(1)";
    setTimeout(() => {btnColoridoEl[1].style.filter = "brightness(1)";}, 300);
    setTimeout(() => {btnColoridoEl[3].style.filter = "brightness(1)";}, 600);
    setTimeout(() => {btnColoridoEl[2].style.filter = "brightness(1)";}, 900);

    for(let botao of btnColoridoEl){
        setTimeout(() => {botao.style.filter = "brightness(0.7)";}, 1500);
    }

    clearTimeout();
    msgStartStopEl.innerText = "STOP";  
}

function finalizaJogo(){
    jogoIniciado = false;
    
    btnColoridoEl[0].style.filter = "brightness(1)";
    setTimeout(() => {btnColoridoEl[0].style.filter = "brightness(0.7)";}, 300);

    setTimeout(() => {btnColoridoEl[1].style.filter = "brightness(1)";}, 600);
    setTimeout(() => {btnColoridoEl[1].style.filter = "brightness(0.7)";}, 900);

    setTimeout(() => {btnColoridoEl[3].style.filter = "brightness(1)";}, 1200);
    setTimeout(() => {btnColoridoEl[3].style.filter = "brightness(0.7)";}, 1500);

    setTimeout(() => {btnColoridoEl[2].style.filter = "brightness(1)";}, 1800);
    setTimeout(() => {btnColoridoEl[2].style.filter = "brightness(0.7)";}, 2100);

    msgStartStopEl.innerText = "START";
}

function sorteiaRodada(){
    return Math.round(Math.random() * 3);
}

for(let btn of btnColoridoEl){
    btn.addEventListener("click", ()=>{
        btnClicked = btn.id;
        
        if(btnClicked == "btnVermelho"){
            btnClicked = btnVermelho;
        } else if(btnClicked == "btnAzul"){
            btnClicked = btnAzul;
        } else if(btnClicked == "btnAmarelo"){
            btnClicked = btnAmarelo;
        } else{
            btnClicked = btnVerde;
        }
    });
}

btnCentralEl.addEventListener("click", ()=>{
    if(!jogoIniciado){
        iniciaJogo();

        while (!perdeu){
            jogo();
        }
    } else{
        finalizaJogo();
    }
});

function jogo(){
    rodada = sorteiaRodada();
    sequencia.push(rodada);
    setTimeout(() => {btnColoridoEl[rodada].style.filter = "brightness(1)";}, 2000);
    setTimeout(() => {btnColoridoEl[rodada].style.filter = "brightness(0.7)";}, 2400);

    if(btnClicked == rodada){
        console.log("Ponto");
    } else{
        perdeu = true;
    }

    // while(jogoIniciado){
    //     if(btnClicked != sequencia[0] && btnClicked == null){
    //         jogoIniciado = false;
    //     } else{
    //         console.log("gay");
    //         btnClicked = null;
    //         rodada = sorteiaRodada();
    //         sequencia.push(rodada);
    //         setTimeout(() => {btnColoridoEl[rodada].style.filter = "brightness(1)";}, 2000);
    //         btnColoridoEl[rodada].style.filter = "brightness(0.5)";
    //     }
    //     
    // }
}
