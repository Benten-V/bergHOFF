// const dampkap = document.querySelector(".dampkap");
import { Punten } from "./punten.js";

const damp1 = document.querySelector(".damp1");
const damp2 = document.querySelector(".damp2");
const damp3 = document.querySelector(".damp3");

let x = 0;

damp1.addEventListener("click", () => {
  damp1.style.backgroundColor = "rgba(0, 255, 0, 1)";
  damp2.style.backgroundColor = "transparent";
  damp3.style.backgroundColor = "transparent";
  if (x == 0) {
    Punten.plusPunten(2);
  } else if (x == 2) {
    Punten.minPunten(1);
    Punten.plusPunten(2);
  } else if (x == 3) {
    Punten.plusPunten(4);
  }
  x = 1;
});

damp2.addEventListener("click", () => {
  damp2.style.backgroundColor = "rgba(255, 152, 0, 1)";
  damp3.style.backgroundColor = "transparent";
  damp1.style.backgroundColor = "transparent";
  if (x == 0) {
    Punten.plusPunten(1);
  } else if (x == 1) {
    Punten.minPunten(2);
    Punten.plusPunten(1);
  } else if (x == 3) {
    Punten.plusPunten(3);
  }
  x = 2;
});

damp3.addEventListener("click", () => {
  damp3.style.backgroundColor = "rgba(255, 0, 0, 1)";
  damp2.style.backgroundColor = "transparent";
  damp1.style.backgroundColor = "transparent";
  if (x == 0) {
    Punten.minPunten(2);
  } else if (x == 1) {
    Punten.minPunten(4);
  } else if (x == 2) {
    Punten.minPunten(3);
  }
  x = 3;
});
