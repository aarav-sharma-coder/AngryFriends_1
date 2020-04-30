class Tom extends BaseClass {
  constructor(x,y){
    super(x,y,90,90);
    this.image = loadImage("Tom.png.png");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }

  display() {
    

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
