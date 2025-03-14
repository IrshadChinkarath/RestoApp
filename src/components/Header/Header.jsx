import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { display, styled } from "@mui/system";
import { Box, Menu, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import Logo from "../../assets/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedplayListIcon from "@mui/icons-material/FeaturedPlayList";
import ContactIcon from "@mui/icons-material/ContactSupport";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function Header({ backgroundColor = "#4F5361", colour = "#fff" }) {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);

  //Toogle Drawer
  const toogleDrower = (accher, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [accher]: open });
  };

  //List item
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      onKeyDown={toogleDrower(anchor, false)}
    >
      <List>
        {nav_items.map((nav) => (
          <ListItem
            key={nav.name}
            disablePadding
            onClick={() => navigate(nav.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {nav.name === "Home" && <HomeIcon />}
                {nav.name === "Dishes" && <FeaturedplayListIcon />}
                {nav.name === "Services" && <MiscellaneousServicesIcon />}
                {nav.name === "About Us" && <ContactIcon />}
              </ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Nav Menu Items
  const nav_items = [
    { name: "Home", path: "/" },
    { name: "Dishes", path: "/dishes" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/aboutus" },
  ];

  // NavBar Styling
  const NavBarStyled = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    maxWidth: "auto",
    marginLeft: 0,
    marginBottom: "-24px",
    backgroundColor: backgroundColor,
  }));

  // LogoBox Styling
  const LogoBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  //Logo Icon Styling
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  //Logo Image Styling
  const LogoImg = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  // NavBox Styling
  const MenuBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  // ButtonBox Styling
  const ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
  }));

  // Navlink Styling
  const NavLinks = styled(Typography)(() => ({
    font: "15px",
    fontWeight: "bold",
    color: colour,
    cursor: "pointer",
    gap: "2.5rem",
    "&:hover": {
      color: "#fff",
    },
  }));

  return (
    <NavBarStyled>
      {/* Logo Section */}
      <LogoBox>
        <CustomMenuIcon onClick={toogleDrower("left", true)} />
        <Drawer
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toogleDrower("left", false)}
        >
          {list("left")}
        </Drawer>

        <LogoImg src={Logo} alt="Logo" />
      </LogoBox>

      {/* Navitems */}
      <MenuBox>
        {nav_items.map((nav) => {
          return (
            <NavLinks
              variant="body2"
              key={nav.name}
              onClick={() => {
                navigate(nav.path);
              }}
            >
              {nav.name}
            </NavLinks>
          );
        })}
      </MenuBox>

      {/* Nav Buttons */}
      <ButtonBox>
        <NavLinks variant="body2">Sign Up</NavLinks>
        <CustomButton
          backgroundColor="#0f1B4C"
          color="#fff"
          buttonText="Register"
        />
      </ButtonBox>
    </NavBarStyled>
  );
}

export default Header;
