import './stepsHome.css';

const StepsHome = () => {
  return (
    <>
      <section className='stepsHome'>
        <div className='stepsHome__wrapper'>
          <p className='stepsHome__crumb'>STEPS</p>
          <h2 className='stepsHome__title'>Rent a car just with 3 steps</h2>
          <div className='stepsHome__steps'>
            <div className='stepsHome__step'>
              <p className='stepsHome__amount'>1</p>
              <div className='stepsHome__step-wrapper'>
                <h3>Choose a car</h3>
                <p>Browse our exclusive fleet. Explore a wide selection of premium vehicles including luxury sedans, sports cars, SUVs and convertibles</p>
              </div>
            </div>
            <div className='stepsHome__step'>
              <p className='stepsHome__amount'>2</p>
              <div className='stepsHome__step-wrapper'>
                <h3>Pick-up date</h3>
                <p>Submit your rental request. Once you have selected a vehicle, please complete our simple online request form. Our team will contact you promptly to confirm the details</p>
              </div>
            </div>
            <div className='stepsHome__step blue'>
              <p className='stepsHome__amount'>3</p>
              <div className='stepsHome__step-wrapper'>
                <h3>Get your car</h3>
                <p>Choose a convenient pickup option. You can pick up the car from the showroom or we will deliver it to you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StepsHome