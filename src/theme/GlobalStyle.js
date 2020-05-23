import { createGlobalStyle } from 'styled-components';
import { devices } from '../Devices/devices';

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

    body {
        padding-left: 15rem;
        font-size: 1.6rem; 
        font-family: "Montserrat", sans-serif;

        @media ${devices.tablet} {
    padding-left: 10rem;
        }
        @media ${devices.mobileM} {
    padding-left: 9rem;
  }
         @media ${devices.mobileS} {
    padding-left: 7rem;
  }
    }
`;

export default GlobalStyle;
