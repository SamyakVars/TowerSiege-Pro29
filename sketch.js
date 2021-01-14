const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,poly,ground;
var base1,base2;
var sling;
var polyImg;
function preload(){
  polyImg=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground();

  base1 = new Stand(390,275,250,10);
  base2 = new Stand(720,225,200,10);
 
  //1 level
  block1 = new Block(300,250,30,40);
  block2 = new Block(330,250,30,40);
  block3 = new Block(360,250,30,40);
  block4 = new Block(390,250,30,40);
  block5 = new Block(420,250,30,40);
  block6 = new Block(450,250,30,40);
  block7 = new Block(480,250,30,40);

  //2 level
  block8 = new Block(330,210,30,40);
  block9 = new Block(360,210,30,40);
  block10 = new Block(390,210,30,40);
  block11 = new Block(420,210,30,40);
  block12 = new Block(450,210,30,40);

  //3 level
  block13 = new Block(360,170,30,40);
  block14 = new Block(390,170,30,40);
  block15 = new Block(420,170,30,40);

  //4 level
  block16 = new Block(390,130,30,40);

  //second pyamid

  // 1 level
  cube1 = new Block(660,200,30,40);
  cube2 = new Block(690,200,30,40);
  cube3 = new Block(720,200,30,40);
  cube4 = new Block(750,200,30,40);
  cube5 = new Block(780,200,30,40);
  //2 level
  cube6 = new Block(690,160,30,40);
  cube7 = new Block(720,160,30,40);
  cube8 = new Block(750,160,30,40);
  //3 level
  cube9 = new Block(720,120,30,40);

  poly = Bodies.circle(50,200,20);

  World.add(world,poly);

  sling = new Slingshot(poly,{x:100,y:200});

}
function draw() {
  background(56,44,44); 

  textSize(20);
  fill("lightyellow");
  text("Launch the hexagonal block by dragging and releasing.",100,30);

  ground.display();
  base1.display();
  base2.display();

  strokeWeight(2);
  stroke(15);


  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("orange");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("yellow");
  block13.display();
  block14.display();
  block15.display();

  fill("white");
  block16.display();


  fill("darkblue");
  cube1.display();
  cube2.display();
  cube3.display();
  cube4.display();
  cube5.display();

  fill("blue");
  cube6.display();
  cube7.display();
  cube8.display();

  fill("lightblue")
  cube9.display();


  fill("gold");
  imageMode(CENTER)
  image(polyImg ,poly.position.x,poly.position.y,40,40);

  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}