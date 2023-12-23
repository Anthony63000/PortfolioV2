/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react'
import SkillsImage from "../../assets/images/skills.webp"
import SkillsItem from './SkillsItem'

import ImageHtml from "../../assets/images/html-1.svg"
import ImageCss from "../../assets/images/css-3.svg"
import ImageSass from "../../assets/images/sass-1.svg"
import ImageJavascript from "../../assets/images/logo-javascript.svg"
import ImageReact from "../../assets/images/react-2.svg"
import ImageRedux from "../../assets/images/redux-logo.svg"
import ImageGitHub from "../../assets/images/github-icon-1.svg"
import ImageGit from "../../assets/images/git-icon.svg"

import useIntersectionObserver from '../Helper/HelperScrollAnimation'

export default function Skills() {

    const { observedRef, isIntersecting } = useIntersectionObserver();

    const [animateTop, setAnimateTop] = useState(false)
    const [animateLeft, setAnimateLeft] = useState(false)
    const [animateRight, setAnimateRight] = useState(false)
    const [itemsAnimate, setItemsAnimate] = useState(false)

    useEffect(() => {
        if(isIntersecting) {
            const timer = setTimeout(() => {
                setAnimateTop(true)
                setTimeout(() => {
                    setAnimateLeft(true)
                    setAnimateRight(true)
                    setTimeout(() => {
                        setItemsAnimate(true)
                    }, 1000)
                }, 1000)
            }, 0)
            return () => {
                clearTimeout(timer)
            }
        }
    })
    
  return (
    <section 
        id='skills' 
        ref={observedRef} 
        className={`${'skills'} 
        ${isIntersecting ? "skills-animate" : ""}`}
    >
        <div className={`${'skills-top'} ${animateTop ? "skills-top-animate" : ""}`}>
            <h3 className='skills-top-title'>
                Mes Compétences
            </h3>
            <p className='skills-top-subTitle'>
                Jette un oeil sur mes compétences 
            </p>
        </div>
        <div className='skills-middle'>
            <div className={`${'skills-middle-left'} 
                ${animateLeft ? "skills-middle-left-animate" : ""}`}
            >
                <div className='skills-middle-left-top'>
                    <h4 className='skills-middle-left-top-title'>
                        Ma stack de développeur web Front-End 
                    </h4>
                    <p className='skills-middle-left-top-text'>
                        Les technologies que j'utilise agissent comme des outils pour transformer 
                        des concepts abstraits en expériences concrètes. Elles permettent de 
                        construire des sites et des applications web qui captivent, fonctionnent 
                        de manière fluide et offrent une expérience utilisateur optimale.
                    </p>
                </div>
                <div className={`${'skills-middle-left-row'} 
                    ${itemsAnimate ? "skills-middle-left-row-animate1" : ""}`}
                >
                    <h5 className='skills-middle-left-row-title'>
                        Intégration Web
                    </h5>
                    <div className='skills-middle-left-row-container'>
                        <SkillsItem 
                            stackName="Html"
                            stackLogo={ImageHtml}
                            stackLogoAlt="Image du logà HTML"
                        />
                        <SkillsItem 
                            stackName="Css"
                            stackLogo={ImageCss}
                            stackLogoAlt="Image du logo CSS"
                        />
                        <SkillsItem 
                            stackName="Sass"
                            stackLogo={ImageSass}
                            stackLogoAlt="Image du logo sass"
                        />
                    </div>
                </div>
                <div className={`${'skills-middle-left-row'} 
                    ${itemsAnimate ? "skills-middle-left-row-animate2" : ""}`}
                >
                    <h5 className='skills-middle-left-row-title'>
                        Front-End
                    </h5>
                    <div className='skills-middle-left-row-container'>
                        <SkillsItem 
                            stackName="Javascript"
                            stackLogo={ImageJavascript}
                            stackLogoAlt="Image du logo javascript"
                        />
                        <SkillsItem 
                            stackName="React"
                            stackLogo={ImageReact}
                            stackLogoAlt="Image du logo react"
                        />
                        <SkillsItem 
                            stackName="Redux"
                            stackLogo={ImageRedux}
                            stackLogoAlt="Image du logo redux"
                        />
                    </div>
                </div>
                <div className={`${'skills-middle-left-row'} 
                    ${itemsAnimate ? "skills-middle-left-row-animate3" : ""}`}
                >
                    <h5 className='skills-middle-left-row-title'>
                        Versionning
                    </h5>
                    <div className='skills-middle-left-row-container'>
                        <SkillsItem 
                            stackName="Github"
                            stackLogo={ImageGitHub}
                        />
                        <SkillsItem 
                            stackName="Git"
                            stackLogo={ImageGit}
                        />
                    </div>
                </div>
            </div>
            <div className={`${'skills-middle-right'} 
                ${animateRight ? "skills-middle-right-animate" : ""}`}
            >
                <img 
                    className='skills-middle-right-image'
                    src={SkillsImage}
                    alt="Image vectoriel d'un homme sur son pc portable avec différent icon sur le coté" 
                />
            </div>
        </div>
    </section>
  )
}
