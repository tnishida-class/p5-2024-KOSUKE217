//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

//let balls;
ballsize = [];
ballx=[];
bally=[];

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  
}

function draw(){
  background(160, 192, 255);
  for(let i=0;i<10;i++){
    ballsize[i]=random(5,100);
    ballx[i]=random(5,455);
    bally[i]=random(5,455);
  }
  
  for(i=0;i<10;i++){
    
    ellipse(ballx[i],bally[i],ballsize[i]);
    }

  //for(let i = 0; i <10; i++){
    //ballsize[i]=random(5,455);
    
    //x=random(5,455)
   // y=random(5,455)
    //ellipse(x,y,b);
  }
  
 



function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
