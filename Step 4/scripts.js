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

function restart() {
  circles = [];
}

function addBall(radius) {
  const vx = document.getElementById("vx-input").value;
  const vy = document.getElementById("vy-input").value;

  circles.push({
    vx: vx === "" ? Math.ceil(Math.random() * 20 - 10) : Number(vx),
    vy: vy === "" ? Math.ceil(Math.random() * 20 - 10) : Number(vy),
    x: Math.ceil(radius + Math.random() * (WIDTH - 2 * radius)),
    y: Math.ceil(radius + Math.random() * (HEIGHT - 2 * radius)),
    r: radius
  });
}

function play() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    requestAnimationFrame(animate);
  }
  document.getElementById("play-button").innerHTML = isPlaying ? "pause" : "resume";
}

function step() {
  if (isPlaying) {
    play();
  }
  requestAnimationFrame(animate);
}

window.onload = function() {
  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  animate = function() {
    c.fillStyle = "#eeeeff";
    c.fillRect(0, 0, container.width, container.height);

    for (var i = 0; i < circles.length; i++) {
      //   console.log(`Ball #${i}: x=${circles[i].x}, y=${circles[i].y}, r=${circles[i].r}, vx=${circles[i].vx}, vy=${circles[i].vy}`);
      c.fillStyle = "rgb(255, 0, 0)";
      c.beginPath();
      c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
      c.fill();

      // vertical bounce
      // if (circles[i].y + circles[i].r + circles[i].vy > container.height || circles[i].y + circles[i].vy < circles[i].r) {
      //   circles[i].vy = -circles[i].vy;
      // }
      // horizontal bounce
      // if (circles[i].x + circles[i].r + circles[i].vx > container.width || circles[i].x + circles[i].vx < circles[i].r) {
      //   circles[i].vx = -circles[i].vx;
      // }

      circles[i].y += circles[i].vy;
      circles[i].x += circles[i].vx;
    }

    // if (isPlaying) {
    requestAnimationFrame(animate);
    // }
  };

  requestAnimationFrame(animate);
};
