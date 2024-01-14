/* eslint-disable react/prop-types */
import './steps.css';

// eslint-disable-next-line react/prop-types
const Steps = ({stepsTitle, stepsText, blocks, stepsBlockTitleBlue, stepsBlockTextBlue}) => {
  return (
    <>
      <section className='steps'>
        <div className='steps__wrapper'>
          <p className='steps__crumb'>{stepsTitle}</p>
          <h2 className='steps__title'>{stepsText}</h2>
          <div className='steps__blocks'>
            {blocks.map((block, id) =>  (
              id < blocks.length - 1 && (
                <div key={id} className='steps__block'>
                  <p className='steps__block-number'>{id + 1}</p>
                  <div className='steps__text-wrapper'>
                    <h3 className='steps__block-title'>{block.title}</h3>
                    <p className='steps__block-text'>{block.text}</p>
                  </div>
                </div>
              )
            ))}

            <div className='steps__block blue'>
              <p className='steps__block-number'>4</p>
              <div className='steps__text-wrapper'>
                <h3 className='steps__block-title'>{stepsBlockTitleBlue}</h3>
                <p className='steps__block-text'>{stepsBlockTextBlue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps