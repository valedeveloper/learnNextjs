import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
type LayoutProps = {
  children?: React.ReactNode
}
function Layout({ children }:LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
export default Layout