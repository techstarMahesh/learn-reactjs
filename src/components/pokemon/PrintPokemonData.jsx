import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonInfo = (props) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      )
      console.log(response.data)
      setPokemon(response.data)
    }
    getPokemon()
  }, [props.name])

  if (!pokemon) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>Weight: {pokemon.weight} kg</p>
      <p>Height: {pokemon.height} m</p>
    </div>
  )
}

export default PokemonInfo