import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { breakpoints } from '../../styles/panel-properties';
import { utilities } from '../../styles/panel-utilities';

@customElement('panel-base')
export class PanelBase extends LitElement {
  static styles = [
    utilities,
    css`
      :host {
        --panel-padding: 80px;
        --panel-color: var(--gray-2);
      }

      .panel {
        padding: var(--panel-padding) calc(var(--panel-padding) * 0.4);
        margin: 24px 0px;
        border-radius: 12px;
        background-color: var(--panel-color);
        background-image: var(--panel-gradient);
      }

      @media (min-width: ${breakpoints.md}px) {
        .panel {
          padding: var(--panel-padding);
        }
      }

      @media (min-width: ${breakpoints.lg}px) {
        .panel {
          padding: calc(var(--panel-padding) * 1.5);
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
