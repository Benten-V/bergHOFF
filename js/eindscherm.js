import { Punten } from "./punten.js";
const buttonref = document.querySelector(".refresh");
const buttonmin = document.querySelector(".minpunten");
const totaalPunten = document.querySelector(".totaalPunten");

buttonref.addEventListener("click", () => window.location.reload());

buttonmin.innerText = Punten.showMinPunten() + " Punten verloren";
totaalPunten.innerText = Punten.showPunten() + " Punten gewonnen";
// console.log(Punten.showMinPunten());
