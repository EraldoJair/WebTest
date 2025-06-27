import React, { useState, useEffect } from "react";
// import React, { useState, useEffect } from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
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

  // **CAMBIO 3: Auto-play del carrusel**
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  // Debug: Log para verificar las rutas de las imágenes
  useEffect(() => {
    console.log('Current slide:', currentSlide);
    console.log('Current image path:', slides[currentSlide]?.image);
  }, [currentSlide, slides]);

  // Precargar imágenes para evitar problemas de carga
  useEffect(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => console.log(`Image ${index} loaded:`, slide.image);
      img.onerror = () => console.error(`Error loading image ${index}:`, slide.image);
      img.src = slide.image;
    });
  }, [slides]);

  // **CAMBIO 4: Función para cambiar slide manualmente**
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-wrapper" id="hero">
      <br></br>
      {/* Background dinámico con blur */}
      <div className="hero-background">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            style={{
              filter: "blur(8px)",
              width: "100%",   
              height: "100%",  
              // objectFit: "cover"
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
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
          <div className="hero-des">
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

          {/* **CAMBIO 7: Indicadores del carrusel** */}
          <div className="carousel-indicators flexCenter">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flexCenter stats">
            <div className="stat flexColCenter">
              <span>
                <CountUp start={400} end={423} duration={4} /> <span></span>
              </span>
              <span className="secondaryText">Familia con terreno<br/>propio</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp start={0} end={3} duration={4} /> <span></span>
              </span>
              <span className="secondaryText">Proyectos<br/>inmobiliarios</span>
            </div>

            <div className="stat flexColCenter">
              <span>
                <CountUp end={1} /> <span></span>
              </span>
              <span className="secondaryText">Proyecto<br/>entregado</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
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