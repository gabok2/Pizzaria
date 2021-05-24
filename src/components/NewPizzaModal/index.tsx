import Modal from 'react-modal';
import { Container } from './styles';
import { FiCheckSquare } from 'react-icons/fi';
import { useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';

Modal.setAppElement('#root');

interface NewPizzaModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPizzaModal({ isOpen, onRequestClose }: NewPizzaModalProps) {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');

    function handleCreateNewPizza(event: FormEvent) {
        event.preventDefault();

        const data = {
            image,
            name,
            price,
            description,
            available: true
        };

        api.post('/foods', data)

    }
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container onSubmit={handleCreateNewPizza}>
                <h1>Novo Prato</h1>

                <input
                    placeholder="Cole o link aqui"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />
                <input
                    placeholder="Ex: Moda Italiana"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    placeholder="Ex: 19.90"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                />
                <input
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button type="submit"  >
                    <div className="text">Adicionar prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Container>

        </Modal>
    )
}