var database;
var gameState = 0;
var form,game,player,playerCount;
var distance = 0; 
var allPlayers;
var car1,car2,car3,car4,cars;
var carImg1,carImg2,carImg3,carImg4;
var trackImage;
var flag = 0;

function preload(){
  carImg1 = loadImage("image/car1.png");
  carImg2 = loadImage("image/car2.png");
  carImg3 = loadImage("image/car3.png");
  carImg4 = loadImage("image/car4.png");
  trackImage = loadImage("image/track.jpg")
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()                                                                   
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
      if(gameState === 2 && flag===1){
        game.update(2)
        game.end();
      }
}

