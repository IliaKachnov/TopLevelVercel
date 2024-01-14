/* eslint-disable react/prop-types */
import whats from '../../assets/img/whats.svg'
// import carCard from '../../assets/img/car-card.webp';

import './carCard.css';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const CarCard = ({ carCard, speed, transmission, seats, price, carName }) => {


  return (
    <>
      <div className="carCard">
        <div className="carCard__wrapper">
          <div className="card__swiper">
            
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={true}
              loop={true}
              // nested
              modules={[Pagination]}
              className="mySwiper"
            >
              {/* <div className='swiper__slide-wrapper'> */}
                <SwiperSlide className='swiper__hover'>
                  <img className='card__img' src={carCard} alt="Top Level" />
                </SwiperSlide>
              {/* </div> */}
              <SwiperSlide>
                <img className='card__img' src={carCard} alt="Top Level" />
                </SwiperSlide>
              <SwiperSlide>
                <img className='card__img' src={carCard} alt="Top Level" />
                </SwiperSlide>
            </Swiper>
          </div>
          <p className='carCard__exclusive'>exclusive</p>
          <Link to='/'>
            <img className='carCard__whats' src={whats} alt="Top level" />
          </Link>
        </div>
        <div className='carCard__title-wrapper'>
          <p className='carCard__title'>{carName}</p>
          <div className='carCard__price-wrapper'>
            <p className='card__price'>{`$${price}`}</p>
            <p className='card__day'>per a day</p>
          </div>
        </div>
        <ul className='carCard__filters'>
          <li className='carCard__filter blue'>{`Max: ${speed}km/h`}</li>
          <li className='carCard__filter'>{transmission}</li>
          <li className='carCard__filter'>{`${seats} seats`}</li>
          <li className='carCard__filter'>0-100: 4 sec</li>
        </ul>
        <div className='carCard__mobile'>
          <div className='card__price-mobile'>
            <p className='card__price'>{`$${price}`}</p>
            <p className='card__day'>per a day</p>
          </div>
          <div className='card__more-wrapper'>
            <Link to='/'>
              <button className='card__more'>
                <p>More about</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect width="20" height="20" rx="10" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.32964 6.92971L12.8643 6.92971C13.0812 6.92971 13.257 7.10555 13.257 7.32245L13.257 10.8571C13.257 11.074 13.0812 11.2498 12.8643 11.2498C12.6474 11.2498 12.4715 11.074 12.4715 10.8571L12.4715 8.2706L6.07272 14.6694L5.51731 14.114L11.9161 7.71519L9.32964 7.71519C9.11274 7.71519 8.93691 7.53935 8.93691 7.32245C8.93691 7.10555 9.11274 6.92971 9.32964 6.92971Z" fill="#1A187D"/>
                </svg>
              </button>
            </Link>
            <img src={whats} alt="Top level" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard