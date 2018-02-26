// PRIMA FIGURA
const canvas = document.getElementById('canvas');

const width = canvas.width = 250;
const height = canvas.height = 250;

const context = canvas.getContext('2d');

context.beginPath();

context.arc(125, 125, 124, 0, 2 * Math.PI);

context.lineWidth = 3;

context.strokeStyle = 'red';
context.stroke();


// A DOUA FIGURA
const canvas1 = document.getElementById('canvas-2');

canvas1.width = 250;
canvas1.height = 250;

const context1 = canvas1.getContext('2d');

context1.beginPath();
context1.moveTo(125, 125);
context1.arc(125, 125, 125, 0.25 * Math.PI, 0.75 * Math.PI);
context1.closePath();

context1.fillStyle = 'red';
context1.fill();

// A TREIA FIGURA
const canvas2 = document.getElementById('canvas-3');

canvas2.width = 250;
canvas2.height = 250;

const context2 = canvas2.getContext('2d');

context2.beginPath();

context2.moveTo(125, 25);
context2.lineTo(25, 225);
context2.lineTo(225, 225);

context2.closePath();

context2.fillStyle = 'red';
context2.fill();


// A PATRA FIGURA
const canvas3 = document.getElementById('canvas-4');

canvas3.width = 250;
canvas3.height = 250;

const context3 = canvas3.getContext('2d');

context3.beginPath();

context3.moveTo(100, 12.5);
context3.lineTo(62.5, 25);
context3.lineTo(25, 62.5);
context3.lineTo(12.5, 100);
context3.lineTo(12.5, 150);
context3.lineTo(25, 187.5);
context3.lineTo(62.5, 225);
context3.lineTo(100, 237.5);
context3.lineTo(150, 237.5);
context3.lineTo(187.5, 225);
context3.lineTo(225, 187.5);
context3.lineTo(237.5, 150);
context3.lineTo(237.5, 100);
context3.lineTo(225, 62.5);
context3.lineTo(187.5, 25);
context3.lineTo(150, 12.5);

context3.closePath();

context3.lineWidth = 3;

context3.strokeStyle = 'red';
context3.stroke();

// A CINCEA FIGURA
const canvas4 = document.getElementById('canvas-5');

canvas4.width = 250;
canvas4.height = 250;

const context4 = canvas4.getContext('2d');

context4.beginPath();

context4.rect(25, 75, 200, 100);

context4.lineWidth = 3;

context4.fillStyle = 'red';
context4.fill();

// A SASEA FIGURA
const canvas5 = document.getElementById('canvas-6');

canvas5.width = 250;
canvas5.height = 250;

const context5 = canvas5.getContext('2d');

context5.beginPath();

context5.moveTo(0, 75);
context5.lineTo(250, 175);

context5.lineWidth = 3;

context5.strokeStyle = 'red';
context5.stroke();

// A SAPTEA FIGURA
const canvas6 = document.getElementById('canvas-7');

canvas6.width = 250;
canvas6.height = 250;

const context6 = canvas6.getContext('2d');

context6.beginPath();

context6.moveTo(0, 75);
context6.lineTo(250, 175);

context6.lineWidth = 3;

context6.strokeStyle = 'red';
context6.stroke();

// A OPTA FIGURA
const canvas7 = document.getElementById('canvas-8');

canvas7.width = 250;
canvas7.height = 250;

const context7 = canvas7.getContext('2d');

context7.beginPath();

context7.moveTo(100, 100);
context7.lineTo(62.5, 125);
context7.lineTo(37.5, 175);
context7.lineTo(75, 150);

context7.closePath();

context7.lineWidth = 3;

context7.strokeStyle = 'red';
context7.stroke();