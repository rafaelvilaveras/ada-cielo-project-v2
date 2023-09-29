import styled from "styled-components";

export const AppHubStyle = styled.div`

  height: 100%;
  z-index: 0;

  .ah-container {
    width: 100%;
    height: 100%;
    align-self: center;
    justify-self: center;
  }
  
  .ah-nav-wrapper {
    position: relative;
  }
  
  .ah-showNav {
    display: none;
  }
  
  .ah-nav {
    min-width: 220px;
    max-width: 277px;
    height: 100%;
    background-color: ${(props) => {return props.theme.bgNavBar}};
  }
  
  .ah-content {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }

  
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-self: center;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .home-container h1 {
    align-self: center;
  }

  .home-container p {
    text-indent: 1rem;
    font-weight: 500;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .home-footer {
    width: 100%;
    min-height: 8.3rem;
    background-color: #7DBFEB;
    color: white;
  }

  @media (max-width: 750px) {
    .ah-nav-hidden {
      position: absolute;
      left: -220px;
    }
  
    .ah-nav-visible {
      position: absolute;
      left: 0;
      z-index: 99;
    }
  
    .ah-showNav {
      position: absolute;
      display: flex;
      padding: 0.75rem 0.75rem 0.75rem 0.25rem;
      border-radius: 0 2rem 2rem 0;
      text-align: end;
      top: 3.25rem;
      right: -1.55rem;
      background-color: ${(props) => {return props.theme.bgNavBar}};
      cursor: pointer;
      z-index: 98;
      box-shadow: 2px 1px 2px -3px black};
    }


  }




`;