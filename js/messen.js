import {inventoryList1} from "./item";
import {koksmes} from "./elementen";

const producten = inventoryList1;
console.log(producten);
const checkVoedselTafel = function (){
    const snijplankFigure = document.querySelector(".snijplankplek");
    const element = snijplankFigure.querySelectorAll('img')[1];
    const voedselOpPlank = element.alt;
    producten.forEach((product) => {
        if (product.toString() === voedselOpPlank.toString()){
            return product;
        }
    })
}
const snijd = function (mes) {
    checkVoedselTafel();
    console.log(checkVoedselTafel());
    return true;
}

koksmes.addEventListener('click', () => snijd("koksmes"))
console.log(producten);
console.log(checkVoedselTafel());
