"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold be a canvas átlóit
// Amelyik a bal felső sarokból indul, az legyen zöld, a másik piros.

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(600, 400);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 0);
ctx.lineTo(0, 400);
ctx.strokeStyle = "red";
ctx.stroke();
