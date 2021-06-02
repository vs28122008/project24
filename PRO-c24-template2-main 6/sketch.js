const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber= new  Rubber(60,554,70,10);
    iron =  new  Iron(300,570,90,60);
    stone = new Stone(650,590,100,90);


    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    plane.display();
    stone.display();
   
   
    
 
}