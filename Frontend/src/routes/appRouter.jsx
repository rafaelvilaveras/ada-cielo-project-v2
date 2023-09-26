import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHub from '../pages/appHub/appHub';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<AppHub/>}>
        {/* Relatórios */}
        <Route exact path="/relatorios/servicos" element={''} />
        <Route exact path="/relatorios/despesas" element={''} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
