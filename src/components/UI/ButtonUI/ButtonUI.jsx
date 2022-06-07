import React from 'react';


export const ButtonUI = ({textButton, event, style}) => {
  return (
    <button onClick={event} className={style}>{textButton}</button>
  )
}
