import {groentenplek} from "./elementen.js";

const zetVoedingOpAanrecht = function (voeding) {
    const button = groentenplek.querySelector('button');
    button.appendChild(voeding);
}
/*Door het klikken op een ingrediënt wordt deze op de snijplank gezet*/
const zetVoedingOpPlank = function (voeding) {
    const snijplankFigure = document.querySelector(".snijplankplek");
    snijplankFigure.appendChild(voeding);
    voeding.removeEventListener('click', zetVoedingOpPlank);
    voeding.addEventListener('click', () => zetVoedingOpAanrecht(voeding))
}

export {zetVoedingOpPlank};