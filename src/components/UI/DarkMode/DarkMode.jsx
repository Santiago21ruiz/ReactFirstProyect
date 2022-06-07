import React, { useState,useEffect } from 'react'

const DarkMode = ({ rounded = false, isToggled, onToggle }) => {

  let body = document.body;
    const [mode, setMode] = useState(false)
     
    const act = () => {
      setMode(!mode);
    }
    
    useEffect(() => {
      if (mode) {
        body.classList.add('color')
        console.log("Encendido!!");
      }else{
        body.classList.remove('color')
        console.log("Apagado!!");
      }
    }, [mode])

  return (
    <div>
        <input onClick={act} type="checkbox" id="switch1"></input>
        <label for="switch1" class="lbl1">
          <div className='imagesDarkMode'>
            {/* <Image router={moon} styleImg="moon"></Image>
            <Image router={sun} styleImg="sun"></Image> */}
          </div>
        </label>
    </div>
  )
}

export default DarkMode
