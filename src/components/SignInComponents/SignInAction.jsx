import codeAntSmall from "../../assets/SignIn/codeAntSmall.svg";
import { Link } from "react-router";
import { useState } from "react";
import SAASSignInOptions from "./SAASSignInOptions";
import SelfHostedSignInOptions from "./SelfHostedSignInOptions";
const SignInAction = () => {
  const [activeButton, setactiveButton] = useState("saas");
  const onCLickButton = (button) => {
    setactiveButton(button);
  };
  return (
    <div className="bg-[#FAFAFA] w-[100%] lg:w-[50%] h-full flex flex-col items-center justify-center">
      <div className="w-[95%] md:w-[80%] lg:w-[90%] h-auto border border-[#E9EAEB] shadow-sm rounded-xl bg-white">
        <div className="flex flex-col items-center pt-5 pb-2 px-3 md:px-4 lg:px-5 border-b">
          <div className="flex flex-row items-center gap-3">
            <img
              src={codeAntSmall}
              alt="code ant icons"
              className="w-8 md:w-10"
            />
            <h1 className="font-[satoshi] text-[#181D27] text-2xl md:text-3xl">
              CodeAnt AI{" "}
            </h1>
          </div>
          <h1 className="mt-4 md:mt-8 text-2xl lg:text-4xl font-semibold text-[#181D27]">
            Welcome to CodeAnt AI
          </h1>
          <div className="my-6 flex flex-row rounded-lg border border-[#E9EAEB] w-full bg-[#FAFAFA]">
            <button
              onClick={() => onCLickButton("saas")}
              className={` ${
                activeButton === "saas"
                  ? "bg-[#1570EF] w-[50%] py-3 md:py-4 font-semibold text-xl text-white rounded-lg border border-[#195fc8]  shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)]"
                  : "w-[50%] hover:bg-[#f5f5f5] py-3 md:py-4 font-semibold text-xl text-[#414651] rounded-lg"
              }`}
            >
              SAAS
            </button>
            <button
              onClick={() => onCLickButton("selfhosted")}
              className={`${
                activeButton === "selfhosted"
                  ? "bg-[#1570EF] w-[50%] py-3 md:py-4 font-semibold text-xl text-white rounded-lg border border-[#195fc8] shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)]"
                  : "w-[50%] hover:bg-[#f5f5f5] py-3 md:py-4 font-semibold text-lg md:text-xl text-[#414651] rounded-lg"
              }`}
            >
              Self Hosted
            </button>
          </div>
        </div>
        {activeButton === "saas" ? (
          <SAASSignInOptions />
        ) : (
          <SelfHostedSignInOptions />
        )}
      </div>
      <h1 className="mt-5 text-[#181D27] text-sm md:text-base text-center">
        By signing up you agree to the{" "}
        <span className="font-semibold">Privacy Policy. </span>
        Click to see{"   "}
        <Link to="/dashboard" className="text-[#175CD3] underline">
          Dashboard
        </Link>
      </h1>
    </div>
  );
};

export default SignInAction;
