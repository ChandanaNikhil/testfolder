var PLAY = 1;
var END = 0;
var gameState = PLAY;

var skybg, waterbg, shipimg, helicopterimg, bombimg;
var water, ship, helicopter, bomb;
var helicopterGroup, bombGroup;
var score = 0;



function preload(){
  skybg = loadImage("skybg.jpg");
  waterbg = loadImage("waterbg.png");
  shipimg = loadImage("ship.png","ship2.png");
  helicopterimg = loadImage("helicopter.png");
  bombimg = loadImage("bomb.png");
}

function setup() {
  
  createCanvas(800, 450);
  water=createSprite(200,320);
  water.addImage(waterbg);
  water.velocityX=-4;
  //creating water ground

 ship=createSprite(100,300,50,50);
 ship.addImage(shipimg);
 ship.scale=0.4;
  //creating ship

  helicopterGroup=new Group();
 //creating helicopter group

bombGroup=new Group();
  //creating bomb group
  
    
ship.debug="true";

  //ship.debug = "true";

}

function draw() {
  background(skybg);
  fill("yellow")
  textSize(15);
  text("SURVIVAL TIME: "+ score, 600,30);
  
    
  //gameState play
  if(gameState === PLAY){
    //increase score
    score = score + Math.round(frameCount/300);
    spawnHelicopter();
    spawnBomb();
    ship.x=World.mouseX;
    //Call user defined function
   
    
    
    if(ship.isTouching(bombGroup)){
      gameState=END;
    }
  }
  
  //gameState end
  if(gameState == END){
    var end=createSprite(300,300);
    end.addImage("gameOver.png");
    water.velocityX=0;
   //water velocity becomes zero
helicopter.destroyEach();
   //destroy Helicopter group
bomb.destroyEach();
   //destroy bomb group
    
  
    
  }
  
 
 //for infinite background 
 if(water.position.x < 300){
  water.position.x = 400;
  }
    
  
  drawSprites();
}


function spawnHelicopter(){
  if(frameCount%100 === 0){
    helicopter = createSprite(800,80,200,50);
    helicopter.addImage("helicopter",helicopterimg);
    helicopter.setVelocity(-5,0);
    
    helicopter.scale = 0.5;
    
    helicopterGroup.add(helicopter);
  }
}

function spawnBomb(){
  if(frameCount%100==0){
    bomb=createSprite(Math.round(random(50,450)),80);
    
 bomb.addImage(bombimg);
  bomb.velocityY=6;
  bomb.scale=0.1;
    
  }
 // create bombs at random position
 //use Math.random
}




