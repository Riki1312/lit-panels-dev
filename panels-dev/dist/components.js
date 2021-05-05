import { r, _ as __decorate, n, h, T } from './panel-themes-491ca7e7.js';
import { u as utilities, b as breakpoints } from './panel-utilities-862539b6.js';

let PanelBase = class PanelBase extends h {
    render() {
        return T `
      <div class="panel">
        <slot></slot>
      </div>
    `;
    }
};
PanelBase.styles = [
    utilities,
    r `
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
PanelBase = __decorate([
    n('panel-base')
], PanelBase);

let Hero1 = class Hero1 extends h {
    render() {
        return T `
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
};
Hero1.styles = [
    utilities,
    r `
      h5 {
        color: var(--primary-3);
        margin-bottom: 24px !important;
      }
    `
];
Hero1 = __decorate([
    n('hero-1')
], Hero1);

let Hero2 = class Hero2 extends h {
    render() {
        return T `
      <panel-base>
        <h1 class="display-2">Built to stand out!</h1>
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
};
Hero2.styles = [
    utilities,
    r `
      panel-base {
        --panel-gradient: var(--gradient-7);
      }
    `
];
Hero2 = __decorate([
    n('hero-2')
], Hero2);
