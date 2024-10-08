/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ handleRefresh, handleDelete }) {
  const url = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prevValue) => !prevValue);
  }

  useEffect(
    function () {
      const handleOpen = (e) => {
        if (
          isOpen &&
          !document.getElementById("threeDots").contains(e.target) &&
          !document.getElementById("menu").contains(e.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOpen);

      return () => document.removeEventListener("mousedown", handleOpen);
    },
    [isOpen],
  );

  return (
    <>
      <div className="mt-3 flex w-[90%] items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="my-4 ml-1 mr-5 h-16 w-16 rounded-full text-center"
              src="../../public/communityIcon_tqrzte0yaa3c1.png"
              alt="Reddit Image"
            />
          </Link>
          <p className="text-[#FF5700]">{url}</p>
        </div>
        <button id="threeDots" onClick={handleMenu} className="rounded-full">
          <img src="/public/three dots.svg" className="rotate-90" />
        </button>
      </div>

      {isOpen && (
        <div
          id="menu"
          className="absolute right-[10%] top-20 flex h-28 w-48 flex-col justify-between rounded-2xl bg-slate-900 md:right-[7%]"
        >
          <button
            onClick={handleRefresh}
            className="flex h-1/2 items-center gap-x-2 rounded-t-2xl p-2 pl-5 hover:bg-slate-800"
          >
            <span>
              <img src="/public/refresh.svg" />
            </span>
            Refresh
          </button>
          <button
            onClick={() => {
              handleDelete();
              setIsOpen(false);
            }}
            className="flex h-1/2 items-center gap-x-2 rounded-b-2xl p-2 pl-5 hover:bg-slate-800"
          >
            <span>
              <img src="/public/delete.svg" />
            </span>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
