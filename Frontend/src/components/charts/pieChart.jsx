import React from 'react';
import { InfoContext } from '../../providers/infoProvider';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';


import ChartStyles from "./style";

const PChart = () => {

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading, getRandomChartColor } = infoContext;

    const chartColor = '#8884d8';

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

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
                        fill={chartColor}
                        label
                    />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={24}/>
                    </PieChart>
                </ResponsiveContainer>
                </div>
            </ChartStyles>
          }
        </>
    );
}
 
export default PChart;