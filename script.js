import Player from "./player.js";

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const clearBoard = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const player = new Player(ctx);


const animate = () => {
  clearBoard();

  player.init();

  requestAnimationFrame(animate);
};

animate();
