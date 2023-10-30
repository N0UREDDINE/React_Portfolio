import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { design, web, content } from "./data";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ======================== UI/UX Design =============================== */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {design.map(({ id, desc }) => {
              return (
                <li key={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
        </article>

        {/* ======================== WEB DEVELOPMENT =============================== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {web.map(({ id, desc }) => {
              return (
                <li key={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
        </article>

        {/* ======================== Content Creations =============================== */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creations</h3>
          </div>
          <ul className="service__list">
            {content.map(({ id, desc }) => {
              return (
                <li key={id}>
                  <BiCheck className="service__list-icon" />
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;