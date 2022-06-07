import React, { useEffect, useState } from 'react'
import { Cards } from '../../Layouts/CardsRickAndMorty/CardsRickAndMorty';



export const RickAndMorty = () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const [pressKey,setPressKey] = useState(false);
  
  const [obj,setObj] = useState([]);

  const fKeyPress = (e) =>{
    if (e.key === 'Enter') {
      setPressKey(!pressKey);
    }
  } 
  useEffect(() => {
    let inputSearch = document.querySelector('.inputSearch');
    customCards(inputSearch);
  }, [pressKey])

  const customCards = (inputSearch) => {
    let newURl = (URL)+`/?name=${inputSearch.value}`;
    fetch(newURl)
    .then(response => response.json())
    .then(data => setObj(data.results))
    .catch(error => console.log("Error!"))
  }

  return (
    <div className='sectionRickAndMotry'>
      <input type="text" placeholder="Ingrese el Nombre del Personaje..." className="inputSearch" onKeyDown={fKeyPress} ></input>
      <hr />
        <div className='Container'>
          <Cards arr={obj}></Cards>
        </div>
    </div>
  )
}
