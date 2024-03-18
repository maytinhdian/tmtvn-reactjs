import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import logo from "/tmt.svg";

import Dashboard from "../ui/dashboard/dashboard";
import { Link } from "react-router-dom";
import {
  Email,
  Home,
  LaptopMac,
  Microsoft,
  People,
  Phonelink,
} from "@mui/icons-material";
const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  height: `calc(${theme.mixins.toolbar.minHeight}px +2rem)`,
}));

const routes = [
  { name: "Home", link: "/", activeIndex: 0, icon: <Home /> },
  { name: "Softwares", link: "/", activeIndex: 1, icon: <Microsoft /> },
  { name: "Find", link: "/dashboard", activeIndex: 2, icon: <Phonelink /> },
  { name: "Product", link: "/dashboard", activeIndex: 3, icon: <LaptopMac /> },
  { name: "Customer", link: "/customer", activeIndex: 4, icon: <People /> },
  { name: "About Us", link: "/about", activeIndex: 5, icon: <Email /> },
];

// function renderContent(route) {
//   switch (route) {
//     case 0:
//       return <Dashboard/>;
//     case 1:
//       return <div>Hoa don le</div>;
//     case 2:
//       return <div>Khach hang</div>;
//     default:
//       return <div>Not found</div>;
//   }
// }

export default function Header() {
  const [selected, setSelected] = useState(0);

  return (
    <Box sx={{ color: "primary.main" }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "primary",
          justifyContent: "center",
        }}
      >
        <Toolbar disableGutters>
          <Typography variant="title" color="inherit" >
            <h5>Xin chao Viet Nam</h5>
          </Typography>
        </Toolbar>
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ justifyContent: "space-between" }}
        >
          <img height="48rem" src={logo} alt="TMT Innovative Logo" />
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
                icon={route.icon}
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
        </Toolbar>
      </AppBar>
      <Offset />
      {/* {renderContent(selected)} */}
    </Box>
  );
}
