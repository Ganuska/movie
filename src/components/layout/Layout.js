import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import Styles from "./layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={Styles.mainLayout}>
      {/* <NavBar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
