import React, {useRef, useEffect, useState} from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'


const TitleCards = ({title, category}) => {


  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQxZWYwNjgyNWZiNjFkMTBjM2Y1ODk1ZTQyOTllMSIsIm5iZiI6MTczMDg0NzU3NC45MTkzNTQ0LCJzdWIiOiI2NzJhYTFmYjBjZTZkMTRhNDA5ZWM3NWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.BqOty2lgptQ4xRzgoa9VV_5BRKBeu0J4zKyhOD4a60I'
    }
  };
  
 
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category? category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(response.result))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])


  return (
    <div className='title__cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
      {apiData.map((card, index) =>{
        return <Link to={`/player/${card.id}`} className="card" key={index}> 
        <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
        <p>{card.original_title}</p>
        </Link>

      })}</div>
    </div>
  )
}

export default TitleCards
