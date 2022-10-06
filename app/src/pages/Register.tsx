import { Card, Button, Input }  from '../styles/card';
import { Row, Column } from '../styles/layouts';


function Register() {
    return(
        <>
            <Card>
                <Column>
                    <h1>Cadastro</h1>
                    
                    <label>Nome</label>
                        <Input
                        placeholder="Tobey Miguiere"
                        ></Input>

                    <label>Email</label>
                        <Input
                        placeholder="exemplo@gmail.com"
                        ></Input>

                    <label>Senha</label>
                        <Input
                        placeholder="******"
                        ></Input>

                    <label>Número do cartão de crédito</label>
                        <Input
                        placeholder="1234 5678 9101 1121"
                        ></Input>

                    <label>CVV e Validade</label>
                        <Row>
                        <input
                        placeholder="999"
                        ></input>
                        <input
                        placeholder="01/25"
                        ></input>
                        </Row>
                
                <Button>Cadastrar</Button>
                </Column>
            </Card>
        </>
    )
};

export default Register;