'use strict';
(function () {
    //Selecteren van de div waar de html-elementen titel en tekst inzitten en opslaan in variabele
    const dialogBox = document.querySelector(".text-dialog");
    //Selecteren en opslaan van het button-element om later een event listener op te plaatsen.
    const button = document.querySelector(".button_dialog");
    //Functie om de hele tekst te laten verdwijnen door de class "hidden" aan het element toe te voegen
    const beGone = function (){
        const fullBox = document.querySelector(".dialog-box");
        fullBox.classList.add("hidden");
    }
    button.addEventListener("click", beGone)
    class Dialog{
        //HTML-elementen titel en tekst selecteren en opslaan in private variabele
        #titleSpace = dialogBox.querySelector(".title");
        #textSpace = dialogBox.querySelector(".text");
        /*
        Img zit in een andere div dan de tekst waardoor ik gebruik maak van document.
        Hierdoor moet mijn class identiek zijn.
         */
        #imgSpace = document.querySelector(".img_talking_person");
        //effectieve tekst en titel opslaan
        #title;
        #text;
        //voor het aanpassen van de img is een src en alt nodig.
        #imgsrc;
        #imgalt;
        /*
        Bij het aanmaken van een nieuwe dialoog word een titel en tekst gevraagd.
        Er kan een imgsource en alt meegegeven worden indien de standaard img veranderd moet worden.
        De teksten worden meteen ingevuld in de html-elementen.
         */
        constructor(title, text, imgsrc = "./Images/dialog-icon.png", imgalt = "Hilde") {
            this.#title = title;
            this.#text = text;
            this.#imgsrc = imgsrc;
            this.#imgalt = imgalt;
            this.invullen();
        }
        //Hier word de tekst (titel en conversatie) in de juiste HTML-elementen ingevuld
        invullen(){
            this.#titleSpace.textContent = this.#title;
            this.#textSpace.textContent = this.#text;
            this.#imgSpace.src = this.#imgsrc;
            this.#imgSpace.alt = this.#imgalt;
        }
    }
    //Aanmaken van een dialoog
    const test = new Dialog("Title", "Here is text");
})();