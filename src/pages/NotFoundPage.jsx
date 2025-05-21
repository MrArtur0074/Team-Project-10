import React from "react";
import notfoundimg from "../assets/404logo.svg";
import "../styles/color-variables.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}>
      <img src={notfoundimg} alt="404" style={{ width: "30vmax" }} />
      <h1>Упс!</h1>
      <h4>Страница не найдена</h4>
      <div
        style={{
          backgroundColor: "var(--colorMain)",
          borderRadius: "4px",
          padding: "1rem 3rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}>
        На главную страницу
      </div>
    </div>
  );
};

export default NotFoundPage;
