var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;
var count = 0;

var particle = null;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");

  Engine.update(engine);
  
  if(gameState === "play"){
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
    }
    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }
    textSize(20)
    text("Score : "+score,20,30);
    text("Turn No. : "+count,620,30);

    text("200",25,500)
    text("700",105,500)
    text("400",185,500)
    text("1000",265,500)
    text("300",345,500)
    text("500",425,500)
    text("450",505,500)
    text("100",585,500)
    text("370",665,500)
    text("490",745,500)

    scoring();

  }
  else if(gameState === "end"){

    // text size for game over
    textSize(40);

    // game over thing
    noStroke();
    fill("yellow");
    text("GAME OVER",width/4+80,height/2-340);

    // text size for data
    textSize(25);

    // result statement
    noFill();
    stroke("white");
    text("Result: ",width/8,height/2-120);

    // max score statement
    noFill();
    stroke("white");
    text("Max Score Possible:",width/8,height/2-240);

    // max score variable
    noStroke();
    fill("orange");
    text("5000",width/8+235,height/2-240);

    // score needed statement
    noFill();
    stroke("white");
    text("Score needed to win:",width/8,height/2-200)

    // score needed variable
    noStroke();
    fill("lightGreen");
    text("3300",width/8+240,height/2-200)

    // your score statement
    noFill();
    stroke("white");
    text("Score you made: ",width/8,height/2-160);

    // variable score
    noStroke();
    fill("lightBlue");
    text(score,width/8+195,height/2-160);

    // contitions for result(var)
    if(score<3300){
      stroke("white");
      fill("red");
      text("LOSE",width/8+90,height/2-120);
    }else if(score>3300){
      stroke("white");
      fill("green");
      text("WON",width/8+90,height/2-120);
    }

  }
}

function mousePressed(){
  if(gameState !== "end"&&particle === null){
    count++;
    particle = new Particle(mouseX, 10,10)
    particles.push(particle)
  }
  else if(gameState !== "end"&&particles[particles.length-1].body.position.x < 160){
    count++;
    particle = new Particle(mouseX, 10,10)
    particles.push(particle)
  }
  if(count === 6){
    gameState = "end";
  }
}

function scoring(){
  if(count === 6){
    gameState = "end";
  }
  if(particle !== null){
    particle.display();
    if(particle.body.position.y > 500){
      if(particle.body.position.x > 10 && particle.body.position.x < 80){
        score = score+200;
        particle = null;
      }else if(particle.body.position.x > 90 && particle.body.position.x < 160){
        score = score+700;
        particle = null;
      }else if(particle.body.position.x > 170 && particle.body.position.x < 240){
        score = score+400;
        particle = null;
      }else if(particle.body.position.x > 250 && particle.body.position.x < 320){
        score = score+1000;
        particle = null;
      }else if(particle.body.position.x > 330 && particle.body.position.x < 400){
        score = score+300;
        particle = null;
      }else if(particle.body.position.x > 410 && particle.body.position.x < 480){
        score = score+500;
        particle = null;
      }else if(particle.body.position.x > 490 && particle.body.position.x < 560){
        score = score+450;
        particle = null;
      }else if(particle.body.position.x > 560 && particle.body.position.x < 630){
        score = score+100;
        particle = null;
      }else if(particle.body.position.x > 640 && particle.body.position.x < 710){
        score = score+370;
        particle = null;
      }else if(particle.body.position.x > 720 && particle.body.position.x < 790){
        score = score+490;
        particle = null;
      }
    }
  }
}
