import './follow.css';

import car1 from '../../assets/img/car-follow-1.webp';
import car2 from '../../assets/img/car-follow-2.webp';
import car3 from '../../assets/img/car-follow-3.webp';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Follow = () => {
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
      <section className="follow">
        <div className="follow__inner-wrapper">
          <div className="follow__crumb">
            <p>{results.socialMedia.title}</p>
          </div>
          <h2>{results.socialMedia.text}</h2>
          <div className="follow__wrapper">
            <Link to='/'>
              <img src={car1} alt="Top Level" />
            </Link>
            <Link to='/'>
              <img src={car2} alt="Top Level" />
            </Link>
            <Link to='/'>
              <div className="follow__block">
                <p>{results.socialMedia.link}</p>
              </div>
            </Link>
            <Link to='/'>
              <img src={car3} alt="Top Level" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Follow