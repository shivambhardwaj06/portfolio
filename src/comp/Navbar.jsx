import { useState } from "react";
import AnimatedText from "./AnimatedText";

export default function Navbar() {
  const [active, setActive] = useState("work");

  return (
    <nav className="relative flex items-center justify-between overflow-hidden border-b border-zinc-800 bg-black px-8 py-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>

      <div className="relative w-72">
        <AnimatedText />
      </div>

      <div className="relative hidden rounded-full bg-zinc-900 p-1 sm:flex">
        <button
          onClick={() => setActive("work")}
          className={`rounded-full px-6 py-2 transition-all duration-300 ${
            active === "work"
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }`}
        >
          Work
        </button>

        <button
          onClick={() => setActive("info")}
          className={`rounded-full px-6 py-2 transition-all duration-300 ${
            active === "info"
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }`}
        >
          Info
        </button>
      </div>
    </nav>
  );
}