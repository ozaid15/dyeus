import React from 'react'
import './home.css'
import Group from '../../assets/Group.svg'
import Vector from '../../assets/Vector.svg'
import Mask from '../../assets/Mask.svg'

function Home() {
  return (
    <div className='about'>
        <h1 >About diana</h1>
        <h2>A platform that looks out for you</h2>
        <p>
          Diana empowers you to understand how your body 
          works so you can look and feel your best.
        </p>
        <hr />
        <div className='heading'>
          Our Philosophy
        </div>
        <div className='content'>
          Sustainable wellness is a big-picture, inside out approach 
        </div>
        <div className='mission'>
          Diana is on a mission to create thoughtful, science-backed solutions for women 
          who want to make informed decisions about their health and wellness. 
          <br />
          <br />
          That’s why we’ve created an integrated ecosystem of:
        </div>
        <img src={Group} />
        <div className='group'>
          Consciously formulated products that deliver feel-good results fast
        </div>
        <img src={Vector} />
        <div className='group'>
          In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
        </div>
        <img src={Mask} />
        <div className='group'>
          In-app consultation portals that connect you with compassionate wellness experts
        </div>
        <div className='group'>
          Consider us your nerdy ally who spends their time perfecting products 
          that work because they want you to feel your best everyday.
        </div>
    </div>
  )
}

export default Home