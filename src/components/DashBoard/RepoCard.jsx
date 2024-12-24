import PropTypes from "prop-types";
const RepoCard = (props) => {
  const { title, type, language, size, updated } = props.repoDetails;
  return (
    <li className="py-4 px-5 border-t border-[#E9EAEB] hover:bg-[#F5F5F5]">
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-base lg:text-lg text-[#181D27] font-medium">
          {title}
        </h1>
        <p className="text-xs lg:text-sm text-[#175CD3] font-medium py-0 px-2 bg-[#EFF8FF] border border-[#B2DDFF] rounded-full">
          {type}
        </p>
      </div>
      <div className="mt-3 flex flex-row items-center gap-3 lg:gap-6 text-[#181D27] text-sm lg:text-base">
        <div className="flex flex-row items-center gap-2">
          <h1>{language}</h1>
          <div className="p-1 bg-[#1570EF] rounded-full"></div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <h1>{size}</h1>
        </div>
        <h1>{updated}</h1>
      </div>
    </li>
  );
};

RepoCard.propTypes = {
  props: PropTypes.object.isRequired,
};

export default RepoCard;
