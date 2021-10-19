"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

function draw(size) {
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      if ((i + j) % 2 == 0) {
        ctx.fillStyle = "black";
      } else {
        ctx.fillStyle = "white";
      }
      ctx.fillRect(j * size, i * size, size, size);
    }
  }
}
draw(40);
