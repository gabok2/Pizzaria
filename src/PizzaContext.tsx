import { createContext, ReactNode, useEffect, useState } from 'react';
import api from './services/api';


interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string;
}

interface PizzaProviderProps {
    children: ReactNode;
}

interface Teste {
    pizza: Pizza[];
    addProduct: (productId: number) => Promise<void>;
}

export const PizzaContext = createContext<Teste>(
    {} as Teste
);

export function PizzaProvider({ children }: PizzaProviderProps) {
    const [pizza, setPizza] = useState<Pizza[]>([]);


    useEffect(() => {
        api.get('/foods')
            .then(response => setPizza(response.data))
    }, []);


    const addProduct = async (productId: number) => {
        await api.put(`/foods/${productId}`)

        const teste = pizza.map(function (value) {
            if (value.id === productId) {
                return {
                    ...value,
                    available: !value.available


                };
            } return value;
        })


        setPizza(teste)

    }




    return (
        <PizzaContext.Provider value={{ pizza, addProduct }}>
            {children}
        </PizzaContext.Provider>
    )
}