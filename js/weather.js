class Weather{
   
    constructor()
    {
      this.title = createElement('h2');
      this.button = createButton("RAINY");
      this.rainI = loadImage("icons/rain.jpeg");
      this.fogI = loadImage("icons/fog.jpeg");
      this.sunI = loadImage("icons/sun.jpeg");
      this.snowI = loadImage("icons/snow.jpg");
      this.input = createInput("Name");
    }

    hide()
    {
     this.title.hide();
     this.button.hide();
     this.input.hide();
    //  this.rainI.hide();
    //  this.sunI.hide();
    //  this.snowI.hide();
    //  this.fogI.hide();
     

    }

    display()
    {
       this.title.html("Choose Weather Outside");
       this.title.position(660,170);
      
       this.button.position(670,390);

       this.input.position(690,130),
     
   
       imageMode(CENTER);
       image(this.rainI,700,320,100,100);
    
       imageMode(CENTER);
       image(this.sunI,860,320,100,100);
    
       imageMode(CENTER);
       image(this.snowI,700,500,100,100);
    
       imageMode(CENTER);
       image(this.fogI,860,500,100,100);

       n = this.input.value();
       
      
       this.button.mousePressed(()=>{
        this.hide();
        
        state = 1;
        console.log(state);
        })

     
    }
}