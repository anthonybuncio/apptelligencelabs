const ExampleServices = ({ title }) => {
  return (
    <div className="h-auto w-full text-white bg-black py-20 md:py-40">
      <div className="flex flex-col items-center justify-center px-4 mx-auto sm:max-w-xl md:max-w-full md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl p-5 sm:p-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className=" flex flex-col justify-center items-center">
              <p className="text-5xl font-semibold">{title}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/analytics"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-device-analytics"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"></path>
              <path d="M7 20l10 0"></path>
              <path d="M9 16l0 4"></path>
              <path d="M15 16l0 4"></path>
              <path d="M8 12l3 -3l2 2l3 -3"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">Data Insights</h2>

            <p className="mt-1 text-sm text-gray-300">
              Unlock valuable business intelligence with our comprehensive data
              scraping and analysis tools.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/ecommerce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-discount-check"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1"></path>
              <path d="M9 12l2 2l4 -4"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Price Comparison
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Stay ahead of the competition by effortlessly comparing prices and
              market trends with our intuitive comparison tools.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/apps"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-subtask"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 9l6 0"></path>
              <path d="M4 5l4 0"></path>
              <path d="M6 5v11a1 1 0 0 0 1 1h5"></path>
              <path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
              <path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Workflow Automation
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Streamline your operations and save time with our custom-built web
              bots and scripts that automate repetitive tasks.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/apps"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-app-window"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
              <path d="M6 8h.01"></path>
              <path d="M9 8h.01"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Custom Web Applications
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Bring your unique business ideas to life with our tailored web
              applications designed to meet your specific requirements.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/consulting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-puzzle"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Seamless Integration
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Integrate our powerful software solutions seamlessly into your
              existing systems for enhanced efficiency and productivity.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/cloud"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 icon icon-tabler icon-tabler-businessplan"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0"></path>
              <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"></path>
              <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"></path>
              <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4"></path>
              <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
              <path d="M5 15v1m0 -8v1"></path>
            </svg>

            <h2 className="mt-4 text-xl font-bold text-white">
              Scalable Solutions
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Grow your business without limitations using our scalable software
              solutions that adapt to your evolving needs.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExampleServices;
