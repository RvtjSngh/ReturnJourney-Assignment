import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFilteredItems } from "../redux/Slice";
import Item from "./Item";

const ItemList = () => {
  const filteredItems = useSelector(selectFilteredItems);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  // Used useMemo to memoize paginated items
  const paginatedItems = useMemo(() => {
    return filteredItems.slice(firstItemIndex, lastItemIndex);
  }, [filteredItems, firstItemIndex, lastItemIndex]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <ul>
        {paginatedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>

      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default React.memo(ItemList);
