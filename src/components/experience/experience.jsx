import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { front, back } from "./data";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {/* ================== FrontEnd Development ===================== */}
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            {front.map(({ id, lang, lvl }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang}</h4>
                    <small className="text-light">{lvl}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ================== BackEnd Development ===================== */}
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            {back.map(({ id, lang, lvl }) => {
              return (
                <article key={id} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang}</h4>
                    <small className="text-light">{lvl}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;