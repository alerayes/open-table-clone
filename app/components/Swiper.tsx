"use client" 

import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RestaurantCardType } from '../page';
import RestaurantCard from './RestaurantCard';


const SwiperComponent = ({restaurants}: {restaurants: RestaurantCardType[]}) => {

  return (
        <Swiper
            spaceBetween={3}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
            500: {
                slidesPerView: 1,
            },    
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            }
            }}
        >
        {restaurants.map((restaurant) => (
            <SwiperSlide>
                <RestaurantCard restaurant={restaurant}/> 
            </SwiperSlide>
        ))}
        </Swiper>
  );
};

export default SwiperComponent;
