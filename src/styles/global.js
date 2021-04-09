import { createGlobalStyle, css } from "styled-components";

export const Fonts = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Poppins:wght@100;300;500;700&display=swap");
`;

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Montserrat', 'Poppins', sans-serif
    }

    html{
        font-size: 62.5%
    }

    html, body{
        height: 100%;
        /* max-width: 100vw */
    }


`;
