import React from 'react'
import './footer.css'
import img1 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\color_logo_transparent copy 3.svg'
import img2 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\loc.png'
import img3 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\phone.png'
import img4 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\Shape.svg'
import img7 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\insta.svg'
import img5 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\fb.svg'
import img6 from 'C:\\vs_reactClones\\figma_demo\\src\\images\\icons\\tx.svg'




export default function Footer() {
  return (
    <>
      <div className='extra'>
        <div className='flow'>
          <h1>Ready To Build Your Community?</h1>
          <button id='btn'>Get Started For Free</button>
        </div>
      </div>
      <div className='footer-container'>
        <div id='inner-footer'>
          <div id='one'>
            <div>
              <img src={img1} alt="head-footer" />
            </div>
            <div>
              <img style={{float:'left'}} src={img2} alt="location" />
              <a href=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a>
            </div>
            <div>
              <img style={{float:'left'}} src={img3} alt="phone" />
              <a href=''>91+ 1234567898</a>
            </div>
            <div>
              <img style={{float:'left'}} src={img4} alt="gmail" />
              <a href="">abc@gmail.com</a>
            </div>
          </div>
          <div id='two'>
            <div>
              <a href="">About Us</a>
            </div>
            <div>
              <a href="">What We Do</a>
            </div>
            <div>
              <a href="">FAQ</a>
            </div>
          </div>
          <div id='three'>
            <div>
              <a href="">Career</a>
            </div>
            <div>
              <a href="">Biog</a>
            </div>
            <div>
              <a href="">Contact US</a>
            </div>
          </div>
          <div id='four'>
            <div id='social-media'>
              <a href=""><img src={img5} alt="Facebook" /></a>
              <a href=""><img src={img6} alt="Tweeter" /></a>
              <a href=""><img src={img7} alt="Instagram" /></a>
            </div>
            <div>
              <a href="" id='copy'>&#169; Copyright 2018 Huddle. All rights reserved.</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
