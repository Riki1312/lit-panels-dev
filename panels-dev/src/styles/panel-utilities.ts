import { css } from 'lit';

import { breakpoints } from './panel-properties';
import { colors, typography } from './panel-themes';

const _layout = css`
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

  .section {
    margin: 80px 0px;
  }

  @media (min-width: ${breakpoints.md}px) {
    .page-container {
      margin: 0px 40px;
    }
  }
`;

const _effects = css`
  .opacity-50 {
    opacity: 0.5;
  }
`;

export const utilities = [colors, typography, _layout, _effects];
