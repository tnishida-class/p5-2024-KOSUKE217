// チェッカー
function setup() {
  createCanvas(10000, 10000);
  background(255);
  let s=40;
  let d=30;
  noStroke();
  for(let i= 0; i < 8; i++){
    for(let j= 0; j < 8; j++){
      let x=i*s;
      let y=j*s;
      if((i+j)%2===1){
        fill(122);
        rect(x,y,s,s);

      }
      if(((i+j)%2===1)&&(j<3)){
        fill(255,0,0);
        ellipse(x+s/2,y+s/2,d);}
      if(((i+j)%2===1)&&(4<j)){
        fill(0);
        ellipse(x+s/2,y+s/2,d,d);
      }
      
    }
  }
}
