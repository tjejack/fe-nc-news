export default function ArticlesPerPage({ searchParams, setSearchParams }) {
  const currentLimit = searchParams.get("limit") || 10;
  function changePageLimit(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("limit", e.target.value);
    setSearchParams(newParams);
  }
  return (
    <section id="articles-per-page-options">
      <label id="articles-per-page-label" htmlFor="articles-per-page">
        Articles per page:
      </label>
      <select
        onChange={changePageLimit}
        id="articles-per-page"
        name="articles-per-page"
        defaultValue={currentLimit}
      >
        <option id="five" value="5">
          5
        </option>
        <option id="ten" value="10">
          10
        </option>
        <option id="twenty" value="20">
          20
        </option>
        <option id="fifty" value="50">
          50
        </option>
      </select>
    </section>
  );
}
