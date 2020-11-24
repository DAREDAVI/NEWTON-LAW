
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  ground1 = new Ground(400,100,300,40);
  chain1 = new Chain(bob1.body,ground1.body,-50*2,0);
  chain2= new Chain(bob2.body,ground1.body,-25*2,0);
  chain3= new Chain(bob3.body,ground1.body,-0*2,0);
  chain4= new Chain(bob4.body,ground1.body,25*2,0);
  chain5= new Chain (bob5.body,ground1.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background(10);


  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  ground1.display();
 chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
  

  keyPressed();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 




