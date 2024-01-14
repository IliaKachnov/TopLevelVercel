/* eslint-disable react/prop-types */
import './formChauf.css';
import formChauf from '../../assets/img/formChauf.webp'
import { useEffect, useState } from 'react';
import { InputMask } from '@react-input/mask';

const FormChauf = () => {
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


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    fetch('https://bot-myauto.host2bot.ru/api/Feedback/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
          'name': name,
          'phone': phone,
        }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Данные успешно отправлены.');
    
        } else {
          console.error('Произошла ошибка при отправке данных.');
        }
      })
      .catch((error) => {
        console.error('Произошла ошибка:', error);
      });
  };
  

  if (isLoading) {
    return <p>Загрузка</p>
  }
  if (error) {
    return <p>Ошибка: {error}</p>
  }


  return (
    <>
     <section className='formChauf'>
        <div className='formChauf__wrapper'>
          <div className='formChauf__text-wrapper'>
            <h2 className='formChauf__title'>{results.carsWithDriver.title}</h2>
            <p className='formChauf__text'>{results.carsWithDriver.text}</p>
            <form className='formChauf__form' onSubmit={handleSubmit}>
              <div className='formChauf__inputs'>
                <input className='formChauf__input' type="text" placeholder='Name' required onChange={(e) => setName(e.target.value)} />
                <InputMask required  onChange={(e) => setPhone(e.target.value)} className='form__phone' mask="+971 __-___-____" replacement={{ _: /\d/ }} placeholder='+971 __-___-____' />
              </div>
              <div className='formChauf__send-wrapper'>
                <p className='formChauf__click'>{results.carsWithDriver.policy}</p>
                <button className='formChauf__send'>
                  <p>{results.carsWithDriver.button_text}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <rect x="0.5" width="30" height="30" rx="15" fill="#1A187D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5L19.5 10.5C19.7761 10.5 20 10.7239 20 11L20 15.5C20 15.7762 19.7761 16 19.5 16C19.2239 16 19 15.7762 19 15.5L19 12.2071L10.8536 20.3536L10.1465 19.6465L18.2929 11.5L15 11.5C14.7239 11.5 14.5 11.2762 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className='formChauf__img'>
            <img src={formChauf} alt="Top Level" />
          </div>
        </div>
     </section>
    </>
  )
}

export default FormChauf