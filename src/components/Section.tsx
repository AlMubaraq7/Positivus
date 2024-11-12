import clsx from "clsx";

interface Props extends React.SelectHTMLAttributes<HTMLDivElement> {}

export const Section = ({ children, className }: Props) => {
  return (
    <section
      className={clsx(
        `container py-12 px-6 sm:px-16 max-w-[1280px]`,
        className
      )}
    >
      {children}
    </section>
  );
};
export default Section;
