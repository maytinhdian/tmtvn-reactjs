import React from "react";
import ReactDOM from "react-dom/client";

import DefaultLayout from "./components/layout/defaultLayout.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from './components/ui/theme.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DefaultLayout />
    </ThemeProvider>
  </React.StrictMode>
);
