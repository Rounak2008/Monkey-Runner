
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var bananaGroup, obstacleGroup
  var ground;
  var score;
  var survivalTime=0;
  function preload(){

    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }



  function setup() {

    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;

   ground=createSprite(80,400,900,20);
   ground.velocityX=-4;
   
   console.log(ground.x);

   bananaGroup=new Group();
   obstacleGroup=new Group();
    

  }


  function draw() {
   background("white") ;
    
    if(keyDown("space")) {
    monkey.velocityY = -13;
   }
    monkey.velocityY = monkey.velocityY + 1
    monkey.collide(ground); 

     
   
  
   
  if (ground.x < 0){
      ground.x = ground.width/2;
    
    
    }
   spawnBanana(); 
   spawnObstacle(); 
   drawSprites(); 
    
   stroke("white");
   textSize(20);
   fill("white");
   text("Score:"+score,500,50);
   
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime=Math.ceil(frameCount/frameRate()) 
   text("Survival Time:"+survivalTime,100,50);
     
    
    
  }
function spawnBanana(){
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -3;
    banana.lifetime = 200;
   bananaGroup.add(banana);
 }   
}
  function spawnObstacle(){
 if (frameCount % 300 === 0) {
  var obstacle = createSprite(800,370,10,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;
  obstacle.velocityX = -6;
  obstacle.lifetime = 300;
  obstacleGroup.add(obstacle) ;
 }   
}


  




