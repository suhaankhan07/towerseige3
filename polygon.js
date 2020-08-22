class Ball {
 constructor(x,y,r) {
  
  var options = {
    isStatc:false,
    friction:1
  }

  this.radius = r;

  this.body = Bodies.circle(x,y,r,options)
   World.add(world,this.body)

 }
  display() {
   var pos = this.body.position;
   
    push();
    fill("white")
    translate(pos.x,pos.y);
    ellipse(0,0,this.radius);
    push();
  }
}