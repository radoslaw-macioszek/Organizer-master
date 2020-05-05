import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* font smoothing ze strony font antialiasing. Zmienia wyglad czcionki na smuklejszy. */

    html {
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* happy rems: font size: 1.6rem w celu sprowadzenie wszystkiego do poprzednich jednostek, przed zamiana w html. A zamiana by latwiej przeliczac. */
    body {
        padding-left: 150px;
        font-size: 1.6rem; 
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyle;
