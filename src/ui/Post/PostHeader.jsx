import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function PostHeader({ item }) {
  // Getting the epoch date
  const createdDateInEpoch = item.created_utc;

  // Converting from epoch to human-readable date
  const date = new Date(createdDateInEpoch * 1000);

  return (
    <div className="flex gap-x-4">
      <p className="text-sm">
        Posted on{" "}
        {date.toLocaleDateString(
          (undefined,
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        )}{" "}
        at{" "}
        {date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        by{" "}
        <span className="hover:cursor-pointer hover:text-[#FF5700]">
          <Link to={`https://reddit.com/user/${item.author}`} target="_blank">
            {item.author}
          </Link>
        </span>
      </p>
      {item.stickied && <img src="/public/pin.svg" />}
    </div>
  );
}

export default PostHeader;
