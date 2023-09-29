import React from 'react';
import { InfoContext } from '../../providers/infoProvider';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

import ChartStyles from "./style";

const PChart = () => {

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading, colors } = infoContext;

    let usedColors = [];

    function getRandomChartColor(usedColors) {
      
        const randomIndex = Math.floor(Math.random() * colors.length);
        const aux = randomIndex;
  
        var returnSwitch = usedColors.some((color) => { return color === colors[aux]});

        usedColors.length >= 4 ? usedColors = [] : usedColors.push(colors[aux]);
          
        return !returnSwitch ? colors[aux] : getRandomChartColor(usedColors);
  
      }

    const chartData = [
        {
            name: 'Elo',
            value: infoData?.cardBrandCounts?.Elo,
            color: getRandomChartColor(usedColors),
        },
        {
            name: 'Hipercard',
            value: infoData?.cardBrandCounts?.Hipercard,
            color: getRandomChartColor(usedColors),
        },
        {
            name: 'Mastercard',
            value: infoData?.cardBrandCounts?.Mastercard,
            color: getRandomChartColor(usedColors),
        },
        {
            name: 'Visa',
            value: infoData?.cardBrandCounts?.Visa,
            color: getRandomChartColor(usedColors),
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
                                    label
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={24} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </ChartStyles>
            }
        </>
    );
}

export default PChart;