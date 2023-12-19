import Title from "../components/Title";
import ServicesGrid from "../components/sections/ServicesGrid";

const Services = () => {
  return (
    <>
      <Title
        title={"Services we offer"}
        subtitle={
          "From user-friendly interfaces to secure payment gateways, we deliver a comprehensive suite of services to align with your business goals."
        }
        url={""}
        linkText={""}
      />

      <ServicesGrid />

      {/* <div className="bg-black text-white py-20 md:py-40">
        <div className=" flex flex-col justify-center items-center max-w-8xl mx-2 md:mx-auto text-center">
          <section>
            <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0">
                  <h2 className="text-3xl font-bold sm:text-4xl">
                    Upgrade your business
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Our services go beyond conventional solutions — we aim to
                    elevate your entire digital presence. From crafting
                    user-centric applications to providing strategic insights
                    through consulting, we are your comprehensive partner in
                    navigating the complexities of the digital landscape.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/apps"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="h-6 w-6"
                      >
                        <path d="M5.5 2A3.5 3.5 0 002 5.5v5A3.5 3.5 0 005.5 14h5a3.5 3.5 0 003.5-3.5V8a.5.5 0 011 0v2.5a4.5 4.5 0 01-4.5 4.5h-5A4.5 4.5 0 011 10.5v-5A4.5 4.5 0 015.5 1H8a.5.5 0 010 1H5.5z" />
                        <path d="M16 3a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Apps</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      Elevate your digital presence with our bespoke app
                      development services.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/consulting"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16H288l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16v288z" />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">IT Consulting</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      Navigate the complex IT landscape with confidence.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/ecommerce"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">E-Commerce</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      Transform your online business with our ecommerce
                      solutions.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/analytics"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z" />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Data</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      Turn your data into a strategic asset for business growth.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/analytics"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M344 280l88-88M232 216l64 64M80 320l104-104"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M480 168 A24 24 0 0 1 456 192 A24 24 0 0 1 432 168 A24 24 0 0 1 480 168 z"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M344 304 A24 24 0 0 1 320 328 A24 24 0 0 1 296 304 A24 24 0 0 1 344 304 z"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M232 192 A24 24 0 0 1 208 216 A24 24 0 0 1 184 192 A24 24 0 0 1 232 192 z"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M80 344 A24 24 0 0 1 56 368 A24 24 0 0 1 32 344 A24 24 0 0 1 80 344 z"
                        />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Analytics</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      We employ advanced analytics techniques to extract
                      valuable insights.
                    </p>
                  </a>

                  <a
                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                    href="/cloud"
                  >
                    <span className="inline-block rounded-lg bg-black border border-white p-3">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        className="h-6 w-6"
                      >
                        <path d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8zm-328 64h272v117H376V510zm272 290H376V683h272v117z" />
                        <path d="M424 748a32 32 0 1064 0 32 32 0 10-64 0zm0-178a32 32 0 1064 0 32 32 0 10-64 0z" />
                        <path d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z" />
                      </svg>
                    </span>

                    <h2 className="mt-2 font-bold">Cloud</h2>

                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-500">
                      Experience the flexibility, scalability, and security of
                      cloud computing.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
};

export default Services;
