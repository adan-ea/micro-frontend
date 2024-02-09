import React, { useEffect, useState } from 'react';
import Header from '../../sharedcomponent/shared/Header';
import Footer from '../../sharedcomponent/shared/Footer';
import UniqueHostComponent from './UniqueHostComponent';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div>
      <Header />
      <UniqueHostComponent title="Host App Unique Title" />
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default App;
