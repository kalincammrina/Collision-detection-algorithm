var fixed,moving;

function setup() {
  createCanvas(1200,800);
  fixed= createSprite(600, 400, 50, 80);
  moving= createSprite(200,200,80,50);
  fixed.shapeColor="green";
  moving.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&
    fixed.x-moving.x<moving.width/2+fixed.width/2&&
    moving.y-fixed.y<moving.height/2+fixed.height/2&&
    fixed.y-moving.y<moving.height/2+fixed.height/2){
     fixed.shapeColor="yellow";
     moving.shapeColor="blue";
    }else {
      fixed.shapeColor="green";
      moving.shapeColor="red";
    }

  drawSprites();
}