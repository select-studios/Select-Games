"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Session } from "next-auth";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <p>Select Studios</p>
          </Link>
          <div>
              <button
                className="p-1.5 px-4 text-sm text-black transition-all">
                <a href="https://patreon.com/SelectStudios">Help</a>
              </button>

              <button
                className="p-1.5 px-4 text-sm text-black transition-all">
                <a href="https://patreon.com/SelectStudios">About us</a>
              </button>

              <button 
                className="p-1.5 px-4 text-sm text-black transition-all">
                <a href="https://patreon.com/SelectStudios">Support Us</a>
              </button>

              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black">
                <a href="https://github.com/select-studios/Select-Launcher/releases/download/v1.3.7/Select-Launcher-Windows-1.3.7-Setup.exe">Download</a>
              </button>
          </div>
        </div>
      </div>
    </>
  );
}
