import { useState } from "react";
import { Container } from "./container";
import OutsideClickHandler from "react-outside-click-handler";

type HeaderProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

type ClassNameProps = {
  className: string;
};

type HeaderHamburgerProps = {
  icon: string;
  toggleDark: () => void;
};

const HeaderHamburger = ({ icon, toggleDark }: HeaderHamburgerProps) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="py-5 sm:hidden">
      <div className="flex justify-between">
        <button
          className="text-slate-950 dark:text-slate-50 text-2xl"
          onClick={toggleDark}
        >
          {icon}
        </button>
        <button
          className="text-slate-950 dark:text-slate-50 text-2xl"
          onClick={() => setNav(!nav)}
        >
          menu
        </button>
      </div>
      <OutsideClickHandler onOutsideClick={() => setNav(false)}>
        <div
          data-nav={nav}
          className="flex flex-col justify-center items-center space-y-12 fixed top-0 -left-72 data-[nav=true]:translate-x-72 h-screen w-72 bg-slate-200 dark:bg-slate-800 transition duration-300"
        >
          <button
            className="absolute top-4 left-4 bg-slate-950 px-4 py-2 cursor-pointer rounded-full"
            onClick={() => setNav(false)}
          >
            close
          </button>
          <a className="text-slate-950 dark:text-slate-50 text-lg" href="#home">
            home
          </a>
          <a
            className="text-slate-950 dark:text-slate-50 text-lg"
            href="#brief"
          >
            brief
          </a>
          <a className="text-slate-950 dark:text-slate-50 text-lg" href="#text">
            text
          </a>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

const HeaderDefault = ({ toggleDark, icon }: HeaderHamburgerProps) => {
  return (
    <div className="hidden sm:flex py-5 justify-between">
      <a className="text-slate-950 dark:text-slate-50" href="#home">
        home
      </a>
      <a className="text-slate-950 dark:text-slate-50" href="#brief">
        brief
      </a>
      <a className="text-slate-950 dark:text-slate-50" href="#text">
        text
      </a>

      <button
        className="text-slate-950 dark:text-slate-50"
        onClick={toggleDark}
      >
        {icon}
      </button>
    </div>
  );
};

const Header = ({ dark, setDark }: HeaderProps) => {
  const icon = dark ? "dark" : "light";

  const toggleDark = () => setDark(!dark);

  const props = {
    icon,
    toggleDark,
  };

  return (
    <Container>
      <HeaderHamburger {...props} />
      <HeaderDefault {...props} />
    </Container>
  );
};

export { Header };
