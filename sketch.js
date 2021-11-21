const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var balls = [];
var Astoroid;
var bg2;
var AsteroidSpritedata, AsteroidSpritesheet;
var brokenAsteroidAnimation = [];
var brokenAsteroidSpritedata, brokenAsteroidSpritesheet;



function preload(){
  
  bg2 = loadImage("bg2.jpg");
  player1 = loadImage("player1.png");
  Asteroid = loadImage("Asteroid.png");
  AsteroidSpritedata = loadJSON("assets/boat/boat.json");
  AsteroidSpritesheet = loadImage("assets/boat/boat.png");
  brokenAsteroidSpritedata = loadJSON("assets/boat/broken_boat.json");
  brokenAsteroidSpritedata = loadImage("assets/boat/broken_boat.png");
  
 
}

function setup() {
  createCanvas(1200, 600);

 
  
  bg2.addImage
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  
}



function draw() 
{
  background(189);
  drawSprites();
  
image(bg2, 0, 0, width, height);



}




