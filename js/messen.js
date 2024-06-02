import * as items from './item';

/*
Eerst sla ik alle messen op in een variabele
 */
export const koksmes = document.querySelector(".koksmes");
const fileermes = document.querySelector(".fileermes");
const broodmes = document.querySelector(".broodmes");
const kaasmes = document.querySelector(".kaasmes");
export const groentenmes = document.querySelector(".groentenmes");

const producten = [steak, kip, bacon, sla, tomaat, komkommer, wortel];
const checkVoedselTafel = function (){
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = snijplankFigure.querySelectorAll('img')[1];
    const voedselOpPlank = element.alt;
    return voedselOpPlank;
}
const snijd = function (mes) {
    checkVoedselTafel();
    console.log(checkVoedselTafel());

    return true;
}

koksmes.addEventListener('click', () => snijd("koksmes"))
console.log(producten);
console.log(checkVoedselTafel());
