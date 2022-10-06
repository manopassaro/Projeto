import { useState, useEffect } from 'react';
import Services from '../services/server';
import { Card, Button, Input } from '../styles/card';
import { Row, Column } from '../styles/layouts';


function Home() {


    const [all, setAll] = useState([]);

    async function readAll() {
        const list = await Services.getAll();
        setAll(list);
    };
    useEffect(() => {
        readAll()
    }, []);

    console.log(all)

    return(
        <>

            <Card>
                <Row>
                    <Input
                    placeholder= "Nome do jogo" 
                    ></Input>
                    <Button>+</Button>
                </Row>
            </Card>

        
            <Card>
                <h2>Lista de jogos:</h2>
                {all.map((game, index) => (
                    <h3 key={index}>{game.game}</h3>
                ))}
            </Card>
        
        </>
    )

};


export default Home;