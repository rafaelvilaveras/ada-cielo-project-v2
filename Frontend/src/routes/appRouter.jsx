import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHub from '../pages/appHub/appHub';
import ItemContainer from '../components/itemContainer/itemContainer';
import BChart from '../components/charts/barChart';
import PChart from '../components/charts/pieChart';
import Redirect from '../components/redirect';

const AppRouter = () => {


  return (
    <Routes>
      <Route exact path="/" element={<AppHub/>}>
        <Route path='*' element={<Redirect/>} />
        {/* Relatórios */}
        <Route exact path="/graficos" element={<ItemContainer/>} >
          <Route exact path="/graficos/barras" element={<BChart/>} />
          <Route exact path="/graficos/setores" element={<PChart/>} />

        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
