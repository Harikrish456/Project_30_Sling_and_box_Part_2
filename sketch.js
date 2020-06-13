const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var object, rope;
var box1, box2, box3, box4, box5, box6;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,height,400,20);
    ground2 = new Ground(900,100,400,20);
   

    box1 = new Box(600,320,70,70);
    box2 = new Box(700,320,70,70); 
    box3 = new Box(700,240,70,70);
    box4 = new Box(800,300,70,70);
    box5 = new Box(850,83,70,70);
    box6 = new Box(950,60,70,70);



   

    object = new Bird(200,50);

    
    rope = new Rope(object.body,{x:200, y:55});
}

function draw(){
   background("white");
    Engine.update(engine);
    strokeWeight(1);
    fill("red");
    box1.display();
    box2.display();
    box3.display();
    fill("blue");
    box4.display();
    box5.display();
    box6.display();
   
    ground.display();
    ground2.display();
    
    rope.display();

    object.display(); 
    
}

function mouseDragged(){
    Matter.Body.setPosition(object.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
    rope.attach(object.body);
    }
}