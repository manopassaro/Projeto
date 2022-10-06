import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from './App';
import GlobalStyle from './styles/global';
import Mock from './mock/index';
import Home from './pages/Home';


// Mock.Initialize();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
