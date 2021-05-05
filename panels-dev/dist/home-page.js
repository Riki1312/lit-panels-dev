import { h, T, r, _ as __decorate, n } from './panel-themes-905be274.js';
import { u as utilities } from './panel-utilities-1a41b659.js';

let HomePage = class HomePage extends h {
    render() {
        return T `
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
};
HomePage.styles = [utilities, r ``];
HomePage = __decorate([
    n('home-page')
], HomePage);

export { HomePage };
