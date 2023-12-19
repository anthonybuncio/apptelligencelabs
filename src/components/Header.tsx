import logo from "../assets/a-icon.png";

const Header = () => {
  return (
    <header className=" sticky top-0 left-0 w-full bg-white/80 z-50 p-2">
      <div className="container mx-auto flex justify-between gap-5 sm:gap-0 font-light text-sm items-center flex-wrap">
        <div className="">
          <a href="/" className=" flex content-center">
            <img src={logo} alt="icons" className="w-8 h-8 sm:w-10 sm:h-10" />
            <p className="hidden md:block text-xl p-2">apptelligence labs.</p>
          </a>
        </div>

        <ul className="flex items-center gap-2 text-xs sm:text-sm ">
          <li className="">
            <a className="rounded-lg px-3 py-2" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/services">
              Services
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/about">
              About Us
            </a>
          </li>
          <li>
            <a className="rounded-lg px-3 py-2" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
