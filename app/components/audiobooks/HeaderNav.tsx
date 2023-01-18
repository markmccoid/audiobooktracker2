import { Link } from "@remix-run/react";
function HeaderNav() {
  return (
    // <nav className="text-xl border-b border-b-cerulean-blue-300 pt-5">
    <nav className="flex p-4 items-center justify-center bg-cerulean-blue-600">
      <h1 className="text-3xl text-gray-300 font-bold flex flex-grow justify-end ">
        <Link to="/audiobooks">AudioBook Tracker</Link>
      </h1>
      <div className="flex flex-grow justify-end">
        <form action="/logout" method="post">
          <button
            type="submit"
            className="bg-cerulean-blue-500 text-white text-xl px-4 py-1 border border-cerulean-blue-900 rounded-lg
            hover:bg-cerulean-blue-400 transition-all"
          >
            Log Out
          </button>
        </form>
      </div>
    </nav>
    // </nav>
  );
}

export default HeaderNav;
