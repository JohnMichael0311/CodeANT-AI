const buttonItems = [
  {
    name: "Sign in with GitLab",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 256 236"
        id="gitlab"
      >
        <path
          fill="#E24329"
          d="M128.075 236.075l47.104-144.97H80.97l47.104 144.97z"
        ></path>
        <path
          fill="#FC6D26"
          d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97z"
        ></path>
        <path
          fill="#FCA326"
          d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012-113.12-144.97z"
        ></path>
        <path
          fill="#E24329"
          d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0l-28.37 87.315z"
        ></path>
        <path
          fill="#FC6D26"
          d="M128.075 236.074l47.104-144.97h66.015l-113.12 144.97z"
        ></path>
        <path
          fill="#FCA326"
          d="M241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012 113.119-144.97z"
        ></path>
        <path
          fill="#E24329"
          d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0l28.37 87.315z"
        ></path>
      </svg>
    ),
  },
  {
    name: "Sign in with SSO",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        id="key"
        width="25"
        height="25"
      >
        <path d="M43.61 4.39A15 15 0 0 0 19 20.49L1.46 38.12C-.38 40 0 41.53 0 47a1 1 0 0 0 1 1h7.5a2.5 2.5 0 0 0 2.5-2.5.5.5 0 0 1 .5-.5h1a2.5 2.5 0 0 0 2.5-2.5c0-2.56-.31-1.78 1.27-3.35.19-.2.19-.15 2.23-.15a2.5 2.5 0 0 0 2.5-2.5v-1.88c0-.29-.33.13 5.71-5.91.12-.13-.17-.13.82.25A14.88 14.88 0 0 0 33 30c13.43 0 20-16.26 10.61-25.61ZM19 36.5c0 .63-.55.5-2.38.5-1.24 0-1.76.72-2.89 1.85-1.52 1.52-.05 4.15-1.23 4.15h-1A2.5 2.5 0 0 0 9 45.5a.5.5 0 0 1-.5.5H2v-4.35c0-1.73-.36-.88 18-19.25a15.12 15.12 0 0 0 1.76 2.46L5.79 40.79a1 1 0 0 0 .71 1.71c.59 0-.69 1.11 16.64-16.22a14.65 14.65 0 0 0 1.8 1.36C18.31 34.28 19 32.83 19 36.5Zm23.19-12.31a13 13 0 1 1 0-18.38 13 13 0 0 1 0 18.38Z"></path>
        <path d="M38 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"></path>
      </svg>
    ),
  },
];
const SelfHostedSignInOptions = () => {
  return (
    <div className="pt-5 pb-[136px] px-3 flex flex-col items-center justify-center gap-2">
      {buttonItems.map((eachButtonItems, index) => (
        <button
          key={index}
          className="w-[100%] hover:bg-[#FAFAFA] md:w-[60%] py-3 font-semibold text-[#171717] rounded-lg border border-[#D8DAE5] flex flex-row items-center justify-center gap-2"
        >
          {eachButtonItems.icons}
          <span>{eachButtonItems.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SelfHostedSignInOptions;
