/* eslint-disable react/prop-types */

import { useState } from 'react';
import AccordionFaqItem from '../accordionFaq/AccordionFaqItem';

const Accordion = ({faqlist}) => {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      {faqlist.map((faqItem, id) => (
            <AccordionFaqItem
            onClick={() => id === openId ? setOpenId(null): setOpenId(id)}
            faqItem={faqItem} isOpen={id === openId} key={id}/>
          ))}
    </>
  )
}

export default Accordion