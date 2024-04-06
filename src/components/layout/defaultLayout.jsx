import { Component } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import Contents from '../ui/content';
import DefaultLayout from "./defaultLayout.module.css";
import { Container } from "@mui/material";

class defaultLayout extends Component {
  render() {
    return (
      <Container className={DefaultLayout}>
        <Header />
        <Contents />
        <Footer />
      </Container>
    );
  }
}

export default defaultLayout;
