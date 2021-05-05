import { r, _ as __decorate, n, h, T } from './panel-themes-905be274.js';
import { u as utilities, b as breakpoints } from './panel-utilities-1a41b659.js';

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

let Hero3 = class Hero3 extends h {
    render() {
        return T `
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
};
Hero3.styles = [
    utilities,
    r `
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
Hero3 = __decorate([
    n('hero-3')
], Hero3);
