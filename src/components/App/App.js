import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <h1>
        Ja<span>mmm</span>ing
      </h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;