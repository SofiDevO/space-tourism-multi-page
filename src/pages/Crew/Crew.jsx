import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";
import data from "../../data/data.json";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { MainHeader } from "../../components/Header/Header";
const Crew = () => {
  return (
    <>
      <section className="crew">
        <MainHeader />
        <div className="crew__contenido">
        <h1>MEET YOUR CREW</h1>
        <div className="crew__container">
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            navigation={false}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {data.crew.map((person) => (
              <SwiperSlide>
                <div className="crew__text">
                  <h3>{person.role.toLocaleUpperCase()}</h3>
                  <h2>{person.name.toLocaleUpperCase()}</h2>
                  <p>{person.bio}</p>
                </div>
                <img src={person.images.webp} alt={person.name} className="crew__img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </section>
    </>
  );
};

export default Crew;
