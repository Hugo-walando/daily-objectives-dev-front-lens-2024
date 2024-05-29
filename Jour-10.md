# Objectifs journaliers

## Lundi 27/05/2024

### DOM :

- Comprendre le DOM (https://javascript.info/browser-environment)
  - Comprendre la façon dont il est construit.
  - Comprendre sa structure.
  - Comprendre l'auto-correction du DOM.
- Savoir naviguer dans le DOM :
  - documentElement
  - childNodes
  - firstChild
  - lastChild
  - siblings

### Tasks :

#### DOM children :

- The <div> DOM node? : document.body.firstElementChild
- The <ul> DOM node? : document.body.lastElementChild
- The second <li> (with Pete)? document.body.lastElementChild.lastElementChild

#### Select all diagonal cells :

let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red';
    }

- Savoir récupérer des éléments du DOM :
  - querySelector
  - getElement..
  - Comprendre le principe de 'Live-Collection'.
