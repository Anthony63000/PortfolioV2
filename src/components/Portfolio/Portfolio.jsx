import React from 'react'
import FirstProject from "./FirstProject";

export default function Portfolio() {
  return (
    <section id='portfolio' className='portfolio'>
        <div className='portfolio-top'>
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
    </section>
  )
}
