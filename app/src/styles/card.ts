import styled from 'styled-components';


const Card = styled.div`
   
    font-size: 1.2rem;
    background-color: gray;
    margin: 120px 380px;
    padding: 70px 90px;
    border-radius: 10px;

    input {
        font-size: 1rem;
        margin: 5px;
        padding: 5px;
        border: none;
        border-radius: 4px;
    }

`;



const Button = styled.button`

    {
        border-radius: 8px;
        border: 1px solid transparent;
        margin: 35px;
        padding: 0.6em 1em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: dark-gray;
        cursor: pointer;
        transition: border-color 0.25s;
        border-color: #646cff;     
    }
    
`

const Input = styled.input`

    width: 22rem;

`



export { Card, Button, Input }