import React from 'react'

export const Cards = ({arr = []}) => {
  return (
    <>
        {
          arr.map((item) =>(
            <div className='card'>
              <img src={item.image} className="imgCard"/>
              <div className='desc'>
                <h2 className='TitleRickAndMorty'>{item.name}</h2>
                <h3 className='h'>{item.status}</h3>
                <h3 className='h'>{item.species}</h3>
              </div>
            </div>
          ))
        }
    </>
  )
}
