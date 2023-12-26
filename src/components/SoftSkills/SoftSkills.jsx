import React, { useEffect, useState } from 'react'
import CardSoftSkills from './CardSoftSkills'

import CommunicationImage from "../../assets/images/comm.webp"
import ResolImage from "../../assets/images/résolu.webp"
import CollabImage from "../../assets/images/collab.webp"
import AdaptImage from "../../assets/images/addaptab.webp"
import useIntersectionObserver from '../Helper/HelperScrollAnimation'

export default function SoftSkills() {

    const { observedRef, isIntersecting } = useIntersectionObserver();

    const [softSkillsAnimateTop, setSoftSkillsAnimationTop] = useState(false)
    const [softSkillsAnimateCard, setSoftSkillsAnimationCard] = useState(false)

    useEffect(() => {
        if(isIntersecting) {
            setSoftSkillsAnimationTop(true)
            const timer = setTimeout(() => {
                setSoftSkillsAnimationCard(true)
            }, 500)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [isIntersecting])

  return (
    <section ref={observedRef} className='softSkills'>
        <div className={`${'softSkills-top'} 
            ${softSkillsAnimateTop ? "softSkills-top-animate" : ""}`}
        >
            <h3 className='softSkills-top-title'>
                Mes Compétences transversales
            </h3>
            <p className='softSkills-top-text'>
                Jette un oeil sur mes compétences tranversales
            </p>
        </div>
        <div className='softSkills-middle'>
            <div className={`${'softSkills-middle-row'} 
                ${softSkillsAnimateCard ? "softSkills-middle-row-animate1" : ""}`}
            >
                <CardSoftSkills 
                    imageCard={CommunicationImage}
                    title="Communication"
                    description="La capacité à expliquer des concepts techniques de manière 
                    claire à des publics variés est essentielle."
                />
            </div>
            <div className={`${'softSkills-middle-row'} 
                ${softSkillsAnimateCard ? "softSkills-middle-row-animate2" : ""}`}
            >
                <CardSoftSkills 
                    imageCard={ResolImage}
                    title="Résolution de problèmes"
                    description="Trouver des solutions créatives à des défis techniques 
                    fait partie intégrante du rôle."
                />
            </div>
            <div className={`${'softSkills-middle-row'} 
                ${softSkillsAnimateCard ? "softSkills-middle-row-animate3" : ""}`}
            >
                <CardSoftSkills 
                    imageCard={CollabImage}
                    title="Collaboration"
                    description="Travailler efficacement au sein d'équipes
                     multidisciplinaires pour atteindre des objectifs communs."
                />
            </div>
            <div className={`${'softSkills-middle-row'} 
                ${softSkillsAnimateCard ? "softSkills-middle-row-animate4" : ""}`}
            >
                <CardSoftSkills 
                    imageCard={AdaptImage}
                    title="Adaptabilité"
                    description="Être capable de s'adapter rapidement aux nouvelles technologies
                     et aux changements de projet."
                />
            </div>
        </div>
    </section>
  )
}

