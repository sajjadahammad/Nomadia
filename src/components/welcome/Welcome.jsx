import React from 'react'
import './welcome.css'


function Welcome() {
  return (
    <>
    <div className='florence'>
        <h1 className='catchphrase'>Make in</h1> 
        <h1 className='catchphrase'>your Journey</h1>
        <p className='catchphrase'>Explore the world with us to make it a beautiful experience</p>
        <input type="text" className='search' placeholder='Enter your Destination' />
        <button className='search-btn'>search</button>
    </div>
    </>
  )
}

export default Welcome