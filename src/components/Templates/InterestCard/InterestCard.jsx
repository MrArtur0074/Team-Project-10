import React from "react";

const InterestCard = ({ name, isDelete = false, onDelete }) => {
  return (
    <div
      style={{
        backgroundColor: "#EAEAEA",
        color: "black",
        width: "min-content",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        borderRadius: "90px",
        cursor: "default",
      }}>
      {name}
      {isDelete && (
        <div
          style={{
            marginLeft: "1rem",
            width: "100%",
            height: "100%",
          }}
          onClick={() => onDelete(name)}>
          ×
        </div>
      )}
    </div>
  );
};

export default InterestCard;
