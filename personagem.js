//codico do personagem
let yPersonagem = 366;
let xPersonagem = 119;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem(){
    image(imagemDoPersonagem, xPersonagem, yPersonagem, 30, 30)
  }

  function movimentaPersonagem(){
    if(keyIsDown(UP_ARROW)){
      yPersonagem -= 3;
    }

    if(keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yPersonagem += 3;
      }
   }

    if(keyIsDown(RIGHT_ARROW)){
      xPersonagem += 3;
   }

   if(keyIsDown(LEFT_ARROW)){
    xPersonagem -= 3;
   }
}

  function verificacolisao(){
    for(let i = 0; i < imagemDoCarro.length; i++){
      colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
      if(colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
        if(pontosMaiorQueZero()){
        meusPontos -= 1
        }
      }
    }
  }

  function voltaAtorParaPosicaoInicial(){
    yPersonagem = 366
  }

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(128,0,0)
    text(meusPontos, innerWidth / 8, 28);
}

function marcaPonto(){
  if(yPersonagem < 15){
    meusPontos += 1
    voltaAtorParaPosicaoInicial();
    somDosPontos.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yPersonagem < 366;
}