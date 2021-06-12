import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      background: ${theme.color.MAIN_BG};
      font-family: 'Proxima Nova', -apple-system, 'Helvetica Neue', Helvetica,
        Roboto, Arial, sans-serif;
    }

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html {
        font-size: 87.5%;
      }
    }
  `}
`;

export default GlobalStyles;
