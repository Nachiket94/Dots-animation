function Dots(positions, rows, color){
    //Coordinates for testing single dot
    // this.x = random(width);
    // this.y = random(height);
    // this.xnew = 350;
    // this.ynew = 250;
    this.radius = 10;
    this.x = random(0, width);
    this.y = random(0, height);  
    this.xnew = positions;
    this.ynew = rows;
    this.speedx = (this.xnew- this.x)/200;
    this.speedy = (this.ynew- this.y)/200;
    this.show = function(){
        //Color
        if(color < rownum/3){
            fill(255,103,31); 
        }
        if(color < (rownum*2)/3 && color > rownum/3){
            fill(255);
        }
        if(color < rownum && color > (rownum*2)/3){
            fill(4,106,56);
        }
    
        //Create the dots for every frame & check whether they have reached their destination or not
        if(this.speedx > 0 && this.speedy > 0){
            if(this.x < this.xnew && this.y < this.ynew){
                ellipse(this.x , this.y, this.radius, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius, this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx < 0 && this.speedy > 0){
            if(this.x > this.xnew && this.y < this.ynew){
                ellipse(this.x , this.y, this.radius, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius, this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx > 0 && this.speedy < 0){
            if(this.x < this.xnew && this.y > this.ynew){
                ellipse(this.x , this.y, this.radius, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius, this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx < 0 && this.speedy < 0){
            if(this.x > this.xnew && this.y > this.ynew){
                ellipse(this.x , this.y, this.radius, this.radius);    
            }else{
                ellipse(this.xnew,this.ynew,this.radius, this.radius);
                this.speedx = 0;
                this.speedy = 0;
            }
        }
        if(this.speedx == 0 && this.speedy == 0){
                ellipse(this.xnew,this.ynew,this.radius, this.radius);
        }      
    }
    
    //Change position of dot at every frame
    this.move = function(){
        this.x += this.speedx;
        this.y += this.speedy;
        
    }
}