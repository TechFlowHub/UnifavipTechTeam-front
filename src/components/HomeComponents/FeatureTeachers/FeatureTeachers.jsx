import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FeatureTeachers.css';

const FeatureTeachers = () => {
  return (
    <div className="feature-teachers">
      <h1>Nossos Professores</h1>
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={60}
        slidesPerView={6} 
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="teachers-swiper"
      >
        {[...Array(12)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="circle"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureTeachers;
