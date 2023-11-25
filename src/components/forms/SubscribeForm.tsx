import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const updateEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const submitEmail = (e) => {
    e.preventDefault();
    console.log("Submit form with email: ", email);
  };

  return (
    <div className="bg-white h-auto w-full pb-10 md:pb-20">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-24 md:px-0">
        <div className="max-w-xl mb-2 p-5 sm:p-0 md:mx-auto text-center lg:max-w-2xl md:mb-6">
          <div className=" flex flex-col justify-center items-center">
            <p className="text-5xl font-medium">
              Discover the power of knowledge.
            </p>
            <p className="max-w-sm text-md pt-4">
              Subscribe to our newsletter and receive valuable resources,
              articles, and educational content directly to your inbox.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <form onSubmit={submitEmail}>
            <input
              id="email"
              type="text"
              className="w-full md:w-auto px-4 py-2 text-gray-700 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Email Address"
              onChange={updateEmail}
            />

            <button className="w-full px-6 py-2.5 my-2 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 md:my-0 focus:outline-none bg-black rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
