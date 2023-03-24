/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	addInsertDiv();
	initSelect();
	console.log('Processus de chargement du document terminé…');

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;


function initSelect() {
    const root = document.documentElement;

    root.addEventListener('click', select2);

    function select(event) {
        const target = event.target;
        if (target !== root) {
            if (target.style.backgroundColor == 'red') {
                target.style.backgroundColor = "transparent";
            }
            else {
                target.style.backgroundColor = 'red';
            }
        }
    }

    function select2(event) {
        const target = event.target;
        const div = document.getElementById("insert-div");
        if (target.parentNode !== root && target !== root && target.parentNode !== div && target !== div) {
            const selectedElements = document.querySelectorAll(".selected");
            selectedElements.forEach((el) => {
                el.classList.remove("selected");
            });
            target.classList.add("selected");
            insertElement(target);
        }
    }

}

	function addInsertDiv() {
		// Création de la <div> et de ses éléments enfants
		const divElement = document.createElement("div");
		divElement.id = "insert-div";

		const selectElement = document.createElement("select");
		selectElement.id = "insert-type";
		selectElement.name = "type";

		const option1 = document.createElement("option");
		option1.value = "div";
		option1.textContent = "div";
		const option2 = document.createElement("option");
		option2.value = "p";
		option2.textContent = "p";
		const option3 = document.createElement("option");
		option3.value = "span";
		option3.textContent = "span";

		selectElement.appendChild(option1);
		selectElement.appendChild(option2);
		selectElement.appendChild(option3);

		const inputElement = document.createElement("input");
		inputElement.type = "text";
		inputElement.id = "insert-text";
		inputElement.value = "My New Text Element";

		divElement.appendChild(selectElement);
		divElement.appendChild(inputElement);

		// Ajout de la <div> à la page
		const bodyElement = document.getElementsByTagName("body")[0];
		bodyElement.insertBefore(divElement, bodyElement.firstChild);
	}


	function insertElement(target) {
		let parentTarget = target.parentNode;
	
		var type = document.getElementById("insert-type").value;
		var value = document.getElementById("insert-text").value;
	
		var element = document.createElement(type);
		element.innerText = value;
	
		parentTarget.insertBefore(element, target);
	}
	

	let originalPage = null;

function search() {
  const searchText = document.getElementById('search-text').value.trim();
  
  // si c'est la première utilisation, on sauvegarde la page originale
  if (!originalPage) {
    originalPage = document.body.innerHTML;
  }
  
  // si le champ texte est vide, on restaure la page originale et on sort de la fonction
  if (searchText === '') {
    document.body.innerHTML = originalPage;
    return;
  }
  
  // on crée une expression régulière avec le texte à rechercher en ignorant la casse
  const regex = new RegExp(searchText, 'gi');
  
  // on parcourt le DOM pour rechercher le texte et le remplacer par une balise <span>
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
      const span = document.createElement('span');
      span.classList.add('select');
      const parts = node.nodeValue.split(regex);
      for (let i = 0; i < parts.length; i++) {
        const textNode = document.createTextNode(parts[i]);
        node.parentNode.insertBefore(textNode, node);
        if (i < parts.length - 1) {
          node.parentNode.insertBefore(span.cloneNode(), node);
        }
      }
      node.parentNode.removeChild(node);
    }
    node = walker.nextNode();
  }
}



