import React from "react";
import "./ForthSection.css";
import { Container, Rating, styled } from "@mui/material";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import arrow from "../../../assets/rarrow.svg";
import kut from "../../../assets/kut.png";
import dav from "../../../assets/dav.png";
import sog from "../../../assets/sog.png";

const ForthSection = () => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FBE601",
    },
  });
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <div className="frtMain_block" id="reviewBlock">
          <div className="frtMain_title">
            <div className="arrowsBlock">
              <img src={arrow} alt="e" className="arrowleft arrowlr1" />
              <img src={arrow} alt="e" className="arrowleft arrowlr2" />
              <img src={arrow} alt="e" className="arrowleft arrowlr3" />
              <img src={arrow} alt="e" className="arrowleft arrowlr4" />
              <img src={arrow} alt="e" className="arrowleft arrowlr5" />
              <img src={arrow} alt="e" className="arrowleft" />
              <img src={arrow} alt="e" className="arrowleft" />
              <img src={arrow} alt="e" className="arrowleft" />
            </div>
            <h1>Отзывы пользователей</h1>
            <div className="arrowsBlock">
              <img src={arrow} alt="e" className="arrowright" />
              <img src={arrow} alt="e" className="arrowright" />
              <img src={arrow} alt="e" className="arrowright" />
              <img src={arrow} alt="e" className="arrowright arrowlr5" />
              <img src={arrow} alt="e" className="arrowright arrowlr4" />
              <img src={arrow} alt="e" className="arrowright arrowlr3" />
              <img src={arrow} alt="e" className="arrowright arrowlr1" />
              <img src={arrow} alt="e" className="arrowright arrowlr2" />
            </div>
          </div>
          <div className="frtCard_block">
            <div className="frtCard frtCard1">
              <img src={kut} alt="e" className="frtCard_img" />
              <h3 className="frtCard_title">Кутманшер Эрмеков</h3>
              <p className="frtCard_info">Студент колледжа, 3 курс</p>
              <StyledRating
                className="frtCard_info"
                name="customized-color"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                size="large"
                icon={<StarTwoToneIcon fontSize="inherit" />}
                emptyIcon={<StarTwoToneIcon fontSize="inherit" />}
                readOnly
              />
              <p className="frtCard_more">
                Skillnet помог мне найти учебного партнёра по программированию.
                Вместе мы подготовились к хакатону и заняли призовое место! Это
                не просто платформа, а целое сообщество мотивированных людей
              </p>
            </div>
            <div className="frtCard frtCard2">
              <img src={dav} alt="e" className="frtCard_img" />
              <h3 className="frtCard_title">Давлет Азимов</h3>
              <p className="frtCard_info">Программист, ментор</p>
              <StyledRating
                name="customized-color"
                className="frtCard_info"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                size="large"
                icon={<StarTwoToneIcon fontSize="inherit" />}
                emptyIcon={<StarTwoToneIcon fontSize="inherit" />}
                readOnly
              />
              <p className="frtCard_more">
                Я чорт, у меня в колоде мегагей, электро-али и элитные геи. Я
                недавно скачал геншин импакт и мой айкью понизился до -50. Я
                людлю бить банду панду и дружу со студентами специализирующимися
                в дизайне
              </p>
            </div>
            <div className="frtCard frtCard3">
              <img src={sog} alt="e" className="frtCard_img" />
              <h3 className="frtCard_title">Согдиана Асанова</h3>
              <p className="frtCard_info">Студент университета, 2 курс</p>
              <StyledRating
                name="customized-color"
                className="frtCard_info"
                defaultValue={5}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                size="large"
                icon={<StarTwoToneIcon fontSize="inherit" />}
                emptyIcon={<StarTwoToneIcon fontSize="inherit" />}
                readOnly
              />
              <p className="frtCard_more">
                Я случайно наткнулась на Skillnet и не ожидала, что смогу найти
                свою первую стажировку так быстро! Теперь у меня есть реальный
                опыт работы в команде, и это круто!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForthSection;
