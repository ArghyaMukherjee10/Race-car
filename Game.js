class Game{
    constructor(){

  }
  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val()
    })
  }
  update(state){
    database.ref("/").update({gameState:state})
  }
async start(){
      if (gameState===0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
           form = new Form()
           form.display()
      }
      car1 = createSprite(100,200,50,50)
      car1.addImage(carImg1);
      car2 = createSprite(300,200,50,50)
      car2.addImage(carImg2);
      car3 = createSprite(500,200,50,50);
      car3.addImage(carImg3);
      car4 = createSprite(700,200,50,50);
      car4.addImage(carImg4)
      cars = [car1,car2,car3,car4]

    }
  play(){
      form.hide();
      Player.getPlayerInfo();
      player.getCarsAtEnd();                                                                                                                                    
      if(allPlayers !== undefined){ 
        background(143,123,112)                                                              
        image(trackImage,0,-4*displayHeight,displayWidth,displayHeight*5)                                                           
        var index = 0;  
        var x = 155;
        var y = 0;        
        for(var plr in allPlayers){       
          index++
          x+=200
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x
          cars[index-1].y = y
          if (index === player.index){
              stroke(10)
              fill("yellow")
              ellipse(x,y,100,100)
             // cars[index-1].shapeColor = "red";
              camera.position.x  = displayWidth/2;
              camera.position.y  = cars[index-1].y
          }
         }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if (player.distance>3450){
        gameState = 2;
        flag = flag+1;
        player.rank+= 0.5;
        Player.updateCarsAtEnd(player.rank);
        
      }
      drawSprites();
    }
    end(){
      console.log("game end");
      console.log(Math.round(player.rank));
    }
  
}