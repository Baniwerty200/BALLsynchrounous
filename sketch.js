var database,playercount,f,p,game;
var gameState=0;

function setup(){
    database=firebase.database();
    
    createCanvas(400,400);
    game=new GAME();
    game.getState();
    game.start();
    
    
}

function draw(){
    background("white");
    
    if (playercount==4){
        game.updateState(1);
    }
    if (gameState==1){
        clear();
        game.play();
    }
}
