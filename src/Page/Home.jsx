import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Header from "../components/Header/Header"

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
        </div>
      )}
    </>
  );
  
}
