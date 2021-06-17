const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
     
 ground= new Ground(600,220,100,20)
 ground1 = new Ground(400,360,100,20)
 box1 = new Box(600,200,20,20)
 box2 = new Box(580,200,20,20)
 box3 = new Box(560,200,20,20)
 box4 = new Box(620,200,20,20)
 box5 = new Box(640,200,20,20)
 box6 = new Box(630,180,20,20)
 box7 = new Box(590,180,20,20)
 box8 = new Box(570,180,20,20)
 box9 = new Box(610,180,20,20)
 box10 = new Box(620,160,20,20)
 box11 = new Box(600,160,20,20)
 box12 = new Box(580,160,20,20)
 box13 = new Box(590,140,20,20)
 box14 = new Box(610,140,20,20)
 box15 = new Box(600,120,20,20)
 box16 = new Box(400,340,20,20)
 box17 = new Box(420,340,20,20)
 box18 = new Box(380,340,20,20)
 box19 = new Box(360,340,20,20)
 box20 = new Box(370,320,20,20)
 box21 = new Box(390,320,20,20)
 box22 = new Box(410,320,20,20)
 box23 = new Box(380,300,20,20)
 box24 = new Box(400,300,20,20)
 box25 = new Box(390,280,20,20)
 movingbox= new movingBox(200,50,20,20)
 slingshot = new SlingShot(movingbox.body,{x:200, y:50});

}

function draw() {
  background("blue");  
  
  ground.display()
  ground1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  movingbox.display()
  slingshot.display()
}

function mouseDragged(){
  Matter.Body.setPosition(movingbox.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingshot.fly()
  gameState = "launched";
}




function keyPressed(){
  if(keyCode===32)
  {Matter.Body.setPosition(movingbox.body,{x:200,y:200})
  slingshot.attach(movingbox.body);
}}
