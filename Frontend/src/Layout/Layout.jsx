import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Rou from "../Routes/Rou";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Rou />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
