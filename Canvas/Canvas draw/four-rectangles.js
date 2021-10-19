"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj négy különböző méretű és színű négyszöget
// Kerüld a kód duplikációt

function fourSquare(x, y, s, color) {
  x = (600 - s) * Math.random();
  y = (400 - s) * Math.random();

  ctx.fillRect(x, y, s, s);
  ctx.fillStyle = color;
}

fourSquare(100, 100, 50, "#" + (((1 << 24) * Math.random()) | 0).toString(16));
fourSquare(100, 100, 50, "#" + (((1 << 24) * Math.random()) | 0).toString(16));
fourSquare(100, 100, 50, "#" + (((1 << 24) * Math.random()) | 0).toString(16));
fourSquare(100, 100, 50, "#" + (((1 << 24) * Math.random()) | 0).toString(16));
