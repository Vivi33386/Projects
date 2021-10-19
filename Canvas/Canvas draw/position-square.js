"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy négyzetet és két paramétert vár:
// Az x és y koordinátáit a négyzet bal felső sarkának, majd rajzol
// egy 50x50-es négyzetet ebből a pontból.
// Rajzolj 3 négyzetet ezzel a függvénnyel.
// Kerüld a kód duplikációt.

function draw(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y * 2);
  ctx.lineTo(x * 2, y * 2);
  ctx.lineTo(x * 2, y);
  ctx.lineTo(x, y);
  ctx.strokeStyle = "green";
  ctx.stroke();
}
draw(50, 50);
draw(100, 100);
draw(180, 180);
