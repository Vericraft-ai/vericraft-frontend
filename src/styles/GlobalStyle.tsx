import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,::after,::before {
    box-sizing: border-box;
    font-feature-settings: "kern";
  }

  #__next {
    overflow-x: hidden;
  }

  html, body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Satoshi', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body.sticky {
    overflow: hidden;
  }

  .root {
    position: relative;
    overflow: auto;
  }

  .small {
    color: white;
    font-size: 0.5em;
  }

  .big {
    color: white;
    font-size: 1.4em;
  }

  strong {
    font-weight: 600;
  }

  ul, ol {
    padding-left: 0;
  }

  ul ul, ul ol, ol ol, ol ul {
    padding-left: 1.5em;
  }

  ul li, ol li {
    margin-bottom: 0.75em;
    margin-left: 1em;
    line-height: 1.6;
  }

  ::selection {
    background: rgba(245, 184, 61, 0.25);
  }

  @media all and (max-width: 1000px) {
    html, body {
      font-size: 16px;
    }

    li {
      list-style-position: outside;
      margin-left: 1em;
    }
  }
`;
