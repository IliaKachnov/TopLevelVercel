import Intro from "../components/intro/Intro"

import meet from '../assets/img/meet.webp';
import Steps from "../components/steps/Steps";
import Advantages from "../components/advantages/Advantages";

import whiteCar from '../assets/img/white-car.webp';

import '../styles/services.css';
import Conditions from "../components/conditions/Conditions";
import CarCard from "../components/carCard/CarCard";
import { Link } from "react-router-dom";
import FormRent from "../components/form/FormRent";
import AccordionFaq from "../components/accordionFaq/AccordionFaq";
import { useEffect, useState } from "react";


const advantagesDataB2b = [
  {
    title: "Your Client Is Your Client",
    text: "We do not do any direct marketing or contact with your customers. Our managers will not use branded clothing and we do not pass business cards or other promotional materials when interacting with a client we receive from a partner",
  },
  {
    title: "Tailored Solutions",
    text: "We understand the unique needs of your clientele. Collaborate with us to tailor solutions that meet specific requests, ensuring your clients experience personalized luxury that exceeds expectations",
  },
  {
    title: "New Cars with Minimal Mileage",
    text: "Experience the thrill of driving the latest models with our fleet of brand-new vehicles boasting minimal mileage",
  },
];

const RentToOwn = () => {
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
      <Intro introTitle={results.title} introText={results.text} introBtn={results.button_text.en} intro={meet}/>
      <Steps stepsTitle={results.rental_with_purchase_steps.title} stepsText={results.rental_with_purchase_steps.text} blocks={results.rental_with_purchase_steps.blocks} stepsBlockTitleBlue={results.rental_with_purchase_steps.blocks[3].title} stepsBlockTextBlue={results.rental_with_purchase_steps.blocks[3].text} />

      <Advantages advData={advantagesDataB2b} mainTitle='We offer you the best  experience' titleBlue='Full Transparency' textBlue='We offer transparency at every stage of the process. From document preparation to the final delivery of the car - each step is illuminated for your comfort and confidence' titleBenefit='Indulge in Unmatched Comfort and Performance' button='Contact us' />
      <h2 className="services__title">{results.qualityService}</h2>
      <img className="services__img" src={whiteCar} alt="Top level" />
      <Conditions condTilte={results.conditions_renting_car_purchase.text} condBlocks={results.conditions_renting_car_purchase.blocks}  />
      <p className="conditions__crumb">Car list</p>
      <h2 className="conditions__title">40+ cars available now</h2>
      <div className="cars__wrapper">
        {results.shortCarList.items.map((card, id) => (
          <CarCard key={id} carCard={card.image} speed={card.speed} transmission={card.transmission} seats={card.seats} price={card.price} carName={card.name} />
        ))}
      </div>
      <div className="about__see-wrapper">
        <Link to='/catalog'>
          <button className="about__see">
            <p>See more auto</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="15" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7762 19.2761 16 19 16C18.7239 16 18.5 15.7762 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6465L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2762 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
            </svg>
          </button>
        </Link>
      </div>
      <FormRent />
      <div className="services__margin">
        <AccordionFaq faqlist={results.rent_to_own_faq.blocks} faqTitle={results.rent_to_own_faq.title} faqText={results.rent_to_own_faq.text}/>
      </div>
    </>
  )
}

export default RentToOwn