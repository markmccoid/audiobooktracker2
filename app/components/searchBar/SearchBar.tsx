type Props = {
  bookLimit: number;
  setBookLimit: () => void;
};
function SearchBar({ bookLimit, setBookLimit }: Props) {
  return (
    <div className="flex w-full h-14">
      <input
        type="number"
        onChange={(e) => setBookLimit(parseInt(e.target.value))}
        value={bookLimit}
      />
    </div>
  );
}

export default SearchBar;
