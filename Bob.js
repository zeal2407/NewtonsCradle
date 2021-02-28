class Bob{
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':1,
        'friction':0.5,
        'density':7, 
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius


      circle(this.body.position.x, this.body.position.y, this.radius);
        
      World.add(world, this.body);
      }
    
      display(){
        ellipseMode(RADIUS);
        var paperpos=this.body.position; 
        push() 
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER) 
        strokeWeight(3); 
        fill(255,0,255) 
        ellipse(0,0,this.radius, this.radius); 
        pop() 
      }
  
    }
    ;