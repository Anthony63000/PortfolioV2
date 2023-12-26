import React from 'react'

export default function ButtonFilter({ filter, handleFilterClick }) {
  return (
    <>
        <button 
            className='portfolio-portfolioContainer-middle-filterBar-button'
            onClick={handleFilterClick}
        >
            {filter}
        </button>
    </>
  )
}
