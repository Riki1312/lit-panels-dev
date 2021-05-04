import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { utilities } from '../../styles/panel-utilities';
import '../../components/components';

@customElement('hero-2')
export class Hero2 extends LitElement {
  static styles = [
    utilities,
    css`
      panel-base {
        --panel-gradient: var(--gradient-7);
      }
    `
  ];

  render() {
    return html`
      <panel-base>
        <h1 class="display-2">Built to stand out.</h1>
        <div>
          <h3 class="heading-2 inline">Build with Panels.</h3>
          <h4 class="heading-2 inline opacity-50">
            The ultimate design toolkit for savvy technology startups.
          </h4>
        </div>
        <p class="small-text">
          <span class="opacity-50">By signing up you agree to our</span> Terms &
          Conditions
        </p>
      </panel-base>
    `;
  }
}
