import clsx from "clsx";
import { motion } from "framer-motion";

interface AccordionItemProps {
  number: string;
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}
export const AccordionItem = ({
  number,
  content,
  isActive,
  onClick,
  title,
}: AccordionItemProps) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className={clsx(
        `p-6 md:px-16 md:py-14 flex flex-col gap-3 sm:gap-5 transition-all duration-500 ease-linear shadow-card border border-black rounded-3xl min-w-80
        `,
        isActive ? "bg-primary" : "bg-gray-100"
      )}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        margin: "-200px",
        once: true,
      }}
    >
      <motion.div className="flex items-center justify-between gap-4 md:gap-6">
        <motion.span className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-medium">
          {number}
        </motion.span>
        <motion.span className="text-base font-medium sm:text-lg md:text-2xl lg:text-3xl whitespace-nowrap sm:whitespace-normal">
          {title}
        </motion.span>
        <motion.button
          className="appearance-none flex items-center justify-center  cursor-pointer text-2xl size-11 md:text-5xl lg:size-16 lg:text-6xl font-semibold ml-0 sm:ml-auto"
          onClick={onClick}
        >
          {isActive ? "-" : "+"}
        </motion.button>
      </motion.div>
      <motion.hr
        className={clsx(isActive ? "border-black" : "border-none hidden")}
      />
      <motion.div
        className={clsx(
          `text-[14px] md:text-lg`,
          isActive
            ? "motion-preset-slide-down-md motion-opacity-in-0"
            : "hidden"
        )}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};
