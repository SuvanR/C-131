img = " ";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill('#FFA500');
    text("dog",30,70);
    noFill();
    stroke('#FFA500');
    rect(30,60,350,450);
}

