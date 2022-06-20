import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body { 
    background-color: #f2f2f2;
  }

  section {
    padding: 25px 0;
  }
`

export default globalStyle