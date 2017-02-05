var bubbles = [];

function setup() {
  createCanvas (600,400);
 /*for (var i = 0; i < 8; i++){
   bubbles[i] = new Bubble(random(width), random(height));
 }*/
}

function mousePressed(){
  bubbles.push(new Bubble(mouseX,mouseY));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j++){
      if (i != j && bubbles[i].intersects(bubbles[j])){
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    } 
  }
 /* if (bubbles.length > 10){
    bubbles.splice(0,1);
  }
  */
}


function Bubble(x,y){
   this.x = x;
  this.y = y;
  this.r = 24;
  this.col = color(255);
  
  this.changeColor = function(){
    this.col = color(random(255), random(255), random(255),random(255));
  }
  
  this.intersects = function(other){
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r){
      return true;
    } else {
      return false;
    }
  }
  
  this.display = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x,this.y,this.r * 2, this.r * 2);
  }
  this.update = function (){
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}
  
 
