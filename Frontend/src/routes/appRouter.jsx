import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHub from '../pages/appHub/appHub';
import ItemContainer from '../components/itemContainer/itemContainer';
import BChart from '../components/charts/barChart';
import { InfoContext } from '../providers/infoProvider';

const AppRouter = () => {

  const infoContext = React.useContext(InfoContext);
  const { data } = infoContext;

  console.log(data);

  return (
    <Routes>
      <Route exact path="/" element={<AppHub/>}>
        {/* Relatórios */}
        <Route exact path="/graficos" element={<ItemContainer/>} >
          <Route exact path="/graficos/barras" element={<BChart data={data.cardBrandCounts} />} />
          <Route exact path="/graficos/setores" element={<BChart data={data.cardBrandCounts} />} />

        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
