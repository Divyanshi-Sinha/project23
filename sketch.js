const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,con1,co2,con3,con4,con5;
var ball1 , ball2 , ball3 , ball4, ball5;


function setup() {
	createCanvas(1800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

  var ball_options = {	
    restitution :1
    }
    fill("red")
    ball1 = Bodies.circle(530,385,30,ball_options);
    World.add(world,ball1);
    fill("red")
    ball2 = Bodies.circle(580,395,30,ball_options);
    World.add(world,ball2);
    fill("red")
    ball3 = Bodies.circle(630,395,30,ball_options);
    World.add(world,ball3);
    fill("red")
    ball4 = Bodies.circle(680,395,30,ball_options);
    World.add(world,ball4);
    fill("red")
    ball5 = Bodies.circle(728,389,30,ball_options);
    World.add(world,ball5);
      
   
con1 = Matter.Constraint.create({
pointA:{x:530,y:100},
bodyB:ball1,
pointB:{x:0,y:0},
length:300,
stiffness:0.1 
})
World.add(world,con1);

con2 = Matter.Constraint.create({
pointA:{x:580,y:100},
bodyB:ball2,
pointB:{x:0,y:0},
length:300,
stiffness:0.1 
})
World.add(world,con2);

con3 = Matter.Constraint.create({
pointA:{x:630,y:100},
bodyB:ball3,
pointB:{x:0,y:0},
length:300,
stiffness:0.1 
})
World.add(world,con3);

con4 = Matter.Constraint.create({
  pointA:{x:680,y:100},
  bodyB:ball4,
  pointB:{x:0,y:0},
  length:300,
  stiffness:0.1 
  })
  World.add(world,con4);

  con5 = Matter.Constraint.create({
    pointA:{x:728,y:100},
    bodyB:ball5,
    pointB:{x:0,y:0},
    length:300,
    stiffness:0.1 
    })
    World.add(world,con5);

    var roof_options={
      isStatic:true			
    }
   
    roof = Bodies.rectangle(627,100,270,20,roof_options);
      World.add(world,roof);
    Engine.run(engine);

	
  keyPressed();
}

function draw() {
  rectMode(CENTER);
  background("purple");
  ellipse(ball1.position.x,ball1.position.y,50);
  ellipse(ball2.position.x,ball2.position.y,50);
  ellipse(ball3.position.x,ball3.position.y,50);
  ellipse(ball4.position.x,ball4.position.y,50);
  ellipse(ball5.position.x,ball5.position.y,50);
   rect(roof.position.x,roof.position.y,270,20);
   line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
 
  
 }


function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1,{x:200,y:100},{x:-0.25,y:0})

}
}


