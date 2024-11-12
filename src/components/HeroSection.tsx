import Button from "./Button";
import Hero from "/public/hero.svg";
import { clsx } from "clsx";
import { motion } from "framer-motion";
const HeroSection = () => {
  const titleVariant = {
    hidden: { opacity: 0, x: -100, scale: 0.86 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 8,
      },
    },
  };
  const descVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 10,
        delay: 0.9,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.85,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 8,
        delay: 0.7,
      },
    },
  };

  const buttonVariant = {
    hidden: { filter: "blur(3px)" },
    visible: {
      filter: "blur(0px)",
    },
  };
  return (
    <motion.div className="flex justify-between items-center sm:mt-10 overflow-hidden">
      <motion.div className="flex flex-col justify-center items-center w-full gap-8 flex-1 sm:text-center lg:justify-normal lg:items-stretch  lg:max-w-xl lg:text-left">
        <motion.h1
          initial={titleVariant.hidden}
          whileInView={titleVariant.visible}
          viewport={{
            once: true,
          }}
          className={clsx("text-5xl sm:text-6xl font-medium leading-[1.15]")}
        >
          Navigating the digital landscape for success
        </motion.h1>
        <motion.div
          initial={imageVariant.hidden}
          whileInView={imageVariant.visible}
          viewport={{
            once: true,
            margin: "-200px",
          }}
          className={clsx("block w-[350px] sm:w-[450px] lg:hidden")}
        >
          <motion.img src={Hero.src} alt="Hero" className="object-contain" />
        </motion.div>
        <motion.p
          initial={descVariant.hidden}
          whileInView={descVariant.visible}
          viewport={{
            once: true,
          }}
          className={clsx("text-base sm:text-xl max-w-lg")}
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </motion.p>
        <motion.div
          initial={buttonVariant.hidden}
          whileInView={buttonVariant.visible}
          viewport={{
            once: true,
          }}
        >
          <Button variant="primary" className={clsx("w-full lg:w-fit")}>
            Book a consultation
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={imageVariant.hidden}
        whileInView={imageVariant.visible}
        viewport={{
          once: true,
        }}
        className={clsx("hidden lg:block max-w-[500px] flex-1")}
      >
        <motion.img src={Hero.src} alt="Hero" className="object-contain" />
      </motion.div>
    </motion.div>
  );
};
export default HeroSection;
