import React from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";

export default function Residencies() {
  return (
    <section
      className="r-wrapper"
      id="residencies"
      style={{
        background: "linear-gradient(to bottom, white 70%, #F2EEEB 30%)",
        padding: "10px 40px 0px 20px",
      }}
    >
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          {/* <span className="orangeText">Real Noticias</span> */}
          <span className="primaryText">
            <strong
              style={{ color: "#0E338E" }}>
              Nuesros proyectos
            </strong>
            <strong
              style={{
                backgroundColor: "#0E338E",
                color: "white",
                margin: "0 5px",
                padding: "0 15px",
                borderRadius: "0px 50px 50px 0px",
              }}
            >
              TERRENOS
            </strong>
          </span>
        </div>

        <div className="menu-container">
          <Link to="#preventa">Costa Nueva</Link>
          <Link to="#puntadebombom">Portal del sol</Link>
          <Link to="#tumbes">Valle Luna</Link>
          <Link to="#lajoya">Mansion</Link>
        </div>

        {/* <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="property" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>noticias</span>
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
}

function SliderButton() {
  const swiper = useSwiper();
  return (
    <div className="r-buttons flexCenter">
      <button onClick={() => { swiper.slidePrev() }}>&lt;</button>
      <button onClick={() => { swiper.slideNext() }}>&gt;</button>
    </div>
  );
}
