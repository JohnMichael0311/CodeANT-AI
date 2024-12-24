import codeant from "../../assets/SignIn/codeant.svg";
import codeAntSmall from "../../assets/SignIn/codeAntSmall.svg";
import pieChart from "../../assets/SignIn/pie-chart.svg";
const About = () => {
  return (
    <div className=" hidden bg-white w-[50%] h-full lg:flex flex-col border-r">
      <div className="relative h-full flex flex-col items-center justify-center">
        <div className="shadow-[0px_0px_24px_0px_rgba(0,_0,_0,_0.14)] rounded-3xl bg-white">
          <div className="p-5 border-b">
            <div className="flex flex-row items-center gap-2">
              <img src={codeAntSmall} alt="code ant" />
              <h1 className="text-lg text-[#081735] font-bold">
                AI to Detect & Autofix Bad Code
              </h1>
            </div>
          </div>
          <div className="pt-5 px-5 pb-8 flex flex-row items-center gap-12">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg text-[#081735] font-bold">30+</h1>
              <p className="text-[#171717] text-sm ">Language Support</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg text-[#081735] font-bold">10k+</h1>
              <p className="text-[#171717] text-sm ">Developers</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-lg text-[#081735] font-bold">100+</h1>
              <p className="text-[#171717] text-sm ">Hours Saved</p>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-6 w-64 right-36 bg-white shadow-[0px_0px_24px_0px_rgba(0,_0,_0,_0.14)] rounded-3xl flex flex-row py-4 px-8">
          <div className="flex flex-col items-start">
            <div className="p-4 bg-[#9D90FA40] rounded-full">
              <img src={pieChart} alt="pie chart icons" className="w-8" />
            </div>
            <div>
              <h1 className="mt-4 text-sm text-[#171717] font-bold">
                Issues Fixed
              </h1>
              <h1 className="mt-1 text-3xl text-[#081735] font-bold">500k+</h1>
            </div>
          </div>
          <div className="ml-auto pl-5">
            <div className="flex flex-row items-center gap-1 text-[#0049C6] pt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>

              <h1 className="text-sm font-bold">14%</h1>
            </div>
            <h1 className="text-xs mt-1">This week</h1>
          </div>
        </div>
      </div>
      <img src={codeant} alt="code ant" className="w-56 mt-auto" />
    </div>
  );
};

export default About;
