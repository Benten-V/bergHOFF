'use strict';
(function () {
    class Dialogue{
        #name
        #text
        #img
        constructor(name, text, img) {
            this.#name = name;
            this.#text = text;
            this.#img = img;
            const dialogueBox = document.querySelector(".dialogue-box")
        }
        render(){
        }
    }
})();