var trex, trex_running;

function preload(){
    trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
}

function setup(){
    createCanvas(600, 200);

    trex = createSprite(50, 160, 20, 50);
    trex.addAnimation("running",trex_running);

      //agregar tamaño y posición al Trex
    trex.scale = 0.5;
    trex.x = 50
}

function draw(){
    background("grey");

    //cargar la posición Y del Trex
    console.log(trex.y)
  
    //hacer que el Trex salte al presionar la barra espaciadora
    if(keyDown("space")){
        trex.velocityY = -10;
    }

    trex.velocityY = trex.velocityY + 0.5;
    
    drawSprites();
}