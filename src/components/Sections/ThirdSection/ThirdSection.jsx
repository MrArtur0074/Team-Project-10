import React from "react";
import "./ThirdSection.css";
import { Container } from "@mui/material";
import info from "../../../assets/info.png";

const ThirdSection = () => {
  return (
    <div className="thdMain">
      <Container maxWidth="xl">
        <div className="thdMain_block">
          <div className="thdFirst_block">
            <h1>Преимущества Skillnet.kg</h1>
            <div className="thdFirst_info" id="thd1">
              <div></div>
              <h3>Бесплатно и удобно</h3>
            </div>
            <div className="thdFirst_info" id="thd2">
              <div></div>
              <h3>Автоматический подбор партнёров</h3>
            </div>
            <div className="thdFirst_info" id="thd3">
              <div></div>
              <h3>Возможность найти стажировку или проект</h3>
            </div>
            <div className="thdFirst_info" id="thd4">
              <div></div>
              <h3>Сообщество активных студентов</h3>
            </div>
          </div>
          <div className="thdImg_block">
            <img src={info} alt="error" className="thdImg" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThirdSection;
