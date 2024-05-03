"use strict";
(function() {
    const frigo = document.querySelector(".keuken-img-frigo");
    const keuken = document.querySelector(".main-keuken");
    const frigovenster;
    console.log(keuken);
    const openFrigo = function () {
        //Hier moet frigovenster getoond worden
        keuken.classList.add("hidden");

    }
    frigo.addEventListener('click', () => openFrigo());
})()