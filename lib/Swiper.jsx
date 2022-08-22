/* eslint-disable react/display-name */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// External libraries
import { useRef } from 'react'
import { chunk } from 'lodash'
import classNames from 'classnames'

// Components
import MethodologyCard from '../components/MethodologyCard'

export const SwiperDefault = ({ data, buttonColor = 'light' }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const newData = chunk(data, 3)

  return (
    <Swiper
      modules={[Navigation]}
      autoHeight={true}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.init()
        swiper.navigation.update()
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
        disabledClass: 'opacity-40'
      }}
      className='relative'
      spaceBetween={50}
    >
      {
        newData.length === 1
          ? (
            <SwiperSlide className='space-y-8 lg:px-10'>
              {
                newData[0].map(({ title, level, description }, idx) => {
                  return (
                    <MethodologyCard key={`methodology-card-single-${idx + 1}`} title={title} level={level} description={description} />
                  )
                })
              }
            </SwiperSlide>
            )
          : newData.map((parent, index) => {
            return (
              <SwiperSlide key={`methodology-card-group-${index + 1}`} className='space-y-8 lg:px-10'>
                {
                  parent.map(({ title, level, description }, idx) => {
                    return (
                      <MethodologyCard key={`methodology-card-single-${idx + 1}`} title={title} level={level} description={description} />
                    )
                  })
                }
              </SwiperSlide>
            )
          })
      }
      {/* CUSTOM BUTTON */}
      <div className={classNames({ 'hidden invisible': newData.length === 1 }, { 'block visible': newData.length !== 1 })}>
        <button ref={prevRef} className='absolute top-1/2 left-0 transform -translate-y-1/2 z-40'>
          <img src={`/images/arrow-left-swiper-${buttonColor}.svg`} alt="swiper slide left button" />
        </button>
        <button ref={nextRef} className='absolute top-1/2 right-0 transform -translate-y-1/2 z-40'>
          <img src={`/images/arrow-right-swiper-${buttonColor}.svg`} alt="swiper slide right button" />
        </button>
      </div>
    </Swiper>
  )
}
