import { render } from '@testing-library/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Typography from './styles/typography.js'
import { BrowserRouter } from 'react-router-dom';
import { InfoProvider } from './providers/infoProvider.jsx';
import NavBar from './components/navbar/navbar';
import AppHub from './pages/appHub/appHub';

describe('jest', () => {

    it('renders correctly', () => {
        render(
            <BrowserRouter>
              <InfoProvider>
                <Typography/>
                <App />
              </InfoProvider>
            </BrowserRouter>  
        )

    })

    it('renders correctly', () => {
        render(
            <BrowserRouter>
            <InfoProvider>
                <Typography/>
                <NavBar />
              </InfoProvider>
            </BrowserRouter>  
        )

    })

    it('renders correctly', () => {
          render(
            <BrowserRouter>
              <InfoProvider>
                <Typography/>
                <AppHub />
              </InfoProvider>
            </BrowserRouter>  
        )


    })

})