class Boton_Signup extends HTMLButtonElement
{
    constructor()
    {
        super();
    }

    set caption(value)
    {
        this.innerText=value;
    }

    set tooltip(value)
    {
        this.title= value;
    }

    insertStyleFile(styleFile)
    {
        this.appendChild(document.createElement('style'));
        this.styleSheets[0].insertRule("@import '"+styleFile+"'");
    }
}

customElements.define('wc-boton_signup', Boton_Signup, { extends: 'button'});

export {Boton_Signup};