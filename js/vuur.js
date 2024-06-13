import Clock from './clock1.js';
import * as Dialogue from './dialogue.js';
import {klaarMetKokenDialog, showDialog} from "./dialogue.js";

const vuur1 = document.getElementById("vuur1");
const vuur2 = document.getElementById("vuur2");
const clockLocatie = document.getElementById("circle1");
const clockLocatie2 = document.getElementById("circle2");
class Vuur{
    #plusbutton
    #minusbutton
    #hitteElement
    #hitte
    #clock
    constructor(vuur, clock) {
        this.#plusbutton = vuur.querySelector(".hoger_btn");
        this.#minusbutton = vuur.querySelector(".lager_btn");
        this.#hitteElement = vuur.querySelector(".temperatuur_display");
        this.#hitte = Number(this.#hitteElement.innerText)
        this.#plusbutton.addEventListener("click", () => {this.verhoogVuur()})
        this.#minusbutton.addEventListener("click", () => {this.verlaagVuur()})
        this.#clock = new Clock(clock);
    }
    //start het koken en verhoogt de snelheid van koken.
    verhoogVuur(){
        if(this.#hitte<9){
            this.#hitte ++;
            this.#hitteElement.innerText = this.#hitte;
            console.log(this.#hitte);
            if (this.#clock.getPaused()){
                this.#clock.resumeCircle();
            }else if (!this.#clock.getStarted()){
                this.#clock.fillCircleOverTime(100, () => this.klaar());
            }else {
                this.#clock.setSpeed(this.#hitte);
            }

        }
    }
    //verlaagt het vuur dus ook snelheid van koken
    verlaagVuur(){
        if(this.#hitte>0){
            this.#hitte --;
            this.#hitteElement.innerText = this.#hitte;
            console.log(this.#hitte);
            if (this.#hitte === 0){
                setTimeout(() =>this.#clock.stopCircle(), 5000);
            }else {
                this.#clock.setSpeed(this.#hitte);
            }

        }
    }
    // deze methode word uitgevoerd als het kookproces klaar is
    klaar(){
        console.log("klaar met koken");
        showDialog(null, klaarMetKokenDialog);
    }
}
const test = new Vuur(vuur1, clockLocatie);
const test2 = new Vuur(vuur2, clockLocatie2);
