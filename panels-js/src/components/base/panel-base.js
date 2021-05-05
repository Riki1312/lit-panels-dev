import { LitElement, html, css } from "lit";

import { breakpoints } from "../../styles/panel-properties";
import { utilities } from "../../styles/panel-utilities";

export class PanelBase extends LitElement {
  static get styles() {
    return [
      utilities,
      css`
        .panel {
          padding: 80px 28px;
          margin: 24px 0px;
          border-radius: 12px;

          background-color: var(--panel-color, var(--gray-2));
          background-image: var(--panel-gradient);
        }

        @media (min-width: ${breakpoints.md}px) {
          .panel {
            padding: 80px;
          }
        }

        @media (min-width: ${breakpoints.lg}px) {
          .panel {
            padding: 120px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="panel">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("panel-base", PanelBase);
