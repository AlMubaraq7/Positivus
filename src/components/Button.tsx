import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "outline";
}
export const Button = ({ variant, className, children }: ButtonProps) => {
  return (
    <button
      className={clsx(
        `py-4 px-9 cursor-pointer text-center w-fit rounded-lg transition-colors duration-150 hover:motion-preset-seesaw-sm`,
        variant === "primary" &&
          "bg-dark text-white border border-dark hover:bg-transparent hover:text-black",
        variant === "secondary" && "bg-primary text-black",
        variant === "outline" &&
          "bg-transparent border border-gray-950 hover:bg-primary hover:border-primary ",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
