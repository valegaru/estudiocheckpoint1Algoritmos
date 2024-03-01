//importar todos los componentes desde padre
import * as components from './components/indexPadre.js';
//aqui se importa la data del archivo de data
import { dataCards } from './components/data/dataCards.js';
//otro componente que es el abuelo pero es un contenedor gigante de todo
class AppContainer extends HTMLElement {
	cards = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		//dentro del constructor
		//esto va a renderizar todo el data segun el componente DataCard que creamos en ComponenteDataCard.js
		dataCards.forEach((element) => {
			//creo el componente
			const card = this.ownerDocument.createElement('data-card');
			//se van asignando las propiedades que deben aparecer en la card
			card.setAttribute('name', element.name);
			card.setAttribute('gender', element.gender);
			card.setAttribute('house', element.house);
			card.setAttribute('image', element.image);
			//se va guardando cada carta en card de arribita del constructor
			this.cards.push();
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
          <link rel='stylesheet' href='./src/indexAbuelo.css'></link>
          <section>
          <nombre-en-etiqueta atributo="hola"></nombre-en-etiqueta>
          <nombre-en-etiqueta atributo="adios"></nombre-en-etiqueta>
 </section>

      `;

		//para finalizar la manera larga de renderizar cada carta
		this.cards.forEach((myCard) => {
			this.shadowRoot.appendChild(myCard);
		});

		//manera corta de renderizar las cartas, solo se necesita esto
		dataCards.forEach((element) => {
			this.shadowRoot.innerHTML += `<data-card name=${element.name}
			gender=${element.gender}
			house=${element.house}
			image=${element.image}>
			</data-card>
		`;
		});
	}
}

customElements.define('app-container', AppContainer);
//<app-container></app-container> es la etiqueta usada en el index.html
//no hay que exportarlo
