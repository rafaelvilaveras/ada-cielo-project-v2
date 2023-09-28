import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


import ChartStyles from "./style";
import axios from 'axios';
import { InfoContext } from '../../providers/infoProvider';

const PChart = () => {

    const [data, setData] = useState('');
    // const [loading, setLoading] = useState(false);

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading } = infoContext;

    const chartColor = '#8884d8';

    console.log('data', infoData);

    const chartData = [
        {
          name: 'Elo',
          value: infoData?.cardBrandCounts?.Elo,
        },
        {
          name: 'Hipercard',
          value: infoData?.cardBrandCounts?.Hipercard,
        },
        {
          name: 'Mastercard',
          value: infoData?.cardBrandCounts?.Mastercard,
        },
        {
          name: 'Visa',
          value: infoData?.cardBrandCounts?.Visa,
        },
    ];

    return ( 
        <>
          {loading && <h1>Carregando...</h1>}
          {!loading && infoData &&
            <ChartStyles>
                <div className='chart-container'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill={chartColor}
                        label
                    />
                    <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                <div className='flex-row chart-items'>
                {Object.entries(infoData.cardBrandCounts).map((values, index) => {
                    console.log(values);
                    return (
                      <div style={{ color:chartColor, display:'flex', alignItems:'center', gap:'0.5rem' }} key={'chart-items' + index}>
                        <div style={{ backgroundColor:chartColor, width: '1rem', height: '1rem' }} className='color-box' />
                        <span>{values[0]}</span>
                      </div>
                    );
                })}
                </div>
                </div>
            </ChartStyles>
          }
        </>
    );
}
 
export default PChart;