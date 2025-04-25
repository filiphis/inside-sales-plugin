import { createGlobalStyle } from "styled-components";

/**
 * Estilos globais da aplicação.
 */
export const GlobalStyle = createGlobalStyle`

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
`;
