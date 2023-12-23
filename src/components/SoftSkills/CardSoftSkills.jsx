import React from 'react'

export default function CardSoftSkills({ imageCard, altImageCard, title, description }) {
  return (
    <div className='softSkills-middle-row-card'>
        <img 
            className='softSkills-middle-row-card-image'
            src={imageCard} 
            alt={altImageCard} 
        />
        <h4 className='softSkills-middle-row-card-title'>
            {title}
        </h4>
        <p className='softSkills-middle-row-card-text'>
            {description}
        </p>
    </div>
  )
}
