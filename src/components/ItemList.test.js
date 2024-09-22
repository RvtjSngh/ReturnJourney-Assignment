import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import ItemList from "./ItemList";

// Mocked the Redux store
const mockStore = (initialState) => ({
  getState: () => initialState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
});

const totalItems = 10;
const itemsPerPage = 5;

describe("ItemList Component", () => {
  const renderItemList = () => {
    return render(
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
  };

  let store;

  beforeEach(() => {
    store = mockStore({
      items: {
        items: Array.from({ length: totalItems }, (_, index) => ({
          id: index + 1,
          name: `Item ${index + 1}`,
        })),
        searchTerm: "",
      },
    });
  });

  test("renders only the items for the current page", () => {
    renderItemList();

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(itemsPerPage);
  });

  test("disables 'Previous' button on the first page", () => {
    renderItemList();

    const prevButton = screen.getByText(/previous/i);
    expect(prevButton).toBeDisabled();
  });

  test("disables 'Next' button on the last page", () => {
    renderItemList();

    fireEvent.click(screen.getByText(/next/i));

    const nextButton = screen.getByText(/next/i);
    expect(nextButton).toBeDisabled();
  });

  test("navigates to the next page correctly", () => {
    renderItemList();

    const nextButton = screen.getByText(/next/i);
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);

    // Checked if the items rendered are still the correct amount (5 items)
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(itemsPerPage);
    expect(screen.getByText(/page 2/i)).toBeInTheDocument();
  });

  test("navigates back to the previous page", () => {
    renderItemList();

    const nextButton = screen.getByText(/next/i);
    fireEvent.click(nextButton);

    const prevButton = screen.getByText(/previous/i);
    fireEvent.click(prevButton);

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(itemsPerPage);
    expect(screen.getByText(/page 1/i)).toBeInTheDocument();
  });
});
