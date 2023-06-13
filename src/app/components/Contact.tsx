import { BREAKPOINTS } from "@/data/utils";
import { useBreakpoint } from "use-breakpoint";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isDesktop = breakpoint === "desktop";
  const isMobile = breakpoint === "mobile";

  if (isMobile) {
    return (
      <a
        className="flex pb-2 mb-1 items-center border-b-2 border-b-white opacity-50"
        href="mailto:vishraj248@gmail.com"
      >
        <MdEmail color="white" size={16} />
        <a className="text-white text-sm pl-2 leading-none">
          <p>vishraj248@gmail.com</p>
        </a>
      </a>
    );
  }

  return (
    <div>
      {isDesktop && (
        <p className="text-white font-bold underline text-xl pb-2">
          Contact Me
        </p>
      )}
      <a className="flex pb-3 items-center" href="mailto:vishraj248@gmail.com">
        <MdEmail color="white" size={24} />
        <a className="text-white font-semibold pl-3 leading-none">
          <p>vishraj248@gmail.com</p>
        </a>
      </a>
    </div>
  );
};

export default Contact;
