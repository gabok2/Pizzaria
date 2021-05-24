import { Container } from './styles';
import { FiPlusSquare } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
    onOpenPizza: () => void;
}

export function Header({ onOpenPizza }: HeaderProps) {

    return (
        <Container>
            <header>
                <img src={Logo} alt="GoRestaurant" />
                <nav>
                    <div>
                        <button onClick={onOpenPizza} type="button"  >
                            <div className="text">Novo Prato</div>
                            <div className="icon">
                                <FiPlusSquare size={24} />
                            </div>
                        </button>
                    </div>
                </nav>

            </header>
        </Container>
    )
}