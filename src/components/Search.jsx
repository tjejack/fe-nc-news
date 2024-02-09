import SearchOrder from "./SearchOrder.jsx";
import SearchTopic from "./SearchTopic.jsx";
import SortSearchBy from "./SortSearchBy.jsx"

export default function Search({ searchParams, setSearchParams }) {
  return (
    <div id="search-bar">
      <h2 id="search-heading">Search</h2>
      <form id="search-params">
        <SearchTopic
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <SortSearchBy searchParams={searchParams}
          setSearchParams={setSearchParams}/>
        <SearchOrder searchParams={searchParams}
          setSearchParams={setSearchParams}/>
      </form>
    </div>
  );
}
