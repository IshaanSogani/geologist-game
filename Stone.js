class Stone {
    constructor(x, y) {
      var options = {
        'density':13,
        'friction': 1.0,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('brown')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  