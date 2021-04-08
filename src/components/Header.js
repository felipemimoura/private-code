import React from "react";
import useViewport from "../Hooks/useViewport";
import BugerMenu from "./burgerMenu/BugerMenu";
import { Index } from "./navbar/Index";

const Header = () => {
  const { width } = useViewport();

  const breakpoint = 800;

  return width < breakpoint ? <BugerMenu /> : <Index />;
};

export default Header;
