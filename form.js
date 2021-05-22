 class Form{
 constructor(){
  this.input=createInput("  ").attribute("placeholder","Enter your name");
  this.button=createButton("Play");
  this.greeting=createElement("h3");
 }
 hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
 }
 display(){
     var title=createElement("h1");
     title.html("Car Race");
     title.position(200,20);
    


 this.input.position(200,200);
 this.button.position(200,250);

 this.button.mousePressed(function(){
     this.input.hide();
     this.button.hide();
      p.name=this.input.value();
      
    playercount++;
    p.updateName();
    p.updateCount(playercount);
    
      
   
 this.greeting.html("Hola! Amigos "+p.name);
    
 this.greeting.position(200,250);
 })
 
 }
 }