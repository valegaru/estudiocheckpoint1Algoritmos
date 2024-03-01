//clase 07
//usamos el componente creado en la clase 05
class CustomMessage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'gender', 'house', 'image'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<h1>${this.name || 'Por defecto'}</h1>
          <p >${this.gender || 'por defecto'}</p>
					<p >src=${this.house || 'por defecto'}</p>
					<img src=${this.image}></img>
		`;
	}
}

customElements.define('data-card', CustomMessage);
export default CustomMessage;
