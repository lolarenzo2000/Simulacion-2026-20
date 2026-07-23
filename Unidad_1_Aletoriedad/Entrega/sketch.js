let t = 0.0;

let speed = 0.01;

function setup() {
  createCanvas(450, 800);
}

function draw() {
    background(0)
        let yoff = t;
        noFill();
        stroke(255);
        beginShape();
        for (let i = height; i > height/2; i--) {
            strokeWeight(map(i,height/2,height,2,25))
            let x = noise(yoff) * width/8 + width/2;
            yoff += 0.01;
            vertex(x, i);
        }
        endShape();
        t += speed;
    if(mouseIsPressed){
        speed = 0.01
    }else{
        speed = 0.001
    }
    
}
