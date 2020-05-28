var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(50,90);
  weight=random(400,1500);

  car=createSprite(30,200,60,20);
  car.velocityX=speed;

  wall=createSprite(350,200,60,height/2);
} 

function draw() {
  background(0);
  car.shapeColor=("white");
  wall.shapeColor=("blue");
  
  if ( wall.x - car.x < (car.width + wall.width)/2 ){
      car.velocityX=0;
      var deformation=0.5 * speed * speed * weight / 22500;

      if (deformation<=99){
        car.shapeColor=("green");
      }

      if (deformation >= 100 && deformation<= 180){
        car.shapeColor=("yellow");
      }

      if (deformation > 180){
        car.shapeColor=("red");
      }
  }
  drawSprites();
}