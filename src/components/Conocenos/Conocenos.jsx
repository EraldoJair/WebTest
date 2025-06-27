import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import "./Conocenos.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";

export default function Conocenos() {
  // **CAMBIO 1: Estado para el carrusel**
  const [currentSlide, setCurrentSlide] = useState(0);

  // **CAMBIO 2: Array de slides con diferentes imágenes y textos**
  const slides = [
    {
      title: "Despierta a lado del mar",
      // subtitle: "Tu futura casa de playa en Costa Nueva",
      image: "/RealCompany/costa nueva edicion imagen3.png",
      alt: "Costa Nueva - Propiedades frente al mar"
    },
    {
      title: "Vive en mansiones exclusivas",
      // subtitle: "Lujo y elegancia en cada detalle",
      image: "/RealCompany/mansion edicion de imagen2.png",
      alt: "Mansión exclusiva"
    },
    {
      title: "Portal del Sol te espera",
      // subtitle: "Desarrollos premium con vista panorámica",
      image: "/RealCompany/portal del sol edicion imagen.png",
      alt: "Portal del Sol"
    },
    {
      title: "Valle Luna, tu nuevo hogar",
      // subtitle: "Tranquilidad y naturaleza en armonía",
      image: "/RealCompany/valle luna edicion imagen1.png",
      alt: "Valle Luna"
    }
  ];



  // **CAMBIO 4: Función para cambiar slide manualmente**
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="conocenos-wrapper" id="conocenos">
      {/* Background dinámico con blur */}
      <div className="conocenos-background">
        
      </div>

      <div className="flexCenter paddings innerWidth conocenos-container">
        <div className="flexColStart conocenos-left">
          <div className="conocenos-title">
            <div className="orange-circle" />
            {/* **CAMBIO 5: Título animado que cambia con cada slide** */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide} // Key para forzar re-render
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-2rem", opacity: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {slides[currentSlide].title.split(' ').map((word, index) => (
                  <span key={index}>
                    {word}
                    {index < slides[currentSlide].title.split(' ').length - 1 &&
                      (index === 1 || index === 4) ? <br /> : ' '}
                  </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* **CAMBIO 6: Subtítulo animado** */}
          <div className="conocenos-des">
            <AnimatePresence mode="wait">
              <motion.p
                key={`subtitle-${currentSlide}`}
                className="secondaryText"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>
          <br></br>
          {/* <div className="search-bar flexCenter">
            <HiLocationMarker color="#1ACDE5" size={35} />
            <input type="text" placeholder="Buscar ubicación..." />
            <button className="button">Search</button>
          </div> */}
        </div>

        <div className="flexCenter conocenos-right">
          {/* **CAMBIO 8: Contenedor de imagen con animación de carrusel** */}
          <div className="image-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}