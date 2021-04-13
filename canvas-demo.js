// Drawing and Animating on an HTML Canvas

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');



// Line

// ctx.beginPath();

// ctx.moveTo (x, y); this starts your line
// ctx.moveTo (50, 300);

// ctx.lineTo( x, y); this point ends your line
// ctx.lineTo( 300, 100);
// ctx.lineTo( 400, 300);
// ctx.lineTo( 500, 400);

// change the color of your line
// ctx.strokeStyle = "#fa34a3"

// // draw the line
// ctx.stroke();



// Filled Rectangles

// declare color first
// context.fillRect(x, y, width, height);

// ctx.fillStyle = "#fa34a3"; 
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillRect(200, 300, 100, 100);

// ctx.fillStyle = "green";
// ctx.fillRect(600, 300, 100, 100);
// ctx.fillRect(300, 500, 100, 100);



// Circle / Arc 

// Types for .arc
// ctx.arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool (false))

// ctx.beginPath();
// ctx.arc( 300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// Use a forLoop to create tons of circles in Math.random locations

// for (let i = 0; i < 100; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc( x, y, 2, 0, Math.PI * 2, false);
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();
// }



// Animate a circle

// let x = 200;
// let y = 200;
// let dx = 4;
// let dy = 4;
// let radius = 30;
// function animate() {
//     requestAnimationFrame(animate);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     ctx.beginPath();
//     ctx.arc( x, y, radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = '#fa34a3';
//     ctx.stroke();
//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }
//     if ( y + radius > innerHeight || y - radius < 0) {
//         dy = -dy
//     }
//     x += dx;
//     y += dy;
// }

// animate();
