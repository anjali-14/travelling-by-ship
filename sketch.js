
var trex , trex_running;
var ground, groundImage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,400)
  
  //create a trex sprite
 trex = createSprite(100,200,50,50);
 trex.addAnimation("running",trex_running );

 ground = createSprite(0,400,600,20);
 ground.addImage("scrolling",groundImage);
}

function draw(){
  background("white")
  ground.velocityX = -4;

  if(ground.x < 0 ){
ground.x = width/2;
  }

if(keyDown("space")){
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY +0.8

trex.collide(ground);
drawSprites();
}
