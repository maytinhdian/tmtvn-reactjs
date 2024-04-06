import { AppBar, Box, Toolbar, IconButton, styled } from "@mui/material";
import logo from "/tmt.svg";
import NavBar from "./MainNavigation";
import {
  Email,
  Home,
  LaptopMac,
  Microsoft,
  People,
  LogoutSharp,
} from "@mui/icons-material";
const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  height: `calc(${theme.mixins.toolbar.minHeight}px +2rem)`,
}));

// const routes = [
//   { name: "Home", link: "/", activeIndex: 0, icon: <Home /> },
//   { name: "Softwares", link: "/", activeIndex: 1, icon: <Microsoft /> },
//   { name: "Find", link: "/dashboard", activeIndex: 2, icon: <Phonelink /> },
//   { name: "Product", link: "/dashboard", activeIndex: 3, icon: <LaptopMac /> },
//   { name: "Customer", link: "/customer", activeIndex: 4, icon: <People /> },
//   { name: "About Us", link: "/about", activeIndex: 5, icon: <Email /> },
// ];

export default function Header() {
  return (
    <Box sx={{ color: "primary.main" }}>
      <AppBar
        position="relative"
        sx={{
          bgcolor: "primary",
          justifyContent: "center",
        }}
      >
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ justifyContent: "space-between" }}
        >
          <img height="48rem" src={logo} alt="TMT Innovative Logo" />
          <NavBar />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="login"
          >
            <LogoutSharp />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Offset /> */}
      {/* {renderContent(selected)} */}
    </Box>
  );
}
