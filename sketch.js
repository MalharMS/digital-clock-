function setup() {
  createCanvas(650,650);
  angleMode(DEGREES);
}

function draw() {

  background(0);

 

translate(200,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke(255, 90, 95);
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke(165, 255, 214);
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(255, 238, 50);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  

  push();
  rotate(end);
  stroke(255, 90, 95);
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke(165, 255, 214);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke(255, 238, 50);
  line(0,0,50,0);
  pop();
  
  stroke(204, 213, 255);
  point (0,0);

  


  }