export default function SearchOrder({ searchParams, setSearchParams }) {
  function changeSortOrder(e) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", e.target.value);
    setSearchParams(newParams);
  }
  return (
    <div id="order-controls">
      <label id="asc-label" htmlFor="asc_button">
        Ascending
      </label>
      <input
        type="radio"
        id="asc_button"
        name="order-button"
        value="ASC"
        onClick={changeSortOrder}
      />
      <label id="desc-label" htmlFor="desc_button">
        Descending
      </label>
      <input
        type="radio"
        id="desc_button"
        name="order-button"
        value="DESC"
        defaultChecked={true}
        onClick={changeSortOrder}
      />
    </div>
  );
}
