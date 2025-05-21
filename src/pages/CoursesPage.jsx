import React, { useState } from "react";
import SearchBar from "../components/Templates/SearchBar/SearchBar";
import "../styles/color-variables.css";
import MainCard from "../components/Templates/Cards/MainCard/MainCard";
import { courses } from "../helpers/data";
import { orgId } from "../helpers/data";
import ProfileCard from "../components/Templates/Cards/ProfileCard/ProfileCard";

const CoursesPage = () => {
  const [userProfile, setUserProfile] = useState(null);

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
      {userProfile && (
        <div>
          <ProfileCard id={userProfile} isOrg />
        </div>
      )}
      <div>
        <h4>Рекомандации</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}>
          {courses.map((courses) => (
            <MainCard
              key={courses.id}
              id={courses.id}
              logo={courses.logo}
              title={courses.name}
              description={courses.description}
              buttonText={courses.buttonText}
              color={courses.color}
              hasBorder={false}
              setUserProfile={setUserProfile}
              width={"95%"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoursesPage;
