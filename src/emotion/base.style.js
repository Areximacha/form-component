import { css } from '@emotion/core'

const base = css`
  body {
    color: #333;
    font-size: 100%;
    line-height: 100%;
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div {
    margin: 0;
    padding: 0;
    font-weight: normal;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    -ms-text-rendering: optimizeLegibility;
    -o-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  h1 {
    font-size: 65px;
    text-transform: uppercase;
    line-height: 0.9em;
    font-weight: bold;
    color: #333333;
  }

  h2 {
    font-size: 24px;
    margin: 10px 0;
    color: #333333;
    line-height: 0.9;
  }

  h3 {
    font-size: 18px;
    color: #333333;
    line-height: 0.9;
  }

  h4 {
    font-size: 16px;
    color: #333333;
    line-height: 0.9;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    padding: 0 0 20px 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 600;
  }

  small {
    font-size: 12px;
    font-weight: 600;
    color: #999;
  }

  i {
    display: inline-block;
    background-repeat: no-repeat;
  }
`

export default base
