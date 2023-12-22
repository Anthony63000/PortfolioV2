/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react"
import { ReactComponent as Logo } from "../../assets/images/logoEntreprise.svg"
import Navigation from "./Navigation"

export default function Header() {

    const [headerBurger, setHeaderBurger] = useState(false) 
    const [modalHeader, setModalHeader] = useState(false)

    const openCloseModal = () => {
        setModalHeader(!modalHeader)
    }

    useEffect(() => {
        function handleResize() {
          const screenWidth = window.innerWidth;
          if (screenWidth < 768) {
            setHeaderBurger(true)
          } else {
            setHeaderBurger(false)
          }
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <header>
        {!modalHeader ? (
            <section className='header'>
            <div className="header-left">
                <Logo 
                    style={{ width: "65px", height: "65px", fill: "white" }}
                />
            </div>
            <div className="header-right">
                {!headerBurger ? (
                    <nav className="header-right-nav">
                        <Navigation
                            linkName="Accueil"
                            link="#"
                        />
                        <Navigation
                            linkName="Compétences"
                            link="#"
                        />
                        <Navigation
                            linkName="Portfolio"
                            link="#"
                        />
                        <Navigation
                            linkName="Contact"
                            link="#"
                        />
                    </nav>
                ) : (
                    <nav className="header-right-navMobile">
                        <i 
                            class="fa-solid fa-bars header-right-navMobile-burger"
                            onClick={openCloseModal}
                        ></i>
                    </nav>
                )}
            </div>
        </section>
        ) : (
            <section className="headerModal">
                <div className="headerModal-top">
                    <Logo
                        style={{ width: "50px", height: "50px", fill: "white" }}
                    />
                    <div className="headerModal-top-column">
                        <h1 className="headerModal-top-column-title">
                            Portfolio
                        </h1>
                        <h2 className="headerModal-top-column-subTitle">
                            Borel Anthony
                        </h2>
                    </div>
                    <i 
                        className="fa-solid fa-xmark headerModal-top-close"
                        onClick={openCloseModal}
                    ></i>
                </div>
                <div className="headerModal-content">
                    <nav className="headerModal-content-nav">
                        <Navigation
                            linkName="Accueil"
                            link="#"
                        />
                        <Navigation
                            linkName="Compétences"
                            link="#"
                        />
                        <Navigation
                            linkName="Portfolio"
                            link="#"
                        />
                        <Navigation
                            linkName="Contact"
                            link="#"
                        />
                    </nav>
                </div>
                <div className="headerModal-bottom">
                    <a 
                        className="headerModal-bottom-link"
                        href="#"
                    >
                        <i 
                            className="fa-brands fa-square-github headerModal-bottom-link-logo"
                        ></i>
                    </a>
                    <a 
                        className="headerModal-bottom-link"
                        href="#"
                    >
                        <i className="fa-brands fa-linkedin headerModal-bottom-link-logo"></i>
                    </a>
                </div>
            </section>
        )}
    </header>
  )
}
