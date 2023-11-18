import Navbar from "@/components/Navbar";
import React from "react";

function Layout({ children }): React.FC {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
export default Layout