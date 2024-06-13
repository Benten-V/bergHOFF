/*Door het klikken op een ingrediënt wordt deze op de snijplank gezet*/
const zetVoedingOpPlank = function (voeding) {
    const snijplankFigure = document.querySelector(".snijplankplek");
    snijplankFigure.appendChild(voeding);
}

export {zetVoedingOpPlank};