const frigo = document.querySelector(".keuken-img-frigo");
const frigoInv = document.querySelector(".frigo");
const keuken = document.querySelector(".main-keuken");
const groentenplek = document.querySelector(".groenten");
const frigovenster = document.querySelector(".main-frigo");
const closeFrigo = document.querySelector(".close-frigo");
const slaapkamerdeur = document.querySelector(".slaapkamer-deur");
const mainsection = document.querySelector(".main-section");
const slaapkamerterug = document.querySelector(".slaapkamer-terug");
const zoom = document.querySelector(".zoom");
const keukenzoom = document.querySelector(".main-keuken-zoom");
const terugkeuken = document.querySelector(".terug-zoom");
const kast = document.querySelector(".keuken-zoom-img-kast");
const kastkeuken = document.querySelector(".main-kast");
const fornuis = document.querySelector(".fornuis");
const closekast = document.querySelector(".close-kast");

/*
Messen
 */
const koksmes = document.querySelector(".koksmes");
const fileermes = document.querySelector(".fileermes");
const broodmes = document.querySelector(".broodmes");
const kaasmes = document.querySelector(".kaasmes");
const groentenmes = document.querySelector(".groentenmes");

const openItem = function (verborgen, zichtbaar) {
    console.log('openItem called');
    verborgen.classList.add("hidden");
    zichtbaar.classList.remove("hidden");
};
const sluitItem = function (verborgen, zichtbaar) {
    console.log('sluitItem called');
    zichtbaar.classList.remove("hidden");
    verborgen.classList.add("hidden");
};
document.addEventListener("DOMContentLoaded", function () {
    frigo.addEventListener("click", () => openItem(keuken, frigovenster));
    closeFrigo.addEventListener("click", () => sluitItem(frigovenster, keuken));
    diepvries.addEventListener("click", () => openItem(keuken, diepvriesvenster));
    closeDiepvries.addEventListener("click", () => sluitItem(diepvriesvenster, keuken));
    slaapkamerdeur.addEventListener("click", () => openItem(mainsection, keuken));
    slaapkamerterug.addEventListener("click", () => openItem(keuken, mainsection));
    zoom.addEventListener("click", () => openItem(keuken, keukenzoom));
    terugkeuken.addEventListener("click", () => openItem(keukenzoom, keuken));
    kast.addEventListener("click", () => openItem(keukenzoom, kastkeuken));
    closekast.addEventListener("click", () => openItem(kastkeuken, keukenzoom));
});
/*
Exports van de elementen
 */
export {
    frigo,
    frigoInv,
    keuken,
    groentenplek,
    frigovenster,
    closeFrigo,
    microgolf,
    diepvries,
    diepvriesvenster,
    closeDiepvries,
    slaapkamerdeur,
    mainsection,
    slaapkamerterug,
    zoom,
    keukenzoom,
    terugkeuken,
    kast,
    kastkeuken,
    fornuis,
    closekast,
    koksmes,
    fileermes,
    broodmes,
    kaasmes,
    groentenmes,
    openItem,
    sluitItem
};
