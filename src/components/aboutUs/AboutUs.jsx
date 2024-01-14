/* eslint-disable react/prop-types */
import './aboutUs.css';

import lamb from '../../assets/img/lamb.webp';
import audi from '../../assets/img/audi.webp';
import merc from '../../assets/img/merc.webp';
import bmw from '../../assets/img/bmw.webp';
import rolls from '../../assets/img/rolls.webp';
import bent from '../../assets/img/bent.webp';
import pors from '../../assets/img/pors.webp';
import subaru from '../../assets/img/subaru.webp';
import { Link } from 'react-router-dom';

const AboutUs = ({ aboutUs, aboutTitle, aboutText, statCells }) => {
  return (
    <>
      <section className="aboutUs">
        <div className="aboutUs__wrapper">
          <div className="aboutUs__section">
            <p className='aboutUs__crumb'>{aboutUs}</p>
            <h2 className='aboutUs__title'>{aboutTitle}</h2>
            <p className='aboutUs__text'>
              {aboutText}
            </p>
            <div className='aboutUs__numbers'>
              {statCells.map((statCell, id) => (
                <div key={id} className='aboutUs__number'>
                  <p className='aboutUs__amount'>{statCell.cell}</p>
                  <p className='aboutUs__subtitle'>{statCell.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='aboutUs__img'>
            <img src={subaru} alt="Top Level" />
          </div>
        </div>
        <div className='aboutUs__logos'>
          <Link>
            <img src={lamb} alt="Top Level" />
          </Link>
          <Link><img src={audi} alt="Top Level" /></Link>
          <Link><img src={merc} alt="Top Level" /></Link>
          <Link><img src={bmw} alt="Top Level" /></Link>
          <Link><img src={rolls} alt="Top Level" /></Link>
          <Link><img src={bent} alt="Top Level" /></Link>
          <Link><img src={pors} alt="Top Level" /></Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs