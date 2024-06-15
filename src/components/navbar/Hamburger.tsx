"use client";

import { useState } from "react";

export default function Hamburger({ className }: { className?: string }) {
  const [x, setX] = useState(false);
  return (
    <button
      onClick={() => setX(!x)}
      className={`${className} hamburger h-[--hamburger-height] w-[--hamburger-width] relative ${
        x && "x"
      }`}
    >
      <span></span>
    </button>
  );
}
