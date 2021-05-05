import { LitElement, html, css } from "lit";

import { utilities } from "../../styles/panel-utilities";

export class Hero1 extends LitElement {
  static get styles() {
    return [
      utilities,
      css`
        h5 {
          color: var(--primary-3);
          margin-bottom: 24px !important;
        }
      `,
    ];
  }

  render() {
    return html`
      <panel-base>
        <h5 class="heading-5">Your site in the right light</h5>
        <h1 class="display-2">Next Generation Websites.</h1>
        <div>
          <h3 class="heading-2 inline">Build with Panels.</h3>
          <h4 class="heading-2 inline opacity-50">
            The ultimate design toolkit for savvy technology startups.
          </h4>
        </div>
      </panel-base>
    `;
  }
}
