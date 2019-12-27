class Game {
  constructor (vel) {
    this.canvas = document.querySelector('#pongCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.ball = new Ball (8, 8, 8, [vel, vel]);
    this.paddle = new Paddle(200, 0, vel);
    this.paddleRight = new Paddle(200, 980, vel);
  }
  resetCanvas() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  checkBallOnPaddle() {
    if (this.ball.x - this.ball.radius <= 20 && this.paddle.py <= this.ball.y + this.ball.radius && this.ball.y - this.ball.radius <= this.paddle.py + 150){
      this.ball.vel[0] = -this.ball.vel[0];
    }
    if(this.ball.x <= 20 && this.ball.y + this.ball.radius >= this.paddle.py && this.ball.y - this.ball.radius <= this.paddle.py + 150) {
      this.ball.vel[1] = -this.ball.vel[1];
      if(this.ball.y > this.paddle.py + this.ball.radius && this.ball.y < this.paddle.py + 150 - this.ball.radius) {
        this.ball.x = 500;
        this.ball.y = 275;
      }
    } //check for right paddle(below)
    if (this.ball.x + this.ball.radius >= 980 && this.paddleRight.py <= this.ball.y + this.ball.radius && this.ball.y - this.ball.radius <= this.paddleRight.py + 150){
      this.ball.vel[0] = -this.ball.vel[0];
    }
    if(this.ball.x >= 980 && this.ball.y + this.ball.radius >= this.paddleRight.py && this.ball.y - this.ball.radius <= this.paddleRight.py + 150) {
      this.ball.vel[1] = -this.ball.vel[1];
      if(this.ball.y > this.paddleRight.py + this.ball.radius && this.ball.y < this.paddleRight.py + 150 - this.ball.radius) {
        this.ball.x = 500;
        this.ball.y = 275;
      }
    }
  }
  play() {
    document.addEventListener('keydown', event => {
      if (this.paddle.py <= 0){
        this.paddle.py = 0;
      }
      else if (this.paddle.py >= 400) {
        this.paddle.py = 400;
      }

      if (this.paddleRight.py <= 0) {
        this.paddleRight.py = 0;
      }
      else if (this.paddleRight.py >= 400) {
        this.paddleRight.py = 400;
      }

      if (event.key === 'w') {
        this.paddle.movePaddleUp();
      }
      if (event.key === 's') {
        this.paddle.movePaddleDown();
      }
      if (event.key === 'ArrowUp') {
        this.paddleRight.movePaddleUp();
      }
      if (event.key === 'ArrowDown') {
        this.paddleRight.movePaddleDown();
      }
    });
    setInterval(() => {
      this.resetCanvas()
      this.paddle.renderPaddle(this.ctx);
      this.paddleRight.renderPaddle(this.ctx);
      this.ball.renderBall(this.ctx);
      this.checkBallOnPaddle();
      this.ball.moveBall(this.canvas);
    }, 17);
  }
}


const game = new Game(3);
game.play();