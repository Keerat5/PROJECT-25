class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
       }
       this.body = Bodies.circle(165, 605, 30,options);
       this.radius = 30;
       this.image = loadImage("paper.png");
       World.add(world, this.body);
    }

       display(){
           var pos = this.body.position;
           //ellipseMode(CENTER);
           //fill("blue");
           //ellipse(pos.x,pos.y,this.radius);
           image(this.image,pos.x,pos.y-20,this.radius,this.radius);
       }   
}

