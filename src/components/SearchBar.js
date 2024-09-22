import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/Slice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (e) => {
      dispatch(setSearchTerm(e.target.value));
    },
    [dispatch]
  );

  return (
    <input type="text" placeholder="Search items" onChange={handleSearch} />
  );
};

export default React.memo(SearchBar);
