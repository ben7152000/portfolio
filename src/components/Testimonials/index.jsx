import React from 'react'
import './index.css'
import { testimonialData } from "../../data/data"
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {testimonialData.map(({id, avatar,name, review }) => {
          return (
            <SwiperSlide key={id} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
