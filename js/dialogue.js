
    const dialogBox = document.querySelector(".dialog-box");
    const dialogContent = document.querySelector(".text-dialog");

    const beGone = function () {
        dialogBox.classList.add("hidden");
    }

    const showDialog = function (event, dialog) {
        if (event) event.preventDefault();
        console.log("Dialog triggered:", dialog); // Log de dialoog naar de console
        dialogBox.classList.remove("hidden");
        dialog.invullen();

        const button = dialogBox.querySelector(".button_dialog");
        button.addEventListener("click", beGone); // Hier toegevoegd
    }

    class Dialog {
        constructor(title, text, imgsrc = "./Images/dialog-icon.png", imgalt = "Hilde") {
            this.title = title;
            this.text = text;
            this.imgsrc = imgsrc;
            this.imgalt = imgalt;
        }

        invullen() {
            console.log("Filling dialog with:", this.title, this.text, this.imgsrc, this.imgalt);
            dialogContent.querySelector(".title").textContent = this.title;
            dialogContent.querySelector(".text").textContent = this.text;
            document.querySelector(".img_talking_person").src = this.imgsrc;
            document.querySelector(".img_talking_person").alt = this.imgalt;
        }
    }

    const goodDialog = new Dialog("Goed zo 👍", "Hier heb je de juiste keuze gemaakt ✅", "./Images/dialog-icon.png", "Good Character");
    const semiGoodDialog = new Dialog("Bijna goed 🤔", "Dit is een redelijke keuze, maar niet de beste 😐", "./Images/dialog-icon.png", "Semi-Good Character");
    const badDialog = new Dialog("Auwch 😓", "Je hebt hier niet de juiste keuze gemaakt ❌", "./Images/dialog-icon.png", "Bad Character");
    const fridgeDialog = new Dialog("Welkom in de koelkast", "Hier vind je het vlees of de groeten die je nodig hebt om het gerecht te maken, klik op een item om deze uit de koelkast te nemen", "./Images/dialog-icon.png", "Fridge");
    const kastDialog = new Dialog("Welkom in de kast", "Hier vind je de pannen en potten die je nodig hebt om te koken", "./Images/dialog-icon.png", "Kast");
    const startDialog = new Dialog("Goedemorgen, tijd voor een ontbijt!", "Selecteer de 2 items die je voor je eten en drinken zal gebruiken.");
    const slaapkamerdeurDialog = new Dialog("Goedemiddag", "Welkom in de keuken hier kan je gebruik maken van ons gehele assortiment om zo ecologisch mogelijk je gerecht te bereiden", "./Images/dialog-icon.png", "slaapkamer-deur");
    const klaarMetKokenDialog = new Dialog("Klaar met koken", "Het eten is gebakken goed gdn en bedankt voor het spelen", "./Images/dialog-icon.png", "slaapkamer-deur");


    const goodDialogLinks = document.querySelectorAll(".good-dialogue");
    const badDialogLinks = document.querySelectorAll(".bad-dialogue");
    const fridgeDialogLinks = document.querySelectorAll(".keuken-img-frigo");
    const kastDialogLinks = document.querySelectorAll(".keuken-zoom-img-kast");

    const damp1Dialog = new Dialog("Goed gekozen", "Je hebt een uitstekende keuze gemaakt met dampkap stand 1.", "./Images/dialog-icon.png", "Dampkap 1");
    const damp2Dialog = new Dialog("Redelijke keuze", "Dampkap stand 2 is een redelijke keuze.", "./Images/dialog-icon.png", "Dampkap 2");
    const damp3Dialog = new Dialog("Niet optimaal", "Dampkap stand 3 is niet de beste keuze.", "./Images/dialog-icon.png", "Dampkap 3");

    const damp1Button = document.querySelector(".damp1");
    const damp2Button = document.querySelector(".damp2");
    const damp3Button = document.querySelector(".damp3");
    const slaapkamerdeurButton = document.querySelector(".slaapkamer-deur");

    damp1Button.addEventListener("click", (event) => {
        showDialog(event, damp1Dialog);
    });

    damp2Button.addEventListener("click", (event) => {
        showDialog(event, damp2Dialog);
    });

    damp3Button.addEventListener("click", (event) => {
        showDialog(event, damp3Dialog);
    });

    slaapkamerdeurButton.addEventListener("click", (event) => {
        showDialog(event, slaapkamerdeurDialog);
    });

    goodDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            showDialog(event, goodDialog);
        });
    });

    badDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            showDialog(event, badDialog);
        });
    });

    fridgeDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            showDialog(event, fridgeDialog);
        });
    });

    kastDialogLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            showDialog(event, kastDialog);
        });
    });

    window.addEventListener("DOMContentLoaded", () => {
        showDialog(null, startDialog);
    });
export {Dialog, klaarMetKokenDialog, showDialog, badDialog}
