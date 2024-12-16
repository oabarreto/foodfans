"use client";

import React from "react";
import { Button } from "../ui/button";
import { IoEnterOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

interface HeaderButtonProps {
  action?: () => void;
}

export function HeaderButtons({ action }: HeaderButtonProps) {
  return (
    <div className="flex flex-row gap-3">
      {/* <Button className="px-6 bg-rose-400 hover:bg-neutral-300 text-neutral-100 hover:text-rose-400">
        Sign-Up
      </Button> */}
      <Button
        className="px-6 gap-2 bg-rose-500 hover:bg-neutral-300 text-neutral-100 hover:text-rose-500"
        onClick={action}
      >
        Sign-Up / Login
        <FiLogIn />
      </Button>
    </div>
  );
}
