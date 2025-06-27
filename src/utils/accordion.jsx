// import { HiShieldCheck } from "react-icons/hi";
// import { MdCancel, MdAnalytics } from "react-icons/md";
// const data = [
//   {
//     icon: <HiShieldCheck/>,
//     heading: "Best interest rates",
//     detail:
//       "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
//   },
//   {
//     icon: <MdCancel />,
//     heading: "Prevent unstable prices",
//     detail:
//       "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
//   },
//   {
//     icon: <MdAnalytics />,
//     heading: "Best price on the market",
//     detail:
//       "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
//   },
// ];
// export default data;

// utils/accordion-costa.js
import { 
  HiOutlineHome, 
  HiOutlineLocationMarker, 
  HiOutlineStar,
  HiOutlineShieldCheck 
} from "react-icons/hi";
import { 
  MdOutlinePool, 
  MdOutlineBeachAccess, 
  MdOutlineSecurity,
  MdOutlineLocalParking,
  MdOutlineFitnessCenter,
  MdOutlineBalcony,
  MdOutlineNaturePeople,
  MdOutlinePark,
  MdOutlineWaves,
  MdOutlineApartment
} from "react-icons/md";
import { 
  FaWifi, 
  FaCar, 
  FaTree, 
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaBuilding,
  FaSeedling,
  FaShieldAlt
} from "react-icons/fa";

// OPCIÓN 1: Costa Nueva - Enfoque en vida costera y lujo
export const CostaNueva = [
  {
    icon: <MdOutlineBeachAccess/>,
    heading: "¿Por qué comprar en Costa Nueva?",
    detail: "Invertir en Costa Nueva es apostar por bienestar, plusvalía y calidad de vida. Es ideal tanto para quienes buscan una segunda vivienda como para quienes quieren asegurar un patrimonio con alta proyección. Cada espacio ha sido pensado para disfrutar de lo esencial: comodidad, entorno y mar."
  },
  {
    icon: <MdOutlinePool/>,
    heading: "Financiamiento directo SIN INTERESES",
    detail: "Te acercamos a tu sueño sin complicaciones: accede a financiamiento directo, hasta 36 meses sin intereses. En pre venta"
  },
  {
    icon: <MdOutlineSecurity/>,
    heading: "Ubicación del proyecto",
    detail: "Estratégicamente ubicado a minutos de centros comerciales, restaurantes gourmet, hospitales de primer nivel y las mejores escuelas de la zona. Conectividad perfecta con la ciudad."
  }
];

// OPCIÓN 2: Playa Serena - Enfoque en tranquilidad y naturaleza
export const PortalSol = [
  {
    icon: <FaTree/>,
    heading: " ¿Por qué comprar en Portal del Sol?",
    detail: "Porque es un sueño hecho realidad, un proyecto entregado con zona de amenidades, pórtico de ingreso, y 3 reservorios de Agua, pero lo mejor de todo,  que no sólo te entrega un contrato, te damos tu titulo de propiedad,"
  },
  {
    icon: <MdOutlineBalcony/>,
    heading: "Financiamiento directo SIN INTERESES",
    detail: "Te damos la facilidad que necesitas: compra con financiamiento directo hasta en 15 meses sin intereses. Pensado para que tomes la mejor decisión, sin barreras ni complicaciones."
  },
  {
    icon: <FaWifi/>,
    heading: "Ubicación del proyecto",
    detail: "Ubicado a 10 min del cruce de San Camilo en la Joya. Así de simple, así de posible y en Arequipa."
  }
];

// OPCIÓN 3: ValleLuna - Enfoque en lujo urbano y amenidades
export const ValleLuna = [
  {
    icon: <MdOutlineApartment/>,
    heading: "¿Por qué comprar en Valle Luna?",
    detail: "Porque combina todo lo que importa: diseño funcional, excelente distribución, zonas de amenidades y una comunidad pensada para disfrutar una casa de campo. Portal del Sol es una inversión segura, con alto valor futuro y calidad de vida asegurada."
  },
  {
    icon: <MdOutlineFitnessCenter/>,
    heading: "Financiamiento directo SIN INTERESES",
    detail: "Con nuestro financiamiento directo hasta en 15 meses sin intereses, puedes empezar hoy mismo a construir el futuro que quieres, sin trámites bancarios y a tu ritmo."
  },
  {
    icon: <MdOutlineLocalParking/>,
    heading: "Ubicación del proyecto",
    detail: "Ubicado en un entorno natural privilegiado, con fácil acceso a la ciudad pero rodeado de aire puro, vegetación y tranquilidad. En Valle Luna, la paz no está lejos, está perfectamente ubicada. --------- Ubicado en la Joya – Arequipa  a 10 min del cruce de San Camilo, un lugar rodeado de aire puro,  tranquilidad y atardeceres increibles"
  }
];

// OPCIÓN 4: MansionArequipa - Enfoque en exclusividad y primera línea
export const MansionArequipa = [
  {
    icon: <MdOutlineWaves/>,
    heading: "¿Por qué comprar en Mansión?",
    detail: "Porque representa un estilo de vida lejos del ruido y cerca de la ciudad, con espacios amplios y un entorno de naturaleza y una vista privilegiada. Mansión es una inversión sólida con gran proyección de plusvalía y un sello de distinción para toda la vida."
  },
  {
    icon: <FaBuilding/>,
    heading: "Financiamiento directo SIN INTERESES",
    detail: "Accede a tu futura primera vivienda con nuestro plan de hasta 30 meses sin intereses, directo con la desarrolladora.  Un proyecto en pre venta."
  },
  {
    icon: <FaShieldAlt/>,
    heading: "Ubicación del proyecto",
    detail: "Situado Chiguata – Arequipa, a 30 min del centro de la ciudad, con paso de transporte público, vivir en Mansión es estar siempre en el lugar correcto, con una vista espectacular al misti."
  }
];

// OPCIÓN 5: Data genérica mejorada para cualquier proyecto
export const genericData = [
  {
    icon: <HiOutlineHome/>,
    heading: "Calidad de construcción superior",
    detail: "Construcción con los más altos estándares de calidad, materiales premium importados y tecnología de construcción avanzada que garantiza durabilidad y confort a largo plazo."
  },
  {
    icon: <HiOutlineShieldCheck/>,
    heading: "Garantía extendida y respaldo total",
    detail: "Respaldo de constructora con más de 20 años de experiencia, garantía extendida en estructuras y acabados, plus servicio post-venta para tu tranquilidad total."
  },
  {
    icon: <MdOutlineNaturePeople/>,
    heading: "Comunidad y estilo de vida",
    detail: "Más que un hogar, es un estilo de vida. Comunidad exclusiva con eventos sociales, actividades familiares y espacios diseñados para crear vínculos duraderos entre vecinos."
  },
  {
    icon: <FaSwimmingPool/>,
    heading: "Amenidades de resort",
    detail: "Disfruta de amenidades tipo resort sin salir de casa: piscinas, áreas verdes, zonas de BBQ, juegos infantiles, cancha de tenis y espacios para cada miembro de la familia."
  }
];
