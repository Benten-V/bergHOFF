const clockLocatie = document.querySelector(".clocks");

class Clock {
    #clockElement
    #ctx
    #cw =150;
    #ch =150;
    #radius = 50;
    #circleColor = "red";
    constructor(clockLocatie) {
        this.#clockElement = document.createElement("canvas");
        this.#clockElement.id = "circle"
        this.#clockElement.appendChild(clockLocatie);
        this.#ctx = this.#clockElement.getContext("2d");
        this.#clockElement.width = this.#cw;
        this.#clockElement.height = this.#ch;
    }
    const
    fillCircleOverTime (seconds) {
        const partition = 2 / (seconds * 50);
        let circleSize = 0;
        const drawFrame = () => {
            if (circleSize <= 2.01) {
                this.#ctx.clearRect(0, 0, this.#cw, this.#ch);
                this.#ctx.beginPath();
                this.#ctx.moveTo(this.#cw / 2, this.#ch / 2);
                this.#ctx.arc(this.#cw / 2, this.#ch / 2, this.#radius, -0.5 * Math.PI, (circleSize - 0.5) * Math.PI);
                this.#ctx.closePath();
                this.#ctx.fillStyle = this.#circleColor;
                this.#ctx.fill();
                this.#ctx.strokeStyle = "black";
                this.#ctx.stroke();
                circleSize += partition;
                if (circleSize > 1.8) {
                    this.#circleColor = "green";
                } else if (circleSize > 1) {
                    this.#circleColor = "yellow";
                }
                setTimeout(drawFrame, 1000 / 60)
            }
        };
        drawFrame();
    }
}
const test = new Clock(clockLocatie);
test.fillCircleOverTime(10);
