import { createGlobalStyle } from 'styled-components';

import GoogleSansRegular from '../Assets/fonts/ProductSans-Regular.ttf';
import GoogleSansBold from '../Assets/fonts/ProductSans-Bold.ttf';

export const theme = {
    textPrimary: '#424749',
    textSecondary: '#6e7679',
    primary: '#f9423a',
    secondary: '#a23530',
    backdrop: '#e2e4e4',
    outline: '#f1f1f2'
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: GoogleSansRegular;
      src: url(${GoogleSansRegular})
  }
  @font-face {
    font-family: GoogleSansBold;
    src: url(${GoogleSansBold})
}
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: GoogleSansRegular;
  }
`
