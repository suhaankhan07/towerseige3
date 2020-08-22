const Engine = Matter.Engine;
const World= Matter.World;  
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var score = 10;

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;



  //level 1
  block1 = new Block(400,440,30,40);
  
  //level 2
  block2 = new Block(370,470,30,40);
  block3 = new Block(400,470,30,40);
  block4 = new Block(430,470,30,40);
  
  //level 3
  block5 = new Block(340,500,30,40);
  block6 = new Block(370,500,30,40);
  block7 = new Block(400,500,30,40);
  block8 = new Block(430,500,30,40);
  block9 = new Block(460,500,30,40);

  //level 4
  block10 = new Block(310,530,30,40);
  block11 = new Block(340,530,30,40);
  block12 = new Block(370,530,30,40);
  block13 = new Block(400,530,30,40);
  block14 = new Block(430,530,30,40);
  block15 = new Block(460,530,30,40);
  block16 = new Block(490,530,30,40);

  //new blocks
  
  //level1
  block17 = new Block(800,110,30,40);

  //level2
  block18 = new Block(770,140,30,40);
  block19 = new Block(800,140,30,40);
  block20 = new Block(830,140,30,40);

  //leve3
  block21 = new Block(740,170,30,40);
  block22 = new Block(770,170,30,40);
  block23 = new Block(800,170,30,40);
  block24 = new Block(830,170,30,40);
  block25 = new Block(860,170,30,40);



  ground1 = new Ground(400,560,250,20)
  ground2 = new Ground(800,200,180,20)

  ball = new Ball(139,330,20);

  slingshot = new SlingShot(ball.body,{x:139,y:330});
 

}




function draw() {

  backGroundImage(); 
   
  Engine.update(engine);
 
 

  textSize(15);
  fill("green");
  text("SCORE = " + score ,850,100);


 block1.display();
 block1.score();
 

 block2.display();
 block2.score();

 block3.display();
 block3.score();
 
 block4.display();
 block4.score();

 block5.display();
 block5.score();
 
 block6.display();
 block6.score();
 
 block7.display();
 block7.score();

 block8.display();
 block8.score();
 
 block9.display();
 block9.score();

 block10.display();
 block10.score();

 block11.display();
 block11.score();

 block12.display();
 block12.score();

 block13.display();
 block13.score();

 block14.display();
 block14.score();

 block15.display();
 block15.score();

 block16.display();
 block16.score();
 
 //new level
 block17.display();
 block17.score();

 block18.display();
 block18.score();

 block19.display();
 block19.score();
 
 block20.display();
 block20.score();

 block21.display();
 block21.score();

 block22.display();
 block22.score();
 
 block23.display();
 block23.score();

 block24.display();
 block24.score();

 block25.display();
 block25.score();

 ground1.display();
 ground2.display();

 ball.display();


 slingshot.display();

  


  drawSprites();

  

  

}

function mouseDragged() {
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(ball.body);
  }
}

async function backGroundImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();
   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);

   if(hour >= 06 && hour <= 19) {
    background(255,255,0);
  } 
  else {
    background(0,0,0); 
  }
}

