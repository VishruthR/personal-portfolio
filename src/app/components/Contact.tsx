import { BREAKPOINTS } from "@/data/utils";
import { useBreakpoint } from "use-breakpoint";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isDesktop = breakpoint === "desktop";
  const isMobile = breakpoint === "mobile";

  return (
    <a
      className={`flex py-2 mb-2 items-center ${
        isMobile ? "border-b-2" : "border-t-2"
      } border-b-white opacity-50`}
      href="mailto:vishraj248@gmail.com"
    >
      <MdEmail color="white" size={16} />
      <a className="text-white text-sm pl-2 leading-none">
        <p>vishraj248@gmail.com</p>
      </a>
    </a>
  );
};

export default Contact;
