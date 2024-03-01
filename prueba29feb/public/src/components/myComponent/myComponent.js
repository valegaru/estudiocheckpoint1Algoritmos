//clase 05
//hacer un componente
class NombreComponente extends HTMLElement {
	//codigo que se ejecuta cuando la clase se crea
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//crea una referencia, colita para poder usar este componente despues. !: OPEN
	}

	static get observedAttributes() {
		return ['atributo'];
		//son los atributos dinamicos de este componente usados en el metodo render en html
	}

	//montar el componente cuando este se encrusta en el DOM
	connectedCallback() {
		this.render();
	}

	// Este método actualiza los atributos  que queremos observar cada vez que se modifican
	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	//utiliza el html para construir el componente
	render() {
		this.shadowRoot.innerHTML = `
          <link rel='stylesheet' href='./src/components/NombreComponente/NombreComponente.css'></link>
         <p src=${this.atributo || 'por defecto'}></p>
      `;
	}
	//toca linkear el css desde aqui
	//hay que poner src=${this.atributo} dentro de la etiqueta para que sea dinamico
}

//Registrar elemento
customElements.define('nombre-en-etiqueta', NombreComponente);
export default NombreComponente;
