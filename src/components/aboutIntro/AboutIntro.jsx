/* eslint-disable react/prop-types */
import './aboutIntro.css';
import carAbout from '../../assets/img/car-about.webp';

const AboutIntro = ({ slogan, }) => {
  return (
    <>
      <section className='about'>
        <div className='about__wrapper'>
          <div className='about__crumbs'>
            <span>Main</span>
            <span>About</span>
          </div>
          <h2>{slogan}</h2>
          <img src={carAbout} alt="Top Level" />
        </div>
      </section>
    </>
  )
}

export default AboutIntro