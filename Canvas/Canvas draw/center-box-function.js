"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami rajzol egy négyzetet és egy paramétert vár:
// A négyzet méretét (egy oldal hossza)
// kirajzol egy ekkora négyzetet a canvas közepére.
// Rajzolj 3 négyzetet ezzel a függvénnyel.
// Kerüld a  kód duplikációt.

let x;

function draw(x) {
  let s = 600 / 2 - x / 2;
  let h = 400 / 2 - x / 2;
  ctx.fillStyle = "green";
  ctx.fillRect(s, h, x, x);
}
draw(200);
draw(100);
draw(50);
