import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PostIcon from "@mui/icons-material/PlayArrow";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./SideBar.css";
import { isOrganization } from "../../../helpers/data";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const userid = 1;

  const navItems = isOrganization
    ? [
        { text: "Главная", icon: <HomeIcon />, path: "/main" },
        { text: "Панель постов", icon: <PostIcon />, path: "/posts" },
        { text: "Профиль", icon: <PersonIcon />, path: `/profile/:${userid}` },
      ]
    : [
        { text: "Главная", icon: <HomeIcon />, path: "/main" },
        { text: "Друзья", icon: <GroupIcon />, path: "/friends" },
        { text: "Поиск занятий", icon: <SearchIcon />, path: "/courses" },
        { text: "Профиль", icon: <PersonIcon />, path: `/profile/:${userid}` },
      ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const exitAccount = () => {
    navigate("/");
  };

  return (
    <>
      <div className="burger-menu" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <h2 className="sidebar__logo">SkillNet</h2>
        <div className="sidebar__list">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <div
                key={index}
                className={`sidebar__item ${isActive ? "active" : ""}`}
                onClick={() => navigate(item.path)}>
                <div>{item.icon}</div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="sidebar__logout" onClick={() => exitAccount()}>
          Выйти
        </div>
      </div>
    </>
  );
};

export default Sidebar;
