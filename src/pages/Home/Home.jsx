import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import PersonCardHome from '../../components/HomeComponents/Card/Card';
import './Home.css';
import FeatureTeachers from '../../components/HomeComponents/FeatureTeachers/FeatureTeachers';
import Enterprise from '../../components/HomeComponents/Enterprise/Enterprise';

const Home = () => {
  return (
    <div className="home-page">
      <div className='banner-home'>
        <h1>Uma das instituições com maior nota do MEC no Brasil.</h1>
        <button>Nossas unidades</button>
      </div>

      <h1>Tecnologia da Informação</h1>
      <Swiper
        slidesPerView={2} 
        spaceBetween={30}  
        navigation  
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000 }}  
        loop  
        modules={[Navigation, Pagination, Autoplay]}
        className="content-card-home"
      >
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
      </Swiper>

      <hr />

      <h1>Administração</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="content-card-home"
      >
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
        <SwiperSlide><PersonCardHome /></SwiperSlide>
      </Swiper>


      <FeatureTeachers />

      <Enterprise />
    </div>
  );
};

export default Home;
