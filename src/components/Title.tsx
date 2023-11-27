const Title = ({ title, subtitle, url, linkText }) => {
  return (
    <div className="bg-[#F5F6F7] py-20 md:py-40">
      <div className=" flex flex-col justify-center items-center max-w-4xl mx-2 md:mx-auto text-center">
        <p className="pb-4 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400 md:text-6xl md:max-w-4xl">
          {title}
        </p>
        <p className="max-w-sm md:max-w-2xl text-lg">{subtitle}</p>

        <div className="flex gap-10 mt-5">
          {url !== "" && (
            <button className="w-full px-6 py-2.5 my-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 md:my-0 focus:outline-none bg-black rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              <a href={url}>{linkText}</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
