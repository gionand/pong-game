class Paddle {
    constructor (py, px, vel) {
      this.py = py;
      this.px = px
      this.vel = 2 * vel;
    }
    renderPaddle(ctx){
      ctx.fillStyle = 'blue';
      ctx.fillRect(this.px, this.py, 20, 150);
    }
    movePaddleUp() {
    this.py -= this.vel;  
    }
    movePaddleDown() {
      this.py += this.vel;  
    }
  }
  