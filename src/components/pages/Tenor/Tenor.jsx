import React, { useState,useEffect } from 'react'
import { CardsTenor } from '../../Layouts/CardTenor/CardsTenor';

export const Tenor = () => {

    const URL = "https://g.tenor.com/v1/";
    const trend = "trending?key=";  
    const search = "search?";

    const key = "R6JUYKN1DAED";
    let limit = "&limit=12";

    const [Search, setSearch] = useState(false) 
    const getStr = (e) => {
      setSearch(!Search);
    }
    useEffect(() => {
      let inputSearch = document.querySelector('.inputSearch'); 
      let fURL = URL + search + `q=${inputSearch.value}&key=${key}` + limit;
      getGif(fURL);
    }, [Search])
    
    const [gifsGet, setgifsGet] = useState([])
    useEffect(() => {
        let fURL = URL + trend + key + limit;
        getGif(fURL); 
      }, [])

    const getGif = (fURL) =>{
        fetch(fURL)
        .then(response => response.json())
        .then(data => setgifsGet(data.results))
        .catch(error => console.log("Error!"))
    }

  return (
    <div className='sectionTenor'>
        <input type="text" placeholder="Buscar en Tenor..." className="inputSearch" onChange={getStr}></input>
        <hr />
        <div class="ContainerTenor">
          <CardsTenor arr={gifsGet}></CardsTenor>
        </div>
    </div>
  )
}
