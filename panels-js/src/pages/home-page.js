import { LitElement, html, css } from "lit";

import { utilities } from "../styles/panel-utilities";

export class HomePage extends LitElement {
  static get styles() {
    return [utilities, css``];
  }

  render() {
    return html`
      <div class="page">
        <div class="page-container">
          <hero-1></hero-1>
          <hero-2></hero-2>
        </div>
      </div>
    `;
  }
}
