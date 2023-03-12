//@ts-nocheck

import { LitElement, html } from 'lit';

const webComponentName = 'mobile-text';

export class MobileText extends LitElement {
  render() {
    return html`<p><slot></slot></p>`;
  }
}

if (!customElements.get(webComponentName)) {
  customElements.define(webComponentName, MobileText);
}
