import { useContext, useState } from 'react';
import { Container, Teste, Button, Teste2 } from './styles';

import { PizzaContext } from '../../PizzaContext';
import api from '../../services/api';



export function Table() {

    const { pizza, addProduct } = useContext(PizzaContext);



    async function mudar(id: number) {
        addProduct(id);

    }




    return (
        <Container>

            {pizza.map(p => (
                <Teste key={p.id}>
                    <img src={p.image} alt="pizza" />
                    <h6>{p.name}</h6>
                    <p>{p.description}</p>
                    <strong>R$ {p.price}</strong>

                    <Button onClick={() => mudar(p.id)} type="button">
                        <Teste2 />

                    </Button>

                </Teste>
            ))}


        </Container>
    )
}