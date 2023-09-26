import React from 'react';

import logo from '../../assets/navIcons/Logo.svg';
import Relatorios from '../../assets/navIcons/relatorios.svg';
import Calendario from '../../assets/navIcons/calendario.svg';
import Servicos from '../../assets/navIcons/servicos.svg';
import Clientes from '../../assets/navIcons/clientes.svg';
import Usuario from '../../assets/navIcons/usuario.svg';
import Despesas from '../../assets/navIcons/despesas.svg';
import NavList from './navList';
import { NavStyles } from './style';

const NavBar = () => {
  return (
    <NavStyles>
        <div className="flex-column nav-container">
        <div className="flex-column nav-logo-container">
            <img style={{ width: '8rem' }} src={logo} loading="lazy" alt="Desinfec" />
            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Desinfec</span>
        </div>
        <hr style={{ width: '100%', height: '4px', backgroundColor: 'var(--hr-color)' }} />
        <ul style={{ gap: '1.5rem' }} className="flex-column nav-options">
            <NavList
            icon={Relatorios}
            title={'Relatórios'}
            info={[
                {
                name: 'Serviços',
                route: '/relatorios/servicos',
                },
                {
                name: 'Despesas',
                route: '/relatorios/despesas',
                },
            ]}
            />
            <NavList
            icon={Calendario}
            title={'Calendário'}
            info={[
                {
                name: 'Agenda',
                route: '/calendario/agenda',
                },
                {
                name: 'Agendamento',
                route: '/calendario/agendamento',
                },
            ]}
            />
            <NavList
            icon={Servicos}
            title={'Serviços'}
            info={[
                {
                name: 'Cadastro',
                route: '/servicos/cadastro',
                },
                {
                name: 'Listagem',
                route: '/servicos/listagem',
                },
            ]}
            />
            <NavList
            icon={Clientes}
            title={'Clientes'}
            info={[
                {
                name: 'Cadastro',
                route: '/clientes/cadastro',
                },
                {
                name: 'Listagem',
                route: '/clientes/listagem',
                },
            ]}
            />
            <NavList
            icon={Usuario}
            title={'Usuários'}
            info={[
                {
                name: 'Cadastro',
                route: '/usuarios/cadastro',
                },
                {
                name: 'Listagem',
                route: '/usuarios/listagem',
                },
            ]}
            />
            <NavList
            icon={Despesas}
            title={'Despesas'}
            info={[
                {
                name: 'Cadastro',
                route: '/despesas/cadastro',
                },
                {
                name: 'Listagem',
                route: '/despesas/listagem',
                },
            ]}
            />
        </ul>
        <div className="nav-bottom-decoration" />
        </div>
    </NavStyles>
  );
};

export default NavBar;
