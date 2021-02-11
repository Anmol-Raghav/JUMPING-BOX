var canvas;
var music;
var box,edges;
var surface1,surface2,surface3,surface4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = "blue";
    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = "orange";
    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = "red";
    surface4 = createSprite(740,580,220,30);
    surface4.shapeColor = "green";



    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";

    box.velocityX = 7;
    box.velocityY = 9;

    

}

function draw() {
    background("grey");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();

    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange";
        music.play();

    }

    if(surface3.isTouching(box)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();

    }


    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor =  "green";
        music.play();
    }
    drawSprites();
}
