import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Kanit", sans-serif;
    
&::-webkit-scrollbar {
    width: 10px;
    height: 9px; 
  }
  
  &::-webkit-scrollbar-track {
    background: #000; 
  }
  
  &::-webkit-scrollbar-thumb {
    background: #4B0082; 
    border-radius: 10px; 
  }

}

body{
    height: 100vh;
    background-color: #000;

    
}
`
