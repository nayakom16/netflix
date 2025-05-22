import React, { useEffect, useRef } from 'react'
import './titlecard.css'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'
// import cards_data from '../../assets/cards/Cards_data'

const Titlecard = () => {

  const cardRef = useRef();

  const handelWheel = (e)=>{
    console.log(e);
    e.prventDefault();
    cardRef.current.scrollLeft += e.deltaY
  }

  useEffect(()=>{
    cardRef.current.addEventListener('wheel' , handelWheel)
  },[])
  

  return (
    <div className='titlecard'>
      <h2>Popular On Netflix</h2>
      <div className="card-list" ref={cardRef}>
        {cards_data.map((card , index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            {/* <p>{card.name}</p> */}
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecard
