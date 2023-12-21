"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";

export default function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex-center w-full bg-orange-300 px-4 py-16">
        <div className="flex-center max-w-[60rem] flex-col gap-4">
          <div className="flex-center max-w-[20rem] flex-col gap-4 text-center [text-wrap:balance]">
            <m.h1
              ref={ref}
              style={{
                transform: isInView ? "translateY(0)" : "translateY(-100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
              className="text-6xl"
            >
              Newsletter
            </m.h1>
            <m.p
              style={{
                transform: isInView ? "translateX(0)" : "translateX(-50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
              🎉 Get ready for a new cafe experience coming to your
              neighborhood! ☕️
            </m.p>
            <m.p
              style={{
                transform: isInView ? "translateX(0)" : "translateX(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
              }}
            >
              Stay in the loop about our opening specials and events by signing
              up for our newsletter here
            </m.p>
            <m.input
              style={{
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
              }}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg px-4 py-2"
            ></m.input>
            <m.div
              style={{
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s",
              }}
            >
              <button
                type="submit"
                className="w-full rounded-full bg-black px-4 py-2 text-white"
              >
                Subscribe
              </button>
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
