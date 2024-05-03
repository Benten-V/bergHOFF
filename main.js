"use strict";
(function() {
    const frigo = document.querySelector(".keuken-img-frigo");
    const keuken = document.querySelector(".main-keuken");
    const frigovenster = document.querySelector(".main-frigo");
    const closeFrigo = document.querySelector(".close-frigo");
    const microgolf = document.querySelector(".keuken-img-micro");
    const diepvries = document.querySelector(".keuken-img-diepvries");
    const diepvriesvenster = document.querySelector(".main-diepvries");
    const closeDiepvries = document.querySelector(".close-diepvries");
    const openItem = function (verborgen, zichtbaar) {
        verborgen.classList.add("hidden");
        zichtbaar.classList.remove("hidden");
    }
    const sluitItem = function (verborgen, zichtbaar) {
        zichtbaar.classList.remove("hidden");
        verborgen.classList.add("hidden");
    }
    frigo.addEventListener('click', () => openItem(keuken, frigovenster));
    closeFrigo.addEventListener('click', () => sluitItem(frigovenster, keuken));
    diepvries.addEventListener('click', () => openItem(keuken, diepvriesvenster));
    closeDiepvries.addEventListener('click', () => sluitItem(diepvriesvenster, keuken));
})()