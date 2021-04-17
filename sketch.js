const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(100,100);
    rubber = new Rubber(900,550,90);
    stone = new Stone(600,350,100,100);

    sand1 = new Sand(880,550,10);
    sand2 = new Sand(875,550,10);
    sand3 = new Sand(870,550,10);
    sand4 = new Sand(865,550,10);
    sand5 = new Sand(860,550,10);
    sand6 = new Sand(855,550,10);
    sand7 = new Sand(850,550,10);
    sand8 = new Sand(845,550,10);
    sand9 = new Sand(840,550,10);
    sand10 = new Sand(835,550,10);

    iron = new Iron(300,350);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();

    iron.display();

}