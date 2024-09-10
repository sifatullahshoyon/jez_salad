'use client'
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    return (
        <div>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corporis nam blanditiis, inventore eligendi ipsa illo consequuntur, harum quo perspiciatis error ut quis perferendis repudiandae voluptas quia vel facere nesciunt libero qui, expedita explicabo. Nam beatae unde neque eum quisquam quibusdam ipsam molestiae ab velit nulla ducimus ullam, porro totam iure aut, quam voluptatem minus expedita obcaecati praesentium eos iusto soluta? Doloribus, nulla ullam! Voluptates pariatur vel cum provident quis aspernatur exercitationem velit debitis eum tempore quod quidem sint veniam consequuntur deserunt enim nisi doloribus qui officia, labore fugiat laborum architecto odio fuga. Aperiam ratione neque reprehenderit, minima soluta numquam.
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;