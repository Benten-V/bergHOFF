import {vleeslist, groentenlist, inventoryList1} from "./item.js";
import {koksmes, groentenmes, groentenplek} from "./elementen.js";

const producten = inventoryList1;

/*Met deze functie kan een product naar een item van item.js omgezet worden*/
const zetProductNaarItem = function (product) {
    const gevondenItem = producten.find((item) => {
        return item.getName() === product;
    });
    if (gevondenItem) {
        return gevondenItem;
    }
}
/*
In de functie checkVoedselTafel wordt gekeken welk voedsel op de plank ligt.
Dit voedsel wordt omgezet tot het bestaande element en is ook het resultaat van deze functie.
 */
const checkVoedselTafel = function () {
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = snijplankFigure.querySelectorAll('img')[1];
    const voedselOpPlank = element.alt;
    return voedselOpPlank;
}
/*In deze functie wordt voor elk mes een lijst gemaakt van voedsel dat met het mes gesneden mag worden.*/
const checkVoedingVanMes = function (mes) {
    const checkmes = mes.alt.toString();
    let aanvaardeVoeding = []
    switch (checkmes) {
        case 'koksmes':
            return producten;
            break;
        case 'groentenmes':
            return groentenlist;
            break;
        default:
            break;
    }
}
/*Hier wordt gecontroleerd of het mes het voedsel mag snijden*/
const magSnijden = function (mes) {
    const voeding = checkVoedselTafel(); //dit is een string, naam van product
    const voedinglijst = checkVoedingVanMes(mes);
    const gevondenItem = voedinglijst.find((voedsel) => {
        return voedsel.getName() === voeding;
    });
    if (gevondenItem) {
        return gevondenItem;
    }

}
/*Hier wordt de afbeelding van het element veranderd.*/
const zetGesnedenImg = function (voedsel) {
    let imglink = '../Images/';
    switch (voedsel) {
        case 'tomaat':
            imglink ='./Images/gesneden_tomaat.png';
            break;
        case 'sla':
            imglink ='./Images/gesneden_sla.png';
            break;
        case 'wortel':
            imglink ='./Images/gesneden_wortel.png';
            break;
        case 'komkommer':
            imglink ='./Images/gesneden_komkommer.png';
            break;
        case 'steak':
            imglink ='./Images/gesneden_steak.png';
            break;
        case 'kip':
            imglink ='./Images/gesneden_kip.png';
            break;
        case 'bacon':
            imglink ='./Images/gesneden_bacon.png';
            break;
        default:
            imglink ='./Images/close.png';
            break;
    }
    return imglink;
}
/*In deze functie wordt het voedsel gesneden*/
const snijd = function () {
    const voeding = checkVoedselTafel();
    const item = zetProductNaarItem(voeding);
    const imgsrc = zetGesnedenImg(voeding);
    item.setImg(imgsrc);
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = snijplankFigure.querySelectorAll('img')[1];
    element.src = imgsrc;
    console.log(item)
}


koksmes.addEventListener('click', () => {
    console.log(magSnijden(koksmes));
    if (magSnijden(koksmes)) {
        snijd();
    } else {
        console.log('tis ni just');
        //hier moet boodschap verschijnen dat dat niet mag
    }
})
groentenmes.addEventListener('click', () => {
    if (magSnijden(groentenmes)) {
        snijd();
    } else {
        console.log('ge zijt ni just bezig')
        //hier moet boodschap verschijnen dat dat niet mag
    }
})
/*eventListeners moeten toegevoegd worden wanneer de elementen op de groentenplek worden gezet*/
