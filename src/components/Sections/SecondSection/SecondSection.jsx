import { Container } from "@mui/material";
import React from "react";
import "./SecondSection.css";
import hround from "../../../assets/hround.svg";
import peoples from "../../../assets/peoples.png";
import work from "../../../assets/work.png";
import share from "../../../assets/share.png";

const SecondSection = () => {
  return (
    <div className="scnMain">
      <Container maxWidth="xl">
        <div className="scnMain_block " id="benefitBlock">
          <div className="scnMain_first">
            <h1>Возможности Skillnet.kg</h1>
            <div className="scnFirst_round">
              <img src={hround} alt="e" id="arround1" />
              <img src={hround} alt="e" id="arround2" />
              <img src={hround} alt="e" id="arround3" />
              <img src={hround} alt="e" id="arround4" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
              <img src={hround} alt="e" />
            </div>
          </div>
          <div className="scnMain_second">
            <div className="scnCard scnCard1">
              <h2>Находи учебных партнёров</h2>
              <img src={peoples} alt="error" />
              <p>Подбираем людей с похожими интересами и целями</p>
            </div>
            <div className="scnCard scnCard2">
              <h2>Развивай навыки и опыт</h2>
              <img src={work} alt="error" />
              <p>Стажировки, волонтёрство и проекты</p>
            </div>
            <div className="scnCard scnCard3">
              <h2>Общайся и делись знаниями</h2>
              <img src={share} alt="error" />
              <p>Форум для обсуждений и помощи</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecondSection;
