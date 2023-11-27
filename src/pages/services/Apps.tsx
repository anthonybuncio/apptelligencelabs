const Apps = () => {
  return (
    <div className="bg-[#F5F6F7] pt-20">
      <div className="flex flex-col items-center justify-center ">
        <div className="max-w-4xl mb-10 md:mx-auto text-center md:mb-12">
          <div className=" flex flex-col justify-center items-center">
            <p className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-300 to-purple-400">
              Application Development
            </p>
            <p className="max-w-4xl text-md pt-8">
              We specialize in creating powerful web and mobile applications,
              tailored to your unique requirements. Our expert team handles the
              entire app development process, from discovery to deployment,
              ensuring exceptional user experiences. With a focus on clean code,
              scalability, and seamless integration of third-party services, we
              bring your app ideas to life and help your business thrive in the
              digital landscape.
            </p>

            {/* <Catalog /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
