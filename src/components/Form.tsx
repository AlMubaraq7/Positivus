import Button from "./Button";
export const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-full rounded-3xl bg-gray-100 overflow-hidden py-16 px-16 h-[700px] flex flex-col xl:items-stretch relative gap-12">
      <form onSubmit={handleSubmit}>
        <fieldset className=" flex flex-col gap-6">
          <div className="flex gap-6 *:flex *:justify-center *:items-center *:gap-2 *:relative whitespace-nowrap">
            <div>
              <input
                type="radio"
                name="choice"
                id="choice1"
                value="Say Hi"
                className="size-6 appearance-none border-black bg-white rounded-full border transition-all peer"
              />
              <label htmlFor="choice1">Say Hi</label>
              <span className="size-4 bg-primary rounded-full absolute top-1 left-1 hidden opacity-0 peer-checked:opacity-100 peer-checked:block transition-all motion-duration-500 motion-preset-pop"></span>
            </div>
            <div>
              <input
                type="radio"
                name="choice"
                id="choice2"
                value="Get Quote"
                className="size-6 appearance-none border-black bg-white rounded-full border transition-all peer"
              />
              <label htmlFor="choice2">Get Quote</label>
              <span className="size-4 bg-primary rounded-full absolute top-1 left-1 hidden opacity-0 peer-checked:opacity-100 peer-checked:block transition-all motion-preset-pop motion-duration-500"></span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-4 border border-black rounded-lg w-full xl:w-[59.5%]"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-4 border border-black rounded-lg w-full xl:w-[59.5%]"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="p-4 border border-black rounded-lg w-full xl:w-[59.5%] h-[200px]"
              placeholder="Message"
            ></textarea>
          </div>
          <Button
            variant="primary"
            className="w-full xl:w-[59.5%]"
            type="submit"
          >
            Send Message
          </Button>
        </fieldset>
      </form>
      <img
        src="/public/contact.svg"
        alt="contact"
        className="hidden xl:block xl:absolute xl:top-0 xl:-right-80"
      />
    </div>
  );
};

export default Form;
