import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "../../components/navbar/navbar";
import { AppHubStyle } from "./style";
import ItemContainer from "../../components/itemContainer/itemContainer";

const AppHub = () => {
    const [displayNav, turnDisplayNav] = useState(false);
    const location = useLocation();
  
    return (
      <AppHubStyle>
        <div className="flex-row ah-container">
          <div className="ah-nav-wrapper">
            <div className={displayNav ? ' ah-nav ah-nav-visible ' : ' ah-nav ah-nav-hidden '}>
              <NavBar />
              <div
                className="ah-showNav"
                onClick={() => {
                  turnDisplayNav(!displayNav);
                }}
              >
                {'+'}
              </div>
            </div>
          </div>
          <div className="flex-column ah-content">
            { location.pathname === '/' && 
              <div className="home-container">
                <h1>Bem vindo a TechTests</h1>
                <div>
                  <p>Esta é uma página desenvolvida para o desafio ADA/Cielo, o objetivo é consumir o conteúdo de um arquivo JSON, em forma de API e ser capaz de usar o conteúdo para gerar gráficos a serem apresentados para o usuário.</p>
                  <p>Existem 2 (dois) exemplos de gráficos nessa página, um de barras e outro de setores, ambos usam apenas um tipo de informação, apenas para exemplificar que a API está funcional.</p>
                </div>
                <footer className="home-footer">
                  <h1>teste</h1>

                </footer>
              </div>
            }

            { location.pathname !== '/' && 
              <Outlet />
            }
          </div>
        </div>
      </AppHubStyle>
    );
  };
 
export default AppHub ;