import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHub from '../pages/appHub/appHub';
import ItemContainer from '../components/itemContainer/itemContainer';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AppHub/>}>
        {/* Relatórios */}
        <Route exact path="/relatorios/servicos" element={<ItemContainer><h1>Teste</h1></ItemContainer>} />
        <Route exact path="/relatorios/despesas" element={''} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
