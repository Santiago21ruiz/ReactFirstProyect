import React, { useState, useEffect } from 'react'
import {ButtonUI} from '../../UI/ButtonUI/ButtonUI'
import ftIlucion from '../../../images/ftIlucion.jpg';

export const CounterTen = () => {
  
    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
      setCounter(counter - 10)
    }
    const handleIncrement = () => {
      setCounter(counter + 10)
    }
    const handleReset = () => {
      setCounter(0)
    }

    useEffect(()=>{
      let imgIlu=document.querySelector(".ftIlucion")
      if (counter>=100) {
        imgIlu.classList.add("imgIlu")
      }else{
        imgIlu.classList.remove("imgIlu")
      }
    },[counter])
    
  return (
    <>
      <div className='sectionCounter'>
        <h1 className='h1Counter'>ten counter</h1> 
        <h2 className='h2Counter'>{counter}</h2>
        <hr/>
        <div className="buttons">
        
        <ButtonUI textButton="Decrement" event={handleDecrement} style="Decrement"/>
        <ButtonUI textButton="Reset" event={handleReset} style="Reset"/>
        <ButtonUI textButton="Increment" event={handleIncrement} style="Increment"/>


      </div>
      <hr/> 
      <img src={ftIlucion} alt="ftIlucion" className='ftIlucion' id='ftIlucion'/>
      </div>
      </>
  )
}
