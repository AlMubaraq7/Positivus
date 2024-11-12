import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";
import Button from "./Button";
import { useEffect, useRef } from "react";
export const Hamburger = () => {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);
  const bgVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.5,
        delay: 0.2,
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);
  return (
    <>
      <MotionConfig transition={{ mass: 0.5 }}>
        <motion.button
          className="relative size-14 block lg:hidden"
          onClick={() => setActive((pv) => !pv)}
          initial={false}
          animate={active ? "open" : "closed"}
          exit="closed"
        >
          <motion.span
            style={{
              left: "50%",
              top: "32%",
              x: "-35%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["32%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "32%"],
              },
            }}
            className="absolute h-1 w-9 bg-dark"
          ></motion.span>
          <motion.span
            style={{
              left: "50%",
              top: "50%",
              x: "-35%",
              y: "-50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
              },
            }}
            className="absolute h-1 w-9 bg-dark"
          ></motion.span>
          <motion.span
            style={{
              left: "72.5%",
              bottom: "32%",
              x: "-50%",
              y: "50%",
            }}
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                bottom: ["32%", "50%", "50%"],
                left: "59%",
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                bottom: ["50%", "50%", "32%"],
                left: "72.5%",
              },
            }}
            className="absolute h-1 w-5 bg-dark"
          ></motion.span>
        </motion.button>
      </MotionConfig>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={bgVariant}
            initial="hidden"
            animate={active ? "visible" : "hidden"}
            exit="hidden"
            className="fixed flex items-center justify-center top-0 left-0 h-screen w-full backdrop-blur-md z-30"
          >
            <motion.nav
              ref={navRef}
              className="px-16 py-6 shadow-xl  bg-white flex flex-col items-center gap-6  border border-white rounded-3xl"
            >
              <motion.ul className="font-normal text-lg flex flex-col items-center gap-6 cursor-pointer">
                <motion.li className="hover:motion-preset-shake">
                  About us
                </motion.li>
                <motion.li className="hover:motion-preset-shake">
                  Services
                </motion.li>
                <motion.li className="hover:motion-preset-shake">
                  Use Cases
                </motion.li>
                <motion.li className="hover:motion-preset-shake">
                  Pricing
                </motion.li>
                <motion.li className="hover:motion-preset-shake">
                  Blog
                </motion.li>
              </motion.ul>
              <Button variant="outline">Request a quote</Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Hamburger;
