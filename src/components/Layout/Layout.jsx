import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
