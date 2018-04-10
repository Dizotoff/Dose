var mic, fft, vhs, cam;
var stars = [];
let c = 4;
var speed;

function setup() {
  createCanvas(windowWidth-c, windowHeight-c);
  colorMode(HSB);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.5, 256);
  fft.setInput(mic);

}

function draw() {
  var spectrum = fft.analyze();

  background(255);


push();
  noStroke();
translate(windowWidth/4, windowHeight/2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp*10, 0, 256, 20, 100);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 0, 0);
    line(0, 0, x, y);
  }
pop();

push();
  noStroke();
translate(windowWidth/4*3, windowHeight/2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 360);
    var amp = spectrum[i];
    var r = map(amp*10, 100, 256, 20, 100);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 0, 0);
    line(0, 0, x*2, y*2);

    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
pop();


}
