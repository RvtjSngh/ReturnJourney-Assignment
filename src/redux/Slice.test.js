import itemsReducer, { setSearchTerm, selectFilteredItems } from "./Slice";

describe("itemsSlice", () => {
  const initialState = {
    items: [
      { id: 1, name: "Mango" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Banana" },
      { id: 4, name: "Orange" },
      { id: 5, name: "Kiwi" },
      { id: 6, name: "Pineapple" },
      { id: 7, name: "Guava" },
      { id: 8, name: "Strawberry" },
      { id: 9, name: "Watermelon" },
      { id: 10, name: "Blueberry" },
    ],
    searchTerm: "",
  };

  test("should handle setting the search term", () => {
    const newState = itemsReducer(initialState, setSearchTerm("Test"));
    expect(newState.searchTerm).toBe("Test");
  });

  test("selectFilteredItems should return all items when searchTerm is empty", () => {
    const result = selectFilteredItems({ items: initialState });
    expect(result).toEqual(initialState.items);
  });
});
