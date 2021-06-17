class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visiblity=255;    
  }
 

display()
{
 console.log(this.body.speed)
if(this.body.speed<1)
super.display();
else
{
 

push();
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)
//World.remove(world,this.body) 

pop();
}
  }
      }

