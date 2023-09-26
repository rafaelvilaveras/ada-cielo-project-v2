import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {

    axios.defaults.baseURL = 'http://localhost:3000/api';

    const [teste, setTeste] = useState(true);
    const [loading, toggleLoad] = useState(false);

    async function listCardBrand() {
      toggleLoad(true)

      try {
          const response = await axios.get('/items?cardBrand[]=Mastercard&cardBrand[]=Visa', {
          })
          toggleLoad(false);
          console.log(response);
          return response;

      } catch(error) {
          toggleLoad(false);
          console.log(error);
      }
  }

  useEffect(() => {

    listCardBrand();

  },[])

    return(
      <InfoContext.Provider
        value={{
            setTeste,

            teste
        }}
      >
        {children}
      </InfoContext.Provider>
    );
}

export {InfoProvider, InfoContext};