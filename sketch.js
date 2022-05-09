//Comentei as linhas 48,49,50 e 68 visto que geram problemas ao serem executadas(não identifiquei o erro)
//A linha 33 não funcionou
var fundo,fundoImg;
var nave,naveImg;
var asteroide,asteroideImg,asteroideGrupo;

var gameState = "play";

var score;

function preload(){
    fundoImg = loadImage("espaco.png");
    naveImg = loadImage("nave-semfundo.png");
    asteroideImg = loadImage("meteoro-semfundo.png");

}

function setup() {
    createCanvas(800,400);

    fundo = createSprite(400,200,800,400);
    fundo.scale = 1;
    fundo.addImage("espaco",fundoImg);
    

    nave = createSprite(80,400,10,10);
    nave.addImage("nave",naveImg);
    nave.scale = 0.2;
}

function draw() {
    background(255); 
    text("score = "+score,750,380);
    
     if(gameState === "play"){
       fundo.velocityX = -3; 
       score = score + Math.round(frameCount/60);
       
       nave.y = World.mouseY; 
    if(frameCount%50===0){
    spawnAsteroides();
    }
     if(fundo.x < 400){
        fundo.x = fundo.width/2;
     } 
   
// if(nave.isTouching(asteroide)){
      // gameState = "end";
  // }

    }
    if(gameState === "end"){
       nave.y = 200;
        text("pressione a tecla espaço para recomeçar",400,200);
        if(keyDown(SPACE)){
            reset();
        }
    } 
    
    drawSprites();
}

function spawnAsteroides(){    
    asteroide = createSprite(800,Math.round(random(100,700)),10,10); 
    asteroide.scale = 0.2;
    asteroide.addImage("asteroide",asteroideImg);
    asteroide.velocityX = -10;
    //asteroideGrupo.add(asteroide);
}

function reset(){
    gameState = "play";
    asteroideGrupo.destroyEach();
    score = 0;
}