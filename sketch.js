var cat,cat_anime,catty;
var b_ground;
var mouse,mouse_anime,mousey;

function preload() {
    //load the images here
    cat_anime = loadAnimation("images/cat1.png","images/cat4.png");
    b_ground = loadImage("images/garden.png");
    mouse_anime = loadAnimation("images/mouse1.png","images/mouse4.png");
    mousey = loadAnimation("images/mouse2.png","images/mouse3.png");
    catty = loadAnimation("images/cat2.png","images/cat3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,650,20,20);
    cat.addAnimation("cat",catty);
    cat.scale = 0.3;
    
    cat.setCollider("rectangle",0,0,900,700);

    b_ground.scale = 0.85;

    mouse= createSprite(200,650,20,2);
    mouse.addAnimation("mouse", mousey);
    mouse.scale = 0.2;
    
    mouse.setCollider("rectangle",0,0,700,900);


    
}

function draw() {

    background(b_ground);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.isTouching(cat)){
        cat.velocityX = 0;
        cat.addAnimation("meow",cat_anime);
        cat.changeAnimation("meow")
        cat.scale = 0.3
        mouse.addAnimation("mouse", mouse_anime);
        mouse.changeAnimation("mouse");
        mouse.scale = 0.2
    }
    
    drawSprites();
}
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -5;
      }
     
}




    
  
