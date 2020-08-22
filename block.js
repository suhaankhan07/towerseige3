class Block{
    constructor(x, y, width, height) {
        var options = {
             isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            stiffness:0.01
        }
        
        this.width = width;
        this.height = height;
     
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility = 255;
        World.add(world, this.body)
    }
 

    score() {
      if(this.visibility < 256 && this.visibility > -105 ) {
        score++ 
      }
    }
 
      display(){        
      if(this.body.speed < 3) {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(0,255,0);
        rect( 0, 0, this.width, this.height);
        pop();
      }

      else {
        World.remove(world,this.body);

        push();
        this.visibility = this.vsibility - 5;
        tint(255,this.visibility);
        pop();
        
        
      }
         
     
       
      }
}