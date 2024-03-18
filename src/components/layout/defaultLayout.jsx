import { Component } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";
import { Outlet } from "react-router-dom";
class defaultLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet/>
        <Footer />
      </>
    );
  }
}

export default defaultLayout;
