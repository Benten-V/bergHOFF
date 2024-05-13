"use strict";
(function () {
  const frigo = document.querySelector(".keuken-img-frigo");
  const keuken = document.querySelector(".main-keuken");
  const frigovenster = document.querySelector(".main-frigo");
  const closeFrigo = document.querySelector(".close-frigo");
  const microgolf = document.querySelector(".keuken-img-micro");
  const diepvries = document.querySelector(".keuken-img-diepvries");
  const diepvriesvenster = document.querySelector(".main-diepvries");
  const closeDiepvries = document.querySelector(".close-diepvries");
  const slaapkamerdeur = document.querySelector(".slaapkamer-deur");
  const mainsection = document.querySelector(".main-section");
  const slaapkamerterug = document.querySelector(".slaapkamer-terug");
  const zoom = document.querySelector(".zoom");
  const keukenzoom = document.querySelector(".main-keuken-zoom");
  const terugkeuken = document.querySelector(".terug-zoom");
  const kast = document.querySelector(".keuken-zoom-img-kast");
  const kastkeuken = document.querySelector(".main-kast");
  const closekast = document.querySelector(".close-kast");

  const openItem = function (verborgen, zichtbaar) {
    verborgen.classList.add("hidden");
    zichtbaar.classList.remove("hidden");
  };
  const sluitItem = function (verborgen, zichtbaar) {
    zichtbaar.classList.remove("hidden");
    verborgen.classList.add("hidden");
  };
  frigo.addEventListener("click", () => openItem(keuken, frigovenster));
  closeFrigo.addEventListener("click", () => sluitItem(frigovenster, keuken));
  diepvries.addEventListener("click", () => openItem(keuken, diepvriesvenster));
  closeDiepvries.addEventListener("click", () =>
    sluitItem(diepvriesvenster, keuken)
  );
  slaapkamerdeur.addEventListener("click", () => openItem(mainsection, keuken));
  slaapkamerterug.addEventListener("click", () =>
    openItem(keuken, mainsection)
  );
  zoom.addEventListener("click", () => openItem(keuken, keukenzoom));
  terugkeuken.addEventListener("click", () => openItem(keukenzoom, keuken));
  kast.addEventListener("click", () => openItem(keukenzoom, kastkeuken));
  closekast.addEventListener("click", () => openItem(kastkeuken, keukenzoom));
})();
