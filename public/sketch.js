var mic, fft, capture;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(1080, 520);
  vhs= createVideo(["vhs.mp4"]);
  vhs.loop();
  vhs.hide();
  cam.hide();
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);



}

function draw() {

  ambientLight(255);
  background(200);
   rotateZ(HALF_PI);
   ambientMaterial(255);
   texture(vhs);
plane(1000,1000);






  push();
  rotateZ(angle * 1.2);
  noStroke();
    texture(cam);
  plane(500, 500);
  angle -= 0.01;

  /* beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
   */



}
