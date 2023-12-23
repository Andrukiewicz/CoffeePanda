"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Navbar() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-center w-full">
        <m.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            ease: "easeOut",
            duration: 0.5,
            bounce: 0.5, // Adjust the bounce value as needed
          }}
          className="flex-between h-32 w-full max-w-[60rem] flex-col items-center gap-4 px-4 py-4 lg:flex-row"
        >
          <Link href="/" className="w-fit">
            <Image
              src="/tcplogo.webp"
              height={100}
              width={150}
              alt="The Coffee Panda"
            />
          </Link>
          <nav className="flex-center">
            <ul className="grid grid-cols-3 items-center justify-center gap-4 text-center text-xs font-bold uppercase tracking-normal sm:flex lg:gap-8 lg:text-start lg:text-sm lg:tracking-widest">
              <li>
                <Link href="/">Home Page</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Find us</Link>
              </li>
              <li>
                <Link href="#">Menu</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">
                  <button className="rounded-full bg-orange-900 px-4 py-2 uppercase text-white transition-colors hover:bg-black">
                    Shop online
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </m.div>
      </div>
    </LazyMotion>
  );
}
