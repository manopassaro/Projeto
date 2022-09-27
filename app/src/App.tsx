import { createBrowserRouter } from 'react-router-dom';
import LogIn from './pages/Login';
import Log from './pages/Log';

import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <h1>ero</h1>
    </div>
  )
};

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LogIn />,
    errorElement: <App/>,
  },
  {
    path: '/logado/',
    element: <Log />
  }
]);

export default Router;
