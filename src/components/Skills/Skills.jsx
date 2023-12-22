/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
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

export default function Skills() {
  return (
    <section className='skills'>
        <div className='skills-top'>
            <h3 className='skills-top-title'>
                Mes Compétences
            </h3>
            <p className='skills-top-subTitle'>
                Jette un oeil sur mes compétences 
            </p>
        </div>
        <div className='skills-middle'>
            <div className='skills-middle-left'>
                <div className='skills-middle-left-top'>
                    <h4 className='skills-middle-left-top-title'>
                        Ma stack de développeur web Front-End 
                    </h4>
                </div>
                <div className='skills-middle-left-row'>
                    <h5 className='skills-middle-left-row-title'>
                        Intégration Web
                    </h5>
                    <div className='skills-middle-left-row-container'>
                        <SkillsItem 
                            stackName="Html"
                            stackLogo={ImageHtml}
                        />
                        <SkillsItem 
                            stackName="Css"
                            stackLogo={ImageCss}
                        />
                        <SkillsItem 
                            stackName="Sass"
                            stackLogo={ImageSass}
                        />
                    </div>
                </div>
                <div className='skills-middle-left-row'>
                    <h5 className='skills-middle-left-row-title'>
                        Front-End
                    </h5>
                    <div className='skills-middle-left-row-container'>
                        <SkillsItem 
                            stackName="Javascript"
                            stackLogo={ImageJavascript}
                        />
                        <SkillsItem 
                            stackName="React"
                            stackLogo={ImageReact}
                        />
                        <SkillsItem 
                            stackName="Redux"
                            stackLogo={ImageRedux}
                        />
                    </div>
                </div>
                <div className='skills-middle-left-row'>
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
            <div className='skills-middle-right'>
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
