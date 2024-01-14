/* eslint-disable react/prop-types */
import CarCard from '../carCard/CarCard';
import './carListLarge.css';

const CarListLarge = ({ carListTitle, carListText, cards }) => {
  
  return (
    <>
      <section className="carListLarge">
        <div className="carListLarge__wrapper">
          <p className='carListLarge__crumb'>{carListTitle}</p>
          <h2 className='carListLarge__title'>{carListText}</h2>
          <div className="carListLarge__cards">
          {cards.map((card, id) => (
          <CarCard key={id} carCard={card.image} speed={card.speed} transmission={card.transmission} seats={card.seats} price={card.price} carName={card.name} />
        ))}
          </div>
          <div className='carListLarge__more-wrapper'>
            <button className='carListLarge__more'>
              <p>See more auto</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <rect width="30" height="30" rx="15" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7761 19.2761 16 19 16C18.7239 16 18.5 15.7761 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6464L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2761 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
                </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CarListLarge