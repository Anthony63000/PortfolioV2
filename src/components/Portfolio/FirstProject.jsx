/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect, useState } from "react";
import FirstProjectImage from "../../assets/images/epopee.webp";
import useIntersectionObserver from "../Helper/HelperScrollAnimation";
import ModalFrontProject from "../Modal/ModalFrontProject";

import data from "../../assets/data/data.json"
import { useModal } from "../Contexte/ModalContext";

export default function FirstProject() {

    const { observedRef, isIntersecting } = useIntersectionObserver();
    const { openCloseModal, modalIsOpen} = useModal()

    const [topAnimation, setTopAnimation] = useState(false);
    const [firstProjectAnimation, setFirstProjectAnimation] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [animateNext, setAnimateNext] = useState(false)
    const [animatePrev, setAnimatePrev] = useState(false)

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

    const firstProjectImage = data.frontProject[0].images
    const firstProject = data.frontProject[0]

    const handleNextImage = () => {
        setAnimateNext(true)
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
            prevIndex === firstProjectImage.length - 1 ? 0 : prevIndex + 1
        );
            setTimeout(() => {
                setAnimateNext(false)
            }, 500)
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    };

    const handlePrevImage = () => {
        setAnimatePrev(true)
        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? firstProjectImage.length - 1 : prevIndex - 1
            );
            setTimeout(() => {
                setAnimatePrev(false)
            }, 500)
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    };

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
                    className={`
                    ${'portfolio-fristProject-middle-left-image'}`}
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
                <button onClick={openCloseModal} className='portfolio-fristProject-middle-right-button'>
                    Zoom sur ce projet
                </button>
            </div>
        </div>
        {modalIsOpen && (
            <ModalFrontProject
                title={firstProject.title}
                text={firstProject.description}
                openCloseModal={openCloseModal}
                imageSrc={`${process.env.PUBLIC_URL}/${firstProjectImage[currentImageIndex].image}`}
                imageSrcAlt={firstProjectImage[currentImageIndex].altText}
                handleNextImage={handleNextImage}
                handlePrevImage={handlePrevImage}
                animateNext={animateNext}
                animatePrev={animatePrev}
            />
        )}
    </>
  )
}
