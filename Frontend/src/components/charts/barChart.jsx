import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import ChartStyles from "./style";
import axios from 'axios';
import { InfoContext } from '../../providers/infoProvider';

const BChart = () => {

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading } = infoContext;

    console.log('data', infoData);

    const chartData = [
        {
          name: 'Cartões',
          Elo: infoData?.cardBrandCounts?.Elo,
          Hipercard: infoData?.cardBrandCounts?.Hipercard,
          Mastercard: infoData?.cardBrandCounts?.Mastercard,
          Visa: infoData?.cardBrandCounts?.Visa,
        },
    ];

    return ( 
        <>
          {loading && <h1>Carregando...</h1>}
          {!loading && infoData &&
            <ChartStyles>
                <div className='chart-container'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {Object.entries(infoData.cardBrandCounts).map((values, index) => {

                        return <Bar key={'Bar' + index} dataKey={values[0]} fill="#8884d8" />
                    })}
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </ChartStyles>
          }
        </>
    );
}
 
export default BChart;