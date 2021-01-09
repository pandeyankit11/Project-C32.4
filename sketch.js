const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var backgroundImg;

function preload(){
    backgroundImage();
    
}


    function setup(){
    
    var canvas = createCanvas(1300,600);
    
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(1075,443,250,15);
    ground1 = new Ground(375,543,250,15);
    platform = new Ground(336,236, 330, 15);
    box1 = new Box(250,235,40,50);
    box2 = new Box(280,235,40,50);
    box3 = new Box(310,235,40,50);
    box4 = new Box(340,235,40,50);
    box5 = new Box(370,235,40,50);
    box6 = new Box(400,235,40,50);
    box7 = new Box(430,235,40,50);
    box8 = new Box(280,195,40,50);
    box9 = new Box(310,195,40,50);
    box10 = new Box(340,195,40,50);
    box11 = new Box(370,195,40,50);
    box12 = new Box(400,195,40,50);
    box13 = new Box(310,155,40,50);
    box14 = new Box(340,155,40,50);
    box15 = new Box(370,155,40,50);
    box16 = new Box(340,115,40,50);
    box17 = new Box(1020,405,40,50);
    box18 = new Box(1050,405,40,50);
    box19 = new Box(1080,405,40,50);
    box20 = new Box(1110,405,40,50);
    box21 = new Box(1130,405,40,50);
    box22 = new Box(1050,365,40,50);
    box23 = new Box(1080,365,40,50);
    box24 = new Box(1100,365,40,50);
    box25 =new Box(1077,325,40,50);

    box26 = new Box(320,505,40,50);
    box27 = new Box(350,505,40,50);
    box28 = new Box(380,505,40,50);
    box29 = new Box(410,505,40,50);
    box30 = new Box(412,505,40,50);
    box31 = new Box(332,465,40,50);
    box32 = new Box(382,465,40,50);
    box33 = new Box(402,465,40,50);
    box34 =new Box(377,425,40,50);
    bird = new Bird(750,280);
    slingshot = new SlingShot(bird.body,{x:750, y:270});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(45);
    text("Score :"+score,950,70);
    
    Engine.update(engine);
    strokeWeight(5);
    box1.display();
    fill("khaki");
    box2.display();
    fill("crimson");
    box3.display();
    fill("lime");
    box4.display();
    fill("wheat");
    box5.display();
    fill("fuchsia");
    box6.display();
    fill("aquamarine");
    box7.display();
    fill("coral");
    box8.display();
    fill("charcoal");
    box9.display();
    fill("maroon");
    box10.display();
    fill("orange");
    box11.display();
    fill("gray");
    box12.display();
    fill("navyblue");
    box13.display();
    fill("purple");
    box14.display();
    fill("silver");
    box15.display();
    fill("teal");
    box16.display();
    fill("ivory");
    box17.display();
    fill("azure");
    box18.display();
    fill("brown");
    box19.display();
    fill("black");
    box20.display();
    fill("green");
    box21.display();
    fill("red");
    box22.display();
    fill("blue");
    box23.display();
    fill("yellow");
    box24.display();
    fill("green");
    box25.display();
    fill("grey");
    box26.display();
    fill("red");
    box27.display();
    fill("blue");
    box28.display();
    fill("pink");
    box29.display();
    fill("yellow");
    box30.display();
    fill("green");
    box31.display();
    fill("purple");
    box32.display();
    fill("gold");
    box33.display();
    fill("orange");
    box34.display();
    fill("brown");
    ground1.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();

    ground.display();
    bird.display();
    platform.display();
    slingshot.display();  
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
    slingshot.attach(bird.body);
    }
}

async function backgroundImage(){
    
     var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var abc =await response.json();
    console.log(abc);
    var datetime =abc.datetime;
    var hour =datetime.slice(11,13);
    
    if(hour>=06&&hour<=17){
        bg="Morning image.png";
    }
    else{
        bg2="Night image.png";
    }
    backgroundImg=loadImage(bg);
    backgroundImg=loadImage(bg2);
}