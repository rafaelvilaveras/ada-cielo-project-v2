import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {


    // const baseURL = process.env.BASE_URL;
    const baseURL = 'http://localhost:3000/api';

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
          console.log(error);
          setLoading(false);
      })
    }

  useEffect(() => {

    handleInfo();

  },[])

    return(
      <InfoContext.Provider
        value={{
            setCardSelector,

            loading,
            infoData,
            cardSelector
        }}
      >
        {children}
      </InfoContext.Provider>
    );
}

export {InfoProvider, InfoContext};