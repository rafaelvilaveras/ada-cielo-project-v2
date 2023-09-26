import React, { useContext, useEffect, useState } from 'react';

const InfoContext = React.createContext();

const InfoProvider = ({children}) => {

    const [teste, setTeste] = useState(true);

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