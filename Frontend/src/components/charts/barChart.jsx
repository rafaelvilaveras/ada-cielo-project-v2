import React from 'react';
import { InfoContext } from '../../providers/infoProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import ChartStyles from "./style";

const BChart = () => {

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading, colors } = infoContext;

    var usedColors = [];

    function getRandomChartColor(usedColors) {
      
        const randomIndex = Math.floor(Math.random() * colors.length);
        const aux = randomIndex;
  
        var returnSwitch = usedColors.some((color) => { return color === colors[aux]});

        usedColors.length >= 4 ? usedColors = [] : usedColors.push(colors[aux]);
          
        return !returnSwitch ? colors[aux] : getRandomChartColor(usedColors);
  
      }

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

                        return <Bar key={'Bar' + index} dataKey={values[0]} fill={getRandomChartColor(usedColors)} />
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