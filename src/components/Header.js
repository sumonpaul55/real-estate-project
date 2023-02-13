import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link */}
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <Link to="login" className="hover:text-violet-900">
            Log in
          </Link>
          <Link to="signup" className="bg-violet-800 hover:bg-violet-600 rounded text-white px-4 py-2">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
