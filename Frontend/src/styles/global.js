import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  html {
    background-color: white;
  }

  .app-container {
      width: 100%;
      max-width: 1560px;
      min-height: 100vh;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .site-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;

    }

    .flex-row {
      display: flex;
      flex-direction: row;
    }
      
    .flex-column {
      display: flex;
      flex-direction: column;
    }
    
    .prevent-select {
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }

    @media ( min-width: 1561px) {
      .app-container {
        box-shadow: 0 5px 5px -1px black};
      }
  
  
    }


`;