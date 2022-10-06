import { createBrowserRouter } from 'react-router-dom';
import LogIn from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Card, Button } from './styles/card';
import { Row, Column } from './styles/layouts';


import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <header>

    </header>

    <Card>
        <Column> 
          <h1>Bem-vindo</h1>
        <Row>
            <a href="/login">
              <Button>Entrar</Button>
            </a>
            <a href="/cadastrar">
              <Button>Cadastrar</Button>
            </a>

        </Row>
        </Column>
    </Card>

    </>
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
  },
  {
    path: '/cadastrar',
    element: <Register />
  },
  {
    path: '/home',
    element: <Home/>
  }
]);

export default Router;
