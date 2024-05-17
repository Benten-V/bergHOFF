"use strict";
(function () {
const canvas = document.getElementById("circle");
const ctx = canvas.getContext("2d");
const cw = canvas.width;
const ch = canvas.height;
const radius = 50;
let circleColor = "red";

const fillCircleOverTime = function (seconds) {
    const partition = 2 / (seconds * 50);
    let circleSize = 0;
    const drawFrame = () => {
        if (circleSize <= 2.01) {
            ctx.clearRect(0, 0, cw, ch);
            ctx.beginPath();
            ctx.moveTo(cw / 2,  ch/2);
            ctx.arc(cw/2, ch/2, radius, -0.5 *Math.PI, (circleSize-0.5)*Math.PI);
            ctx.closePath();
            ctx.fillStyle = circleColor;
            ctx.fill();
            ctx.strokeStyle = "black";
            ctx.stroke();
            circleSize += partition;
            if (circleSize > 1.8){
                circleColor = "green";
            }else if (circleSize > 1){
                circleColor = "yellow";
            }
            setTimeout(drawFrame, 1000/60)
        }
    };
    drawFrame();
}
fillCircleOverTime(10);
})()