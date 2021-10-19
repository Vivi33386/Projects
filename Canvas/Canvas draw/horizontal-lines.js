"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// a vonal kezdőpontjának x és y koordinátáit, majd kirajzol
// egy 50 hosszú horizontális vonalat ebből a pontból.
// Rajzolj legalább 3 ilyen vonalat egy loop segítségével.

let line = 4;

function draw(x, y, line) {
  for (let i = 1; i < line; i++) {
    x = x + 100;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }
}
draw(10, 50, line);
