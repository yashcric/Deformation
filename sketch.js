var car, wall, speed, weight;
function setup() {
  createCanvas(1600,400);
 
  speed  = random(65,100);
weight = random(400,1500);
car  = createSprite(50,200,50,50);
wall  = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;
  if(car.x-wall.x < wall.width/2+car.width/2
    && wall.x- car.x < wall.width/2+car.width/2 
    &&car.y-wall.y < wall.height/2+car.height/2
    && wall.y-car.y < wall.height/2+car.height/2 ){

      car.shapeColor = "green";
      car.velocityX = 0;
      if(speed*weight*speed*0.5/22500>=180){
      car.shapeColor = "green";
      }
      if(speed*weight*speed*0.5/22500<=100){
        car.shapeColor = "yellow";
      }
      if (speed*weight*speed*0.5/22500>100 && speed*weight*speed*0.5/22500<180)   {
        car.shapeColor = "red"
      }
    }
   

  drawSprites();
}