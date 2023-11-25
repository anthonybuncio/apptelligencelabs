const Title = ({ title, subtitle, url, linkText }) => {
  return (
    <div className="bg-[#F5F6F7] pt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-4xl mb-10 md:mx-auto text-center md:mb-12">
          <div className=" flex flex-col justify-center items-center">
            <p className="py-4 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
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
      </div>
    </div>
  );
};

export default Title;
