import { css } from "lit";

export const colors = css`
  :host {
    --transparent: #fff0;

    --primary-1: #ff715b;
    --primary-2: #ff934f;
    --primary-3: #3ccf91;
    --primary-4: #3c5ccf;
    --primary-5: #5132c0;
    --primary-6: #8f2df0;

    --gray-1: #12141d;
    --gray-2: #1e2029;
    --gray-3: #2a2c34;
    --gray-4: #898a8e;

    --white-1: #ffffff;

    --gradient-1: linear-gradient(90deg, #ff715b, #ff934f);
    --gradient-2: linear-gradient(90deg, #ff934f, #3ccf91);
    --gradient-3: linear-gradient(90deg, #3ccf91, #3c5ccf);
    --gradient-4: linear-gradient(90deg, #3c5ccf, #5132c0);
    --gradient-5: linear-gradient(90deg, #5132c0, #8f2df0);
    --gradient-6: linear-gradient(90deg, #3c5ccf, #ff715b);
    --gradient-7: linear-gradient(90deg, #ff715b, #5132c0);
    --gradient-8: linear-gradient(90deg, #8f2df0, #3c5ccf);
    --gradient-9: linear-gradient(90deg, #8f2df0, #ff934f);
  }
`;

export const typography = css`
  .display-1 {
    font-family: "Inter", sans-serif;
    font-size: 96px;
    line-height: 96px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 36px;
  }
  .display-2 {
    font-family: "Inter", sans-serif;
    font-size: clamp(40px, 10vw, 88px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 36px;
  }
  .display-3 {
    font-family: "Inter", sans-serif;
    font-size: 72px;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 24px;
  }
  .display-4 {
    font-family: "Inter", sans-serif;
    font-size: 54px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 24px;
  }

  .heading-1 {
    font-family: "Inter", sans-serif;
    font-size: 40px;
    line-height: 44px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 24px;
  }
  .heading-2 {
    font-family: "Inter", sans-serif;
    font-size: clamp(28px, 4vw, 32px);
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-top: 0px;
    margin-bottom: 24px;
  }
  .heading-3 {
    font-family: "Inter", sans-serif;
    font-size: 28px;
    line-height: 36px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-top: 0px;
    margin-bottom: 24px;
  }
  .heading-4 {
    font-family: "Inter", sans-serif;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 0px;
    margin-bottom: 16px;
  }
  .heading-5 {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    line-height: 28px;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 0px;
    margin-bottom: 12px;
  }
  .heading-6 {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 0px;
    margin-bottom: 12px;
  }

  .lead-text {
    font-family: "Inter", sans-serif;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: 0em;
  }
  .body-text {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0em;
  }
  .small-text {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    letter-spacing: 0em;
  }
`;
