
let t = 0.0;
let speed = 0.01;

let leafs = [];
 
// how tall the plant currently is (starts at 0, grows toward maxGrowth)
let growth = 0;
let maxGrowth;
let growRate = 0.6;
 
// thickness at the base vs the tip
let baseWeight = 30;
let tipWeight = 2;
 


function preload(){
    leafs[1] = loadImage('assets/leaf1.png');
    leafs[2] = loadImage('assets/leaf2.png');
    leafs[3] = loadImage('assets/leaf3.png');
    leafs[4] = loadImage('assets/leaf4.png');
}

function setup() {
    createCanvas(450, 800);
    maxGrowth = height/3; // stem can grow up to the middle of the canvas
    
}
 
function draw() {
    background(0);
    
    tint(255,255,255);
    image(leafs[1],width/2,height/2,500,500);
    noTint();
    let yoff = t;
    
    // seed the anchor from the noise curve itself, not a hardcoded point
    let prevX = noise(yoff) * width / 8 + width / 2;
    let prevY = height;

    for (let i = height; i > maxGrowth; i--) {
      let x = noise(yoff) * width / 8 + width / 2;
      yoff += 0.01;

      // how far up the FULL grown plant this point is (0 = base, 1 = tip)
      let frac = (height - i) / (height - maxGrowth);
      let w = lerp(baseWeight, tipWeight, frac);

      stroke(color(map(w,2,20,150,20),map(w,2,20,255,80),map(w,2,20,100,20)));
      strokeWeight(w);
      line(prevX, prevY, x, i);

      prevX = x;
      prevY = i;
    }

    t += speed;

    // grow slowly until reaching max height
    if (growth < maxGrowth) {
      growth += growRate;
    }

    if (mouseIsPressed) {
      speed = 0.01;
    } else {
      speed = 0.001;
    }
}