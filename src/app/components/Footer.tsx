"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

export default function Footer() {
  return (
    <LazyMotion features={domAnimation}>
      <m.footer
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
          duration: 0.5,
          bounce: 0.5, // Adjust the bounce value as needed
        }}
        className="flex-center w-full flex-col bg-orange-200 px-4"
      >
        <div className="flex w-full max-w-[60rem] flex-col items-center justify-between gap-8 py-16 text-center lg:flex-row lg:items-start lg:gap-0 lg:text-start">
          {/* Row */}
          <div className="flex">
            {/* Column */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">
                Got questions? Contact us!
              </p>
              <div>
                <p className="text-2xl lg:text-xl">📞 +69 696 969 696</p>
                <p className="text-xs opacity-50">Not a real phone number</p>
                <p className="text-xs opacity-50">Don't call it please 😂</p>
              </div>
              <div>
                <p className="text-2xl lg:text-xl">📧 info@coffepanda.com</p>
                <p className="text-xs opacity-50">Not a real email</p>
                <p className="text-xs opacity-50">Don't spam it</p>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold uppercase lg:text-base">
              For customers
            </h3>
            <div className="flex flex-col gap-4 text-xl lg:gap-0 lg:text-base">
              <Link href="#" className="hover:underline">
                Products
              </Link>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
              <Link href="#" className="hover:underline">
                Locations
              </Link>
            </div>
          </div>
          {/* Row */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold uppercase lg:text-base">
              About company
            </h3>
            <div className="flex flex-col gap-4 text-xl lg:gap-0 lg:text-base">
              <Link href="#" className="hover:underline">
                Jobs
              </Link>
              <Link href="#" className="hover:underline">
                Events
              </Link>
              <Link href="#" className="hover:underline">
                Location
              </Link>
            </div>
          </div>
          {/* Row */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold uppercase lg:text-base">
              Socials
            </h3>
            <div className="flex flex-col gap-4 text-xl lg:gap-0 lg:text-base">
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
              <Link href="#" className="hover:underline">
                Yelp
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-between w-full max-w-[60rem] flex-col-reverse border-t border-orange-300 py-4 text-center text-xs lg:flex-row lg:text-start">
          <p>
            © {new Date().getFullYear()} The Coffee Panda. All Rights Reserved.
            Designed by{" "}
            <Link
              href="https://andrukiewiczdev.vercel.app/"
              className="text-neutral-700 hover:text-black"
            >
              {" "}
              AndrukiewiczDev
            </Link>
          </p>
          <div className="flex gap-4 text-neutral-500">
            <Link href="#">Privacy policy</Link>
            <Link href="#">Cookies</Link>
            <Link href="#">Terms and conditions</Link>
          </div>
        </div>
      </m.footer>
    </LazyMotion>
  );
}
