/* eslint-disable react/jsx-no-target-blank */
import ButtonFilter from './ButtonFilter'

import data from "../../assets/data/data.json";
import { useState } from 'react';

export default function PortfolioContainer() {

    const allProjects = data.projects
    const [ filteredProjects, setFilteredProject ] = useState(allProjects)

    // Fonction pour gérer le filtrage au clic

    const handleFilteredClick = (category) => {
        if(category === "Tous") {
            setFilteredProject(allProjects);
        } else {
            const filtered = allProjects.filter(project => project.category === category)
            setFilteredProject(filtered)
        }
    }

  return (
    <>
        <div className='portfolio-portfolioContainer-top'>
            <h3 className='portfolio-portfolioContainer-top-title'>
                Mes Réalisations
            </h3>
            <p className='portfolio-portfolioContainer-top-text'>
                Voici quelques-unes de mes réalisations
            </p>
        </div>
        <div className='portfolio-portfolioContainer-middle'>
            <div className='portfolio-portfolioContainer-middle-filterBar'>
                <h4 className='portfolio-portfolioContainer-middle-filterBar-title'>
                    Filtres : 
                </h4>
                <ButtonFilter 
                    filter="Tous"
                    handleFilterClick={() => handleFilteredClick("Tous")}
                />
                <ButtonFilter 
                    filter="Html / Css"
                    handleFilterClick={() => handleFilteredClick("HTML&CSS")}
                />
                <ButtonFilter 
                    filter="JavaScript"
                    handleFilterClick={() => handleFilteredClick("Javascript")}
                />
                <ButtonFilter 
                    filter="React"
                    handleFilterClick={() => handleFilteredClick("React")}
                />
            </div>
            <div className='portfolio-portfolioContainer-middle-container'>
                {filteredProjects.map( project => (
                    <div className='portfolio-portfolioContainer-middle-container-link' 
                        key={project.id} 
                        target='_blank'
                    >
                        <img 
                            className='portfolio-portfolioContainer-middle-container-link-image'
                            src={project.image} 
                            alt={project.textAltImage} 
                        />
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
