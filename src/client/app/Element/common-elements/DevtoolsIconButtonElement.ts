import { LitElement, html} from 'lit-element';

export default class DevtoolsIconButtonElement extends LitElement {
  // static get properties() {
  //   return {
      "icon": boolean;
  //   }
  // }

  render(): any {
    return html`
<style>
  :host {
    color: inherit;
    flex: 0;
    cursor: pointer;
    display: flex;
    align-items: center; 
  }

  :host > button {
    border: none;
    background-color: transparent;
    padding: 0;
  }

  :host > button:focus {
    outline-width: 0;
  }

  :host > button:enabled:hover:not(:active) > * {
    background-color: var(--tab-selected-fg-color);
  }

</style>
<button>
  <devtools-icon icon="${this.icon}"></devtools-icon>
</button>      
    `;
  }
}