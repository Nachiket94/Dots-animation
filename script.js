var dot=[];
var points = 24;
var cha1=[];
var cha2=[];
var cha3=[];
var cha4=[];
var cha5=[];
var cha6=[];
var cha7=[];
var cha8=[];
var rownum = 34;
var colnum = 48*(rownum-1);
var i = 0;
function setup() {
    thickness1 = 11;
    thickness2 = 9;
    thickness3 = 8;
    thickness4 = 7;
    thickness5 = 6;
    thickness6 = 5;
    thickness7 = 4;
    thickness8 = 3;
    createCanvas(800,600);
    //Create final positions for dots of The Chakra 
    var top = 260, left = 335, bottom = 360, right = 435;
    let center = {
        y: (bottom + top)/2,
        x: (right + left)/2
    },
    radius = {
        x: right - center.x,
        y: bottom - center.y
    },
    // output_points = [];
    angle_step = 2 * Math.PI / points;
    for (let s = 0, angle = 0; s < points; s++, angle += angle_step) {
        var x1 = center.x + Math.sin(angle) * radius.x;
        var y1 = center.y + Math.cos(angle) * radius.y;
        cha1[s]= new chakra(x1, y1, thickness1);
        var x2 = center.x + Math.sin(angle) * (radius.x - thickness2);
        var y2 = center.y + Math.cos(angle) * (radius.y - thickness2);
        cha2[s]= new chakra(x2, y2, thickness2);
        var x3 = center.x + Math.sin(angle) * (radius.x - thickness3 - thickness2);
        var y3 = center.y + Math.cos(angle) * (radius.y - thickness3 - thickness2);
        cha3[s]= new chakra(x3, y3, thickness3);
        var x4 = center.x + Math.sin(angle) * (radius.x - thickness4 - thickness3 - thickness2);
        var y4 = center.y + Math.cos(angle) * (radius.y - thickness4 - thickness3 - thickness2);
        cha4[s]= new chakra(x4, y4, thickness4);
        var x5 = center.x + Math.sin(angle) * (radius.x - thickness5 - thickness4 - thickness3 - thickness2);
        var y5 = center.y + Math.cos(angle) * (radius.y - thickness5 - thickness4 - thickness3 - thickness2);
        cha5[s]= new chakra(x5, y5, thickness5);
        var x6 = center.x + Math.sin(angle) * (radius.x - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        var y6 = center.y + Math.cos(angle) * (radius.y - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        cha6[s]= new chakra(x6, y6, thickness6);
        var x7 = center.x + Math.sin(angle) * (radius.x - thickness7 - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        var y7 = center.y + Math.cos(angle) * (radius.y - thickness7 - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        cha7[s]= new chakra(x7, y7, thickness7);
        var x8 = center.x + Math.sin(angle) * (radius.x - thickness8 - thickness7 - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        var y8 = center.y + Math.cos(angle) * (radius.y - thickness8 - thickness7 - thickness6 - thickness5 - thickness4 - thickness3 - thickness2);
        cha8[s]= new chakra(x8, y8, thickness8);
    }
    chakraCenter = new chakra(center.x, center.y, 13);
    // output_points.push(point);
    // console.log(cha.length, cha2.length)
    //Create the dots for the Flag
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
    chakraCenter.show();
    chakraCenter.move();
    for(var m = 0; m < cha1.length; m++){
        cha1[m].show();
        cha1[m].move();
        cha2[m].show();
        cha2[m].move();
        cha3[m].show();
        cha3[m].move();
        cha4[m].show();
        cha4[m].move();
        cha5[m].show();
        cha5[m].move();
        cha6[m].show();
        cha6[m].move();
        cha7[m].show();
        cha7[m].move();
        cha8[m].show();
        cha8[m].move();
    }
    // console.log(mouseX, mouseY)
}
