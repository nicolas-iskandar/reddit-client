import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center">
      <img src="/public/sad.png" className="mb-12 w-56" />
      <h1 className="mb-12 text-2xl font-semibold">Something went wrong</h1>
      <Link className="text-blue-400 underline" to="/">
        &larr; Return to menu
      </Link>
    </div>
  );
}

export default Error;
