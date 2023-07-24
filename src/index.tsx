import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { BeerPage } from './pages/BeerPage';
import { MainPage } from './pages/MainPage';
import { NotFoundPage } from './pages/NotFoundPage';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#F4D160'
    }
  }
});

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: ':beerId',
        element: <BeerPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
