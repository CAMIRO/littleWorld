import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Mind', sans-serif;
    -webkit-overflow-scrolling: touch;
    }
`;

export default GlobalStyles