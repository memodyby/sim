
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  imagemCarro();
  movimentaCarro();
  movimentaPersonagem();
  voltaposicaoCarro();
  verificacolisao();
  incluiPontos();
  marcaPonto();
}