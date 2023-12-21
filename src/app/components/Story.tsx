"use client";

import { useRef } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <LazyMotion features={domAnimation}>
      <m.div
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
        className="flex-center w-full bg-orange-200 py-8 lg:py-16"
      >
        <div className="flex-center container relative mx-4 w-full max-w-[60rem] flex-col lg:h-[30rem] lg:flex-row">
          <div className="lg:w-1/2">
            <m.div
              ref={ref}
              style={{
                transform: isInView ? "translateX(0)" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="flex-center relative z-0"
            >
              <Image
                src="/heroblobleft.svg"
                width={700}
                height={500}
                className="absolute left-0 top-0 z-0 lg:left-auto lg:top-auto"
                alt="Panda coffee couple"
              />
            </m.div>
            <m.div
              style={{
                transform: isInView ? "translateX(0)" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="flex-center relative w-full"
            >
              <Image
                src="/cafeoutside.webp"
                width={500}
                height={300}
                className="relative left-0 z-10 h-auto w-fit rounded-2xl shadow-xl lg:absolute lg:h-[20rem]"
                alt="Panda coffee couple"
              />
            </m.div>
          </div>
          <m.div
            ref={ref}
            style={{
              transform: isInView ? "translateX(0)" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="container z-20 flex w-full flex-col lg:w-1/2"
          >
            <m.div
              style={{
                transform: isInView ? "translateX(0)" : "translateX(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="absolute bottom-0 right-0"
            >
              <Image
                src="/coffeebeans.svg"
                width={100}
                height={100}
                className=" z-10 h-[5rem]"
                alt="Coffee beans"
              />
            </m.div>
            <div className="flex flex-col gap-4 px-4 py-8 [text-wrap:balance] lg:px-16">
              <h1 className="text-6xl font-medium">Our Story</h1>
              <span>
                From a shared dream between us, our cafe has transformed into a
                haven for couples seeking intimate moments. What started as an
                idea fueled by our love has blossomed into an inviting space
                radiating romance.
              </span>
              <span>
                Every corner tells the story of our journey—a tale of love,
                dedication, and creating a place where couples can share in
                beautiful moments together.
              </span>
              <span>
                Join us in this love-filled space, where each sip and every
                glance shared become cherished memories for couples embracing
                their love story.
              </span>
              <div>
                <button className="rounded-full bg-orange-900 px-4 py-2 text-white transition-colors hover:bg-black">
                  Learn more
                </button>
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
