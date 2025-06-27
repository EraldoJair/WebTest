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
import "./Values.css";
// import data from "../../utils/accordion";
import { 
  CostaNueva,
  PortalSol,
  ValleLuna,
  MansionArequipa,
  genericData 
} from "../../utils/accordion";

export default function Values() {

  const ValuesToggleClassName = ({ expanded, onSetClassName }) => {
    useEffect(() => {
      onSetClassName(expanded ? "expanded" : "collapsed");
    }, [expanded, onSetClassName]);

  };

  return (
    <section className="v-wrapper" id="values">
      <div className="v-container innerWidth paddings flexCenter">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Proyecto</span>
          <span className="primaryText"> Costa Nueva</span>
          <span className="secondaryText">
            Vivir en Costa Nueva es elegir todos los días un estilo de vida  conectado con la brisa del mar. Este proyecto combina diseño moderno, espacios funcionales y una ubicación privilegiada para quienes sueñan con despertar cerca del océano y rodearse de armonía.
          </span>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="accordion"
          >
            {data.map((item, index) => {
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
                          <ValuesToggleClassName
                            expanded={expanded}
                            onSetClassName={setClassName}

                          />
                        )}
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText adjust">{item.heading}</span>

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
      </div>
    </section>
  );
}
