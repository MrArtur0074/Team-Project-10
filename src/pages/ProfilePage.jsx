import { useParams } from "react-router-dom";
import "../styles/ProfilePage.css";
import {
  courses,
  FRIENDS_DB,
  INITIAL_DATA,
  ORG_DATA,
  isOrganization,
} from "../helpers/data";
import { options, optionsOrg } from "../helpers/option";
import { useEffect, useState } from "react";
import CustomInput from "../components/Templates/Input/CustomInput";
import InterestCard from "../components/Templates/InterestCard/InterestCard";

const ProfilePage = () => {
  const { id } = useParams(); 
  const numericId = parseInt(id.replace(":", ""), 10);
  const [currentUser, setCurrentUser] = useState(null);
  const [arrInterest, setArrInterest] = useState([]);
  const [userDesc, setUserDesc] = useState("");
  const number = "+99292929";
  const socialLinks = "awdawd";

  // template for upcoming crud
  function updateFields(fields) {}
  function updateFieldsOrg(fields) {}

  useEffect(() => {
    if (isOrganization) {
      const foundUser = courses.find((item) => item.id === numericId);
      setCurrentUser(foundUser);
      if (foundUser && foundUser.reasons) {
        setArrInterest(
          foundUser.reasons.split(", ").map((item) => item.trim())
        );
      }
      if (foundUser && foundUser.description) {
        setUserDesc(foundUser.description);
      }
    } else {
      const foundUser = FRIENDS_DB.find((item) => item.id === numericId);
      setCurrentUser(foundUser);
      if (foundUser && foundUser.interests) {
        setArrInterest(
          foundUser.interests.split(", ").map((item) => item.trim())
        );
      }
      if (foundUser && foundUser.desc) {
        setUserDesc(foundUser.desc);
      }
    }
  }, [numericId]);

  const handleInterestsChange = (selected) => {
    updateFields({ interests: selected });
  };

  const handleDeleteInterest = (interest) => {
    const updatedInterests = arrInterest.filter((item) => item !== interest);
    setArrInterest(updatedInterests);

    const updatedUser = {
      ...currentUser,
      interests: updatedInterests.join(", "),
    };

    setCurrentUser(updatedUser);
    updateFields({ interests: updatedUser.interests });
  };
  const editDesc = (e) => {
    setUserDesc(e.target.value);
  };

  return (
    <div className="mainContainer" style={{ marginTop: "2rem" }}>
      <div className="uspMain">
        <div className="uspMain_imgBlock">
          <img
            src={
              isOrganization
                ? currentUser && currentUser.logo
                : currentUser && currentUser.img
            }
            alt="error"
            className="uspMain_img"
          />
        </div>
        <div className="uspInfo_block">
          <div className="uspInfo_blockMini">
            <div>
              <h3>Загрузить новую фотографию профиля</h3>
              <p style={{ color: "grey" }}>
                Только файлы с разрешением .png, .jpg, .webp
              </p>
            </div>
            <div className="uspInfo_btn">Загрузить</div>
          </div>
          <textarea
            className="uspInfo_desc"
            value={userDesc}
            onChange={editDesc}></textarea>
        </div>
      </div>
      <div className="uspInfo">
        {isOrganization ? (
          <>
            <h3>Изменить информацию об организации</h3>
            <div className="uspInfo_inp">
              <CustomInput
                label="Название организации"
                name="Название организации"
                type="text"
                value={currentUser && currentUser.name}
                required={true}
                onChange={updateFields}
                placeholder="Введите название"
              />
              <CustomInput
                label="Тип деятельности"
                name="Тип деятельности"
                type="text"
                value={currentUser && currentUser.name}
                required={true}
                onChange={updateFields}
                placeholder="Введите Тип деятельности"
              />
              <CustomInput
                label="Пароль"
                name="Пароль"
                type="password"
                value={currentUser && currentUser.password}
                required={true}
                onChange={updateFields}
                placeholder="Придумайте пароль"
              />
              <CustomInput
                label="Имя и фамилия (контактное лицо)"
                name="Имя и фамилия (контактное лицо)"
                type="text"
                value={currentUser && currentUser.firstName}
                required={true}
                onChange={updateFields}
                placeholder="Введите имя и фамилию"
              />
              <CustomInput
                label="Должность (контактное лицо)"
                name="Должность (контактное лицо)"
                type="text"
                value={number}
                required={true}
                onChange={(e) => updateFieldsOrg({ number: e.target.value })}
                placeholder="Введите должность"
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
                label="Ник в Telegram"
                name="Ник в Telegram"
                type="text"
                value={currentUser && currentUser.username}
                required={true}
                onChange={updateFields}
                placeholder="Введите ник"
              />
              <CustomInput
                label="Сайт или соцсеть"
                name="Сайт или соцсеть"
                type="text"
                value={socialLinks}
                required={true}
                onChange={(e) =>
                  updateFieldsOrg({ socialLinks: e.target.value })
                }
                placeholder="Введите ссылку на соцсеть/сайт"
              />
              <CustomInput
                label="Должность (контактное лицо)"
                name="Должность (контактное лицо)"
                type="text"
                value={currentUser && currentUser.education}
                required={true}
                onChange={updateFields}
                placeholder="Введите ваше учебное заведение"
              />
              <CustomInput
                label="Цель присутствия на платформе"
                name="Цель присутствия на платформе"
                type="select"
                options={optionsOrg}
                value={currentUser && currentUser.interests}
                onChange={handleInterestsChange}
                multiple={true}
                placeholder="Выберите интересы"
                height="3rem"
              />
            </div>
            <div className="intMain">
              {currentUser &&
                arrInterest.map((item, index) => (
                  <InterestCard
                    key={index}
                    name={item}
                    isDelete
                    onDelete={handleDeleteInterest}
                  />
                ))}
            </div>
          </>
        ) : (
          <>
            <h3>Изменить информацию о пользователе</h3>
            <div className="uspInfo_inp">
              <CustomInput
                label="Имя"
                name="Имя"
                type="text"
                value={currentUser && currentUser.firstName}
                required={true}
                onChange={updateFields}
                placeholder="Введите своё имя"
              />
              <CustomInput
                label="Фамилия"
                name="Фамилия"
                type="text"
                value={currentUser && currentUser.lastName}
                required={true}
                onChange={updateFields}
                placeholder="Введите свою фамилию"
              />
              <CustomInput
                label="Пароль"
                name="Пароль"
                type="password"
                value={currentUser && currentUser.password}
                required={true}
                onChange={updateFields}
                placeholder="Придумайте пароль"
              />
              <CustomInput
                label="Дата рождения"
                name="Дата рождения"
                type="date"
                value={currentUser && currentUser.date}
                required={true}
                onChange={updateFields}
                placeholder="Выберите дату"
              />
              <CustomInput
                label="Ник в Telegram"
                name="Ник в Telegram"
                type="text"
                value={currentUser && currentUser.username}
                required={true}
                onChange={updateFields}
                placeholder="Введите ник"
              />
              <CustomInput
                label="Учебное заведение"
                name="Учебное заведение"
                type="text"
                value={currentUser && currentUser.education}
                required={true}
                onChange={updateFields}
                placeholder="Введите ваше учебное заведение"
              />
              <CustomInput
                label="Интересы и направления"
                type="select"
                name="interests"
                options={options}
                value={currentUser && currentUser.interests}
                onChange={handleInterestsChange}
                multiple={true}
                placeholder="Выберите интересы"
                height="3rem"
              />
            </div>
            <div className="intMain">
              {currentUser &&
                arrInterest.map((item, index) => (
                  <InterestCard
                    key={index}
                    name={item}
                    isDelete
                    onDelete={handleDeleteInterest}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
