import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --mainColor : #00587A;
        --lightColor : #ffffff;
        --black:#000;
        --darkColor : #23262F;
        --lightGray:#ABAEB0;
        --sideBarColor :#F3F3F3;
        --toDo :#973FCF;
        --progress:#FFA500;
        --done : #68B266;
        --gray :rgba(76, 78, 100, 0.87);
        --mainFont : 'Nunito', sans-serif;
    }
    ::-webkit-scrollbar {
        width: 10px;
        color: var(--mainColor);
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        /* background: var(--mainColor);  */
        color: var(--mainColor); 
        border-radius: 10px;
    }
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: var(--mainFont) ;
        font-size: 16px;
        overflow-x: hidden;
    }
    a{
        color: var(--mainColor);
        text-decoration: none;
        text-transform: capitalize;
    }
    ul{
        list-style: none;
    }


`;
