const Testimonials = () => {
  return (
    <div className="bg-black h-auto text-white pb-20">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 p-5 sm:p-0 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div className=" flex flex-col justify-center items-center">
              <p className="text-5xl font-semibold">What people are saying</p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 py-8">
          <section className="rounded-lg bg-gray-800 p-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                className="aspect-square w-full rounded-lg object-cover"
              />

              <blockquote className="sm:col-span-2">
                <p className="text-xl font-medium sm:text-2xl">
                  &quot;Apptelligence Labs transformed our business with their
                  cutting-edge web applications. Their scraping bots provided us
                  with valuable data insights, giving us a competitive edge in
                  the market. We highly recommend their services!&quot;
                </p>

                <cite className="mt-8 inline-flex items-center not-italic">
                  <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                  <p className="text-sm uppercase text-gray-500 sm:ms-3">
                    <strong>Justin Harrison</strong>, Surf Coffee
                  </p>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
