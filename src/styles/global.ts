import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Roboto Slab', serif;
    }

    body {
        background: #312E38;
        color: #1E1E1E;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-size: 17px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        color: #fff;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

`;
