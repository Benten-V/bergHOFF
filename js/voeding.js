/*Door het klikken op een ingrediënt wordt deze op de snijplank gezet*/
const zetVoedingOpPlank = function (voeding, voedingItem) {
    /*element toevoegen snijplank*/
    const snijplankFigure = document.querySelector(".snijplankplek");
    // const element = document.createElement('img');
    // element.src = voedingItem['img'];
    // element.alt = voedingItem['name'];
    snijplankFigure.appendChild(voeding);
    /*element verwijderen groentenplek*/
    // voeding.remove();
}

export {zetVoedingOpPlank};