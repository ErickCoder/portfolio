import React from "react";
import "./Styles/buttonWhatsApp.css";

const ButtonWhatsapp = () => {
  return (
    <section className="global">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <a
        className="btn-whats pulse"
        href="https://api.whatsapp.com/send?phone=51998917623"
        target="_blank"
      >
        <i className="fa fa-whatsapp"/>
      </a>
    </section>
  );
};

export default ButtonWhatsapp;
