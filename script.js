var dot=[];
var rownum = 33;
var colnum = 48*(rownum-1);
var i = 0;
function setup() {
    createCanvas(800,600);
    for(var j = 1; j < rownum; j++){
        ypos = (j*10) + 140;
        for(var k = 1; k < 49; k++){
            xpos = (k*10) + 140;    
            dot[i] = new Dots(xpos, ypos,j);
            i++;
            // console.log(i,j,k,xpos,ypos);
            }
        }
    }

function draw() {
    background(0);
    frameRate(60);
    if(i==colnum){
        for(var l = 0; l < colnum; l++){
            dot[l].show();
            dot[l].move();   
        }
    }
}