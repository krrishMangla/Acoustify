var phn,phnImg;
var s,sImg;
var gui;
var mood;
var state = 0;
var rainI,fogI,sunI,snowI;
var sadI,happyI;
var n = null;

function preload()
{
  phnImg = loadImage("icons/phn.jpg");
  sImg = loadImage("icons/bg.jpg");

  

  sadI = loadImage("icons/sad.jpeg");
  happyI = loadImage("icons/happy.jpeg");
 
}

function setup()
{
 var canvas = createCanvas(windowWidth,windowHeight);



 phn = createSprite(windowWidth/2,windowHeight/2);
 phn.addImage(phnImg);
 phn.scale = 1.9;

  s = createSprite(779,365,327,560);
  s.addImage(sImg);

  
   gui = new Weather();
   
   mood = new Mood();
}

function draw()
{
 background(255);

 

 drawSprites();
 
 if(state === 0)
 {
  gui.display();
 }
 
 
  if(state === 1)
  {
   mood.display();
  }

 
  
  if(state === 2)
  {
   fill(0); 
   stroke(3);
   textSize(25); 
   text("These are the Things, ",630,130);
   text("You Can do " + n,630,160);
   text("Can Listen to These Music!",630,250);
   textSize(20);
   text("1.“Happy”by Pharrell Williams.",630,280);
   text("2.“Don't Stop Believing” by Journey.",625,310);
   textSize(25)
   text("Can Do some Activites!",630,360);
   textSize(20);
   text("1.Perform Altruistic Acts of Kindness.",620,390);
   text("Find Something to Look Forward To.",620,420);
   textSize(25);
   text("Food You can make! ",630,480)
   textSize(20);
   text("1.Salmon",620,510);
   text("2.Quinoa",620,530);
   text("Links are going to upload soon!",620,590)
  }
    

 fill(0);
 text(mouseX +","+mouseY ,mouseX,mouseY);



 
}