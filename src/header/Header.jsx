import SearchBook from "./SearchBook";
import Sort from "./Sort";

export default function Header({ handleSearch, handleSort }) {
  return (
    <header className="mx-auto mb-8 max-w-7xl lg:mb-10">
      <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        <SearchBook onSearch={handleSearch} />
        <Sort handleSort={handleSort} />
      </div>
    </header>
  );
}
