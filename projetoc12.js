var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  path = loadImage ("path.png")
  //loadAnimation (carregarAnimação) de corrida para o menino
 boy = loadImage ("Jake1.png,Jake2.png,Jake3.png,Jake4.PNG,Jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
path.createSprite(400,400)
//adicione uma imagem para a pista
path.addImage ("path.png")
}
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = 2
path.scale=1.2;

//crie um sprite de menino
boy.createSprite(150,150)
//adicione uma animação de corrida para ele
boy.addImage ("runner-1.png,runner-2.png")
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);{
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.MouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
