'use strict';

(function () {
    // Selecteren van de div waar de html-elementen titel en tekst inzitten en opslaan in variabele
    const dialogBox = document.querySelector(".dialog-box");
    const dialogContent = document.querySelector(".text-dialog");
    // Selecteren en opslaan van het button-element om later een event listener op te plaatsen.
    const button = document.querySelector(".button_dialog");

    // Functie om de hele tekst te laten verdwijnen door de class "hidden" aan het element toe te voegen
    const beGone = function () {
        dialogBox.classList.add("hidden");
    }

    // Functie om de dialog-box te tonen
    const showDialog = function (event, dialog) {
        event.preventDefault(); // Voorkomt het standaardgedrag van de link
        dialogBox.classList.remove("hidden");
        dialog.invullen();
    }

    // Functie om de dialog-box te tonen en een element te verwijderen
    const showAndRemoveDialog = function (event, dialog) {
        event.preventDefault(); // Voorkomt het standaardgedrag van de link
        event.currentTarget.closest("div").remove(); // Verwijdert het gehele div-element dat de aangeklikte link bevat
        dialogBox.classList.remove("hidden");
        dialog.invullen();
    }

    // Event listener voor de 'Next' knop
    button.addEventListener("click", beGone);

    class Dialog {
        // HTML-elementen titel en tekst selecteren en opslaan in private variabele
        #titleSpace = dialogContent.querySelector(".title");
        #textSpace = dialogContent.querySelector(".text");
        #imgSpace = document.querySelector(".img_talking_person");
        #title;
        #text;
        #imgsrc;
        #imgalt;

        constructor(title, text, imgsrc = "./Images/dialog-icon.png", imgalt = "Hilde") {
            this.#title = title;
            this.#text = text;
            this.#imgsrc = imgsrc;
            this.#imgalt = imgalt;
        }

        invullen() {
            this.#titleSpace.textContent = this.#title;
            this.#textSpace.textContent = this.#text;
            this.#imgSpace.src = this.#imgsrc;
            this.#imgSpace.alt = this.#imgalt;
        }
    }

    // Aanmaken van een goede dialoog
    const goodDialog = new Dialog("Goed zo 👍", "Hier heb je de juiste keuze gemaakt ✅", "./Images/dialog-icon.png", "Good Character");

    // Aanmaken van een slechte dialoog
    const badDialog = new Dialog("Auwch 😓", "Je hebt hier niet de juiste keuze gemaakt ❌", "./Images/dialog-icon.png", "Bad Character");

    // Selecteer alle elementen met de class good-dialogue en bad-dialogue
    const goodDialogLinks = document.querySelectorAll(".good-dialogue");
    const badDialogLinks = document.querySelectorAll(".bad-dialogue");

    // Event listeners toevoegen aan alle good-dialogue links
    goodDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => showDialog(event, goodDialog));
    });

    // Event listeners toevoegen aan alle bad-dialogue links
    badDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => showAndRemoveDialog(event, badDialog));
    });
})();
