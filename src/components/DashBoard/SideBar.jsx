import codeAntSmall from "../../assets/SignIn/codeAntSmall.svg";

const SideBar = () => {
  return (
    <div className="hidden h-screen border-r border-[#E9EAEB] w-[16%] py-4 px-3 lg:flex flex-col justify-between">
      <div>
        <div className="flex flex-row items-center gap-2">
          <img src={codeAntSmall} alt="code ant" className="w-8" />
          <h1 className="font-[satoshi] text-xl">CodeAnt AI</h1>
        </div>
        <select className="w-full hover:bg-[#FAFAFA] mt-4 p-2 rounded-md border border-[#D5D7DA] focus:outline-none">
          <option value="John">John</option>
          <option value="Michael">Michael</option>
        </select>
        <div className="mt-4">
          <button className="w-full font-medium bg-[#1570EF] py-2 px-3 text-white rounded-lg shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)] flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>Repositories</span>
          </button>
          <button className="w-full hover:bg-[#FAFAFA] font-medium py-2 px-3 text-[#414651] rounded-lg flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <span>AI Code Review</span>
          </button>
          <button className="w-full hover:bg-[#FAFAFA] font-medium py-2 px-3 text-[#414651] rounded-lg flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              />
            </svg>
            <span>Cloud Security</span>
          </button>
          <button className="w-full hover:bg-[#FAFAFA] font-medium py-2 px-3 text-[#414651] rounded-lg flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M5 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M6.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2 1.5A1.5 1.5 0 0 1 3.5 0h9A1.5 1.5 0 0 1 14 1.5v10c0 .546-.292 1.02-.728 1.29l-.141.423a2.5 2.5 0 0 0 0 1.58l.07.209h.3a.5.5 0 0 1 0 1H4c-1.1 0-2-.895-2-2v-12.5zM12.5 1h-9a.5.5 0 0 0-.5.5v10.8c.294-.17.636-.268 1-.268h8.5a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5zm-.352 12h-8.15a1 1 0 0 0 0 2h8.15a3.5 3.5 0 0 1 0-2"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>How to Use</span>
          </button>
          <button className="w-full hover:bg-[#FAFAFA] font-medium py-2 px-3 text-[#414651] rounded-lg flex flex-row items-center justify-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </div>
      <div>
        <button className="hover:bg-[#f5f5f5] w-full rounded-lg flex flex-row items-center gap-2 px-3 py-2 text-[#414651] font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.003.094 0 .001 0 .001v.021a2 2 0 0 0 .006.134q.008.124.035.33c.039.27.114.642.26 1.08c.294.88.87 2.019 1.992 3.141s2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4 4 0 0 0 .463.04l.013.001h.008s.112-.006.001 0a1 1 0 0 0 .894-.553l.67-1.34l4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874S3.527 6.11 3.833 4m5.24 6.486l1.807-1.204a2 2 0 0 0 .747-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.781c-.909 0-1.764.631-1.913 1.617c-.34 2.242-.801 8.864 4.425 14.09s11.848 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a5 5 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508s-1.302-1.739-1.508-2.36a5 5 0 0 1-.125-.447z"
            ></path>
          </svg>
          <h1>Support</h1>
        </button>
        <button className="hover:bg-[#FAFAFA] w-full rounded-lg flex flex-row items-center gap-2 px-3 py-2 text-[#414651] font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            <g className="logout-outline">
              <g
                fill="currentColor"
                fillRule="evenodd"
                className="Vector"
                clipRule="evenodd"
              >
                <path d="M3 7a5 5 0 0 1 5-5h5a1 1 0 1 1 0 2H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5z"></path>
                <path d="M14.47 7.316a1 1 0 0 1 1.414-.046l4.8 4.5a1 1 0 0 1 0 1.46l-4.8 4.5a1 1 0 1 1-1.368-1.46l2.955-2.77H8a1 1 0 1 1 0-2h9.471l-2.955-2.77a1 1 0 0 1-.046-1.414"></path>
              </g>
            </g>
          </svg>
          <h1>Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
