class Form{
    constructor(){
       this.title = createElement("h1")
       this.input = createInput("name")
       this.button = createButton("start")
       this.reset = createButton("Reset");
       this.greet = createElement("h2");
    }
    display(){
        this.title.html("Fast Racing Game")
        this.title.position(displayWidth/2 - 50,0)
        this.input.position(displayWidth/2 - 50,displayHeight/2 - 100)
        this.button.position(displayWidth/2 + 100 , displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount)
            player.update()
            this.greet.html("Welcome " + player.name)
            this.greet.position(displayWidth/2 - 50 , displayHeight/2 - 50)
        })
        this.reset.position(50,displayHeight-50)
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greet.hide()
        this.title.hide()
    }
}