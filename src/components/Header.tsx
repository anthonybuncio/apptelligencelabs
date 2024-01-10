const Header = () => {
  return (
    <header className=" sticky top-0 left-0 w-full bg-white/80 z-50 p-2">
      <div className="container mx-auto flex justify-between gap-5 sm:gap-0 font-light text-sm items-center flex-wrap">
        <div className="">
          <a href="/" className=" flex content-center">
            <svg
              viewBox="0 0 1024 1024"
              className="w-8 h-8 sm:w-10 sm:h-10 icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M287.434 135.586l44.297 161.358-265.566-18.282c-0.766 0-1.395-1.953-2.165-1.892l223.434-141.184zM960 282.437H693.833l43.3-146.851z"
                  fill="#FCB814"
                ></path>
                <path
                  d="M692.837 296.944H331.731l-44.297-161.358h449.699z"
                  fill="#FCB814"
                ></path>
                <path
                  d="M692.837 296.944H331.731l-44.297-161.358h449.699z"
                  fill=""
                ></path>
                <path
                  d="M693.833 282.437L515.577 888.414 332.349 278.662z"
                  fill="#FCB814"
                ></path>
                <path
                  d="M332.349 278.662l183.228 609.752L66.165 278.662z"
                  fill="#FCB814"
                ></path>
                <path
                  d="M332.349 278.662l183.228 609.752L66.165 278.662z"
                  fill=""
                ></path>
                <path
                  d="M693.833 282.437H960L515.577 888.414z"
                  fill="#FCB814"
                ></path>
                <path d="M693.833 282.437H960L515.577 888.414z" fill=""></path>
              </g>
            </svg>
            <p className="hidden md:block text-xl p-2">elite labs.</p>
          </a>
        </div>

        <ul className="flex items-center gap-2 text-xs sm:text-sm ">
          <li className="">
            <a className="rounded-lg px-3 py-2 hover:text-gray-500" href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="rounded-lg px-3 py-2 hover:text-gray-500"
              href="/services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="rounded-lg px-3 py-2 hover:text-gray-500"
              href="/about"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="rounded-lg px-3 py-2 hover:text-gray-500"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
