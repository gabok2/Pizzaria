import { NewPizzaModal } from './components/NewPizzaModal';

import { useState } from 'react';

import { Header } from "./components/Header";

import { GlobalStyle } from './styles/global';
import { PizzaProvider } from './PizzaContext';
import { Table } from './components/Table';




export function App() {
  const [isNewPizzaOpen, setIsNewPizzaOpen] = useState(false);

  function handlePizzaOpen() {
    setIsNewPizzaOpen(true);
  }

  function handlePizzaClose() {
    setIsNewPizzaOpen(false);
  }
  return (
    <PizzaProvider>
      <Header onOpenPizza={handlePizzaOpen} />
      <GlobalStyle />
      <NewPizzaModal isOpen={isNewPizzaOpen} onRequestClose={handlePizzaClose} />
      <Table />
    </PizzaProvider>
  );
}

export default App;
