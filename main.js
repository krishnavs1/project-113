function preload() {
    
}

function setup() {
    canvas=createCanvas(640, 480);
    canvas.position(110,250);
video=createCapture(VIDEO);
video.
video.hide();

tint_color="";
}

function draw() {
    image(img,10, 150, 120)
  
    fill(0, 128, 0)
    stroke(0, 128, 0)
  circle(350, 50, 70)

  fill(0, 128, 0)
    stroke(0, 128, 0)
  rect(350, 50, 70)
}

function take_snapshot() {
    save('student_name_png')
}

function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}