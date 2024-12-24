import Header from "../components/DashBoard/Header";
import RepoCard from "../components/DashBoard/RepoCard";
import SideBar from "../components/DashBoard/SideBar";
const DashBoard = () => {
  const repositories = [
    {
      title: "design-system",
      type: "Public",
      language: "React",
      size: "7320 KB",
      updated: "Updated 1 day ago",
    },
    {
      title: "codeant-ci-app",
      type: "Private",
      language: "JavaScript",
      size: "5871 KB",
      updated: "Updated 2 days ago",
    },
    {
      title: "analytics-dashboard",
      type: "Private",
      language: "Python",
      size: "4521 KB",
      updated: "Updated 5 days ago",
    },
    {
      title: "mobile-app",
      type: "Public",
      language: "Swift",
      size: "3096 KB",
      updated: "Updated 3 days ago",
    },
    {
      title: "e-commerce-platform",
      type: "Private",
      language: "Java",
      size: "6210 KB",
      updated: "Updated 6 days ago",
    },
    {
      title: "blog-website",
      type: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updated: "Updated 4 days ago",
    },
    {
      title: "social-network",
      type: "Private",
      language: "PHP",
      size: "5432 KB",
      updated: "Updated 7 days ago",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row">
      <Header />
      <SideBar />
      <div className="pt-16 w-full bg-[#FAFAFA] lg:p-5">
        <div className="bg-white lg:border border-[#E9EAEB] lg:rounded-lg">
          <div className="py-4 px-5">
            <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-2xl text-[#181D27] font-semibold">
                  Repositories
                </h1>
                <p className="mt-1 text-sm text-[#414651]">
                  33 total repositories
                </p>
              </div>
              <div className="mt-4 lg:mt-0 flex flex-row items-center gap-3">
                <button className="hover:bg-[#FAFAFA] flex flex-row items-center gap-2 text-[#414651] text-sm py-2 px-3 rounded-lg border border-[#D5D7DA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <span>Refresh All</span>
                </button>
                <button className="flex flex-row items-center gap-2 text-white py-2 px-3 rounded-lg text-sm bg-[#1570EF] hover:bg-[#175CD3] border border-[#195fc8] shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="mt-4 w-full lg:w-fit py-2 px-3 border border-[#D5D7DA] rounded-lg flex flex-row items-center gap-2">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                className="focus:outline-none"
                type="text"
                placeholder="Search Repositories"
              />
            </div>
          </div>
          <ul className="lg:h-[31.5rem] lg:overflow-auto">
            {repositories.map((eachRepo, index) => (
              <RepoCard key={index} repoDetails={eachRepo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
