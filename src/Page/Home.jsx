import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'
import SoftSkills from '../components/SoftSkills/SoftSkills'
import Portfolio from '../components/Portfolio/Portfolio'

export default function Home() {

  // on définit le state local du loader
  const [loader, setLoader] = useState(true)

  // On gère l'appartion de l'animation du header
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 4500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className='app'>
          <Header />
          <main>
            <Banner/>
            <Skills/>
            <SoftSkills />
            <Portfolio/>
          </main>
        </div>
      )}
    </>
  );
  
}
