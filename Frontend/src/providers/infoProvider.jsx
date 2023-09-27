import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {


    // const baseURL = process.env.BASE_URL;
    const baseURL = 'http://localhost:3000/api';

    axios.defaults.baseURL = baseURL;

    const [data, setData] = useState('');
    const [loading, toggleLoad] = useState(false);

    async function listCardBrand() {
      toggleLoad(true)

      try {
          const response = await axios.get('/items?cardBrand[]=Mastercard&cardBrand[]=Visa', {
          })
          toggleLoad(false);
          setData(response.data)
          return response.data;
      } catch(error) {
          toggleLoad(false);
          console.log(error);
        }
  }

  useEffect(() => {

    listCardBrand()

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