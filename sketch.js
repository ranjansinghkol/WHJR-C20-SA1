const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var obstacle;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }

  var ground_options = {
    isStatic: true
  };

  var obstacle_options = {
    isStatic: true
  };

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(100, 10, 20, ball_options);
  World.add(world, ball);

  obstacle = Bodies.rectangle(100, 200, 75, 5, obstacle_options);
  World.add(world, obstacle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  noStroke();
}


function draw() {
  background(255);
  Engine.update(engine);

  fill(51);

  ellipse(ball.position.x, ball.position.y, 20);

  push();
  fill(177);
  rect(ground.position.x, ground.position.y, 400, 20);
  pop();

  push();
  fill(0, 255, 0);
  rect(obstacle.position.x, obstacle.position.y, 75, 5);
  pop();
}