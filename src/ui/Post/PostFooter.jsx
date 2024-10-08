import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function PostFooter({ item }) {
  const redirect = `https://reddit.com${item.permalink}`;
  return (
    <div className="flex gap-x-6">
      <Link to={redirect} target="_blank">
        <div className="flex h-12 items-center gap-x-1.5 rounded-lg bg-[rgb(0,0,28)] p-2.5">
          <img src="/public/comment.svg" />
          <p className="text-sm font-semibold">{item.num_comments}</p>
        </div>
      </Link>
      <Link to={redirect} target="_blank">
        <div className="flex h-12 items-center gap-x-2 rounded-lg bg-[rgb(0,0,28)] p-2.5">
          <img src="/public/arrow.svg" />
          <p className="text-sm font-semibold">{item.ups}</p>
          <img className="rotate-180" src="/public/arrow.svg" />
        </div>
      </Link>
    </div>
  );
}

export default PostFooter;
