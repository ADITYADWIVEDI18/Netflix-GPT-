import React from "react";
import { LOGO } from "../utils/constant"; 
function Header() {
  return (
    <div className="absolute w-full py-5 pl-4 bg-gradient-to-b from-black z-10">
    <img className="w-44" src={LOGO} alt="logo" />
    </div>
  );
}

export default Header;
