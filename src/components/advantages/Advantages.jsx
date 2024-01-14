/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './advantages.css'

// eslint-disable-next-line react/prop-types
const Advantages = ({mainTitle, textBlue, titleBenefit, button, titleBlue, advData, crumb, blueSupport, blueSupportText}) => {
  return (
    <>
      <div className='advantages__wrapper'>
        <div className='advantages__title-wrapper'>
          <h3 className='advantages__crumb'>{crumb}</h3>
          <h2 className='advantages__title'>{mainTitle}</h2>
        </div>
        <div className='advantages__blocks'>
          <div className="advantages__block blue">
            <h3>{titleBlue}</h3>
            <p>{textBlue}</p>
          </div>
          {advData.map((item, index) => (
            <div key={index} className="advantages__block">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
          </div>
          ))}
          <div className="advantages__block blue">
            <h3>{blueSupport}</h3>
            <p>{blueSupportText}</p>
          </div>
          <div className="advantages__block benefit">
            <h3>{titleBenefit}</h3>
            <button className='advantages__btn'>
              <p>{button}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="15" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7762 19.2761 16 19 16C18.7239 16 18.5 15.7762 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6465L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2762 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Advantages