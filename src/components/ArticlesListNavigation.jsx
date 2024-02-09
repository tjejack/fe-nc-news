export default function ArticlesListNavigation({
  searchParams,
  setSearchParams,
  totalCount,
}) {
  const currentPage = searchParams.get("p") || 1;
  const currentPageLimit = searchParams.get("limit") || 10;
  const lastPage = Math.ceil(totalCount / currentPageLimit);
  function changePage(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("p", e.target.value);
    setSearchParams(newParams);
  }
  return (
    <section id="articles-list-navigation">
      <div id="articles-list-nav-buttons-container">
        <button
          onClick={changePage}
          className="articles-list-nav-button"
          id="go-to-fist-page"
          value={1}
        >
          First
        </button>
        <button
          onClick={changePage}
          className="articles-list-nav-button"
          id="go-to-prev-page"
          value={Number(currentPage) - 1}
        >
          Prev
        </button>
        <button
          onClick={changePage}
          className="articles-list-nav-button"
          id="go-to-next-page"
          value={Number(currentPage) + 1}
        >
          Next
        </button>
        <button
          onClick={changePage}
          className="articles-list-nav-button"
          id="go-to-last-page"
          value={lastPage}
        >
          Last
        </button>
      </div>
    </section>
  );
}
