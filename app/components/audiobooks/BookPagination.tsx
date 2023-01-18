import { useNavigate } from "@remix-run/react";

type Props = {
  prevURL: string;
  nextURL: string;
  totalPages: number;
  currentPage: number;
};
function BookPagination({ prevURL, nextURL, totalPages, currentPage }: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="flex bg-white items-center space-x-2 border border-cerulean-blue-300 justify-start rounded-lg">
        <button
          disabled={prevURL ? false : true}
          className={`button border-0 border-r-cerulean-blue-300 border-r rounded-r-none ${
            !prevURL && "disabled"
          }`}
          onClick={() => navigate(prevURL, { replace: true })}
        >
          Prev
        </button>
        <div className="text-lg">
          {currentPage} of {totalPages}
        </div>
        <button
          disabled={nextURL ? false : true}
          className={`button rounded-l-none ${!nextURL && "disabled"}`}
          onClick={() => navigate(nextURL, { replace: true })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default BookPagination;
