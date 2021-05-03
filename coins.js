
class Coin {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
  }
  display(){
    //push();
    //fill(0);
    rect(this.x, this.y, this.r, this.r);
    //pop();
  }

  move(){
    this.y++;

  }
}
