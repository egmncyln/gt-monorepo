import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('mobile-text')
export class MobileText extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      font-family: system-ui;
      color: blue;
    }
  `;

  // Render the UI as a function of component state
  render() {
    return html`<p><slot></slot></p>`;
  }
}
