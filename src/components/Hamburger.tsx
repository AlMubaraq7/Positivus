import { motion } from "framer-motion";
import { useState } from "react";
export const Hamburger = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.button className="relative size-14">
      <motion.span
        style={{
          left: "50%",
          top: "35%",
          x: "-35%",
          y: "-50%",
        }}
        className="absolute h-1 w-7 bg-dark"
      ></motion.span>
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-35%",
          y: "-50%",
        }}
        className="absolute h-1 w-7 bg-dark"
      ></motion.span>
      <motion.span
        style={{
          left: "70%",
          bottom: "35%",
          x: "-50%",
          y: "50%",
        }}
        className="absolute h-1 w-[14px] bg-dark"
      ></motion.span>
    </motion.button>
  );
};
export default Hamburger;
