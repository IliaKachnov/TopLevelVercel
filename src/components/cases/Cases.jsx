import Accordion from "../accordion/Accordion";
import cars from '../../assets/img/cars.webp';

import './cases.css';
import { useEffect, useState } from "react";


const faqlist = [
  {
    title: 'Car Rental Companies',
    text: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    title: 'VIP Service for Special Events',
    text: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    title: 'Concierge Agency',
    text: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    title: 'Car Dealerships',
    text: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
];


const Cases = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://bot-myauto.host2bot.ru/api/Content/rentToOwnPage');
        let data = await response.json();
        setResults(data);
        if (data.success === 'ok') {
          setResults(data);
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
      <section className="cases">
        <p className="cases__crumb">Cases</p>
        <h2 className="cases__title">Examples of partner integrations</h2>
        <div className="cases__accordion-wrapper">
          <div className="cases__accordion">
            <Accordion faqTitle={results.rent_to_own_faq.title} faqText={results.rent_to_own_faq.text} faqlist={faqlist} />
            <div className="cases__info">
              <h3>Other companies</h3>
              <p>We are open to partnerships for cross-marketing and joint promotions with market leaders in Dubai</p>
            </div>
          </div>
          <div className="cases__img">
            <img src={cars} alt="Top level" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cases