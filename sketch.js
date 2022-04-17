

var trex, trex_running;


function preload(){
 
  
  trex_running = loadAnimation("trex_2.png","trex_1.png","trex_3.png");
  
  
}

function setup() {
  createCanvas(800, 800);
  
  
  
  trex = createSprite(200,200,20,50);
  
  
  trex.addAnimation("running", trex_running);
  trex.scale = 0.08
  
}

function draw() {

  background("lightblue");
 
  


  drawSprites();
}