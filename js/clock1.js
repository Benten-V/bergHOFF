class Clock {
    #clockElement;
    #ctx;
    #cw;
    #ch;
    #radius;
    #circleColor;
    #animationId;
    #circleSize;
    #isPaused;
    #seconds;
    #speed;
    #started;
    #onComplete;

    constructor(clockLocatie) {
        this.#clockElement = clockLocatie;
        this.#ctx = this.#clockElement.getContext("2d");
        this.#cw = this.#clockElement.width;
        this.#ch = this.#clockElement.height;
        this.#radius = 25;
        this.#circleColor = "red";
        this.#animationId = null;
        this.#circleSize = 0;
        this.#isPaused = false;
        this.#speed = 1;
        this.#started = false;
        this.#onComplete = null;
    }

    fillCircleOverTime(seconds, onComplete = null) {
        this.#seconds = seconds;
        this.#onComplete = onComplete;
        const basePartition = 2 / (seconds * 50);
        this.#started = true;
        const drawFrame = () => {
            if (this.#circleSize <= 2.01 && !this.#isPaused) {
                this.#ctx.clearRect(0, 0, this.#cw, this.#ch);
                this.#ctx.beginPath();
                this.#ctx.moveTo(this.#cw / 2, this.#ch / 2);
                this.#ctx.arc(this.#cw / 2, this.#ch / 2, this.#radius, -0.5 * Math.PI, (this.#circleSize - 0.5) * Math.PI);
                this.#ctx.closePath();
                this.#ctx.fillStyle = this.#circleColor;
                this.#ctx.fill();
                this.#ctx.strokeStyle = "black";
                this.#ctx.stroke();
                this.#circleSize += basePartition * this.#speed;
                if (this.#circleSize > 1.8) {
                    this.#circleColor = "green";
                } else if (this.#circleSize > 1) {
                    this.#circleColor = "yellow";
                }
                this.#animationId = requestAnimationFrame(drawFrame);
            } else if (this.#circleSize > 2.01 && this.#onComplete) {
                this.#onComplete();
            }
        };
        this.#animationId = requestAnimationFrame(drawFrame);
    }

    stopCircle() {
        this.#isPaused = true;
        cancelAnimationFrame(this.#animationId);
    }

    resumeCircle() {
        if (this.#isPaused) {
            this.#isPaused = false;
            this.fillCircleOverTime(this.#seconds, this.#onComplete); // Resume with the original onComplete callback
        }
    }

    setSpeed(speed) {
        this.#speed = speed;
    }

    getPaused() {
        return this.#isPaused;
    }

    getStarted() {
        return this.#started;
    }
}

export default Clock;