// const canvas = document.getElementById("myCanvas");

// const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(350,350);
// ctx.stroke();

// ctx.font = "20px serif";
// ctx.textAlign = "center"
// ctx.fillText("A", 50, 50);

// const canvas = document.getElementById("myCanvas");
// const context = canvas.getContext("2d");

// const lineStartX = 50;
// const lineStartY = 200;
// const lineEndX = 350;
// const lineEndY = 200;
// const lineLength = Math.sqrt(
//   Math.pow(lineEndX - lineStartX, 2) + Math.pow(lineEndY - lineStartY, 2)
// );

// const circleRadius = 10;
// let circlePosition = 0;
// const circleSpeed = 0.5;

// function drawCircle(x, y) {
//   context.beginPath();
// //   context.arc(x, y, circleRadius, 0, 2 * Math.PI);
// //   context.fillStyle = "white";
// //   context.fill();

//   context.font = "20px serif";
//   context.textAlign = "center";
//   context.fillText("A", x, y);
// }

// function drawLine() {
//   context.beginPath();
//   context.moveTo(lineStartX, lineStartY);
//   context.lineTo(lineEndX, lineEndY);
//   context.stroke();
// }

// function update() {
//   circlePosition += circleSpeed;
//   if (circlePosition > lineLength) {
//     // circlePosition = 0;// infinite loop

//     // just one iteration
//     circlePosition = lineLength;
//     return true; // stop animation
//   }
// }

// function render() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   drawLine();
//   const circleX =
//     lineStartX + (circlePosition * (lineEndX - lineStartX)) / lineLength;
//   const circleY =
//     lineStartY + (circlePosition * (lineEndY - lineStartY)) / lineLength;
//   drawCircle(circleX, circleY);
// }

// function gameLoop() {
//   if (update()) {
//     return; //stop animation
//   }
//   render();
//   requestAnimationFrame(gameLoop);
// }

// gameLoop();

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const devicePixelRatio =1;
const backingStoreRatio = context.webkitBackingStorePixelRatio ||
                           context.mozBackingStorePixelRatio ||
                           context.msBackingStorePixelRatio ||
                           context.oBackingStorePixelRatio ||
                           context.backingStorePixelRatio || 1;
const ratio = devicePixelRatio / backingStoreRatio;

const width = 400;
const height = 400;

canvas.width = width * ratio;
canvas.height = height * ratio;
canvas.style.width = width + "px";
canvas.style.height = height + "px";
context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const curveCenterX = 200;
      const curveCenterY = 200;
      const curveRadius = 100;
      const curveStartAngle = 0;
      const curveEndAngle = 1 * Math.PI;

      const circleRadius = 10;
      let circleAngle = 0;
      const circleSpeed = 0.05;

      function drawCircle(x, y) {
        context.beginPath();
        context.arc(x, y, circleRadius, 0, 2 * Math.PI);
        context.stroke();
        // context.fillStyle = "blue";
        // context.fill();

        context.font = "20px serif";
          context.textAlign = "center";
          context.textBaseline = "middle"
          context.fillText("A", x, y);
      }

      function drawCurve() {
        context.beginPath();
        context.arc(curveCenterX, curveCenterY, curveRadius, curveStartAngle, curveEndAngle);
        context.lineWidth = 5;
        context.stroke();
      }

      function update() {
        circleAngle += circleSpeed;
        if (circleAngle > curveEndAngle) {
          circleAngle = curveEndAngle;
          return true; // stop animation
        }
      }

      function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCurve();
        const circleX = curveCenterX + curveRadius * Math.cos(circleAngle);
        const circleY = curveCenterY + curveRadius * Math.sin(circleAngle);
        drawCircle(circleX, circleY);
      }

      function gameLoop() {
        if (update()) {
          return; // stop animation
        }
        render();
        requestAnimationFrame(gameLoop);
      }

      gameLoop();

