// kayen li t9olhom w kayen li non
"use client";
import { motion } from "framer-motion";

import { GoArrowRight, GoBook } from "react-icons/go";
import TransitionLink from "@/components/animations/TransitionLink";
import Faq from "@/components/Faq";
export default async function Index() {
  return (
    <>
      <button className="right-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none">
        <a href="https://stevehoang.com" target="_blank">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"></path>
          </svg>
        </a>
      </button>
      <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto sm:max-w-xl  lg:w-full text-center w-3/4">
          <motion.h1
            className="text-5xl text_gradient mb-5"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            Empowering SME
            <br />
            Unlocking potentials
          </motion.h1>
          <motion.p
            className="mt-4 sm:text-xl/relaxed mb-5 text_gradient"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            Be the first to enter the one-stop logistics future!
          </motion.p>
          <motion.div
            className="mt-8 flex sm:flex-row flex-col items-center justify-center gap-4 mb-5 "
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            <TransitionLink
              color="inverted"
              cn="block w-full rounded px-12 py-4 text-sm font-medium shadow focus:outline-none  active:text-grey-500 max-w-40"
              label="Join the Waitlist"
              href="/contact_us"
              svg={{ component: <GoArrowRight className="ml-2" /> }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
