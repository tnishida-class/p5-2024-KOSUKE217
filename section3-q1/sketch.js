// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count=0;
let cycle=100;
let size=50;
let increment;



function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  if (keyIsPressed){increment=2;}
  else{increment=1;}
  count = (count + increment) % cycle;

  if (count<cycle/2){size=50+count;}
  else{size=cycle-count+50;}
  // BLANK[1]
  ellipse(width / 2, height / 2, size);
}
