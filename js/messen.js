import * as items from './item';

/*
Eerst sla ik alle messen op in een variabele
 */


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
