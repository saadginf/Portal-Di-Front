import React from "react";
import { withRouter } from "react-router-dom";
import Nabar from "./Navigation/navbar/Navheader";
import Footer from "./Navigation/footer/Footer";
import Logo from "../assets/logo.png";

const Layout = (props) => {
  console.log(props.location.pathname);
  return (
    <>
      <Nabar
        imgsrc={Logo}
        loc={props.location.pathname}
        isAuth={props.isAuth}
        user={props.user}
        lout={props.lout}
      />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default withRouter(Layout);
