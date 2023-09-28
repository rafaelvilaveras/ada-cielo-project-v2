import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


import ChartStyles from "./style";
import axios from 'axios';
import { InfoContext } from '../../providers/infoProvider';

const PChart = () => {

    const infoContext = React.useContext(InfoContext);
    const { infoData, loading } = infoContext;

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

    function getRandomColorBetweenRedAndBlue() {
      const minRed = 0;   // Minimum red component
      const maxRed = 255; // Maximum red component
      const minBlue = 0;  // Minimum blue component
      const maxBlue = 255;// Maximum blue component
    
      const randomRed = Math.floor(Math.random() * (maxRed - minRed + 1)) + minRed;
      const randomBlue = Math.floor(Math.random() * (maxBlue - minBlue + 1)) + minBlue;
    
      // Convert the RGB components to a hex color string
      const hexColor = `#${randomRed.toString(16)}00${randomBlue.toString(16)}`;
    
      return hexColor;
    }

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