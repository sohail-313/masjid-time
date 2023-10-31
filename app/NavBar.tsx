import Link from "next/link";
import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
const NavBar = () => {
  return (
    <nav className="p-5 flex justify-between">
      <div className="flex items-center space-x-1.5">
        <FcAlarmClock className="text-5xl" />
        <div className="flex flex-col justify-center">
          <span>Masjid</span>
          <span className="text-sm text-center">Time</span>
        </div>
      </div>
      <div className="flex items-center space-x-1.5">
        <Link href="/">
          <BsSearch className="text-2xl" />
        </Link>
        <button className="btn btn-accent btn-outline test-xsm">
          {" "}
          Login {" "}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
