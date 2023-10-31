"use client";

// React Libraries
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

// Icons
import { FcAlarmClock } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";

const NavBar = () => {
  const { status, data: session } = useSession();
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
        {status === "authenticated" && session && (
          <>
            <span>{session.user!.name}</span>
            <Link
              href="/api/auth/signout"
              className="btn btn-accent btn-outline test-xsm"
            >
              signout
            </Link>
          </>
        )}
        {status === "unauthenticated" && (
          <Link
            href="/api/auth/signin"
            className="btn btn-accent btn-outline test-xsm"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
