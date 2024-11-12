import T1 from "/public/T-1.png";
import T2 from "/public/T-2.png";
import T3 from "/public/T-3.png";
import T4 from "/public/T-4.png";
import T5 from "/public/T-5.png";
import T6 from "/public/T-6.png";
import T1mob from "/public/T-1-mobile.png";
import T2mob from "/public/T-2-mobile.png";
import T3mob from "/public/T-3-mobile.png";
import T4mob from "/public/T-4-mobile.png";
import T5mob from "/public/T-5-mobile.png";
import T6mob from "/public/T-6-mobile.png";

export const TestimonialItem = () => {
  return (
    <>
      <img src={T1.src} alt="1" className=" hidden sm:block" />
      <img src={T2.src} alt="2" className=" hidden sm:block" />
      <img src={T3.src} alt="3" className=" hidden sm:block" />
      <img src={T4.src} alt="4" className=" hidden sm:block" />
      <img src={T5.src} alt="5" className=" hidden sm:block" />
      <img src={T6.src} alt="6" className=" hidden sm:block" />

      <img src={T1mob.src} alt="1" className=" block sm:hidden" />
      <img src={T2mob.src} alt="2" className=" block sm:hidden" />
      <img src={T3mob.src} alt="3" className=" block sm:hidden" />
      <img src={T4mob.src} alt="4" className=" block sm:hidden" />
      <img src={T5mob.src} alt="5" className=" block sm:hidden" />
      <img src={T6mob.src} alt="6" className=" block sm:hidden" />
    </>
  );
};
export default TestimonialItem;
