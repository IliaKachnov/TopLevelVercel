/* eslint-disable react/prop-types */
import './intro.css';


const Intro = ({introTitle, introText, intro, introBtn}) => {
  return (
    <>
      <div className='intro__wrapper'>
        <div className='intro__text-wrapper'>
          <h1 className='intro__title'>{introTitle}</h1>
          <p className='intro__text'>{introText}</p>
          <button className='intro__btn'>
            <p>{introBtn}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
              <rect y="0.5" width="30" height="30" rx="15" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 11L19 11C19.2761 11 19.5 11.2239 19.5 11.5L19.5 16C19.5 16.2762 19.2761 16.5 19 16.5C18.7238 16.5 18.5 16.2762 18.5 16L18.5 12.7071L10.3535 20.8536L9.64642 20.1465L17.7929 12L14.5 12C14.2238 12 14 11.7762 14 11.5C14 11.2239 14.2238 11 14.5 11Z" fill="#1A187D"/>
            </svg>
          </button>
        </div>
        <div className='intro__img-wrapper'>
          <img src={intro} alt="Top Level" />
        </div>
      </div>
    </>
  )
}

export default Intro