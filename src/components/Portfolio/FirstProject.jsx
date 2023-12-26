/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect, useState } from "react";
import FirstProjectImage from "../../assets/images/epopee.webp";
import useIntersectionObserver from "../Helper/HelperScrollAnimation";

export default function FirstProject() {

    const { observedRef, isIntersecting } = useIntersectionObserver();

    const [topAnimation, setTopAnimation] = useState(false);
    const [firstProjectAnimation, setFirstProjectAnimation] = useState(false)

    useEffect(() => {
        if (isIntersecting) {
            const timer = setTimeout(() => {
                setTopAnimation(true);
                setTimeout(() => {
                    setFirstProjectAnimation(true);
                }, 500)
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isIntersecting]);

  return (
    <>
        <div ref={observedRef} className={`${'portfolio-fristProject-top'}
            ${topAnimation ? "portfolio-fristProject-top-animate" : ""}
        `}>
            <h4 className='portfolio-fristProject-top-title'>
                Projet en avant
            </h4>
            <p className='portfolio-fristProject-top-text'>
                Jette un oeil au projet phare de mon portfolio
            </p>
        </div>
        <div className='portfolio-fristProject-middle'>
            <div className={`${'portfolio-fristProject-middle-left'}
                ${firstProjectAnimation ? "portfolio-fristProject-middle-left-animate" : ""}
            `}>
                <img 
                    className='portfolio-fristProject-middle-left-image'
                    src={FirstProjectImage}
                    alt="Image de l'application épopée des compos" 
                />
            </div>
            <div className={`${'portfolio-fristProject-middle-right'}
                ${firstProjectAnimation ? "portfolio-fristProject-middle-right-animate" : ""}
            `}>
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
