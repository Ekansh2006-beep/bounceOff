var canvas;
var music;
var fixedRect,movingRect,fixedRect2,fixedRect3,fixedRect4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green";
    fixedRect.debug = true;
    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "green";
    movingRect.debug = true;
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites()
}
