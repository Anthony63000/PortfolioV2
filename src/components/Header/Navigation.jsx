/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

export default function Navigation({ link, linkName }) {

  const [navBarAnimation, setNavBarAnimation] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavBarAnimation(true);
      setTimeout(() => {
        setNavBarAnimation(false);
      }, 1000)
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
        <a 
            href={link} 
            className={`${'header-right-nav-link'} 
            ${navBarAnimation ? "header-right-nav-link-animate" : ""}`}
        >
            {linkName}
        </a>
    </>
  )
}
