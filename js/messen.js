import {vleeslist, groentenlist, inventoryList1} from "./item.js";
import {koksmes, groentenmes, groentenplek} from "./elementen.js";

const producten = inventoryList1;

/*Met deze functie kan een product naar een item van item.js omgezet worden*/
const zetProductNaarItem = function (product) {
    producten.forEach((item) => {
        if (item.toString() === product) {
            return item;
        }
    })
}
/*
In de functie checkVoedselTafel wordt gekeken welk voedsel op de plank ligt.
Dit voedsel wordt omgezet tot het bestaande element en is ook het resultaat van deze functie.
 */
const checkVoedselTafel = function () {
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = snijplankFigure.querySelectorAll('img')[1];
    const voedselOpPlank = element.alt;
    producten.forEach((product) => {
        if (product.toString() === voedselOpPlank.toString()) {
            return product;
        }
    })
}
/*In deze functie wordt voor elk mes een lijst gemaakt van voedsel dat met het mes gesneden mag worden.*/
const checkVoedingVanMes = function (mes) {
    let aanvaardeVoeding = []
    switch (mes.toString()) {
        case 'koksmes':
            aanvaardeVoeding = +vleeslist;
            aanvaardeVoeding = +groentenlist;
            break;
        case 'groentenmes':
            aanvaardeVoeding = +groentenlist;
            break;
        default:
            break;
    }
    return aanvaardeVoeding;
}
/*Hier wordt gecontroleerd of het mes het voedsel mag snijden*/
const magSnijden = function (mes) {
    const voeding = checkVoedselTafel();
    const voedinglijst = checkVoedingVanMes(mes);
    voedinglijst.forEach(voedsel => {
        if (voedsel === voeding) {
            return true;
        }
    })
    return false;
}
/*Hier wordt de afbeelding van het element veranderd.*/
const zetGesnedenImg = function (voedsel) {
    let imglink = '../Images/';
    switch (voedsel.toString()) {
        case 'tomaat':
            imglink = +'gesneden_tomaat.png';
            break;
        case 'sla':
            imglink = +'gesneden_sla.png';
            break;
        case 'wortel':
            imglink = +'gesneden_wortel.png';
            break;
        case 'komkommer':
            imglink = +'gesneden_komkommer.png';
            break;
        case 'steak':
            imglink = +'gesneden_steak.png';
            break;
        case 'kip':
            imglink = +'gesneden_kip.png';
            break;
        case 'bacon':
            imglink = +'gesneden_bacon.png';
            break;
        default:
            imglink = +'close.png';
            break;
    }
    return imglink;
}
/*In deze functie wordt het voedsel gesneden*/
const snijd = function () {
    const voeding = checkVoedselTafel();
    zetGesnedenImg(voeding);
}
/*Door het klikken op een ingrediënt wordt deze op de snijplank gezet*/
const zetVoedingOpPlank = function (voeding, voedingItem) {
    /*element toevoegen snijplank*/
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = document.createElement('img');
    element.src = voedingItem['img'];
    element.alt = voedingItem['name'];
    snijplankFigure.appendChild(element);
   /*element verwijderen groentenplek*/
    voeding.remove();
}

koksmes.addEventListener('click', () => {
    if (magSnijden(koksmes)) {
        snijd();
    } else {
        //hier moet boodschap verschijnen dat dat niet mag
    }
})
groentenmes.addEventListener('click', () => {
    if (magSnijden(groentenmes)) {
        snijd();
    } else {
        //hier moet boodschap verschijnen dat dat niet mag
    }
})
/*eventListeners moeten toegevoegd worden wanneer de elementen op de groentenplek worden gezet*/
export {zetVoedingOpPlank};µ
