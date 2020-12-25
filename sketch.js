const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionsHeight = 180;

function setup() {
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(300,485,600,30);
  
 
    for(var j = 40; j<= width; j = j+50){
      plinkos.push(new Plinko(j , 55))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,85))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,120))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,150))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,185))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,225))
    }
    for(var j = 40; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,265))
    }
    for(var j = 15; j<= width-10; j = j+50){
      plinkos.push(new Plinko(j ,305))
    }
    for(var k = 0; k <=width; k = k+80){
      divisions.push(new Division(k, height-divisionsHeight/2, 10, divisionsHeight));
    }
  }
  function draw() {
  background(0);  
  Engine.update(engine);

  base.display();
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }
    
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }

  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

    drawSprites();
}
