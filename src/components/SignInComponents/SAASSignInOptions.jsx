const SAASSignInOptions = () => {
  const buttonItems = [
    {
      name: "Sign in with Github",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="26"
          height="26"
          viewBox="0 0 30 30"
        >
          <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
      ),
    },
    {
      name: "Sign in with Bitbucket",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="bitbucket"
          width="20"
          height="20"
        >
          <path
            fill="#2680F8"
            d="M4.297 23h15.659a.776.776 0 0 0 .769-.657L23.99 1.916a.78.78 0 0 0-.635-.897 1.13 1.13 0 0 0-.134-.009L.779 1A.775.775 0 0 0 0 1.775c0 .044.005.093.009.137l3.265 20.196c.082.509.515.887 1.023.892zM15.736 8.391l-1.211 7.205h-5L8.173 8.391h7.563z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Sign in with Azure Devops",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="azure-devops"
          width="25"
          height="25"
        >
          <path
            fill="#0075D1"
            d="m2.966 8.331 15.056-2.928L10.652 0v2.477L2.247 5.899 0 8.871v6.843l2.966.856zM8.944 20.938 18.247 24 24 19.092V4.412l-5.977.991v12.968L2.966 16.57 8.944 24z"
          ></path>
        </svg>
      ),
    },
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
  ];
  return (
    <div className="py-5 px-3 flex flex-col items-center justify-center gap-2">
      {buttonItems.map((eachButtonItems, index) => (
        <button
          key={index}
          className="w-[100%] hover:bg-[#FAFAFA] text-sm md:text-base md:w-[60%] py-3 font-semibold text-[#171717] rounded-lg border border-[#D8DAE5] flex flex-row items-center justify-center gap-2"
        >
          {eachButtonItems.icons}
          <span>{eachButtonItems.name}</span>
        </button>
      ))}
    </div>
  );
};

export default SAASSignInOptions;
