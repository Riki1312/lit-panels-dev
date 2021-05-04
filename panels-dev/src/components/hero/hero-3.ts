import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { breakpoints } from '../../styles/panel-properties';
import { utilities } from '../../styles/panel-utilities';

@customElement('hero-3')
export class Hero3 extends LitElement {
  static styles = [
    utilities,
    css`
      panel-base {
        --panel-color: var(--transparent);
        --panel-padding: 0px;

        text-align: center;
      }

      h5 {
        color: var(--primary-3);
        margin-bottom: 24px !important;
      }

      img {
        width: 100%;
        max-width: 600px;
        border-radius: 12px;
        margin-top: 40px;
      }

      .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (min-width: ${breakpoints.lg}px) {
        panel-base {
          text-align: left;
        }

        img {
          max-width: 800px;
          margin: 0px;
        }

        .layout {
          flex-direction: row;
        }

        .layout > * {
          margin: 40px;
        }
      }
    `
  ];

  render() {
    return html`
      <panel-base>
        <div class="layout">
          <div>
            <h5 class="heading-5">Introducing Panels</h5>
            <h1 class="display-3">A grid-based framework.</h1>
            <div>
              <h3 class="heading-3 inline">Build with Panels.</h3>
              <h4 class="heading-3 inline opacity-50">
                The ultimate design toolkit for savvy technology startups.
              </h4>
            </div>
          </div>
          <div>
            <img src="https://source.unsplash.com/fcF2IrKFup8/" />
          </div>
        </div>
      </panel-base>
    `;
  }
}
