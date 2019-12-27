class Ball {
    constructor (x, y, r, vel) {
      this.radius = r;
      this.x = x;
      this.y = y;
      this.vel = vel;
    }
    renderBall(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
    }
    moveBall(canvas){
      this.x += this.vel[0];
      this.y += this.vel[1];
      if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
        this.vel[0] = -this.vel[0];
      }
      if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
        this.vel[1] = -this.vel[1];
      }
      if (this.y <= -this.radius || this.y >= canvas.height + this.radius || this.x <= -this.radius || thix.x >= canvas.width + this.radius) { //reset ball, if it breaches border
        this.x = 500;
        this.y = 275;
      }
    }
  }