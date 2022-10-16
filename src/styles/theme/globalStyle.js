import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    font-size: ${(props) => props.theme.typography.sizes.default};
  }

  button {
    cursor: pointer;
  }
`
export default GlobalStyle;
