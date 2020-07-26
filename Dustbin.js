class Dustbin {

    constructor(x,y,width,height){

        var options = {
           isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png")
        World.add(world, this.body);
    }

        display(){
              imageMode(CENTER);
             image(this.image,655,610,200,140);
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
        }   
}