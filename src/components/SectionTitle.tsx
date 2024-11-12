import { useRef } from "react";
import { useInView } from "framer-motion";
import clsx from "clsx";
interface Props {
  title: string;
  description: string;
}
const SectionTitle = ({ description, title }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  return (
    <div
      ref={ref}
      className="w-full flex flex-col text-center md:text-left md:flex-row items-center gap-10"
    >
      <div
        className={clsx(
          "w-fit bg-primary border border-primary text-black text-center rounded-md p-2 motion-ease-spring-bouncy motion-duration-500",
          isInView ? "motion-scale-in-0" : "motion-scale-out-0"
        )}
      >
        <h2
          className={clsx(
            "text-3xl sm:text-4xl font-medium whitespace-nowrap  motion-ease-spring-bouncy motion-delay-700",
            isInView ? "motion-opacity-in-0" : "motion-opacity-out-0"
          )}
        >
          {title}
        </h2>
      </div>
      <p
        className={clsx(
          "text-base sm:text-lg max-w-xl motion-ease-spring-bouncy motion-delay-700",
          isInView ? "motion-blur-in-sm" : "motion-blur-out-sm"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
