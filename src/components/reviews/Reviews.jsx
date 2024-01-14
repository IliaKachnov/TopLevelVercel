/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import carReview from "../../assets/img/car-review.webp";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import "./reviews.css";
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Reviews = ({ reviews, reviewsCrumb, reviewsTitle }) => {
  return (
    <>
      <section className="reviews">
        <div className="reviews__wrapper">
          <p className="reviews__crumb">{reviewsCrumb}</p>
          <h2 className="reviews__title">{reviewsTitle}</h2>
          <div className="swiper__wrapper">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={
                {1240: {slidesPerView: 3}}
              }
              nested
              hashNavigation={{
                watchState: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, HashNavigation]}
              className="mySwiper2"
            >
              {reviews.map((review, id) => (
                <SwiperSlide key={id} data-hash={`slide${id + 1}`}>
                <div className="slide__text-wrapper">
                  <div>
                    <h3>{review.title}</h3>
                    <p className="slide__text">{review.text}</p>
                  </div>
                  <p className="slide__user">{review.user}</p>
                </div>
              </SwiperSlide>
              ))}
              <SwiperSlide data-hash="slide2">
                <div className="slide__img">
                  <img src={carReview} alt="Top level" />
                </div>
              </SwiperSlide>
              
              
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews