// テキスト「キーボード操作に反応する」
let x, y;
//50<x<width-50;
//50<y<height*0.8-50;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  fill(120,65,56)
  rect(0,height*0.8,width,height*0.2)
  fill(100,100,0)
  ellipse(x, y, 50);
  if(x>width){x=0;}
  else if (x<0){x=width;}



  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)&y<height*0.8-25){ y += 5; }
  //if(keyIsDown("R".charCodeAt(0))){ x+= 10; }
  //if(keyIsDown("L".charCodeAt(0))){ x-= 10; }
  
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("R".charCodeAt(0))){x+=10;}
  if(keyIsDown(LEFT_ARROW) && keyIsDown("L".charCodeAt(0))){x-=10;}
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
