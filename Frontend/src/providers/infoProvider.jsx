import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {


    // const baseURL = process.env.BASE_URL;
    const baseURL = 'http://localhost:3000/api';

    axios.defaults.baseURL = baseURL;

    const [data, setData] = useState('');
    const [loading, turnLoad] = useState(false);

    function listCardBrand() {
      turnLoad(true)

      axios.get('/items?cardBrand[]=Mastercard&cardBrand[]=Visa', {

      })
      .catch((error) => {
        console.log(error)
        turnLoad(false);
      })
      .then((response) => {
        setData(response.data);
        turnLoad(false);
      })
  }

  useEffect(() => {

    listCardBrand();

  },[])

    return(
      <InfoContext.Provider
        value={{
            listCardBrand,

            loading,
            data
        }}
      >
        {children}
      </InfoContext.Provider>
    );
}

export {InfoProvider, InfoContext};