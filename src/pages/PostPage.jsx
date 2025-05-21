import React, { useState } from "react";
import SearchBar from "../components/Templates/SearchBar/SearchBar";
import MainCard from "../components/Templates/Cards/MainCard/MainCard";

import { courses, orgId } from "../helpers/data";
import CustomInput from "../components/Templates/Input/CustomInput";
import { optionsOrg } from "../helpers/option";
import ProfileCard from "../components/Templates/Cards/ProfileCard/ProfileCard";

const PostPage = () => {
  const [postId, setPostId] = useState(null);
  return (
    <div className="mainContainer">
      <SearchBar
        inputText={"Что вы хотите найти?"}
        data={courses}
        renderItem={(courses) => (
          <MainCard
            key={id}
            logo={courses.logo}
            title={courses.name}
            description={courses.description}
            buttonText={courses.buttonText}
            color={courses.color}
            hasBorder={false}
            width={"95%"}
          />
        )}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "4px",
          marginBottom: "1rem",
        }}>
        <h3 style={{ marginBottom: "1rem" }}>Создать пост</h3>
        <CustomInput
          label="Название"
          name="Название"
          type="text"
          required={true}
          placeholder="Введите название, например “Подготовительный курс”"
        />
        <CustomInput
          label="Описание"
          name="Описание"
          type="text"
          required={true}
          placeholder="Придумайте описание поста..."
        />{" "}
        <CustomInput
          label="Тип активности"
          name="Тип активности"
          type="select"
          options={optionsOrg}
          height="3.3rem"
          required={true}
          placeholder="Выберите тип активности"
        />
        <button
          style={{
            color: "white",
            width: "100%",
            backgroundColor: "var(--colorMain)",
            borderRadius: "4px",
            border: "none",
            height: "3rem",
            cursor: "pointer",
          }}>
          Создать пост
        </button>
      </div>
      {postId && (
        <div>
          <ProfileCard id={postId} isOrg />
        </div>
      )}
      <div>
        <h4>Ваши посты</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}>
          {courses.map(
            (courses) =>
              courses.id == orgId && (
                <MainCard
                  key={courses.id}
                  id={courses.id}
                  logo={courses.logo}
                  title={courses.name}
                  description={courses.description}
                  buttonText={courses.buttonText}
                  color={courses.color}
                  hasBorder={false}
                  setUserProfile={setPostId}
                  isEdit
                  width={"95%"}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
