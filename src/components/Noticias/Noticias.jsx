import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Noticias.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";

export default function Noticias() {
  return (
    <section
      className="n-wrapper"
      id="Noticias"
    >
      <div className="paddings innerWidth n-container">
        <div className="n-head flexColStart">
          {/* <span className="orangeText">Real Noticias</span> */}
          <span className="primaryText">
            <strong
              style={{ color: "white" }}>
              Real Noticias
            </strong>
          </span>
          <span className="orangeText">Conoce un poco más de nosotros</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart n-card">
                <img src={card.image} alt="property" />
                <span className="secondaryText n-price">
                  <span style={{ color: "orange" }}>noticias</span>
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="n-buttons flexCenter">
      <button onClick={() => { swiper.slidePrev() }}>&lt;</button>
      <button onClick={() => { swiper.slideNext() }}>&gt;</button>
    </div>
  );
}
