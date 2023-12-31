import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
        scroll-behavior: smooth;

    }
    body {
        background-color: black;
        overflow-x: hidden ;
        

       
    }
    a {
        text-decoration: none;

        &:hover{
            text-decoration: none;
            color: white;
        }
    }
`;
