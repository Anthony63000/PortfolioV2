import React, { useEffect, useState } from 'react';

const Loader = () => {

  const [firstAnimation, setFirstAnimation] = useState(false)
  const [closeAnimation, setCloseAnimation] = useState(false)

  // Gestion des timming des animation
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setFirstAnimation(true);
    }, 1500);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
      document.body.style.overflowX = 'hidden';
    };
  }, []);

  // gestion de l'animation de fermeture du Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setCloseAnimation(true)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

    return (
      <div className={`${'loader'} 
            ${closeAnimation ? "loader-animate" : ""}`}>
        <div className='loader-content'>
          <h1 
            className={`${'loader-content-title'} 
            ${firstAnimation ? "loader-content-title-animate" : ""}`}
          >
            Portfolio
          </h1>
          <h2 
            className={`${'loader-content-subTitle'} 
            ${firstAnimation ? "loader-content-subTitle-animate" : ""}`}
          >
            Borel Anthony
          </h2>
        </div>
      </div>
    );
  };
  
  export default Loader;
  

