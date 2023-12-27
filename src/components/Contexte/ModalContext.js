import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function useModal() {
    return useContext(ModalContext)
}

export function ModalProvider({ children }) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [animateOpenModal, setAnimateOpenModal] = useState(false)

    const openCloseModal = () => {
        if (!modalIsOpen) {
            setAnimateOpenModal(true);
            setModalIsOpen(true)
        } else {
            setAnimateOpenModal(false);
            setTimeout(() => {
                setModalIsOpen(false);
            }, 500);
        }
    };

    return (
        <ModalContext.Provider 
            value={{ modalIsOpen, 
                    openCloseModal, 
                    animateOpenModal 
            }}>
                {children}
        </ModalContext.Provider>
    )
}

