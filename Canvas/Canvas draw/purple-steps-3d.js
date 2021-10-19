"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

function draw(x) {
  let size = x;
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = "purple";
    ctx.fillRect(x, x, size, size);
    x += size;
    size *= 1.5;
  }
}
draw(15);
