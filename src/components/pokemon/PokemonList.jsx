import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PokemonList() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemon(response.data.results)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>List of Pokémon:</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
