import Button from "./Button";
import { motion, MotionConfig } from "framer-motion";
export const CtaContent = () => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        mass: 0.9,
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 gap-6"
      >
        <motion.h3
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
          className="text-2xl md:text-3xl font-medium"
        >
          Let ’s make things happen
        </motion.h3>
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
          className="text-base md:text-lg"
        >
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
        >
          <Button variant="primary" className="text-lg md:text-xl text-nowrap">
            Get your proposal
          </Button>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default CtaContent;
