"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Reprodukáld ezt:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function draw(x) {
  for (let i = 0; i < 19; i++) {
    ctx.fillStyle = "purple";
    ctx.fillRect(x * i, x * i, x, x);
  }
}
draw(20);
