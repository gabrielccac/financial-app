import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --clr-background: #f8f9fa;
    --clr-outlines: #dbdbdb;

    --clr-neutral-100: #343a40;
    --clr-neutral-300: #554a62;
    --clr-neutral-400: #868e96;
    --clr-neutral-900: #f2f2fd;

    --clr-primary: #7950f2;
    --gradient-primary: linear-gradient(218.4deg, #505fff 4.59%, #4424be 94.99%);

    --ff-primary: 'Inter', sans-serif;
    
    --fw-regular: 400;
    --fw-medium: 500;
    --fw-bold: 700;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    margin-top: 2rem;
    background: var(--clr-background);
    color: var(--clr-neutral-100);
    font-family: var(--ff-primary);

    -webkit-font-smoothing: antialiased;
  }

  button:hover {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h2 {
    font-size: 1rem;
    font-weight: var(--fw-medium);
    color: var(--clr-neutral-300);
  }
  
`;
