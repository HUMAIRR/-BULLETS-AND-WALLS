var bullet,wall;
var speed,weight;

 function setup() { speed=random(55,90);
    weight=random(400,1500);

    createCanvas(1600,400);

    bullet=createSprite(50,200,50,50)
    wall=createSprite(1500,200,60,height/2)
    wall.shapeColor="80,80,80";
    bullet.velocityX = speed;
     }
     
if(wall.x-bullet.x < (bullet.width+wall.width)/2)

{ 
    bullet.velocityX=0;
    var deformation =0.5 * weight * speed * speed/22509;
    if( deformation>180)
   {
     bullet.shapeColor=color (255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
       bullet.shapeColor=color(230,230,0);
   }

   if(deformation<100)
{
    bullet.shapeColor=color(0,225,0);
   }
}
    function draw (){
  background(0,0,0);
  bullet.x - World.mouseX;
  bullet.y - World.mouseY;
  if (bullet.x - wall.x === wall.width/2 + bullet.width/2 ) {
    bullet.shapeColor = "green";
    wall.shapeColor = "green";
  }         
 else{
    bullet.shapeColor = "red";
    wall.shapeColor = "red";
 }


    }
drawSprite();

