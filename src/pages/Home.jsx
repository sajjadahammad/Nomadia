import React from 'react'
import Welcome from '../components/welcome/Welcome'
import Header from '../components/navbar/Header'
import Footer from '../components/footer/Footer'
import Destination from '../components/destination/Destination'


function Home() {
  return (
    <div>
     <Header/>
      <Welcome/>
      <div style={{'marginTop':'35px'}}></div>
      <Destination/>
      <div style={{'marginTop':'35px'}}></div>
      <Footer/>
    </div>
  )
}

export default Home