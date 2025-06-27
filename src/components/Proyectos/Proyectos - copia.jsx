import React, { useState, useEffect } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Proyectos.css";

// Componente individual para cada proyecto
function ProyectoItem({
    projectIndex,
    projectTitle = "Costa Nueva",
    projectState = "preventa",
    projectDescription = "Vivir en Costa Nueva es elegir todos los días un estilo de vida conectado con la brisa del mar. Este proyecto combina diseño moderno, espacios funcionales y una ubicación privilegiada para quienes sueñan con despertar cerca del océano y rodearse de armonía.",
    projectImage = "./value.png",
    projectLogo = "https://drive.google.com/file/d/1IK7-nypowbH5BS_6Z-VLJO6-abl_Nt-u/view?usp=drive_link",
    projectData = data,
    sectionId
}) {
    const ProyectosToggleClassName = ({ expanded, onSetClassName }) => {
        useEffect(() => {
            onSetClassName(expanded ? "expanded" : "collapsed");
        }, [expanded, onSetClassName]);
    };

    // Alternar automáticamente: par = derecha, impar = izquierda
    const isImageLeft = projectIndex % 2 !== 0;
    const containerClass = isImageLeft ? "p-container-reverse" : "p-container";

    // Alternar colores de fondo automáticamente
    const backgroundColor = projectIndex % 2 === 0 ? "#f2eeeb" : "#ffffff";
    const wrapperStyle = { backgroundColor };

    return (
        <section
            className="p-wrapper-proyectos"
            id={sectionId}
            style={wrapperStyle}
        >
            <div className={`${containerClass} innerWidth paddings flexCenter`}>
                <div className="flexColStart p-content">
                    <span className="orangeText" id={projectState}>Proyecto</span>
                    <span className="primaryText">{projectTitle}</span>
                    <span className="secondaryText">
                        {projectDescription}
                    </span>

                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        className="accordion"
                    >
                        {projectData.map((item, index) => {
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`}
                                    key={index}
                                    uuid={index}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({ expanded }) => (
                                                    <ProyectosToggleClassName
                                                        expanded={expanded}
                                                        onSetClassName={setClassName}
                                                    />
                                                )}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText adjust" style={{ color: "white" }}>{item.heading}</span>

                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20} />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>

                <div className="p-image">
                    <div className="image-container">
                        <img className="img1" src={projectImage} alt={projectTitle} />
                        <img className="img2" src={projectLogo} alt={projectTitle} />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Componente principal que maneja múltiples proyectos
export default function Proyectos({
    projects = [
        {
            title: "Costa Nueva",
            description: "Vivir en Costa Nueva es elegir todos los días un estilo de vida conectado con la brisa del mar. Este proyecto combina diseño moderno, espacios funcionales y una ubicación privilegiada para quienes sueñan con despertar cerca del océano y rodearse de armonía.",
            image: "./value.png",
            logo:"./logos/costa-nueva-logo.png",
            data: data,
            id: "costa-nueva"
        }
    ]
}) {
    return (
        <>
            {projects.map((project, index) => (
                <ProyectoItem
                    key={index}
                    projectIndex={index}
                    projectTitle={project.title}
                    projectState={project.state}
                    projectDescription={project.description}
                    projectImage={project.image}
                    projectLogo={project.logo}
                    projectData={project.data}
                    sectionId={project.id}
                />
            ))}
        </>
    );
}