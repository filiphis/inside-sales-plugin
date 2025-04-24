import { createGlobalStyle } from "styled-components";

/**
 * Estilos globais da aplicação.
 * Aproveite para colocar CSS reset, custom fonts, tokens, etc.
 */
export const GlobalStyle = createGlobalStyle`

  /* ---------- Reset/opinionated ---------- */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    background: '#fafafa';
    color: red;
    -webkit-font-smoothing: antialiased;
  }

  /* ---------- Utilidades ---------- */
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
