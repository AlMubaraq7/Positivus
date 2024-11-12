import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";
interface Props {
  service: [string, string];
  image: ImageMetadata;
  bgColor: "green" | "black" | "grey";
}
export const ServiceCardItem = ({
  bgColor,
  image,
  service: [top, bottom],
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  return (
    <div
      ref={ref}
      className={clsx(
        `w-fit md:w-5/6 lg:w-full border border-dark rounded-[40px] sm:rounded-3xl px-12 py-8 h-fit lg:h-64 xl:h-72 shadow-card flex justify-between gap-8`,
        bgColor === "green" && "bg-primary",
        bgColor === "grey" && "bg-gray-100",
        bgColor === "black" && "bg-dark"
      )}
    >
      <div className="flex flex-col justify-between whitespace-nowrap">
        <div
          className={clsx(
            `flex flex-col text-2xl xl:text-3xl font-medium *:border *:rounded-lg *:max-w-fit *:p-1 motion-ease-spring-bouncy motion-duration-500`,
            isInView ? "motion-scale-in-0" : "motion-scale-out-0",
            bgColor === "grey"
              ? "*:bg-primary *:text-black  *:border-primary"
              : "*:bg-white *:text-black *:border-white"
          )}
        >
          <h2>{top}</h2>
          <h2>{bottom}</h2>
        </div>
        <div
          className={clsx(
            "flex items-center gap-16 sm:gap-3 cursor-pointer motion-ease-spring-bouncy motion-duration-700",
            isInView
              ? "motion-translate-y-in-50 motion-opacity-in-0"
              : "motion-translate-y-out-50 motion-opacity-out-0"
          )}
        >
          <div
            className={clsx(
              `size-11 rounded-full relative motion-rotate-in-[30deg] hover:motion-rotate-out-[30deg] motion-duration-500 motion-ease-spring-snappy`,
              bgColor === "black" ? "bg-white" : "bg-dark"
            )}
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className={clsx(
                ` absolute top-3 left-3`,
                bgColor === "black"
                  ? "stroke-dark fill-dark"
                  : "stroke-primary fill-primary"
              )}
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
          <span
            className={clsx(
              `lg:text-lg xl:text-xl hidden sm:block`,
              bgColor === "black" ? "text-white" : "text-black"
            )}
          >
            Learn more
          </span>
          <div
            className={clsx(
              "block sm:hidden w-24",
              isInView
                ? "motion-blur-in-sm motion-scale-in-0"
                : "motion-blur-out-sm"
            )}
          >
            <img src={image.src} alt={top} className="aspect-square" />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "hidden sm:block lg:min-w-40 xl:min-w-56 motion-ease-spring-bouncier motion-delay-700",
          isInView
            ? "motion-blur-in-sm motion-scale-in-0"
            : "motion-blur-out-sm motion-scale-out-0"
        )}
      >
        <img src={image.src} alt={top} className="aspect-square" />
      </div>
    </div>
  );
};
export default ServiceCardItem;
