import React, { useEffect, useState } from 'react'
import FirstProject from "./FirstProject";
import PortfolioContainer from './PortfolioContainer';
import useIntersectionObserver from '../Helper/HelperScrollAnimation';

export default function Portfolio() {

    const { observedRef, isIntersecting } = useIntersectionObserver();
    
    const [animatePortfolio, setAnimatePortfolio] = useState(false)

    useEffect(() => {
        if(isIntersecting) {
            setAnimatePortfolio(true)
        }
    }, [isIntersecting])

  return (
    <section id='portfolio' className='portfolio'>
        <div ref={observedRef} className={`${'portfolio-top'} 
            ${animatePortfolio ? "portfolio-top-animate" : ""}
        `}>
            <h3 className='portfolio-top-title'>
                Portfolio
            </h3>
            <p className='portfolio-top-text'>
                Jette un oeil sur mon portfolio pour voir ce que je sais faire 
            </p>
        </div>
        <div className='portfolio-fristProject'>
            <FirstProject/>
        </div>
        <div className='portfolio-portfolioContainer'>
            <PortfolioContainer/>
        </div>
    </section>
  )
}
