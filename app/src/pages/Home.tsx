import { useState, useEffect } from 'react';
import Services from '../services/server';
import { Card, Button, Input } from '../styles/card';
import { Row, Column } from '../styles/layouts';


function Home() {


    // LEITURA DOS JOGOS

    const [all, setAll] = useState([]);

    async function readAll() {
        const list = await Services.getAll();
        setAll(list);
    };
    useEffect(() => {
        readAll()
    }, []);



    // CRIAÇÃO DOS JOGOS

    const [newList, setNewList] = useState({ });

    async function Create(list: any) {
        const novaList = Services.create(list);
        window.location.reload();
    };
    const handleCriar = (event: any) => {
        setNewList({
            ...newList,
            [event.target.name]: event.target.value,
        });
    };
    const handleList = () => {
        const creatList = { ...newList };
        Create(creatList);
        setNewList({});
    };


    // DELEÇÃO DE JOGOS

    const [game, setGame] = useState({ 
        game_id: " ",
     });

    async function deleteGame (id: number) {
        const deleted = await Services.delete(id);
        window.location.reload();
    }






    return(
        <>

            <Card>
                <Row>
                    <Input
                    name = "game"
                    type = "text"
                    onChange = {handleCriar}
                    value = {newList.game}
                    placeholder = "Nome do jogo" 
                    ></Input>
                    <select 
                    name = "categoria"
                    onChange = {handleCriar}
                    >
                        <option>Sem categoria</option>
                        <option>Corrida</option>
                        <option>Luta</option>
                        <option>Tiro</option>
                    </select>
                    <Button
                    onClick = {handleList}
                    >+</Button>
                </Row>
            </Card>

        
            <Card>
                <h2>Lista de jogos:</h2>
                {all.map((game, index) => (
                    <p key = {index}>{game.game}</p>
                ))}
                
                {all.map((game, index) => (
                    <Button 
                    key = {index}
                    onClick = {() => deleteGame(game.id)}
                    >Delete</Button>
                ))}
                
            </Card>
        
        </>
    )

};


export default Home;