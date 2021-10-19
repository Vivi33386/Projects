"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// rajzolj egy piros horizontális vonalat a canvas közepére
// rajzolj egy zöld vertikális vonalat a canvas közepére

ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 400);
ctx.strokeStyle = "green";
ctx.stroke();
