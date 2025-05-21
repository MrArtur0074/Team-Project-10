import React from "react";
import "./MainCard.css";

const MainCard = ({
  id,
  logo,
  title,
  description,
  buttonText,
  color,
  rounded,
  hasBorder = true,
  width = "20rem",
  isEdit = false,
  setUserProfile,
}) => {
  return (
    <div
      className="card"
      style={{
        borderColor: hasBorder ? color : "transparent",
        width: width,
      }}>
      <div className="card-logo">
        <img src={logo} alt="CardLogo" className={rounded ? "rounded" : ""} />
        <div className="card-logo_info">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="cardBtn_block">
        <button
          className="card-button"
          style={{ backgroundColor: color, border: `2px solid ${color}` }}
          onClick={() => setUserProfile(id)}>
          {buttonText}
        </button>
        {isEdit && (
          <button
            className="card-button delBtn"
            style={{ border: `2px solid ${color}` }}>
            Удалить пост
          </button>
        )}
      </div>
    </div>
  );
};

export default MainCard;
