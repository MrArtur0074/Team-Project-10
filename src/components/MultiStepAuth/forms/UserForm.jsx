import { useEffect } from "react";
import { FormWrapper } from "../FormWrapper.jsx";
import CustomInput from "../../Templates/Input/CustomInput.jsx";
import { options, optionsOrg } from "../../../helpers/option.js";
import "../../Templates/Input/CustomInput.css";

export function UserForm({
  // useData
  type,
  firstName,
  lastName,
  email,
  password,
  date,
  username,
  education,
  interests,
  updateFields,
  // orgData
  name,
  typeOfWork,
  emailOrg,
  passwordOrg,
  dataContactPerson,
  jobPosition,
  usernameOrg,
  number,
  socialLinks,
  reason,
  updateFieldsOrg,
}) {
  useEffect(() => {
    console.log(type);
  }, []);
  const handleInterestsChange = (selected) => {
    updateFields({ interests: selected });
  };

  return (
    <FormWrapper title="Этап 2">
      <div className="chsInfo_block">
        <h2 className="chsBold">Заполните данные для регистрации</h2>
        <h2 className="chsNorm">
          Заполните следующие поля, чтобы получить доступ к платформе
        </h2>
      </div>
      {type == "Student" ? (
        <div className="inputMain_block">
          <CustomInput
            label="Имя"
            name="Имя"
            type="text"
            value={firstName}
            required={true}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            placeholder="Введите своё имя"
          />
          <CustomInput
            label="Фамилия"
            name="Фамилия"
            type="text"
            value={lastName}
            required={true}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            placeholder="Введите свою фамилию"
          />
          <CustomInput
            label="Электронная почта "
            name="Электронная почта "
            type="email"
            value={email}
            required={true}
            onChange={(e) => updateFields({ email: e.target.value })}
            placeholder="Введите свою почту"
          />
          <CustomInput
            label="Пароль"
            name="Пароль"
            type="password"
            value={password}
            required={true}
            onChange={(e) => updateFields({ password: e.target.value })}
            placeholder="Придумайте пароль"
          />
          <CustomInput
            label="Дата рождения"
            name="Дата рождения"
            type="date"
            value={date}
            required={true}
            onChange={(e) => updateFields({ date: e.target.value })}
            placeholder="Выберите дату"
          />
          <CustomInput
            label="Ник в Telegram"
            name="Ник в Telegram"
            type="text"
            value={username}
            required={true}
            onChange={(e) => updateFields({ username: e.target.value })}
            placeholder="Введите ник"
          />
          <CustomInput
            label="Учебное заведение"
            name="Учебное заведение"
            type="text"
            value={education}
            required={true}
            onChange={(e) => updateFields({ education: e.target.value })}
            placeholder="Введите ваше учебное заведение"
          />
          <CustomInput
            label="Интересы и направления"
            type="select"
            name="interests"
            options={options}
            value={interests}
            onChange={handleInterestsChange}
            multiple={true}
            placeholder="Выберите интересы"
            height="3rem"
          />
          
        </div>
      ) : (
        <div className="inputMain_block">
          <CustomInput
            label="Название организации"
            name="Название организации"
            type="text"
            value={name}
            required={true}
            onChange={(e) => updateFieldsOrg({ name: e.target.value })}
            placeholder="Введите название"
          />
          <CustomInput
            label="Тип деятельности"
            name="Тип деятельности"
            type="text"
            value={typeOfWork}
            required={true}
            onChange={(e) => updateFieldsOrg({ typeOfWork: e.target.value })}
            placeholder="Введите тип деятельности"
          />
          <CustomInput
            label="Электронная почта "
            name="Электронная почта "
            type="email"
            value={emailOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ emailOrg: e.target.value })}
            placeholder="Введите свою почту"
          />
          <CustomInput
            label="Пароль"
            name="Пароль"
            type="password"
            value={passwordOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ passwordOrg: e.target.value })}
            placeholder="Придумайте пароль"
          />
          <CustomInput
            label="Имя и фамилия (контактное лицо)"
            name="Имя и фамилия (контактное лицо)"
            type="text"
            value={dataContactPerson}
            required={true}
            onChange={(e) =>
              updateFieldsOrg({ dataContactPerson: e.target.value })
            }
            placeholder="Введите имя и фамилию"
          />
          <CustomInput
            label="Должность (контактное лицо)"
            name="Должность (контактное лицо)"
            type="text"
            value={jobPosition}
            required={true}
            onChange={(e) => updateFieldsOrg({ jobPosition: e.target.value })}
           
          />
          <CustomInput
            label="Ник в Telegram"
            name="Ник в Telegram"
            type="text"
            value={usernameOrg}
            required={true}
            onChange={(e) => updateFieldsOrg({ usernameOrg: e.target.value })}
            placeholder="Введите ник"
          />
          <CustomInput
            label="Номер телефона (контактное лицо)"
            name="Номер телефона (контактное лицо)"
            type="text"
            value={number}
            required={true}
            onChange={(e) => updateFieldsOrg({ number: e.target.value })}
            placeholder="Пример +996999666000"
          />
          <CustomInput
            label="Сайт или соцсеть"
            name="Сайт или соцсеть"
            type="text"
            value={socialLinks}
            required={true}
            onChange={(e) => updateFieldsOrg({ socialLinks: e.target.value })}
            placeholder="Введите ссылку на соцсеть/сайт"
          />
          <CustomInput
            label="Цель присутствия на платформе"
            name="Цель присутствия на платформе"
            type="select"
            options={optionsOrg}
            height="3.1rem"
            value={reason}
            required={true}
            onChange={(e) => updateFieldsOrg({ reason: e.target.value })}
            placeholder="Выберите категорию"
          />
        </div>
      )}
    </FormWrapper>
  );
}
