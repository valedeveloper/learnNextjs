import React from "react";
import 'tailwindcss/tailwind.css';

import { Avocado, Basket } from "./SVGIcons";
import Link from "next/link";
function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-between p-5 shadow-lg mb-5 ">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Avocado />
          <h2>Avo Store</h2>
        </div>
      </Link>
      <Link href="/">
        <div className="flex items-center space-x-2" >
          <Basket />
          <h2>Canasta</h2>
        </div></Link>
    </nav>
  );
}

export default Navbar;
