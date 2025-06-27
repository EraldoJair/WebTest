import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Proyectos from "./components/Proyectos/Proyectos";
import Contact from "./components/Contact/Contact";
import Noticias from "./components/Noticias/Noticias";
import Conocenos from "./components/Conocenos/Conocenos";
import GetStart from "./components/GetStarted/GetStart";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import {
  CostaNueva,
  PortalSol,
  ValleLuna,
  MansionArequipa,
  genericData
} from "./utils/accordion";

import "./App.css";

export default function App() {
  const projectsData = [
    {
      title: "Costa Nueva",
      state: "preventa",
      description: "Vivir en Costa Nueva es elegir todos los días un estilo de vida conectado con la brisa del mar. Este proyecto combina diseño moderno, espacios funcionales y una ubicación privilegiada para quienes sueñan con despertar cerca del océano y rodearse de armonía.",
      image: "./value.png",
      logo:"./logos/costa nueva logo blanco1.webp",
      data: CostaNueva,
      id: "costa-nueva"
    },
    {
      title: "Portal del sol",
      state: "puntadebombom",
      description: "Portal del Sol es un proyecto pensado para quienes buscan vivir rodeados de luz, energía positiva y tranquilidad.",
      image: "./value.png",
      logo:"./logos/portal del sol logo blanco1.webp",
      data: PortalSol,
      id: "playa-serena"
    },
    {
      title: "Mansion",
      state: "lajoya",
      description: "Mansión es sinónimo de elegancia, exclusividad y alto nivel. Un proyecto premium para tu primera vivienda, para quienes valoran los detalles, el confort y el prestigio de vivir o invertir en una comunidad de primer nivel. ",
      image: "./value.png",
      logo:"./logos/mansion arequipa logo blanco1.webp",
      data: MansionArequipa,
      id: "miramar"
    },
    {
      title: "Valle Luna",
      state: "tumbes",
      description: "Valle Luna es un proyecto para quienes sueñan con un hogar en contacto con la naturaleza, donde la tranquilidad, el cielo estrellado y los atardeceres sean parte del día a día. Un refugio de campo para vivir en equilibrio con lo esencial.",
      image: "./value.png",
      logo:"./logos/valle luna logo blanco1.webp",
      data: ValleLuna,
      id: "bahia-azul"
    }
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        {/* <Companies/> */}
        <Residencies />
        <Proyectos projects={projectsData} />
        <Conocenos />
        <Noticias />
        <Contact />
        <GetStart />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
