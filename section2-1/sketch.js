// テキスト「繰り返し」
 繰り返し1回ごとに場所を動かす
 function setup() {
  createCanvas(400, 400);  // 400x400 のキャンバスを作成
  background(255);         // 背景を白に設定
  noStroke();              // 輪郭線なし

  let numCircles = 9;     // 円の数（色の繰り返しが9回ある）
  let maxDiameter = 400;   // 最大の円の直径

  // 3色を交互に使用するための色リスト（緑、赤、クリーム色）
  let colors = [
    color(0, 255, 0),      // 緑
    color(255, 0, 0),      // 赤
    color(255, 255, 204)   // クリーム色
  ];

  for (let i = 0; i < numCircles; i++) {
    let diameter = maxDiameter - (i * (maxDiameter / numCircles)); // 各円の直径

    // 3色を順番に選んで塗りつぶす
    fill(colors[i % 3]);   // 緑、赤、クリーム色を順番に使う

    // 円をキャンバスの中央に描く
    ellipse(width / 2, height / 2, diameter);
  }

  // 最後に中心の赤い円を描く
  fill(255, 0, 0); // 赤
  ellipse(width / 2, height / 2, maxDiameter / numCircles); // 中心に小さな赤い円
}

  // 最後に中心の黒い円を描く
  


// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
