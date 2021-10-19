"use strict";

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzolj egy négyzetet aminek minden oldala más színű.

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.strokeStyle = "green";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(200, 200);
ctx.strokeStyle = "red";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(100, 200);
ctx.strokeStyle = "purple";
ctx.stroke();
