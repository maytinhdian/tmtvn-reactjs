import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Email,
  Home,
  LaptopMac,
  Microsoft,
  People,
  Phonelink,
} from "@mui/icons-material";
function MainNavigation(props) {
  const routes = [
    { name: "Home", link: "/", activeIndex: 0, icon: <Home /> },
    { name: "Softwares", link: "/", activeIndex: 1, icon: <Microsoft /> },
    { name: "Find", link: "/dashboard", activeIndex: 2, icon: <Phonelink /> },
    {
      name: "Product",
      link: "/dashboard",
      activeIndex: 3,
      icon: <LaptopMac />,
    },
    { name: "Customer", link: "/customer", activeIndex: 4, icon: <People /> },
    { name: "About Us", link: "/about", activeIndex: 5, icon: <Email /> },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <Tabs
      aria-label="Main Navigation"
      variant="standard"
      textColor="inherit"
      sx={{
        // width: "100%",
        mr: "10rem",
        "& .MuiTabs-indicator": { bgcolor: "red" },
        "& .MuiTabs-flexContainer": { justifyContent: "flex-end" },
      }}
      value={selected}
      onChange={(_e, newValue) => setSelected(newValue)}
    >
      {routes.map((route) => (
        <Tab
          LinkComponent={Link}
          to={route.link}
          //   icon={route.icon}
          label={route.name}
          key={route.activeIndex}
          sx={{
            "&.Mui-selected": {
              color: "white",
            },
            "&:not(.Mui-selected)": { color: "#000" },
            fontFamily: "Raleway",
          }}
        />
      ))}
    </Tabs>
  );
}

export default MainNavigation;
