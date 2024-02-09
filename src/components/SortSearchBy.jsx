import { useEffect, useState } from "react";

export default function SortSearchBy({ searchParams, setSearchParams }) {
  const currentSort = searchParams.get('sort_by');
  function changeSortBy(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", e.target.value);
    setSearchParams(newParams);
  }
  return (
    <div id="sort-by-controls">
      <label id="sort-by-label" htmlFor="sort-by-query">
        Sort by:
      </label>
      <select onChange={changeSortBy} id="sort-by-query" name="sort-by-query"
      defaultValue={currentSort}>
        <option key="created_at" value="created_at">
          Published
        </option>
        <option key="comment_count" value="comment_count">
          Comments
        </option>
        <option key="votes" value="votes">
          Votes
        </option>
      </select>
    </div>
  );
}
