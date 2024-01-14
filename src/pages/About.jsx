import { Link } from "react-router-dom";
import AboutIntro from "../components/aboutIntro/AboutIntro"
import AboutUs from "../components/aboutUs/AboutUs"
import AccordionFaq from "../components/accordionFaq/AccordionFaq";
import Advantages from "../components/advantages/Advantages"
import CarCard from "../components/carCard/CarCard";
import Follow from "../components/follow/Follow";
import FormRent from "../components/form/FormRent"
import FormChauf from "../components/formChauf/formChauf";
import Reviews from "../components/reviews/Reviews";

import '../styles/about.css';
import { useEffect, useState } from "react";

const About = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError ] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://bot-myauto.host2bot.ru/api/Content/aboutPage');
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
      <AboutIntro slogan={results.slogan} />
      <AboutUs aboutUs={results.stat.name} aboutTitle={results.stat.title} aboutText={results.stat.text} statCells={results.stat.stat} />
      <Advantages crumb={results.advantages.title} textBlue={results.advantages.blocks[0].text} blueSupport={results.advantages.blocks[4].title} blueSupportText={results.advantages.blocks[4].text} advData={results.advantages.blocks.slice(1, 4)} titleBlue={results.advantages.blocks[0].title} mainTitle={results.advantages.text} titleBenefit={results.advantages.blocks[5].title} button='Book the perfect car' />
      <FormRent /> 
      <Reviews reviewsCrumb={results.reviews.title} reviewsTitle={results.reviews.text} reviews={results.reviews.blocks} />
      <p className="conditions__crumb">Car list</p>
      <h2 className="conditions__title">40+ cars available now</h2>
      <div className="cars__wrapper">
        {results.shortCarList.items.map((card, id) => (
          <CarCard key={id} carCard={card.image} speed={card.speed} transmission={card.transmission} seats={card.seats} price={card.price} carName={card.name} />
        ))}
      </div>
      <div className="about__see-wrapper">
        <Link>
          <button className="about__see">
            <p>See more auto</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="15" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7762 19.2761 16 19 16C18.7239 16 18.5 15.7762 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6465L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2762 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
            </svg>
          </button>
        </Link>
      </div>
      <FormChauf />
      <AccordionFaq faqTitle={results.faq.title} faqText={results.faq.text} faqlist={results.faq.blocks}/>
      <Follow />
    </>
  )
}

export default About