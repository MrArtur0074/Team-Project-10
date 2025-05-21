import React from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import arrow from "../../../assets/arrow.svg";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="footMain">
      <Container maxWidth="xl">
        <div className="footMain_block">
          <h1 className="footMain_text" onClick={() => navigate("/")}>
            SkillNet
          </h1>
          <h3 className="footText">
            Присоединяйся к сообществу студентов, стажировок и возможностей.
            Будущее начинается здесь.
          </h3>
          <img
            aria-label="To Top"
            src={arrow}
            alt="error"
            className="footArrow"
            onClick={() => scrollToTop()}
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
