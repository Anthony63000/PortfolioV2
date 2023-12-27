
import { useModal } from '../Contexte/ModalContext';

export default function ModalFrontProject({ title, 
  text, 
  handlePrevImage,
   handleNextImage,
   imageSrc,
  imageSrcAlt,
  animateNext,
  animatePrev
  }) {

  const { openCloseModal, animateOpenModal } = useModal()

  return (
    <div className={`${'modalFrontProject'} 
    ${animateOpenModal ? "modalFrontProject-animate" : "modalFrontProject-animateReturn"
    }`}>
      <div className='modalFrontProject-top'>
        <h3 className='modalFrontProject-top-title'>
          {title}
        </h3>
        <i class="fa-solid fa-xmark modalFrontProject-top-close"
          onClick={openCloseModal}
        ></i>
      </div>
      <div className='modalFrontProject-middle'>
        <i
          className='fa-solid fa-chevron-left modalFrontProject-middle-arrowLeft'
          onClick={handlePrevImage}
        ></i>
        <img src={imageSrc} 
            alt={imageSrcAlt} 
            className={`${'modalFrontProject-middle-image'}
              ${animateNext ? "modalFrontProject-middle-image-next" : ""}
              ${animatePrev ? "modalFrontProject-middle-image-prev" : ""}
            `}
        />
        <i
          className='fa-solid fa-chevron-right modalFrontProject-middle-arrowRight'
          onClick={handleNextImage}
        ></i>
      </div>
      <div className='modalFrontProject-bottom'>
        <p className='modalFrontProject-bottom-text'>
            {text}
        </p>
      </div>
    </div>
  );
}

