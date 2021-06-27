/* final project
by valentina
5.11.2020
*/
 //global scope


 var handImage;

  var ambientSong;
  var emptySpace;

//handImage counter
  var counter= 0;

 //wall (loop)
var wallpaperValues = [];


// work in setup and draw
var e = 100;
var j = e;


function preload(){

  //image
  handImage = loadImage("hand.png");

  //music

  ambientSong = loadSound("ambient.wav");
  emptySpace = loadSound("emptyspace.wav");


}


function setup() {
  var canvas = createCanvas(640, 470);
  canvas.drawingContext.miterLimit = 2;



  for (let x = 0; x <= width + 990; x += e) {
    for (let y = 0; y <= height + 200; y += j) {

      // create an object to hold the values
      var object = {};

      //colors
      object.r = random(14, 230);
      object.g = random(102,214);
      object.b =  random(85, 255);

      //sizes
      object.s = random(40, 50);

      // add object to list
      wallpaperValues.push(object);
    }
  }
}


function draw() {
  pattern();


  //divider
  stroke(128, 128, 128);
  fill(220, 220, 220);
  rect(-1, 300, 650, 10);


 //carpet

  let X = 320;
  let Y = 402;
  let W = 600;
  let H = 90;

  noStroke();

  fill(21, 67, 96);
  arc(X, Y, W, H, 0, TWO_PI, CHORD);

  fill(46, 134, 193 );
  arc(X, Y, W - 100, H, 0, TWO_PI, CHORD);//top



  //chair
  fill(139, 69, 19);

  rect(X - 70, 110, 135, 25, 50, 50, 5); //top

  rect(X - 70, 110, 20, 150, 50, 50, 5); //left side
  rect(X + 45, 110, 20, 150, 50, 50, 5); //right side

  rect(X - 70, 160, 135, 25, 50, 50, 5); //middle
  rect(X - 70, 200, 135, 25, 50, 50, 5); //middle

  rect(X - 70, 310, 20, 60, 50, 50, 5); //left leg
  rect(X - 45, 310, 20, 30, 50, 50, 5); // back left leg
  rect(X + 50, 310, 20, 60, 50, 50, 5); ///right leg
  rect(X + 25, 310, 20, 30, 50, 50, 5); // back right leg

  //table
  var x = 110;
  var y = 300;
  var w = 420;
  var w2 = 190; // back width
  var h = 50;

  var n = 5; // number of planks

  stroke(110, 44, 0);
  strokeWeight(1);

  // count backwards
  for (let i = n; i > 0; i--) {

    // plank color/style
    if (i % 2 == 0) {
      // even planks
      fill(202, 111, 30);
    } else {
      // odd planks
      fill(175, 96, 26);
    }

    /* quads  go in clockwise order

     back/top           point2  point3
     front/bottom       point1  point4
    */

    var top = i * h / n;
    var bottom = (i - 1) * h / n;

    var back = i * (w - w2) / (n * 2);
    var front = (i - 1) * (w - w2) / (n * 2);

    quad(
      x + front, y - bottom,
      x + back, y - top,
      x + w - back, y - top,
      x + w - front, y - bottom
    );
  }


  //legs
  quad(x, y, x, y + 130, x + 20, y + 130, x + 30, y); //left leg

  quad(x + 130, y, x + 120, y + 70, x + 100, y + 70, x + 100, y); //back left leg

  quad(x + 420, y, x + 420, y + 130, x + 400, y + 130, x + 389, y); //right leg

  quad(x + 320, y, x + 320, y + 70, x + 300, y + 70, x + 290, y); //back right leg

  // front quad is flat
  fill(202, 111, 30);

  quad(x, y, x, y + 30, x + w, y + 30, x + w, y); //front plank




 if (emptySpace.isPlaying()) {


  scale(0.4);

  //package
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  rect(X + 260, y + 200, 175, 200);
  rect(X + 260, y + 150, 175, 60, 50, 50, 5);

  //light
  noStroke();
  fill(64, 224, 208);
  arc(X + 260, y + 200, 305, 320, 0, HALF_PI);


  //cut
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  arc(X + 348, y + 200, 174, 60, 0, HALF_PI + HALF_PI);



  // fries
  //noStroke();
  stroke(253, 216, 29);
  fill(254, 230, 108);
  var v = 530;
  var b = 350;



  //soda 1
   soda(v + 289, b + 120);


  //soda 3
  soda(v + 560, b + 200);

}else {

  //French fries

  scale(0.4);

  //package
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  rect(X + 260, y + 200, 175, 200);
  rect(X + 260, y + 150, 175, 60, 50, 50, 5);

  //light
  noStroke();
  fill(64, 224, 208);
  arc(X + 260, y + 200, 305, 320, 0, HALF_PI);


  //cut
  strokeWeight(2.5);
  stroke(95, 158, 160);
  fill(32, 178, 170);
  arc(X + 348, y + 200, 174, 60, 0, HALF_PI + HALF_PI);



  // fries
  //noStroke();
  stroke(253, 216, 29);
  fill(254, 230, 108);
  var v = 530;
  var b = 350;

  rect(v + 67, b + 119, 15, 50, 3);
  rect(v + 79, b + 90, 15, 85, 2);
  rect(v + 96, b + 79, 15, 99, 3);
  rect(v + 113, b + 70, 15, 109, 2);
  rect(v + 130, b + 45, 15, 135, 4); //the middle
  rect(v + 147, b + 70, 15, 109, 2);
  rect(v + 164, b + 79, 15, 99, 3);
  rect(v + 192, b + 119, 15, 50, 3);
  rect(v + 180, b + 90, 15, 85, 2);


  //curve
  stroke(95, 158, 160);
  strokeWeight(4);
  noFill();
  curve(700, 400, 755, 510, 580, 505, 400, 220);


  //soda 1
   soda(v + 289, b + 120);

  //soda 2
  soda(v - 160, b + 200);



}




   if (counter == 0){
    scale(2);
    noCursor();
    image(handImage, mouseX, mouseY);

  }

    var pan = constrain(map(mouseX, 0, width, -1, 1), -1, 1);
    ambientSong.pan(pan);
    emptySpace.pan(pan);


}


function soda(x, y) {
  strokeWeight(2.5);
  stroke(225, 15, 56);
  fill(253, 29, 73);

  rect(x, y, 110, 180, 20); //soda

  fill(247, 247, 247);
  rect(x,y + 60, 110, 50, 200, 5, 205, 5); // white thing
  textSize(30);
  fill(51, 0, 0);
  text('SODA', x + 13, y + 95);

  strokeWeight(2.5);
  fill(220, 220, 220);
  stroke(169, 169, 169);
  arc(x + 55, y + 10, 112, 60, 2, 2); // top
  fill(169, 169, 169);
  arc(x + 55, y + 10, 30, 20, 2, 2);
  rect(x + 51, y - 35, 15, 40, 3);

  fill(220, 220, 220);
  rect(x + 51, y - 30, 15, 10, 3);
  rect(x + 53, y - 15, 10, 10, 3);
}


function pattern() {

  background(205, 133, 63);

  fill(245, 245, 245);
  noStroke();
  rect(-1, 0, 650, 300);


  //wall

  var counter = 0; // count through list of values
  for (let x = 0; x <= width + 990; x += e) {
    for (let y = 0; y <= height + 200; y += j) {

      //colors
      let val = wallpaperValues[counter];
      counter++; // count to next object for next loop

      let r = val.r;
      let g = val.g;
      let b = val.b;

      //sizes
      let s = val.s;

      push();
      scale(0.4);
      translate(x, y + 80);
      stroke(r, g, b);
      noFill();
      for (let i = 0; i < 10; i++) {
        ellipse(9, 20, s, s); //flower
        rotate(PI / 4);
      }
      pop();


    }
  }

}

  //music
function mousePressed(){

  if (!ambientSong.isPlaying()){
     ambientSong.play();

     }


  }


function keyPressed() {


  // space key
  if (keyCode == 32) {

      ambientSong.stop();
      emptySpace.play();

    }
  }
