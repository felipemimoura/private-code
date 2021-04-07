import { createGlobalStyle } from "styled-components";


// import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;700&family=Poppins:wght@100;300;700&display=swap'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none
    }

    html{
        font-size: 62.5%
    }

    html, body{
        height: 100%
    }

    body{
        font-family: 'Montserrat', 'Poppins', sans-serif;
    }




`
