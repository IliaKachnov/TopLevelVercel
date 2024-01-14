import '../styles/home.css';

import homeCar from '../assets/img/home-car.webp'
import lamb from '../assets/img/lamb.webp';
import audi from '../assets/img/audi.webp';
import merc from '../assets/img/merc.webp';
import bmw from '../assets/img/bmw.webp';
import bent from '../assets/img/bent.webp';
import rolls from '../assets/img/rolls.webp';
import pors from '../assets/img/pors.webp';
import carIntro from '../assets/img/car-about.webp';
import { Link } from 'react-router-dom';
import Advantages from '../components/advantages/Advantages';
import StepsHome from '../components/stepsHome/StepsHome';
import FormChauf from '../components/formChauf/FormChauf';
import Reviews from '../components/reviews/Reviews';
import AccordionFaq from '../components/accordionFaq/AccordionFaq';
import Follow from '../components/follow/Follow';
import FormRent from '../components/form/FormRent';
import CarListLarge from '../components/carListLarge/CarListLarge';
import { useEffect, useState } from 'react';





const Home = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://bot-myauto.host2bot.ru/api/Content/landing');
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
      <section className="home">
        <div className="home__wrapper">
          <div className="home__intro">
            <h1 className="home__intro-title">Dubai Car Rental & Chauffeur Service</h1>
            <div className="home__choose-wrapper">
              <p className="home__choose">Choose your luxury car from our fleet, including Ferrari, Lamborghini, BMW, Audi, McLaren, Mercedes, Rolls Royce, Porsche, Range Rover, Bentley, and more</p>
              <Link to='/'>
                <button className="home__send">
                  <p>Book the perfect car</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <rect width="30" height="30" rx="15" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7762 19.2761 16 19 16C18.7239 16 18.5 15.7762 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6465L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2762 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <img className='home__img' src={homeCar} alt="Top Level" />
          <div className='home__logos'>
            <Link to='/'><img src={lamb} alt="Top Level" /></Link>
            <Link to='/'><img src={audi} alt="Top Level" /></Link>
            <Link><img src={merc} alt="Top Level" /></Link>
            <Link><img src={bmw} alt="Top Level" /></Link>
            <Link><img src={rolls} alt="Top Level" /></Link>
            <Link><img src={bent} alt="Top Level" /></Link>
            <Link><img src={pors} alt="Top Level" /></Link>
          </div>
        </div>
      </section>
      <Advantages crumb={results.advantages.title} textBlue={results.advantages.blocks[0].text} blueSupport={results.advantages.blocks[4].title} blueSupportText={results.advantages.blocks[4].text} advData={results.advantages.blocks.slice(1, 4)} titleBlue={results.advantages.blocks[0].title} mainTitle={results.advantages.text} titleBenefit={results.advantages.blocks[5].title} button='Book the perfect car' />
      <CarListLarge carListTitle={results.carList.title} carListText={results.carList.text} cards={results.carList.items} />
      <StepsHome />
      <section className='homeIntro'>
        <div className='homeIntro__wrapper'>
          <h2>We offer you a quality of service that places us among the best in our luxury car hire business</h2>
          <img src={carIntro} alt="Top level" />
        </div>
      </section>
      <FormChauf />
      <Reviews reviewsCrumb={results.reviews.title} reviewsTitle={results.reviews.text} reviews={results.reviews.blocks} />
      <AccordionFaq faqTitle={results.faq.title} faqText={results.faq.text} faqlist={results.faq.blocks} />
      <Follow />
      <FormRent />
    </>
  )
}

export default Home