import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import SearchBar from "./SearchBar";
import { setSearchTerm } from "../redux/Slice";
import { useDispatch } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("SearchBar Component", () => {
  const renderSearchBar = () => {
    return render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  };

  test("renders search input", () => {
    renderSearchBar();
    const inputElement = screen.getByPlaceholderText(/search items/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("dispatches search term change", () => {
    const mockDispatch = jest.fn();

    // Mocked useDispatch to return the mock function
    useDispatch.mockReturnValue(mockDispatch);

    renderSearchBar();
    const inputElement = screen.getByPlaceholderText(/search items/i);

    fireEvent.change(inputElement, { target: { value: "Mango" } });

    expect(inputElement.value).toBe("Mango");

    // Checked if the action was dispatched
    expect(mockDispatch).toHaveBeenCalledWith(setSearchTerm("Mango"));
  });
});
