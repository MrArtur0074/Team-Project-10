import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ConfirmForm } from "./forms/ConfirmForm";
import { ChooseForm } from "./forms/ChooseForm";
import { useMultistepForm } from "./hook/useMultistepForm";
import { UserForm } from "./forms/UserForm";
import { Container } from "@mui/material";

import "./MultiAuth.css";
import { LoginForm } from "./forms/LoginForm";
import { INITIAL_DATA, ORG_DATA } from "../../helpers/data";


function MultiStepAuth() {
  const navigate = useNavigate("");
  const [data, setData] = useState(INITIAL_DATA);
  const [dataOrg, setDataOrg] = useState(ORG_DATA);
  const [type, setType] = useState(null);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateFieldsOrg(fields) {
    setDataOrg((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <ChooseForm
        {...data}
        type={type}
        setType={setType}
        updateFields={updateFields}
      />,
      <UserForm
        {...data}
        {...dataOrg}
        type={type}
        updateFields={updateFields}
        updateFieldsOrg={updateFieldsOrg}
      />,
      <ConfirmForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    navigate("/main");
  }

  return (
    <Container maxWidth="xl">
      <h1 style={{ textAlign: "center" }}>Регистрация</h1>
      <div className="mainBlock">
        <form onSubmit={onSubmit}>
          <div className="mainBlock_info">
            <div className="mainBlock_nav">
              {/* {currentStepIndex + 1} / {steps.length} */}
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 1
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}
                className="mainBlock_step1">
                <div className="mainBlock_num">1</div>
                <p className="mainBlock_stepstext">Выбор типа аккаунта</p>
              </div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 2
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}
                className="mainBlock_step2">
                <div className="mainBlock_num">2</div>
                <p className="mainBlock_stepstext">Ввод данных</p>
              </div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 3
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}
                className="mainBlock_step3">
                <div className="mainBlock_num">3</div>
                <p className="mainBlock_stepstext">Подтверждение почты</p>
              </div>
            </div>
            <div className="mainBlock_step">{step}</div>
          </div>
          <div className="mainBlock_contoller ">
            <button type="button" onClick={back} className="mainBlock_btn">
              Вернуться
            </button>
            <p className="mainBlock_already" onClick={() => navigate("/login")}>
              Уже есть аккаунт?
            </p>
            <button type="submit" className="mainBlock_btn">
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default MultiStepAuth;
