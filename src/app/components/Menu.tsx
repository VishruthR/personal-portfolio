import { ReactNode, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <GiHamburgerMenu
        color="white"
        size={32}
        className="mx-4 cursor-pointer"
        onClick={toggleIsOpen}
      />
    );
  }

  return (
    <div
      className={`fixed top-0 h-screen bg-darkGray md:w-2/5 sm:w-1/2 right-0`}
      onBlur={toggleIsOpen}
    >
      <div className="flex justify-end w-100 py-3">
        <AiOutlineClose
          color="white"
          size={32}
          className="mx-4 cursor-pointer"
          onClick={toggleIsOpen}
        />
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};
