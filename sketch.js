const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 20);

  ground = new Ground(400, 640, 2000, 20);
  
  leftSide = new Bin(885, 550, 20, 150);
  bottom = new Bin(1000, 620, 250, 20);
  rightSide = new Bin(1115, 538, 20, 145);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(200);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}
function keyPressed(){
  
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
  }
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-50})
  }
};