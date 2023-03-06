


let img;
function preload() {
img = loadImage('01_34023.png');
}


function setup() { 
  createCanvas(521,272);
  //img = loadImage('01_34023.png');
  frameRate(4);
}

function draw() {
  image(img, 0, 0);
  noStroke();
  fill(random(100),random(100),random(100),random(200));
  rect(random(521),random(272),random(300),random(300),4);
  //int n =255;
if(mouseX>0 && mouseY>0 && mouseX<521 && mouseY<272){
  rectMode(CENTER);
  fill(random(255),random(255),random(255),random(255));
  rect(mouseX,mouseY,random(80),random(80),2);  
  //n=n-1;
  //if(n<0){
  //n=255;
  //}
}
}
  //background(220);
  //fill(random(250),random(250),random(250),random(100));
 // ellipse(random(300),random(300),random(100),random(100));
  
  //int n;
  //for(let n=0; n<300; n++){
  //rect(100,100,50,50);
  //if(n>300){
  //  n=0;
  //}

//}


