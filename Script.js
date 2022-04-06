var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var start = "F";
var iterations = 20;
var currentCode = start;
var nextCode = [];

for (let i = 0; i < iterations; i++) {
  nextCode = [];
  for (let j = 0; j < currentCode.length; j++) {
    if (currentCode[j] === "F") {
      nextCode.push("F+G");
    } else if (currentCode[j] === "G") {
      nextCode.push("F-G");
    } else if (currentCode[j] === "-") {
      nextCode.push("-");
    } else if (currentCode[j] === "+") {
      nextCode.push("+");
    }
  }
  currentCode = nextCode.join("");
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

function radians_to_degrees(rad) {
  var pi = Math.PI;
  return rad * (180 / pi);
}
ctx.scale(0.05, 0.05);
x = canvas.width / 2 / 0.05;
y = canvas.height / 2 / 0.05;
var color = 1
function lineDir(x, y, dir, color) {
  newx = 10 * Math.cos(degrees_to_radians(dir)) + x;
  newy = 10 * Math.sin(degrees_to_radians(dir)) + y;
  ctx.strokeStyle = `rgb(${color}, 240 ,100)`
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newx, newy);
  ctx.stroke();
  x = newx;
  y = newy;
  return [x, y];
}

angle = 0;
ctx.lineWidth = "10";
console.log(currentCode);

for (let i = 0; i < currentCode.length; i++) {
  if (currentCode[i] === "F") {
    xy = lineDir(x, y, angle, color);
    x = xy[0];
    y = xy[1];
  } else if (currentCode[i] === "G") {
    xy = lineDir(x, y, angle, color);
    x = xy[0];
    y = xy[1];
  } else if (currentCode[i] === "-") {
    angle -= 90;
  } else if (currentCode[i] === "+") {
    color += 1/3000
    angle += 90;
  }
}
