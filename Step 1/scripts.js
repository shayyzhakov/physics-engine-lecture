const HEIGHT = 500;
const WIDTH = 600;

const container = {
  x: 0,
  y: 0,
  width: WIDTH,
  height: HEIGHT
};

let circles = [];

let isPlaying = true;
let animate;

window.onload = function() {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  animate = function() {
    c.fillStyle = "#eeeeff";
    c.fillRect(0, 0, container.width, container.height);

    // c.fillStyle = "rgb(255, 0, 0)";
    // c.beginPath();
    // c.arc(100, 100, 50, 0, Math.PI * 2, true);
    // c.fill();
  };

  requestAnimationFrame(animate);
};
