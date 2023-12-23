/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import FirstProjectImage from "../../assets/images/epopee.webp";

export default function firstProject() {
  return (
    <>
        <div className='portfolio-fristProject-top'>
            <h4 className='portfolio-fristProject-top-title'>
                Projet en avant
            </h4>
            <p className='portfolio-fristProject-top-text'>
                Jette un oeil au projet phare de mon portfolio
            </p>
        </div>
        <div className='portfolio-fristProject-middle'>
            <div className='portfolio-fristProject-middle-left'>
                <img 
                    className='portfolio-fristProject-middle-left-image'
                    src={FirstProjectImage}
                    alt="Image de l'application épopée des compos" 
                />
            </div>
            <div className='portfolio-fristProject-middle-right'>
                <h5 className='portfolio-fristProject-middle-right-title'>
                    L'Epopée des compos
                </h5>
                <p className='portfolio-fristProject-middle-right-text'>
                    Dans le cadre d'un projet personnel, j'ai créé cette petite application qui 
                    permet de retrouver les noms des joueurs dans des matchs légendaires, 
                    en utilisant un système de points et de jokers.
                </p>
                <button className='portfolio-fristProject-middle-right-button'>
                    Zoom sur ce projet
                </button>
            </div>
        </div>
    </>
  )
}
