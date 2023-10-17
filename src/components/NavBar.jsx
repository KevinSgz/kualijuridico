//import { NavLink } from "react-router-dom";

import Logo from "./Logo";

function NavBar() {
  return (
    <header
      className="flex items-center justify-center border-b border-stone-200 bg-gray-100 px-4 py-3 uppercase
    sm:px-6"
    >
      <Logo />
    </header>
  );
}

export default NavBar;
