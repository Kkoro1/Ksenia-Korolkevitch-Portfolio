var xPositions = [random(0,400)];
var dropSize = [random(2,5)];
var yPositions = [50];

draw = function() {
    background(215, 241, 245);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(170, 201, 209);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5; 
        }
    
    while(xPositions.length < 25){
        xPositions.push(random(0,400));
        dropSize.push(random(2, 5));
        yPositions.push(50+30);
    }

    var drawDrop = function(xPos, yPos, dropSize){
        fill(255, 255, 255, 150);
        ellipse(xPositions, yPositions, dropSize, dropSize);
    };
    for (var dropQuant = 0; dropQuant < 25; dropQuant++){
        drawDrop(xPositions[dropQuant], yPositions[dropQuant], dropSize);
        }
    {
    yPositions[0]+=2;
    yPositions[1]+=1.5;
    yPositions[2]+=3;
    yPositions[3]+=2.5;
    yPositions[4]+=2;
    yPositions[5]+=3.9;
    yPositions[6]+=3.1;
    yPositions[7]+=2.5;
    yPositions[8]+=3.2;
    yPositions[9]+=3;
    yPositions[10]+=2;
    yPositions[11]+=1.2;
    yPositions[12]+=3.3;
    yPositions[13]+=2.8;
    yPositions[14]+=2.5;
    yPositions[15]+=3.1;
    yPositions[16]+=3.7;
    yPositions[17]+=2.2;
    yPositions[18]+=2;
    yPositions[19]+=3.5;
    yPositions[20]+=2.4;
    yPositions[21]+=1.7;
    yPositions[22]+=3;
    yPositions[23]+=2.6;
    yPositions[24]+=2.1;
    }
    {
    if(yPositions[0] > 410) {
        yPositions[0] = 0;
    }
    if(yPositions[1] > 410) {
        yPositions[1] = 0;
    }
    if(yPositions[2] > 410) {
        yPositions[2] = 0;
    }
    if(yPositions[3] > 410) {
        yPositions[3] = 0;
    }
    if(yPositions[4] > 410) {
        yPositions[4] = 0;
    }
    if(yPositions[5] > 410) {
        yPositions[5] = 0;
    }
    if(yPositions[6] > 410) {
        yPositions[6] = 0;
    }
    if(yPositions[7] > 410) {
        yPositions[7] = 0;
    }
    if(yPositions[8] > 410) {
        yPositions[8] = 0;
    }
    if(yPositions[9] > 410) {
        yPositions[9] = 0;
    }
    if(yPositions[10] > 410) {
        yPositions[10] = 0;
    }
    if(yPositions[11] > 410) {
        yPositions[11] = 0;
    }
    if(yPositions[12] > 410) {
        yPositions[12] = 0;
    }
    if(yPositions[13] > 410) {
        yPositions[13] = 0;
    }
    if(yPositions[14] > 410) {
        yPositions[14] = 0;
    }
    if(yPositions[15] > 410) {
        yPositions[15] = 0;
    }
    if(yPositions[16] > 410) {
        yPositions[16] = 0;
    }
    if(yPositions[17] > 410) {
        yPositions[17] = 0;
    }
    if(yPositions[18] > 410) {
        yPositions[18] = 0;
    }
    if(yPositions[19] > 410) {
        yPositions[19] = 0;
    }
    if(yPositions[20] > 410) {
        yPositions[20] = 0;
    }
    if(yPositions[21] > 410) {
        yPositions[21] = 0;
    }
    if(yPositions[22] > 410) {
        yPositions[22] = 0;
    }
    if(yPositions[23] > 410) {
        yPositions[23] = 0;
    }
    if(yPositions[24] > 410) {
        yPositions[24] = 0;
    }
    }
    
    fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(6);
    arc (75, -12, 153,49, 2,178);
    line (5,0,-15,20);
    line (35,10,25,35);
    line (65,15,65,40);
    line (95,15,105,35);
    line (125,0,145,20);
    arc (325, -12, 153,49, 2,178);
    line (260,0,235,20);
    line (285,10,270,35);
    line (315,15,315,40);
    line (345,15,355,35);
    line (365,0,395,20);
};
