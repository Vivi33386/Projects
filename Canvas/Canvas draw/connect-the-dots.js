"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let Array1 = [
  [10, 10],
  [290, 10],
  [290, 290],
  [10, 290],
];
let Array2 = [
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
];

function draw(Array) {
  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(Array[0][0], Array[0][1]);
  for (let i = 1; i < Array.length; i++) {
    ctx.lineTo(Array[i][0], Array[i][1]);
  }
  ctx.closePath();
  ctx.stroke();
}
draw(Array1);
draw(Array2);
