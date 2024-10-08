import { useNavigate, useLoaderData } from "react-router-dom";
import PostItem from "../ui/Post/PostItem";
import Header from "../ui/MainPage/Header";
import { useState } from "react";

function App() {
  const [loaderData, setLoaderData] = useState(useLoaderData());
  const navigate = useNavigate();

  function handleRefresh() {
    navigate(0);
  }

  function handleDelete() {
    setLoaderData([]);
  }

  return (
    <div className="flex flex-col items-center">
      <Header handleRefresh={handleRefresh} handleDelete={handleDelete} />
      <div className="my-2 flex flex-col items-center gap-4">
        {loaderData.map((item) => {
          return <PostItem item={item.data} key={item.data.id} />;
        })}
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const subreddit = params.subreddit;
  const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const data = await res.json();

  const getItems = JSON.parse(localStorage.getItem("subreddit")) || [];

  if (!getItems.includes(subreddit)) getItems.push(subreddit);
  if (getItems.length > 5) getItems.shift();

  localStorage.setItem("subreddit", JSON.stringify(getItems));
  return data.data.children;
}

export default App;
