//Create variables here
var dog, happup, database, foodS, foodStock;
var dog1Ig, dog2Img;
var FoodQ = 20;

function preload()
{
  //load images here
  dog1Img = loadImage("dogImg.png");
  happup = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250, 300, 20, 10);
  dog.addImage(dog1Img);  
  dog.scale = "0.3"
  foodStock = database.ref('Food');
   foodStock.on("value", readStock);
}

function draw() {  
  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happup);
    dog.scale = "0.3"
    if(FoodQ === 20){ FoodQ = FoodQ - 1;}
   

  }

  drawSprites();
  //add styles here
  textSize(15);
  fill("yellow");
  text("FOOD STOCK:"+FoodQ, 200, 150);
  textSize(15);
  fill("yellow");
  text("Note : Press the up arrow key to feed the cute pup", 90, 100);


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



