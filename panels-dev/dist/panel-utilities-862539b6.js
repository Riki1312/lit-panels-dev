import { r, c as colors, t as typography } from './panel-themes-491ca7e7.js';

const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xl2: 1536
};

const _layout = r `
  .inline {
    display: inline;
  }

  .page {
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    display: flex;
    justify-content: center;

    background-color: var(--gray-1);
    color: var(--white-1);
  }

  .page-container {
    width: 100%;
    max-width: ${breakpoints.xl}px;
    margin: 0px 10px;
  }

  @media (min-width: ${breakpoints.md}px) {
    .page-container {
      margin: 0px 40px;
    }
  }
`;
const _effects = r `
  .opacity-50 {
    opacity: 0.5;
  }
`;
const utilities = [colors, typography, _layout, _effects];

export { breakpoints as b, utilities as u };
