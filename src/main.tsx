import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Ensure this imports your global styles

// Define your custom colors and fonts
const theme = extendTheme({
  colors: {
    brand: {
      900: '#333333',
      800: '#3E677C',
      700: '#DE6449',
      600: '#4DAA57',
      500: '#F5F5F5',
    },
  },
  
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
