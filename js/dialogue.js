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

    // Aanmaken van de dialogen
    const goodDialog = new Dialog("Goed zo 👍", "Hier heb je de juiste keuze gemaakt ✅", "./Images/dialog-icon.png", "Good Character");
    const semiGoodDialog = new Dialog("Bijna goed 🤔", "Dit is een redelijke keuze, maar niet de beste 😐", "./Images/dialog-icon.png", "Semi-Good Character");
    const badDialog = new Dialog("Auwch 😓", "Je hebt hier niet de juiste keuze gemaakt ❌", "./Images/dialog-icon.png", "Bad Character");

    // Selecteer de dampknoppen
    const damp1Button = document.querySelector(".damp1");
    const damp2Button = document.querySelector(".damp2");
    const damp3Button = document.querySelector(".damp3");

    // Event listeners toevoegen aan de dampknoppen
    damp1Button.addEventListener("click", (event) => showDialog(event, goodDialog));
    damp2Button.addEventListener("click", (event) => showDialog(event, semiGoodDialog));
    damp3Button.addEventListener("click", (event) => showDialog(event, badDialog));
})();
