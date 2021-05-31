class Mood
{
 constructor()
 {
  this.title = createElement('h2');
  this.b1 = createButton("HAPPY");
 }

 hide()
 {
   this.title.hide();
   this.b1.hide();
 }

 display()
 {
   this.title.html("Choose Your Mood " + n);
   this.title.position(650,150);
   
   this.b1.position(750,380);

   imageMode(CENTER);
   image(happyI,780,320,100,100);

   imageMode(CENTER);
   image(sadI,780,490,100,100);

   this.b1.mousePressed(()=>{
    this.hide();
    state = 2;
    console.log(state);
    })
 }
}