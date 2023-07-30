import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonImages() {
  const [pokemonImages, setPokemonImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      const pokemonList = response.data.results;
      const imageUrls = await Promise.all(
        pokemonList.map(async (ss) => {
          const imageUrlResponse = await axios.get(ss.url);
          console.log(imageUrlResponse.data);
          return imageUrlResponse.data.sprites.front_default;
        })
      );
      setPokemonImages(imageUrls);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Top 50 Pokemon Images</h1>
      <div className="pokemon-images">
        {pokemonImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Pokemon ${index + 1}`} />
          
        ))}
      </div>
    </div>
  );
}

export default PokemonImages;
