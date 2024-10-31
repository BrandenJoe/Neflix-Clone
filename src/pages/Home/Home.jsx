import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption_img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
          <div className="hero_btns">
            <button className='btn'><img src={Play_icon} alt="" />Play</button>
            <button className='btn dark_btn'><img src={info_icon} alt="" />More Info</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
