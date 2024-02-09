import SearchOrder from "./SearchOrder.jsx";
import SearchTopic from "./SearchTopic.jsx";
import SortSearchBy from "./SortSearchBy.jsx";
import ArticlesPerPage from "./ArticlesPerPage.jsx";

export default function Search({ searchParams, setSearchParams }) {
  return (
    <form id="search-params">
      <fieldset id="search-bar">
        <legend id="search-heading">Search</legend>
        <SearchTopic
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <SortSearchBy
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <SearchOrder
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <ArticlesPerPage searchParams={searchParams}
          setSearchParams={setSearchParams}/>
      </fieldset>
    </form>
  );
}
