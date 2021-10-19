"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáját. Majd húz
// egy volnalat abból a pontból a canvas középpontjáig.
// Rajzolj legalább három vonalat egy loop segítségével.

let line = 3;

function draw(x, y, line) {
  for (let i = 0; i < line; i++) {
    x = x + 50;

    let w = 600 / 2;
    let h = 400 / 2;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(w, h);
    ctx.strokeStyle = "green";
    ctx.stroke();
  }
}
draw(10, 100, line);
