import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { utilities } from '../styles/panel-utilities';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = [utilities, css``];

  render() {
    return html`
      <div class="page">
        <div class="page-container">
          <hero-1></hero-1>
          <hero-2></hero-2>
          <div class="section">
            <hero-3></hero-3>
          </div>
        </div>
      </div>
    `;
  }
}
