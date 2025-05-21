import { Container } from "@mui/material";
import React from "react";
import arrow from "../../../assets/rarrow.svg";
import illu from "../../../assets/illu.png";

import "./MainSection.css";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <div className="mainBlock" id="featureBlock">
        <div className="mainBlock_first">
          <div className="mainFirst_block">
            <div className="mainFirst_arrows">
              <img src={arrow} alt="e" className="mainfirstarrow" id="arrow1" />
              <img src={arrow} alt="e" className="mainfirstarrow" id="arrow2" />
              <img src={arrow} alt="e" className="mainfirstarrow" id="arrow3" />
              <img src={arrow} alt="e" className="mainfirstarrow" id="arrow4" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
              <img src={arrow} alt="e" className="mainfirstarrow" />
            </div>
            <h2 className="mainFirst_text">
              Учись, находи единомышленников и развивайся с Skillnet.kg
            </h2>
            <div className="mainFirst_btns">
              <button
                className="mainFirst_reg"
                onClick={() => navigate("/register")}>
                Регистрация
              </button>
              <button
                className="mainFirst_log"
                onClick={() => navigate("/login")}>
                Вход
              </button>
            </div>
          </div>
          <div className="mainImg_block">
            <img src={illu} alt="error" className="mainFirst_img" />
          </div>
        </div>
        <div className="mainBlock_second">
          <div className="secondInfo_">
            <h3>35 000+</h3>
            <p>Активных пользователей</p>
          </div>
          <div className="secondInfo_">
            <h3>1 200+</h3>
            <p>Стажировок, курсов и волонтёрских проектов</p>
          </div>
          <div className="secondInfo_">
            <h3>5 000+</h3>
            <p>Успешных учебных партнёрств</p>
          </div>
          <div className="secondInfo_">
            <h3>30 000+</h3>
            <p>Обсуждений на форуме</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainSection;
