class appHeader extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                background: url(https://i1.wp.com/photofocus.com/wp-content/uploads/2018/04/RingLightFood-11-Edit-1.jpg?w=1480&ssl=1);
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100%;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            div{
                padding: 150px 400px;
                margin-bottom: 50px;
            }
            #header h1 {
                text-align: center;
                padding: 50px;
                background-color: rgba(0, 0, 0, 0.1);
                border: 1px solid white;
            }
        </style>
        <div id="header">
            <h1>Delicious Foods</h1>
        </div>
        `
    }
}

customElements.define("app-header", appHeader);