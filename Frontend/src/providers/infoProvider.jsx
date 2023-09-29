import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {
  
  const colors = [
    '#0074D9', // Blue
    '#FF4136', // Red
    '#2ECC40', // Green
    '#FF851B', // Orange
    '#B10DC9', // Purple
    '#FFDC00', // Yellow
    '#001F3F', // Navy
    '#39CCCC', // Teal
    '#F012BE', // Fuchsia
    '#85144b', // Maroon
    '#3D9970', // Olive
    '#AAAAAA', // Gray
  ];

    const baseURL = import.meta.env.VITE_APP_BASE_URL;

    axios.defaults.baseURL = baseURL;

    const [infoData, setInfoData] = useState('');
    const [loading, setLoading] = useState(false);
    const [cardSelector, setCardSelector] = useState({
      Elo: false,
      Hipercard: false,
      Mastercard: false,
      Visa: false,
    });


    function handleInfo() {
      setLoading(true);

      const url = 'http://localhost:3000/api/items';

      axios.get(url)
      .then( response => {
        setInfoData(response.data);
        setLoading(false);
      })
      .catch( error => {
        setLoading(false);
        throw(error);
      })
    }
    
  useEffect(() => {

    handleInfo();

  },[])

    return(
      <InfoContext.Provider
        value={{
            setCardSelector,

            cardSelector,
            colors,
            infoData,
            loading,
        }}
      >
        {children}
      </InfoContext.Provider>
    );
}

export {InfoProvider, InfoContext};