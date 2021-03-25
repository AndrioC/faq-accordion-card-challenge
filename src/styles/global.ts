import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --linear-1: #B068E9;
        --linear-2: #6463E7;
        --red: #E52E4d;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
    }

    body, input, textarea, button {
        font-family: 'Kumbh Sans', sans-serif;
        font-weight: 400;    
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }
`;