//importar todos los componentes desde padre
import * as components from './components/indexPadre.js';
//aqui se importa la data del archivo de data
import { dataCards } from './components/data/dataCards.js';
//otro componente que es el abuelo pero es un contenedor gigante de todo
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
};
	}

	connectedCallback(); {
		this.render();
	}

	render(); {
		this.shadowRoot.innerHTML = `
          <link rel='stylesheet' href='./src/indexAbuelo.css'></link>
          <section>
          <nombre-en-etiqueta atributo="hola"></nombre-en-etiqueta>
          <nombre-en-etiqueta atributo="adios"></nombre-en-etiqueta>
 </section>
      `;

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
