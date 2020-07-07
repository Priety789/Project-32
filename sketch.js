var stand;
var box1, box2, box3, box4, box5, box6;
var polygon;
var sling;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

var score = 0;

function preload() {
    
}

function setup() {
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(width / 2, height - 25, width, 25, { isStatic: true });
    World.add(world, ground);

    stand = new Ground(400, 200, 200, 20);

    box1 = new Box(400, 160, 40, 40);
    box2 = new Box(355, 160, 40, 40);
    box3 = new Box(445, 160, 40, 40);
    box4 = new Box(377.5, 120, 40, 40);
    box5 = new Box(422.5, 120, 40, 40);
    box6 = new Box(400, 80, 40, 40);

    polygon = new Polygon(100, 200, 30, 30);

    sling = new SlingShot(polygon.body, { x: 100, y: 200 });

    Engine.run(engine);
}


function draw() {
    background(0);

    textSize(20);
    text("Score: " + score, 700, 40);

    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, width, 25);

    stand.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();

    polygon.display();

    sling.display();

    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    sling.fly();
    console.log("mouseReleased");
}

function keyPressed() {
    if (keyCode === 32) {
        sling.attach(polygon.body);
    }
}