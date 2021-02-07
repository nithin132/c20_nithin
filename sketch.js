var movingrect,fixedrect;






function setup() {
  createCanvas(800,400);
  movingrect =createSprite(400, 300, 80, 80);
  fixedrect  =createSprite(200, 100, 50, 50);

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

movingrect.velocityY=-5;
fixedrect.velocityY=5;



}

function draw() {
  background(255,255,255);  
  
 // movingrect.x =World.mouseX; 
 // movingrect.y=World.mouseY;
   console.log (movingrect.x-fixedrect.x);
   if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 
    && fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2 
    &&movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 
    && fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2 ) 
    {
      movingrect.shapeColor="red";
      fixedrect.shapeColor="red"; 

    } 
    else
    {
      movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
    }

  drawSprites();
}