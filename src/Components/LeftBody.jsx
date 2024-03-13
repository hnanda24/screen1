import React from 'react'

const btnData = [
    {img : '/tick.png' , text : '1. Upload JD' , line : '/dottedline.svg'},
    {img : '/tick.png' , text : '2. Job Details', line : '/dottedline.svg'},
    {img : '/tick.png' , text : '3. Skill'}
  ]

export const LeftBody = () => {
  return (
    <div>
        <div className='left flex justify-center items-center flex-col'>
            {btnData.map((val) => {
              return <div className='flex flex-col justify-center items-center gap-2'>  
                <button className='flex shadow-lg p-2 rounded-md w-full gap-1 items-center'>
                <img src={val.img} />
                <span className=''>{val.text}</span>
                </button>
             
              <img src={val.line} />
              </div>
            })}
          </div>
    </div>
  )
}
