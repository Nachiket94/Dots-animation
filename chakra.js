function chakra(xposi, yposi, thickness){
    this.radius = thickness;
    this.x = random(0, width);
    this.y = random(0, height);
    this.xnew = xposi;
    this.ynew = yposi;
    this.speedx = (this.xnew- this.x)/160;
    this.speedy = (this.ynew- this.y)/160;
    this.show = function(){
        //Color
        fill(0,0,255);
        noStroke();
        //Create the dots for every frame & check whether they have reached their destination or not
        if(this.speedx > 0 && this.speedy > 0){
            if(this.x < this.xnew && this.y < this.ynew){
                ellipse(this.x , this.y, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx < 0 && this.speedy > 0){
            if(this.x > this.xnew && this.y < this.ynew){
                ellipse(this.x , this.y, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx > 0 && this.speedy < 0){
            if(this.x < this.xnew && this.y > this.ynew){
                ellipse(this.x , this.y, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx < 0 && this.speedy < 0){
            if(this.x > this.xnew && this.y > this.ynew){
                ellipse(this.x , this.y, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx == 0 && this.speedy == 0){
                ellipse(this.xnew,this.ynew,this.radius);
        }      
    }
    
    //Change position of dot at every frame
    this.move = function(){
        this.x += this.speedx;
        this.y += this.speedy;
        
    }
}
