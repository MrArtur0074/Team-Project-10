import { Container } from "@mui/material";
import { FormWrapper } from "../FormWrapper.jsx";
import "../MultiAuth.css";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import { useNavigate } from "react-router";

export function LoginForm() {
  const navigate = useNavigate("");
  // данные нигде не созроняются
  return (
    <Container maxWidth="xl">
      <h1 style={{ textAlign: "center" }}>Авторизация</h1>
      <div className="mainBlock">
        <form>
          <div className="mainBlock_info">
            <div className="loginBlock_nav">
              <div className="mainBlock_step1" style={{ fontSize: "1.2rem" }}>
                Вход в систему
              </div>
            </div>
            <div className="mainBlock_step">
              <FormWrapper>
                <div className="chsInfo_block">
                  <h2 className="chsBold">Войдите в свой аккаунт</h2>
                  <h2 className="chsNorm">
                    Введите свою почту и пароль, чтобы получить доступ к
                    системе.
                  </h2>
                </div>
                <div className="loginInput_block" style={{}}>
                  <CustomInput
                    label="Электронная почта"
                    name="Электронная почта"
                    type="text"
                    required={true}
                    placeholder="Введите свою почту"
                  />
                  <CustomInput
                    label="Пароль"
                    name="Пароль"
                    type="text"
                    required={true}
                    placeholder="Введите пароль"
                  />
                </div>
              </FormWrapper>
            </div>
          </div>
          <div className="mainBlock_contoller ">
            <button
              type="button"
              className="mainBlock_btn"
              onClick={() => navigate("/")}>
              Вернуться
            </button>
            <p
              className="mainBlock_already"
              onClick={() => navigate("/register")}>
              Создать аккаунт
            </p>
            <button
              type="submit"
              className="mainBlock_btn"
              onClick={() => navigate("/main")}>
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
