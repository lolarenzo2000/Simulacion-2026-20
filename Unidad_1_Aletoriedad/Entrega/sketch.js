
let t = 0.0;
let speed = 0.01;

let leafTypes = [];

function makeLeaf(x, y, type) {
  return { x, y, type };
}

let leafs = [];
let leafCounter = 0;
// how tall the plant currently is (starts at 0, grows toward maxGrowth)
let growth = 0;
let maxGrowth;
let growRate = 0.6;
 
// thickness at the base vs the tip
let baseWeight = 30;
let tipWeight = 2;

let leafMedianInterval = 250;
let leafIntervalCounter = 0;
 
let imageBaseWidth = 120;
let imageBaseHeight = 64;

function preload(){
    leafTypes[0] = loadImage('assets/leaf1.png');
    leafTypes[1] = loadImage('assets/leaf2.png');
    leafTypes[2] = loadImage('assets/leaf3.png');
    leafTypes[3] = loadImage('assets/leaf4.png');
}

function setup() {
    createCanvas(450, 800);
    maxGrowth = height/3; // stem can grow up to the middle of the canvas  
}
 
function draw() {
  translate(width/2,0)
    background(0);

    let yoff = t;

    // seed the anchor from the noise curve itself, not a hardcoded point
    let prevX = noise(yoff) * width / 8 ;
    let prevY = 0;

    for (let i = height; i > maxGrowth; i--) {
      let x = noise(yoff) * width / 8 ;
      yoff += 0.01;

      // how far up the FULL grown plant this point is (0 = base, 1 = tip)
      let frac = (height - i) / (height - maxGrowth);
      let w = lerp(baseWeight, tipWeight, frac);

      let red = map(w,2,20,150,20)
      let green = map(w,2,20,255,80)
      let blue = map(w,2,20,100,20)

      stroke(color(red,green,blue))
      strokeWeight(w);
      line(prevX, prevY, x, i);
      
      prevX = x;
      prevY = i;
    }

    if (leafs[height] != null){
      leafs[height] = null;
      console.log("Leaf Destroyed");
    }

    if (leafIntervalCounter <= 0) {
      let img = random(leafTypes);
      leafs[leafCounter] = makeLeaf(prevX, prevY-imageBaseHeight/2, img);
      leafIntervalCounter = randomGaussian(leafMedianInterval, 10);
      leafCounter ++;
      console.log("Leaf Created");
    } 

    leafIntervalCounter --;

    t += speed;

    for (let i = 0; i < leafs.length;i++){
      if (leafs[i] != null){
        let red = map(leafs[i].y,maxGrowth,height,150,0)
        let green = map(leafs[i].y,maxGrowth,height,255,0)
        let blue = map(leafs[i].y,maxGrowth,height,100,0)
        tint(red,green,blue)
        image(leafs[i].type,leafs[i].x,leafs[i].y)
        noTint()
        leafs[i].y += speed * 100;
        if (leafs[i].y > height){
          leafs[i] = null
          leafCounter --;
          leafReorder();
          continue;
        }        
      }
    }

    if (mouseIsPressed) {
      speed = 0.01;
    } else {
      speed = 0.001;
    }
}

function leafReorder(){
  for (let i = 0; i < leafCounter ; i++){
    if (leafs[i] == null && leafs[i+1] != null){
      leafs[i] = leafs[i+1];
      leafs[i+1] = null
    }else{
      continue;
    }
  }
}