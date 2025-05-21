import React from "react";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import "./Navbar.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = -400; // Adjust this value as needed
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container maxWidth="xl">
      <div className="navMain_block">
        <h1 className="navMain_text" onClick={() => navigate("/")}>
          SkillNet
        </h1>
        <h3
          className="navtext"
          onClick={() => {
            scrollToSection("featureBlock");
            handleClose();
          }}>
          Возможности
        </h3>
        <h3
          className="navtext"
          onClick={() => {
            scrollToSection("benefitBlock");
            handleClose();
          }}>
          Преимущества
        </h3>
        <h3
          className="navtext"
          onClick={() => {
            scrollToSection("reviewBlock");
            handleClose();
          }}>
          Отзывы
        </h3>
        <IconButton
          aria-label="more"
          aria-haspopup="true"
          className="navMenu_btn"
          onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}>
        <MenuItem
          onClick={() => {
            scrollToSection("featureBlock");
            handleClose();
          }}>
          Возможности
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("benefitBlock");
            handleClose();
          }}>
          Преимущества
        </MenuItem>
        <MenuItem
          onClick={() => {
            scrollToSection("reviewBlock");
            handleClose();
          }}>
          Отзывы
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Navbar;
