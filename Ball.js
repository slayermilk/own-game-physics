class Ball{
    constructor(x,y,r) {
        
        var ball_options = {

            restitution: 0.1,
            frictionAir: 0.1
            
          }
        
          
          
        
        this.body = Matter.Bodies.circle(250, 50, 30, ball_options);
        World.add(world,this.body);

        this.x = x,
        this.y = y,
        this.r = r
        this.image = loadImage("Images/ball.png")
        
    }

    show() {
        let pos = this.body.position
        
        // translate(pos.x, pos.y)
        // imageMode(CENTER);
        // image(this.image, pos.x, pos.y, this.width, this.height);
        ellipse(pos.x,pos.y,this.r);
    }


    
}