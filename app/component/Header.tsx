"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/hooks";

export default function Header() {
  const { nmae, address } = useAppSelector((state) => state.user);
  const { bgColor,textColor } = useAppSelector((state) => state.theme);
  return (
    <div style={{ backgroundColor: bgColor,color:textColor }}>
      Name: {nmae}
      <p>Add value</p>
    </div>
  );
}
