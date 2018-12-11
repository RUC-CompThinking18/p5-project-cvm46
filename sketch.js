/*Alright this is a simple p5 project where when the user clicks on the screen the ball will rotate like crazy within
another sphere.
This is to represent the inner turmoil those with mental illnesses face and the music that plays also represents this
by having the music be this loud cacaphonous noise that is comprised of samples of someone screaming
On the outside the ball is on a black background, mostly to provide contrast, but to show how those with mental illnesses
typically feel alone and isolated. On top of that the stillness of the ball and the calming music show how on the outside
someone can look calm and fine but on the inside they're currently in a chaotic whirlwind of turmoil.
*/


var img
var pic
var jpeg
var calm
var crazy
function preload(){
  calm = loadSound('elevatorstuck.mp3')
  crazy = loadSound('LoudEUGH.mp3')
  //img = loadImage("calmcage.jpg");
  //jpeg = loadImage("fathercage.jpg");
  //pic = loadImage("badtimes.jpg");
}
function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(0)
	 if (mouseIsPressed) {
    calm.pause()
		rotateX(millis() / 10);
		rotateY(millis() / 10);
		rotateZ(millis() / 10);
    texture(pic)
    sphere(600);
    //texture(jpeg)
    sphere(50);
		crazy.play()
    }
    else {
    crazy.pause()
    //texture(img)
    sphere(50);
    calm.play()
  }

  print(mouseIsPressed);
}
