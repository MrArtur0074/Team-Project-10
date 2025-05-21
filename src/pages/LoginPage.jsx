import React from "react";
import { LoginForm } from "../components/MultiStepAuth/forms/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vmax",
      }}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
