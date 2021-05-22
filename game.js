class GAME{
    constructor(){}
    
        getState(){
            var gameStateref=database.ref("gameState");
            gameStateref.on("value",function(data){
            gameState=data.val();
            });
            
            }

            updateState(state) {
                database.ref("/").update({
                    "gameState":state
                    });
            }

                
            
            
    
    start(){
if (gameState==0){
    
    f=new Form()
    f.display();
    p=new Player();
    p.getPCount();
}
    }
    
 play(){
  f.hide();   
 textSize(20);
 text("Welcome to My Boring Game and incomplete one",20,100)
     Player.getPlayersInfo()
     if(players !== undefined){
     var textPos=150;
    for(var pl in players){
        if (pl=="player"+p.index){
            fill("red");
        }else{
            fill("black");
        }
        displayYaxis=displayYaxis+20;
        textSize(10);
        text(players[pl].name+": "+players[pl].distance,120,displayYaxis);

    }
    }
    if(keyIsDown(UP_ARROW)){
       p.distance=p.distance+2;
       p.updateName();
       
    }

 }
}
