import { Card, Button, Input } from '../styles/card';
import { Row, Column } from '../styles/layouts';

function LogIn () {
    return(
        <>
            <Card>
                <Column>
                    <h1>Login</h1>
                
                    <label>Email</label>
                    <Input
                    placeholder="exemplo@gmail.com"
                    ></Input>
                    <label>Senha</label>
                    <Input
                    placeholder="******"
                    ></Input>
                    <a href="/home">
                    <Button>Entrar</Button>
                    </a>
                </Column>
            </Card>
        </>
    )
};

export default LogIn;