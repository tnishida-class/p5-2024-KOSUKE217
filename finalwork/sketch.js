// 最終課題を制作しよう

let bubbles=[];
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(230, 230, 255);
}

function draw(){
  background(149, 192, 236);
  drawGround();
  drawFrog();
  drawShabonstick();
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let bubble = bubbles[i];
    bubble.x += bubble.vx; 
    bubble.y += bubble.vy; 

    push();
    fill(255, 255, 255, 150); 
    noStroke();
    ellipse(bubble.x, bubble.y, bubble.size); 
    pop();
    
   
  }
  }
  function keyPressed() {
   
    let newBubble = {
      x: width / 2 + 110,       
      y: height - 140,
      vx: random(2, 4),          
      vy: random(-4, -2),       
      size: random(20, 50)      
    };
    bubbles.push(newBubble); 
  }

function drawFrog(){
  fill(30,180,60);
  ellipse(width/2,height-75,100,50);
  ellipse(width/2-30,height-100,30,30);
  ellipse(width/2+30,height-100,30,30);
  fill(0);
  ellipse(width/2-30,height-100,5,5);
  ellipse(width/2+30,height-100,5,5);
  fill(255,0,0);
  ellipse(width/2,height-75,10,10);
  
}
function drawShabonstick(){
  fill(230,230,255)
  ellipse(width/2+110,height-140,50,50);
  rect(width/2+105,height-115,10,65);
}
function drawGround(){
  fill(160,110,45)
  rect(0,height-50,width,50)
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
