import { useEffect, useState } from "react";
import { Form, Link, redirect } from "react-router-dom";

function InitialPage() {
  const [search, setSearch] = useState("");
  const [searchInputIsShown, setSearchInputIsShown] = useState(false);

  const getItems = JSON.parse(localStorage.getItem("subreddit"));

  useEffect(() => {
    let searchHandler = (e) => {
      if (!document.getElementById("inputForm")?.contains(e.target)) {
        setSearchInputIsShown(false);
      }
    };

    document.addEventListener("mousedown", searchHandler);

    return () => document.removeEventListener("mousedown", searchHandler);
  }, [searchInputIsShown]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex h-dvh w-screen flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full shadow-[0_0_70px_15px_rgba(255,87,0,0.5)]">
          <img
            className="h-24 w-24 rounded-full text-center"
            src="../../public/communityIcon_tqrzte0yaa3c1.png"
            alt="Reddit Image"
          />
        </div>
        <h1 className="mt-10 text-center text-4xl font-semibold">
          Reddit Client
        </h1>
        <button
          onClick={() => setSearchInputIsShown(true)}
          className="mt-10 w-80 rounded-xl border-2 border-[#FF5700] bg-[rgb(0,0,28)] px-4 py-2 font-semibold text-[#FF5700] transition-all duration-300 hover:border-[rgb(0,0,28)] hover:bg-[#FF5700] hover:text-[rgb(0,0,28)] focus:outline-none"
        >
          Search
        </button>
      </div>
      {searchInputIsShown && (
        <Form
          autoComplete="off"
          id="inputForm"
          method="POST"
          className="absolute top-[43%] mt-10 flex flex-col items-center rounded-2xl bg-gray-800 px-8 py-4"
        >
          <label>Enter the name of the Subreddit</label>
          <input
            type="text"
            name="search"
            autoFocus
            className="mt-4 w-80 rounded-xl border-2 border-[rgb(200,204,211)] bg-gray-900 px-4 py-2 focus:outline-none"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {getItems?.length > 0 && (
            <>
              <p className="mb-2 mt-5 text-sm text-[#FF5700]">
                Recently visited
              </p>
              <div className="w-80 rounded-lg bg-gray-900 px-3 py-2">
                {getItems.map((item, id) => (
                  <Link to={`/r/${item}`} key={id}>
                    <div className="w-full rounded-lg px-2 py-1 transition-colors duration-200 hover:bg-gray-800">{`r/${item}`}</div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </Form>
      )}
    </div>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const subreddit = data.get("search");

  throw redirect(`/r/${subreddit}`);
}

export default InitialPage;
