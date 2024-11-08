import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
