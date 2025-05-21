import { Radio } from "@mui/material";
import { FormWrapper } from "../FormWrapper.jsx";
import { useState } from "react";

export function ChooseForm({ setType,type, updateFields }) {

  return (
    <FormWrapper title="Этап 1">
      <div className="chsMain_block">
        <div className="chsInfo_block">
          <h2 className="chsBold">Выберите тип аккаунта</h2>
          <h2 className="chsNorm">
            Создаете ли вы учетную запись студента, компании или волонтёрской и
            некоммерческой организации? Выберите подходящий вариант, чтобы
            продолжить.
          </h2>
        </div>
        <div className="chsRadio_block">
          <div className="chsRadio">
            <Radio
              checked={type === "Student"}
              onChange={(e) => setType(e.target.value)}
              value="Student"
              required
              name="radio-buttons"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}>
              <h2 className="chsBold" style={{ fontSize: "1.2rem" }}>
                Студент
              </h2>
              <h3 className="chsNorm" style={{ fontSize: "1rem" }}>
                Ищи учебных партнёров, находи стажировки, участвуй в обсуждениях
              </h3>
            </div>
          </div>
          <div className="chsRadio">
            <Radio
              checked={type === "Organization"}
              onChange={(e) => setType(e.target.value)}
              required
              value="Organization"
              name="radio-buttons"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}>
              <h2 className="chsBold" style={{ fontSize: "1.2rem" }}>
                Организация
              </h2>
              <h3 className="chsNorm" style={{ fontSize: "1rem" }}>
                Размещайте стажировки, волонтёрские проекты, курсы и
                образовательные программы
              </h3>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}
