"use client";

import { useState } from "react";
import { HeaderButtons } from "../HeaderButtons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  CgMenuRightAlt,
  CgMenuLeftAlt,
  CgHome,
  CgProfile,
} from "react-icons/cg";
import { useRouter } from "next/navigation";

export function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const router = useRouter();

  const handleGoToLogin = () => {
    router.push("/login"); // Navega para a página de login
  };

  const toggleHeader = () => {
    setShowHeader(!showHeader);
  };

  return (
    <header className="h-auto sm:h-24 lg:h-16 py-6 sm:py-0 w-full bg-neutral-200 shadow-md border-b border-rose-400 z-10">
      <div className="container mx-auto flex flex-col sm:flex-row gap-8 items-center justify-between h-full px-6">
        {/* Logo and Menu Button */}
        <div className="flex flex-row w-full sm:gap-4 sm:w-auto justify-between items-center">
          <h2 className="text-3xl font-semibold tracking-tight  text-rose-400 whitespace-nowrap">
            Food-Fans
          </h2>

          <div className="flex gap-2 items-center">
            <Button
              className="bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400"
              onClick={() => router.push("/")}
            >
              <CgHome />
            </Button>
            <Button
              className="bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400"
              onClick={() => router.push("/profile")}
            >
              <CgProfile />
            </Button>
            <Button
              onClick={toggleHeader}
              className={
                "sm:hidden bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400"
              }
            >
              {showHeader ? <CgMenuLeftAlt /> : <CgMenuRightAlt />}
            </Button>
          </div>
        </div>

        {/* Hidden Content for Small Screens */}
        <div
          className={`${
            showHeader ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row items-center gap-4 w-full`}
        >
          <Input
            type="text"
            placeholder="Search"
            className="text-neutral-500"
          />
          <HeaderButtons action={handleGoToLogin} />
        </div>
      </div>
    </header>
  );
}
