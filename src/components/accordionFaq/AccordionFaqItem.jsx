import { useRef } from "react";
import plus from '../../assets/img/icons/plus.svg';
/* eslint-disable react/prop-types */
const AccordionFaqItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <>
      <li className={`accordion__item ${isOpen ? 'active' : ''}`}>
        <button className={`accordion__header ${isOpen ? 'active' : ''}`} onClick={() => onClick()}>
          <p>{faqItem.title}</p>
          <div className={`accordion__plus ${isOpen ? 'active' : ''}`}>
          <img src={plus} alt="Top Level" />
        </div>
        </button>
        
        <div className='accordion__collapse' style={isOpen ? {height: itemRef.current.scrollHeight} : {height: '0px'}}>
          <div className="accordion__body" ref={itemRef}>{faqItem.text}</div>
        </div>
      </li>
    </>
  );
};

export default AccordionFaqItem;
