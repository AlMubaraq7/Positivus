import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { accordionData } from "../data/accordionData";

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="w-full flex flex-col gap-8">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          number={item.number}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};
export default Accordion;
