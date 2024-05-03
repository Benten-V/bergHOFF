"use strict";
(function() {
    const frigo = document.querySelector(".keuken-img-frigo");
    const keuken = document.querySelector(".main-keuken");
    const frigovenster = document.querySelector(".main-frigo");
    const close = document.querySelector(".close");
    const microgolf = document.querySelector(".keuken-img-micro");

    const openItem = function (verborgen, zichtbaar) {
        verborgen.classList.add("hidden");
        zichtbaar.classList.remove("hidden");
    }
    const sluitItem = function (verborgen, zichtbaar) {
        zichtbaar.classList.remove("hidden");
        verborgen.classList.add("hidden");
    }
    frigo.addEventListener('click', () => openItem(keuken, frigovenster));
    close.addEventListener('click', () => sluitItem(frigovenster, keuken));

})()