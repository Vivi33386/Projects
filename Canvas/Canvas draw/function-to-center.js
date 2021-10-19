"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.

function draw() {
  for (var i = 0; i < 31; i++) {
    ctx.beginPath();
    ctx.moveTo(0 + i * 20, 0);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
}
draw();

function draw2() {
  for (var i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(600, 20 + i * 20);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
}
draw2();

function draw3() {
  for (var i = 0; i < 29; i++) {
    ctx.beginPath();
    ctx.moveTo(580 - i * 20, 400);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
}
draw3();

function draw4() {
  for (var i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 20 + i * 20);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }
}
draw4();
