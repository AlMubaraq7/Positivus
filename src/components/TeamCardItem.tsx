import { useRef } from "react";
import { useInView } from "framer-motion";
import DarkLinkedIn from "../../public/linkedIn-dark.svg";
import clsx from "clsx";
interface Props {
  image: ImageMetadata;
  name: string;
  occupation: string;
  bio: string;
}

export const TeamCardItem = ({ bio, image, name, occupation }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });
  return (
    <div
      ref={ref}
      className={clsx(
        "max-w-sm border border-black rounded-3xl p-8 flex flex-col gap-4 shadow-card relative sm:h-80 lg:h-[300px] xl:h-72 motion-ease-spring-bouncy motion-duration-500",
        isInView
          ? "motion-opacity-in-0 motion-scale-in-110"
          : "motion-opacity-out-0"
      )}
    >
      <div className="flex gap-4">
        <div
          className={clsx(
            "lg:min-w-24 xl:min-w-28 motion-ease-spring-bouncier motion-delay-700",
            isInView ? "motion-blur-in-sm motion-scale-in-0" : ""
          )}
        >
          <img src={image.src} alt={name} className="object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <h4
            className={clsx(
              "text-lg font-medium text-nowrap motion-delay-700",
              isInView ? "motion-blur-in-sm" : ""
            )}
          >
            {name}
          </h4>
          <p
            className={clsx(
              "text-base motion-delay-700",
              isInView ? "motion-blur-in-sm" : ""
            )}
          >
            {occupation}
          </p>
        </div>
        <div
          className={clsx(
            "absolute top-4 right-6 self-start size-7 rounded-full motion-ease-spring-bouncier motion-delay-1000",
            isInView ? "motion-scale-in-0" : ""
          )}
        >
          <img
            src={DarkLinkedIn.src}
            alt="linkedin"
            className="object-contain"
          />
        </div>
      </div>
      <hr className="border-black" />
      <div
        className={clsx(
          "text-base motion-delay-700",
          isInView ? "motion-blur-in-sm" : ""
        )}
      >
        {bio}
      </div>
    </div>
  );
};
export default TeamCardItem;
