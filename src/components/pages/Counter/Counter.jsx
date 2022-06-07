import React, { useState } from 'react'
import {ButtonUI} from '../../UI/ButtonUI/ButtonUI'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
      setCounter(counter - 1)
    }
    const handleIncrement = () => {
      setCounter(counter + 1)
    }
    const handleReset = () => {
      setCounter(0)
    }
  return (
    <>
      <div className='sectionCounter'>
        <h1 className='h1Counter'>one-to-one counter</h1> 
        <h2 className='h2Counter'>{counter}</h2>
        <hr/>
        <div className="buttons">
        
        <ButtonUI textButton="Decrement" event={handleDecrement} style="Decrement"/>
        <ButtonUI textButton="Reset" event={handleReset} style="Reset"/>
        <ButtonUI textButton="Increment" event={handleIncrement} style="Increment"/>
      </div>
      </div>
      </>
  )
}
