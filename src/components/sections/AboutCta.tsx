const AboutCta = () => {
  return (
    <div className="h-auto w-full text-white bg-black pb-20">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 p-5 sm:p-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Understand User Flow.
                <span className="sm:block"> Increase Conversion. </span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Stay ahead of the competition by effortlessly comparing prices
                and market trends with our intuitive comparison tools.
              </p>

              {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
