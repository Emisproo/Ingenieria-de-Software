import { plantilla_de_elementos } from './plantilla_de_elementos';

class Boton_Login extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: 'open'}); //elemento abierto
        this.shadowRoot.innerHTML= plantilla_de_elementos;
    }    

    set caption(value)
    {
        this.shadowRoot.querySelector("button").innerText = value;
    }

    set tooltip (value)
    {
        this.shadowRoot.querySelector("button").title =value;
    }

    insertStyleFile(styleFile)
    {
        this.appendChild(document.createElement('style'));
        this.styleSheet[0].insertRule("@import '"+styleFile+"'");
    }
}

customElements.define('wc-boton', Boton_Login);

export { Boton_Login};
