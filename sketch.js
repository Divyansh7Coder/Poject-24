
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rect1,rect2,rect3;
var kagaj;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(width/2,670,width,20);

	rect1 = createSprite(900,680,100,20);
	rect1.shapeColor=color("orange");
	rect2 = createSprite(960,640,20,100);
	rect2.shapeColor=color("orange");
	rect3 = createSprite(800,600,100,20);
	rect3.shapeColor=color("orange");
	kagaj = new Kagaj(200,450,40);
}


function draw() {
	background(255);
  rectMode(CENTER);
  background(0);
  ground.display();
  rect1.display();
  kagaj.display()
  drawSprites();
 
}



