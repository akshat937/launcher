class Paper{

  constructor(x,y,radius){

  var options = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
  }
    this.r = radius;
    this.body = Bodies.circle(x,y,(this.r-20)/2,options);
    this.image = loadImage("sprites/paper.png")
    World.add(world,this.body)
  }

  display(){
    push();
    translate(this.body.position.x,this.body.position.y)
    //ellipseMode(CENTER);
    fill("white");
    //ellipse(0,0,this.body.radius,this.body.radius); 
    imageMode(CENTER);
    image(this.image,0,0, this.r,this.r)
    pop();
  }
}
