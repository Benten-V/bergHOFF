import { punten } from "./punten.js";
const buttonref = document.querySelector(".refresh");
const buttonmin = document.querySelector(".minpunten");
const totaalPunten = document.querySelector(".totaalPunten");

buttonref.addEventListener("click", () => window.location.reload());

const Punten = new punten();

buttonmin.innerText = Punten.showMinPunten() + " Punten verloren";
totaalPunten.innerText = Punten.showPunten() + " Punten gewonnen";
console.log(Punten.showMinPunten());

// const promise = new Promise((resolve, reject) => {
//   buttonmin.innerText = Punten.showMinPunten();
//   totaalPunten.innerText = Punten.showPunten();
//   console.log(Punten.showMinPunten());
// });
