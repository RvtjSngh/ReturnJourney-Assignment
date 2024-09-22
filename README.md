# Optimized Item List

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the application.

## Optimization Techniques

- Used `React.memo` to avoid unnecessary re-renders of the `Item` component.
- Used `useSelector` with a selector function to select only the filtered items from the Redux state.
- Utilized `useCallback` in `SearchBar` to avoid re-creating the search handler function on each render.
- Implemented Redux Toolkit for state management.

## Pagination Feature

1. Items Per Page: The list displays 5 items per page.
   Page Navigation:
2. The "Previous" button allows navigation to the previous page.
3. The "Next" button allows navigation to the next page.
4. Pagination controls are disabled when the user is on the first or last page.
5. Performance: Only the items on the current page are rendered, reducing the overall number of renders and improving application performance for large datasets.


## Testing

Run `npm test` to execute the unit tests.
