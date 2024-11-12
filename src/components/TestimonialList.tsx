import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { testimonialData } from "../data/testimonialData";
import CarouselDot from "./CarouselDot";
import clsx from "clsx";
import TestimonialItem from "./TestimonialItem";
import ArrowLeft from "/public/arrowL.svg";
import ArrowRight from "/public/arrowR.svg";

export const TestimonialList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
  });
  return (
    <div
      {...handlers}
      className="w-full rounded-3xl bg-dark overflow-hidden py-16 h-[600px] flex flex-col justify-around gap-8"
    >
      <div
        className={clsx(
          `hidden lg:flex gap-20 transition-transform duration-500 w-[70%] ml-auto *:w-[80%] *:object-cover`
        )}
        style={{
          transform: `translateX(calc(-${currentIndex * 90}% ))`,
        }}
      >
        <TestimonialItem />
      </div>
      <div
        {...handlers}
        className={clsx(
          `hidden md:flex lg:hidden gap-20 transition-transform duration-500 w-[80%] ml-auto *:w-[90%] *:object-cover`
        )}
        style={{
          transform: `translateX(calc(-${currentIndex * 105}% ))`,
        }}
      >
        <TestimonialItem />
      </div>
      <div
        {...handlers}
        className={clsx(
          `hidden sm:flex md:hidden gap-20 transition-transform duration-500 w-[90%] ml-auto *:w-[95%] *:object-cover`
        )}
        style={{
          transform: `translateX(calc(-${currentIndex * 111.5}% ))`,
        }}
      >
        <TestimonialItem />
      </div>
      <div
        {...handlers}
        className={clsx(
          `flex sm:hidden gap-20 transition-transform duration-500 w-[90%] ml-auto *:w-[80%] *:object-cover`
        )}
        style={{
          transform: `translateX(calc(-${currentIndex * 101.5}% ))`,
        }}
      >
        <TestimonialItem />
      </div>
      <div className="flex gap-16 [&_img]:cursor-pointer w-fit self-center">
        <img
          src={ArrowLeft.src}
          alt="arrowLeft"
          onClick={prevSlide}
          className="hidden md:block"
        />
        <div className="flex gap-4 self-end">
          {testimonialData.map((_, index) => (
            <CarouselDot
              key={index}
              className={clsx(
                `cursor-pointer`,
                index === currentIndex
                  ? "fill-primary motion-preset-pop"
                  : "fill-white"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <img
          src={ArrowRight.src}
          alt="arrowRight"
          onClick={nextSlide}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};
export default TestimonialList;
