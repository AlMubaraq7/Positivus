import { useRef } from "react";
import { useInView, inView } from "framer-motion";
import clsx from "clsx";
export const CaseStudy = () => {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const mobileIsInView = useInView(mobileRef, { once: true, margin: "-200px" });
  const desktopIsInView = useInView(desktopRef, {
    once: true,
    margin: "-200px",
  });

  return (
    <>
      <div
        className="hidden lg:flex bg-dark py-16 px-14 rounded-3xl"
        ref={desktopRef}
      >
        <div className="pr-14 border-r border-white flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-md",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div
            className={clsx(
              "flex items-center gap-4 cursor-pointer",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-delay-[1200ms] motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            <span className="text-primary text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary motion-rotate-in-[30deg] hover:motion-rotate-out-[30deg] motion-duration-500 motion-ease-spring-snappy"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
        <div className="px-14 border-r border-white flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-md",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div
            className={clsx(
              "flex items-center gap-4 cursor-pointer",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-delay-[1200ms] motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            <span className="text-primary text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary motion-rotate-in-[30deg] hover:motion-rotate-out-[30deg] motion-duration-500 motion-ease-spring-snappy"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
        <div className="pl-14 flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-md",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div
            className={clsx(
              "flex items-center gap-4 cursor-pointer",
              desktopIsInView
                ? "motion-preset-slide-up-md motion-delay-[1200ms] motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            <span className="text-primary text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary motion-rotate-in-[30deg] hover:motion-rotate-out-[30deg] motion-duration-500 motion-ease-spring-snappy"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
      </div>
      {/* FOR <= 1024PX */}

      <div
        ref={mobileRef}
        className="flex flex-col lg:hidden gap-6 rounded-3xl py-16 px-3 sm:px-14 *:py-14 *:px-8 *:rounded-2xl"
      >
        <div className="bg-dark flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-base sm:text-lg",
              mobileIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-primary text-lg sm:text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
        <div className="bg-dark flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-base sm:text-lg",
              mobileIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-primary text-lg sm:text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
        <div className="bg-dark flex flex-col gap-6">
          <p
            className={clsx(
              "text-white text-base sm:text-lg",
              mobileIsInView
                ? "motion-preset-slide-up-md motion-duration-1000 motion-opacity-in-0"
                : "motion-opacity-out-0"
            )}
          >
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <span className="text-primary text-lg sm:text-xl">Learn more</span>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="fill-primary stroke-primary"
            >
              <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudy;
