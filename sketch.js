const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box,box2,ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
   ground=new Ground(200,380,400,20)
    

    box = new Box(200,100,20,20);
    box2 = new Box(210,50,20,40);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box.display();
    box2.display();
    ground.display();
}