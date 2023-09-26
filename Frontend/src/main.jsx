import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Typography from './styles/typography.js'
import { BrowserRouter } from 'react-router-dom';
import { InfoProvider } from './providers/infoProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <InfoProvider>
        <Typography/>
        <App />
      </InfoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
