import React from 'react'
import huddleImage from 'C:\\vs_reactClones\\figma_demo\\src\\images\\First\\color_logo_transparent copy.png'
import './first.css'
export default function First() {
  return (
    <div className='container'>
      <div id='nav' style={{ marginTop: '3px', display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
        <img src={huddleImage} alt="No image" />

        <div id='try-but'> Try It Free</div>
      </div>
      <div className='inner-2'>
        <div className='left'>
          <h1>Build The Community <br /> Your Fans Will Love </h1>
          <p >Huddle re-imagines the way we build communities. You have <br />
            a voice, but so does your audience. Create connections with <br />
            your users as you engage in genuine discuss.</p>
            <button className='left-button'> Get Started For Free</button>
        </div>
        <div className='right'>
          <img src="/Group.png" alt="" />
        </div>
      </div>


    </div>
  )
}
