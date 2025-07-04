// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #5a4a42; /* Dark cream text */
    background-color: #FFF8F0; /* Cream background */
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #FFF8F0;
  }

  ::-webkit-scrollbar-thumb {
    background: #FF7D33; /* Bright orange */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #E56C2B;
  }
`;

export default GlobalStyles;