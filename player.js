class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getPCount(){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",function(data){
    playercount=data.val();
    });
    }
    updateName(){
        var playerIndex="players/Player"+this.index;
        database.ref(playerIndex).update({
        "playerName":this.name,
        "distance":this.distance
        });
    }
    updateCount(count){
        database.ref("/").update({
        "playerCount":count
        });
    }
    static getPlayersInfo(){ 
        var playerInforef=database.ref("players");
        playerInforef.on("value",function(data){
        players=data.val();
        });
        
    }
}