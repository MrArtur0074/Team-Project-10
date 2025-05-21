import React from "react";
import MultiStepAuth from "../components/MultiStepAuth/MultiStepAuth";

const RegisterPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vmax",
      }}>
      <MultiStepAuth />
    </div>
  );
};

export default RegisterPage;
