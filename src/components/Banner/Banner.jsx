/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react'
import LogoBanner from "../../assets/images/banner.webp";

export default function Banner() {

  //const [animateBanner, setAnimateBanner] = useState(false)
  const [animateLeft, setAnimateLeft] = useState(false)
  const [animateRight, setAnimateRight] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLeft(true)
      setTimeout(() => {
        setAnimateRight(true)
      }, 500)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className='banner'>
      <div className={`${'banner-left'} ${animateLeft ? "banner-left-animate" : ""}`}>
        <img 
          className='banner-left-image'
          src={LogoBanner} 
          alt="Image vectoriel d'un écran ainsi que la tour, un clavier et une souris" 
        />
      </div>
      <div className={`${'banner-right'} ${animateRight ? "banner-right-animate" : ""}`}>
        <h3 className='banner-right-title'>
          Développeur Web Front-End | React
        </h3>
        <p className='banner-right-text'>
            Salut ! Moi, c'est Anthony, 
            un passionné du web. Mon truc ? 
            Créer des sites web qui ont du punch ! 
            Dans mon portfolio, je te montre comment je mélange design cool et 
            code génial pour créer des expériences web qui décoiffent. 
            Viens jeter un œil et laisse-toi emporter dans mon univers digital.
        </p>
        <a href="#" className='banner-right-link'>
          Consulte mon portfolio
        </a>
      </div>
    </section>
  )
}
