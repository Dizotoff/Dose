var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var mic, fft;
var angle = 0;
var flying = 0;

var terrain = [];

function setup() {
  createCanvas(windowWidth-4, windowHeight-4, WEBGL);
  cols = w / scl;
  rows = h/ scl;
logo = loadImage('smiley2.jpg')
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.9, 1024);
  fft.setInput(mic);

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  var spectrum = fft.analyze();
  flying -= 0.1;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }

push();
  background(255);
  translate(0, 100);
  rotateX(PI/2.2);
  fill(200,200,200, 50);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
pop();





push();
translate(0,-windowHeight/5);
  noStroke();
rotateX(angle);
rotateY(angle);
rotateZ(angle);
texture(logo);
    plane(330, 127);

    pop();


push();
    translate(200,-450);
rotateY(0);
rotateX(0);
rotateZ(0);
    beginShape();
       for (i = 0; i<spectrum.length; i++) {
        vertex(i, map(spectrum[i], 0, 255, height, 0) );
       }
       endShape();

pop();

angle += 0.03;

}
