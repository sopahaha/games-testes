class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.size = 100;
    this.x = 0;
    this.y = 0;
    this.vel = 7;
    this.keys = {
      upPressed: false,
      downPressed: false,
      leftPressed: false,
      rightPressed: false,
    };
  }

  init = () => {
    this.draw();
    this.move();
    this.limitMovement();
    this.setEvents();
  };

  draw = () => {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#4866ff";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.ctx.closePath();
  };

  move = () => {
    if (this.keys.upPressed) {
      this.y -= this.vel;
    }
    if (this.keys.downPressed) {
      this.y += this.vel;
    }
    if (this.keys.leftPressed) {
      this.x -= this.vel;
    }
    if (this.keys.rightPressed) {
      this.x += this.vel;
    }
  };

  limitMovement = () => {
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.x + this.size >= canvas.width) {
      this.x = canvas.width - this.size;
    }
    if (this.y + this.size >= canvas.height) {
      this.y = canvas.height - this.size;
    }
  };

  keyDownHandler = (e) => {
    let key = e.code;
    switch (key) {
      case "KeyW":
        this.keys.upPressed = true;
        break;
      case "KeyS":
        this.keys.downPressed = true;
        break;
      case "KeyA":
        this.keys.leftPressed = true;
        break;
      case "KeyD":
        this.keys.rightPressed = true;
        break;
    }
  };

  keyUpHandler = (e) => {
    let key = e.code;
    switch (key) {
      case "KeyW":
        this.keys.upPressed = false;
        break;
      case "KeyS":
        this.keys.downPressed = false;
        break;
      case "KeyA":
        this.keys.leftPressed = false;
        break;
      case "KeyD":
        this.keys.rightPressed = false;
        break;
    }
  };

  setEvents = () => {
    window.addEventListener("keydown", this.keyDownHandler, false);
    window.addEventListener("keyup", this.keyUpHandler, false);
  };
}


export default Player;
