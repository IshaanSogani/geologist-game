const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron;
var rubber;
var iron1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    iron = new Iron(300,400);
    iron1 = new Iron1(800,300);

    rubber1 = new Rubber(900,450,10,10);
    rubber2 = new Rubber(905,450,10,10);
    rubber3 = new Rubber(910,450,10,10);
    rubber4 = new Rubber(915,450,10,10);
    rubber5 = new Rubber(920,450,10,10);
    rubber6 = new Rubber(925,450,10,10);
    rubber7 = new Rubber(930,450,10,10);
    rubber8 = new Rubber(935,450,10,10);
    rubber9 = new Rubber(940,450,10,10);
    rubber10 = new Rubber(945,450,10,10);
    rubber11 = new Rubber(950,450,10,10);
    rubber12 = new Rubber(955,450,10,10);
    rubber13 = new Rubber(960,450,10,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    iron.display();
    iron1.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
    rubber11.display();
    rubber12.display();
    rubber13.display();

   

}