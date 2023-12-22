import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Header from "../components/Header/Header"
import Banner from '../components/Banner/Banner'
import Skills from '../components/Skills/Skills'

export default function Home() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 7000)
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
          </main>
        </div>
      )}
    </>
  );
  
}
