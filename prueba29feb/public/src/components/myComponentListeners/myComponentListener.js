//clase 06
// 06_webComponents archivo counter
// https://github.com/LeiderCalvo/DCA/tree/06_webComponents
//hacer un boton contador
//sirve para hacer cosas dinamicas
class Counter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		//para componentes interactivos
		this.onButtonClicked = this.onButtonClicked.bind(this);
	}

	static get observedAttributes() {
		return ['count'];
	}

	//listener, escucha eventos, en este caso click
	addEventListener() {
		this.shadowRoot.querySelector('button').addEventListener('click', this.onButtonClicked); // (click, =>console.log('holis'))
		//funcion flecha
		//lo selecciono por la clase button
		//despues de esto hay que llamarla
	}

	connectedCallback() {
		//hay que cambiar render por mount
		this.mount();
	}

	onButtonClicked() {
		const currentValue = Number(this.getAttribute('count')) || 0;
		this.setAttribute('count', currentValue + 1);
		//toca llamarlo en el listener
		//agregar Number() verde para convertir el string a numero
	}

	mount() {
		//en este orden
		//para que renderice
		this.render();
		//hay que agregar los listeners
		this.addEventListener();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		//tambien se cambia de render a mount
		this.mount();
	}

	render() {
		this.shadowRoot.innerHTML = `
          <section>
				<h1>Counter</h1>
				${this.count || 0}</section>
      `;
	}
}

customElements.define('my-counter', Counter);
export default Counter;
