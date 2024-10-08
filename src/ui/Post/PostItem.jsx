import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter.jsx";

/* eslint-disable react/prop-types */
function PostItem({ item }) {
  return (
    <div className="flex w-[90vw] flex-col gap-y-3 rounded-lg bg-[rgba(29,29,41,0.8)] px-6 py-5">
      <PostHeader item={item} />
      <p className="mb-3 text-lg font-semibold">
        <a href={`https://reddit.com${item.permalink}`} target="_blank">
          {item.title}
        </a>
      </p>
      <PostFooter item={item} />
    </div>
  );
}

export default PostItem;
