import {inventoryList1} from "./item";
import {koksmes} from "./elementen";

const producten = inventoryList1;
console.log(producten);
/*
In de functie checkVoedselTafel wordt gekeken welk voedsel op de plank ligt.
Dit voedsel wordt omgezet tot het bestaande element en is ook het resultaat van deze functie.
 */
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
/*
In de functie magSnijden wordt gecontroleerd of het product dat op de plank ligt gesneden mag worden met het mes dat geselecteerd wordt.
Deze functie geeft true of false terug.
 */
const magSnijden = function (mes) {
    checkVoedselTafel()
        .then(product => {
            if (product.key('mes')[0] === mes){
                return true;
            }
            else if (product.key('mes')[1]){
                if (product.key('mes')[1] === mes){
                    return true;
                }
            }
            else {
                console.log(mes, product.key('mes'));
                return false;
            }
        })
}

koksmes.addEventListener('click', () => magSnijden(koksmes))
console.log(producten);
console.log(checkVoedselTafel());
