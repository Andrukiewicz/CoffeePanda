"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-center relative mx-auto w-full overflow-hidden py-8 lg:py-0">
        <m.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            ease: "easeOut",
            duration: 0.5,
            bounce: 0.5, // Adjust the bounce value as needed
            delay: 0.3,
          }}
          className="absolute left-0 hidden lg:block"
        >
          <Image
            src="/herobg.webp"
            width={200}
            height={200}
            className="opacity-30"
            alt="Panda coffee couple"
          />
        </m.div>
        <div className="flex-center container relative mx-4 h-[30rem] w-full max-w-[50rem] lg:h-[30rem]">
          <div className="absolute left-0 z-10 flex flex-col gap-8">
            <m.h1
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                ease: "easeOut",
                duration: 0.5,
                bounce: 0.5, // Adjust the bounce value as needed
              }}
              className="[--font-forum] text-4xl sm:text-6xl"
            >
              <p className="inline bg-teal-300 px-4 py-2">We pour love</p>{" "}
              <p className="bg-teal-300 px-4 py-2">into our coffee</p>
            </m.h1>
            <m.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                ease: "easeOut",
                duration: 0.5,
                bounce: 0.5, // Adjust the bounce value as needed
              }}
              className="w-64 rounded-lg bg-neutral-100 bg-opacity-75 p-2 [text-wrap:balance]"
            >
              <m.p
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  ease: "easeOut",
                  duration: 0.5,
                  bounce: 0.5, // Adjust the bounce value as needed
                  delay: 0.1,
                }}
              >
                Imagine having a safe space with your loved ones!
              </m.p>
              <m.p
                initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  ease: "easeOut",
                  duration: 0.5,
                  bounce: 0.5, // Adjust the bounce value as needed
                  delay: 0.2,
                }}
              >
                Share your passion for coffee by visiting our new couple lounge
                and have some warm hugs - like pandas!
              </m.p>
            </m.span>
            <m.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                ease: "easeOut",
                duration: 0.5,
                bounce: 0.5, // Adjust the bounce value as needed
                delay: 0.3,
              }}
            >
              <Link
                href="#"
                className="rounded-full bg-black px-4 py-2 text-white transition-all hover:bg-orange-900 hover:shadow-lg"
              >
                Find the nearest café
              </Link>
            </m.div>
          </div>
          <m.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              ease: "easeOut",
              duration: 0.5,
              bounce: 0.5, // Adjust the bounce value as needed
              delay: 0.3,
            }}
            className="absolute right-0"
          >
            <Image
              src="/couple.jpeg"
              width={450}
              height={300}
              className="w-64 translate-y-5 rounded-lg sm:w-[25rem] lg:translate-y-0"
              alt="Panda coffee couple"
            />
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
}
