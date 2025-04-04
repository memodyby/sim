//imagens e som
let imagemDaEstrada;
let imagemDoPersonagem;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;

//som som som 
let somDaColisao;
let somDosPontos;
let somDaTrilha;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoPersonagem = loadImage("imagens/ator-1.png");
    imagemDoCarro1 = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDosPontos = loadSound("sons/pontos.wav");
    somDaTrilha = loadSound("sons/trilha.mp3");
    imagemDoCarro = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3, imagemDoCarro1, imagemDoCarro2, imagemDoCarro3]
  }