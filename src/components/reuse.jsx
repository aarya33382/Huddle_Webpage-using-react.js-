import React from 'react'
import './reuse.css'
export default function Reuse({ arr }) {
  
  let result=arr.map((ele)=>
    {
      return (
        <div className='parent'>
        <div className={ele.cls}>
          <div className='text-box'>
            <h1>{ele.tilte}</h1>
            <p>{ele.desc}</p>
          </div>
          <div className='image-box'>
            <img src={ele.image} alt="" />
          </div>
        </div>
  
      </div>
      )
    });
  return result ;
}
