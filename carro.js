//codigo do carro
let xCarro = [600, 600, 600, 600, 600, 600]
let yCarro = [45, 96, 150, 210, 270, 318]
let velocidadeCarro = [2, 2.5, 3.2, 5, 4.3, 3.3]
let comprimentoCarro = 55
let alturaCarro = 30

function imagemCarro(){
  for(let i = 0; i < imagemDoCarro.length; i++){
    image(imagemDoCarro[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro)
   }
  }
  
  function movimentaCarro(){
    for(let i = 0; i < imagemDoCarro.length; i++){
  xCarro[i] -= velocidadeCarro[i];
  }  
}

function voltaposicaoCarro(){
  for(let i = 0; i < imagemDoCarro.length; i++){
  if(passsouTodaATela(xCarro[i])){
    xCarro[i] = 600
  }
 }
}

function passsouTodaATela(xCarro){
  return xCarro < - 50
}