import React from 'react';

import { NavStyles } from './style';

import logo from '../../assets/navIcons/Logo.svg';
import Relatorios from '../../assets/navIcons/relatorios.svg';
import Calendario from '../../assets/navIcons/calendario.svg';
import Servicos from '../../assets/navIcons/servicos.svg';
import Clientes from '../../assets/navIcons/clientes.svg';
import Usuario from '../../assets/navIcons/usuario.svg';
import Despesas from '../../assets/navIcons/despesas.svg';

import NavList from './navList';

const NavBar = () => {

  const sidebarItems = [
    {
      tittle: 'Gráficos',
      icon: Relatorios,
      info: [
        {
          name: 'Barras',
          route: '/graficos/barras',
        },
        {
          name: 'Setores',
          route: '/graficos/setores',
        },
      ]
    },
  ] 


  return (
    <NavStyles>
        <div className="flex-column nav-container">
        <div className="flex-column nav-logo-container">
            <img style={{ width: '8rem' }} src={logo} loading="lazy" alt="Desinfec" />
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Desinfec</span>
        </div>
        <hr style={{ width: '100%', height: '4px', backgroundColor: 'var(--hr-color)' }} />
        <ul style={{ gap: '1.5rem' }} className="flex-column nav-options">
            {sidebarItems.map((values, index) => {
                return (
                    <NavList
                      key={'navlist' + index}
                      title={values.tittle}
                      icon={values.icon}
                      info={values.info}
                    />
                );
            })}
        </ul>
        <div className="nav-bottom-decoration" />
        </div>
    </NavStyles>
  );
};

export default NavBar;
