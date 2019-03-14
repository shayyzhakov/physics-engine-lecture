const HEIGHT = 500;
const WIDTH = 600;

const container = {
  x: 0,
  y: 0,
  width: WIDTH,
  height: HEIGHT
};

// let circles = [];

let isPlaying = true;
let animate;

// function restart() {
//   circles = [];
// }

// function addBall(radius) {
//   circles.push({
//     x: Math.ceil(radius + Math.random() * (WIDTH - 2 * radius)),
//     y: Math.ceil(radius + Math.random() * (HEIGHT - 2 * radius)),
//     r: radius
//   });
// }

window.onload = function() {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  // animate = function() {
  //   c.fillStyle = "#eeeeff";
  //   c.fillRect(0, 0, container.width, container.height);

  //   for (var i = 0; i < circles.length; i++) {
  //     c.fillStyle = "rgb(255, 0, 0)";
  //     c.beginPath();
  //     c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
  //     c.fill();
  //   }

  //   requestAnimationFrame(animate);
  // };

  requestAnimationFrame(animate);
};
