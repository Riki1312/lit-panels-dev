import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { breakpoints } from '../../styles/panel-properties';
import { utilities } from '../../styles/panel-utilities';

@customElement('panel-base')
export class PanelBase extends LitElement {
  static styles = [
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
    `
  ];

  render() {
    return html`
      <div class="panel">
        <slot></slot>
      </div>
    `;
  }
}
