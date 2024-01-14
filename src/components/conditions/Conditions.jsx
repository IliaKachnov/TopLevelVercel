/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Accordion from '../accordion/Accordion';
import './conditions.css';



// const faqlist1 = [
//   {
//     q: 'Security Deposit',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'Additional drivers',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'Foreign citizens',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'Car delivery / return',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
// ];

// const faqlist2 = [
//   {
//     q: 'Usage Area',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'Additional expenses',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'Car booking',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
//   {
//     q: 'PROHIBITED',
//     a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
//   },
// ];

const Conditions = ({condTilte, req, addInfo, condBlocks}) => {

  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://bot-myauto.host2bot.ru/api/Content/rentToOwnPage');
        let data = await response.json();
        setRes(data);
        if (data.success === 'ok') {
          setRes(data);
        } else {
          setError('Ошибка при получении')
        }

      } catch(err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    };
    fetchContacts()

  }, []);

  if (isLoading) {
    return <p>Загрузка</p>
  }
  if (error) {
    return <p>Ошибка: {error}</p>
  }
  return (
    <>
      <section className='conditions'>
        <div className='conditions__wrapper'>
          <h2 className='conditions__title'>{condTilte}</h2>
          <p className='conditions__req'>{req}</p>
          <div className='conditions__blocks'>
            {condBlocks.map((condBlock, id) => (
              <div key={id} className='conditions__block'>
                <p>{condBlock.title}</p>
                <h4>{condBlock.text}</h4>
              </div>  
            )
            )}
          </div>
          <p className='conditions__info'>{addInfo}</p>
          <div className='conditions__accordion-wrapper'>
            <div className='conditions__accordion'>
              <Accordion faqlist={res.conditions_renting_car_purchase.items.slice(0, 4)}/>
            </div>
            <div className='conditions__accordion'>
              <Accordion faqlist={res.conditions_renting_car_purchase.items.slice(-4)}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Conditions