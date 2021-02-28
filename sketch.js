
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bob1, bob2, bob3, bob4, bob5;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200,600,15);
	bob2 = new Bob(230,600,15);
	bob3 = new Bob(260,600,15);
	bob4 = new Bob(290,600,15);
	bob5 = new Bob(320,600,15);
	roof1 = new Roof(260,400,175,10);

	rope1= new Rope(bob1.body,roof1.body,-60,0);
	rope2= new Rope(bob2.body,roof1.body,-30,0);
	rope3= new Rope(bob3.body,roof1.body,0,0);
	rope4= new Rope(bob4.body,roof1.body,30,0);
	rope5= new Rope(bob5.body,roof1.body,60,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-200}); } 
} 



