var Engine = Matter.Engine
World = Matter.World
Events = Matter.Events
Bodies = Matter.Bodies

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = []
var score = 0

function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  World = engine.World

  ground = new ground(width/2,height/2,width,20)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new divisions(k,height=divisionHeight/2,10))
  }

  for (var j = 75; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 50;j <=width-10;j=j+50) {
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50;j <= width-10;j=j+50)
  plinkos.push(new Plinko(j,375))
}

function draw() {
  background(0); 
  textSize(20)
      //strokeWeight(4);
      //text("Score : "+score,20,10)
      Engine.update(engine);
      ground.display();

      for (var 1 = 0; 1 < plinkoslength, 1+1) {
        plinkos[1].display()
      }

      if (frameCount%60===0) {
        particles.push(new Particle(random(100,200),10,10))
      }

      for (var j = 0;j < particles.length; j++) {
        particles[j].display()
      }

      for (var k = 0; k < divisions.length; k++) {
        divisions[k].display()
      }
  drawSprites();
}