import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
