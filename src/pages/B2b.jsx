import AccordionFaq from "../components/accordionFaq/AccordionFaq";
import Advantages from "../components/advantages/Advantages"
import Cases from "../components/cases/Cases";
import Form from "../components/form/FormRent"
import Intro from "../components/intro/Intro"

import intro from '../assets/img/intro.webp'
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


const B2b = () => {
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
      <Intro intro={intro} introTitle='Deliver an unforgettable experience partnering with Top Level Car' introText='From providing luxury vehicles for various clientele to tailoring solutions that meet specific business needs, partnering with us ensures access to unparalleled luxury and exceptional service' />
      <Advantages mainTitle='We offer you the best partnership experience' advData={advantagesDataB2b} titleBlue='Marketing Package' textBlue='We will prepare a separate catalog with our cars in your color palette, with your logos and your contacts. All photos of our fleet are available at any second for customer interaction or use on your social media/website' titleBenefit='Benefit from Special Rates and Additional Perks Designed to Maximize the Partnership Advantages' button='Contact b2b manager' />
      <Cases />
      <AccordionFaq faqTitle={results.rent_to_own_faq.title} faqText={results.rent_to_own_faq.text} faqlist={results.rent_to_own_faq.blocks}/>
      <Form />
    </>
  )
}

export default B2b