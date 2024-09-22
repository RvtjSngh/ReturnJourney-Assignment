import "./App.css";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>The Fruit Basket</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
}

export default App;
