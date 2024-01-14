import { useEffect, useState } from "react";
import AccordionFaq from "../components/accordionFaq/AccordionFaq"
import Advantages from "../components/advantages/Advantages";
import CarCard from "../components/carCard/CarCard";
import FormRent from "../components/form/FormRent";

import "../styles/catalog.css";

// const faqlist = [
//   {
//     q: 'What forms of payment do you accept?',
//     a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
//   },
//   {
//     q: 'When will the deposit for the vehicle be refunded?',
//     a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
//   },
//   {
//     q: 'What is the daily mileage limit of rented cars?',
//     a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
//   },
//   {
//     q: 'Where can I drive a rented car?',
//     a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
//   },
//   {
//     q: 'Is it possible to deliver a car to a specific location in Dubai?',
//     a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
//   },
// ];

const filters = ['Audi', 'BMW', 'Bentley', 'Cadillac', 'Chevrolet', 'Ferrari', 'Ford','Bentley', 'Cadillac', 'Chevrolet', 'Ferrari', 'Ford'];

// const advantagesDataB2b = [
//   {
//     title: "Free Delivery to Any Location",
//     text: "Airport, office, home, hotel or etc - we deliver the car to any point where it is convenient for you without delays",
//   },
//   {
//     title: "Cleanliness of Each Vehicle",
//     text: "We keep our cars clean. Our cars are always prepared for rental with shiny interiors, without dust or unpleasant odors",
//   },
//   {
//     title: "Privacy and Confidentiality Assured",
//     text: "We have stringent measures in place to safeguard your privacy, providing you with complete peace of mind.",
//   },
// ];

const Catalog = () => {
  // eslint-disable-next-line no-unused-vars
  const [isChecked, setIsChecked] = useState(false);
  const [filter, setFilter] = useState(false);

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);
  const [resultsData, setResultsData] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://bot-myauto.host2bot.ru/api/Auto/list');
        let data = await response.json();
        const response1 = await fetch('https://bot-myauto.host2bot.ru/api/Content/landing');
        let data1 = await response1.json();
        setResults(data);
        setResultsData(data1);

        if (data.success === 'ok') {
          setResults(data);
        } else {
          setError('Ошибка при получении')
        }

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

 

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     try {
  //       const response = await fetch('https://bot-myauto.host2bot.ru/api/Content/landing');
  //       let data = await response.json();
  //       setResultsData(data);
  //       if (data.success === 'ok') {
  //         setResultsData(data);
  //       } else {
  //         setError('Ошибка при получении')
  //       }

  //     } catch(err) {
  //       setError(err.message)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   };
  //   fetchContacts()

  // }, []);

  if (isLoading) {
    return <p>Загрузка</p>
  }
  if (error) {
    return <p>Ошибка: {error}</p>
  }

  return (
    <>
      <section className="catalog">
        <div className="catalog__wrapper">
          <div className="catalog__crumb">
            <span>Main</span>
            <span>Car List</span>
          </div>
          <h2 className="catalog__title">Car list</h2>
          <ul className="catalog__categories">
            <li className="catalog__category">
              <p>Categories</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#7D7D7D"/>
              </svg>
            </li>
            <li className={`catalog__category ${filter ? 'active' : ""} mobile`} onClick={() => setFilter(!filter)}>
              <p>Brand</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#7D7D7D"/>
              </svg>
              <ul className="catalog__dropdown">
                {filters.map((filter, index) => (
                  <li className="catalog__item" key={index}>
                    <label>
                      <input
                        type="checkbox"
                        // onChange={() => {
                        //   setIsChecked(!isChecked);
                        // }}
                      />
                      <span
                        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                        aria-hidden="true"
                      />
                    </label>
                    <p>{filter}</p>
                  </li>

                ))}
                
              </ul>
            </li>
            <li className="catalog__category">
              <p>Price</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#7D7D7D"/>
              </svg>
            </li>
            <li className="catalog__category">
              <p>Car Power</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#7D7D7D"/>
              </svg>
            </li>
            <li className="catalog__category">
              <p>Color</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#7D7D7D"/>
              </svg>
            </li>
          </ul>
          <ul className="catalog__active-filters">
            <li className="catalog__filter">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.44221 0.137657C6.62575 0.3212 6.62575 0.618781 6.44221 0.802324L0.802324 6.44221C0.618781 6.62575 0.3212 6.62575 0.137657 6.44221C-0.0458857 6.25867 -0.0458857 5.96109 0.137657 5.77754L5.77754 0.137657C5.96109 -0.0458857 6.25867 -0.0458857 6.44221 0.137657Z" fill="#969696"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.137657 0.137657C0.3212 -0.0458857 0.618781 -0.0458857 0.802324 0.137657L6.44221 5.77754C6.62575 5.96109 6.62575 6.25867 6.44221 6.44221C6.25867 6.62575 5.96109 6.62575 5.77754 6.44221L0.137657 0.802324C-0.0458857 0.618781 -0.0458857 0.3212 0.137657 0.137657Z" fill="#969696"/>
              </svg>
              <p>Lamborghini</p>
            </li>
            <li className="catalog__filter">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.44221 0.137657C6.62575 0.3212 6.62575 0.618781 6.44221 0.802324L0.802324 6.44221C0.618781 6.62575 0.3212 6.62575 0.137657 6.44221C-0.0458857 6.25867 -0.0458857 5.96109 0.137657 5.77754L5.77754 0.137657C5.96109 -0.0458857 6.25867 -0.0458857 6.44221 0.137657Z" fill="#969696"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.137657 0.137657C0.3212 -0.0458857 0.618781 -0.0458857 0.802324 0.137657L6.44221 5.77754C6.62575 5.96109 6.62575 6.25867 6.44221 6.44221C6.25867 6.62575 5.96109 6.62575 5.77754 6.44221L0.137657 0.802324C-0.0458857 0.618781 -0.0458857 0.3212 0.137657 0.137657Z" fill="#969696"/>
              </svg>
              <p>Black</p>
            </li>
            <li className="catalog__filter">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.44221 0.137657C6.62575 0.3212 6.62575 0.618781 6.44221 0.802324L0.802324 6.44221C0.618781 6.62575 0.3212 6.62575 0.137657 6.44221C-0.0458857 6.25867 -0.0458857 5.96109 0.137657 5.77754L5.77754 0.137657C5.96109 -0.0458857 6.25867 -0.0458857 6.44221 0.137657Z" fill="#969696"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.137657 0.137657C0.3212 -0.0458857 0.618781 -0.0458857 0.802324 0.137657L6.44221 5.77754C6.62575 5.96109 6.62575 6.25867 6.44221 6.44221C6.25867 6.62575 5.96109 6.62575 5.77754 6.44221L0.137657 0.802324C-0.0458857 0.618781 -0.0458857 0.3212 0.137657 0.137657Z" fill="#969696"/>
              </svg>
              <p>100 - 450 $</p>
            </li>
            <li className="catalog__filter clear">
              <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.44221 0.137657C6.62575 0.3212 6.62575 0.618781 6.44221 0.802324L0.802324 6.44221C0.618781 6.62575 0.3212 6.62575 0.137657 6.44221C-0.0458857 6.25867 -0.0458857 5.96109 0.137657 5.77754L5.77754 0.137657C5.96109 -0.0458857 6.25867 -0.0458857 6.44221 0.137657Z" fill="#969696"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.137657 0.137657C0.3212 -0.0458857 0.618781 -0.0458857 0.802324 0.137657L6.44221 5.77754C6.62575 5.96109 6.62575 6.25867 6.44221 6.44221C6.25867 6.62575 5.96109 6.62575 5.77754 6.44221L0.137657 0.802324C-0.0458857 0.618781 -0.0458857 0.3212 0.137657 0.137657Z" fill="#969696"/>
              </svg>
              <p>Clear all</p>
            </li>
          </ul>
          <div className="catalog__cars">
            {results.data.map((card, id) => (
              <CarCard key={id} carCard={card.image} speed={card.speed} transmission={card.transmission} seats={card.seats} price={card.price} carName={card.name} />
            ))}
          </div>
          <div className="catalog__more-wrapper">
            <button className="catalog__more">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="white"/>
              </svg>
              <p>See more auto</p>
            </button>
            <ul className="catalog__pagination">
              <li className="catalog__page active">1</li>
              <li className="catalog__page">2</li>
              <li className="catalog__page">3</li>
              <li className="catalog__page">4</li>
              <li className="catalog__page">5</li>
              <li className="catalog__page">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.7124 9.9248L4.35885 9.57125L7.71761 6.21249L4.35885 2.85374L4.7124 2.50018L8.42471 6.21249L4.7124 9.9248Z" fill="white"/>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <AccordionFaq faqTitle={resultsData.faq.title} faqText={resultsData.faq.text} faqlist={resultsData.faq.blocks}/>
      <Advantages crumb={resultsData.advantages.title} textBlue={resultsData.advantages.blocks[0].text} blueSupport={resultsData.advantages.blocks[4].title} blueSupportText={resultsData.advantages.blocks[4].text} advData={resultsData.advantages.blocks.slice(1, 4)} titleBlue={resultsData.advantages.blocks[0].title} mainTitle={resultsData.advantages.text} titleBenefit={resultsData.advantages.blocks[5].title} button='Book the perfect car'  />
      <FormRent />
    </>
  )
}

export default Catalog