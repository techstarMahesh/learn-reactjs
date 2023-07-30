import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosAPI() {
  const [data, setData] = useState([]);
  const [imageURL, setImageURL] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
      setData(response);
      console.log(data)
      setImageURL(response.data.sprites.front_default)
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))} */}
      {imageURL && <img src={imageURL} alt="pokemon" />}
    </div>
  );
}

export default AxiosAPI;
