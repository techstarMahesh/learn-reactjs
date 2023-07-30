import React from 'react'
import POKEMON_CONTEXT from './PokemonContext'

export const POKEMON_STATE = (props) => {
  const ALL_NAMES = {
    name: props.name,
    hight: props.hight,
  }

  return (
    <POKEMON_CONTEXT.Provider value={ALL_NAMES}>
      props.children
    </POKEMON_CONTEXT.Provider>
  )
}
