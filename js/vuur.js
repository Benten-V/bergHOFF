const vuur1 = document.getElementById("vuur1");
const vuur2 = document.getElementById("vuur2");
class Vuur{
    #plusbutton
    #minusbutton
    #hitteElement
    #hitte
    constructor(vuur) {
        this.#plusbutton = vuur.querySelector(".hoger_btn");
        this.#minusbutton = vuur.querySelector(".lager_btn");
        this.#hitteElement = vuur.querySelector(".temperatuur_display");
        this.#hitte = Number(this.#hitteElement.innerText)
        this.#plusbutton.addEventListener("click", () => {this.verhoogVuur()})
        this.#minusbutton.addEventListener("click", () => {this.verlaagVuur()})
    }
    verhoogVuur(){
        if(this.#hitte<9){
            this.#hitte ++;
            this.#hitteElement.innerText = this.#hitte;
            console.log(this.#hitte);
        }
    }
    verlaagVuur(){
        if(this.#hitte>0){
            this.#hitte --;
            this.#hitteElement.innerText = this.#hitte;
            console.log(this.#hitte);
        }
    }
}
const test = new Vuur(vuur1);
const test2 = new Vuur(vuur2);