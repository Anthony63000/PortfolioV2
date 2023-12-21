/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Navigation({ link, linkName }) {
  return (
    <>
        <a 
            href={link} 
            className='header-right-nav-link'
        >
            {linkName}
        </a>
    </>
  )
}
