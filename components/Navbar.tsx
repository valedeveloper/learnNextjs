import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';

import { Avocado, Basket } from "./SVGIcons";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemMenu from "./ItemMenu";

const itemMenu = [
  {
    path: "/",
    icon: <Avocado />,
    title: "Avo Store"
  },
  {
    path: "/cart",
    icon: <Basket />,
    title: "Canasta"
  }

]
function Navbar(): JSX.Element {





  return (
    <nav className="flex justify-between p-5 shadow-lg mb-5 ">
      {
        itemMenu.map((item) => <ItemMenu item={item} />)
      }
    </nav>
  );
}

export default Navbar;
