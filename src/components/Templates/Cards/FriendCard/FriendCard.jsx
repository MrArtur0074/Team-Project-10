import React from "react";
import "./FriendCard.css";
import fricon from "../../../../assets/fricon.svg";

const FriendCard = ({ firstName, lastName, img, desc, id, setUserProfile }) => {
  return (
    <div
      className={`frCard ${id % 2 == 0 ? "frCard_darkerbg" : "frCard_whitebg"}`}
      key={id}>
      <img src={img} alt="error" className="frCard_img" />
      <h3 className="frCard_name">
        {firstName} {lastName}
      </h3>
      <p className="frCard_desc">{desc}</p>
      <div
        className="frCard_iconBlock"
        onClick={() => {
          setUserProfile(id);
        }}>
        <img src={fricon} alt="error" className="frCard_icon" />
      </div>
    </div>
  );
};

export default FriendCard;
