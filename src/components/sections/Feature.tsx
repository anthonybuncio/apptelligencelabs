import teamSvg from "../../assets/team.svg";

const Feature = () => {
  return (
    <div className="bg-[#FAFAFA] h-screen pt-20">
      <div className="flex flex-col items-center justify-center ">
        <div className="max-w-xl mb-10 p-5 sm:p-0 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <div className=" flex flex-col justify-center items-center">
            <p className="text-5xl font-medium">
              Unleash the power of data for business success
            </p>
            <p className="max-w-sm text-md pt-4">
              Unleash innovation, drive growth, and stay ahead of the
              competition with actionable insights and data-driven strategies.
            </p>
          </div>
        </div>
        <img
          src={teamSvg}
          className="w-full max-w-screen-sm mx-auto "
          alt="subhero"
        />
      </div>
    </div>
  );
};

export default Feature;
