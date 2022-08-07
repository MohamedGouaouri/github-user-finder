import './assets/styles/App.css';
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className={"container"}>
          <div className={"header"}>
              <div className={"app-name"}>
                  devfinder
              </div>
              <div>
                  <div className={"light-dark"}>
                      DARK
                  </div>
                  <span className={"light-dark-logo"}>
              </span>
              </div>
          </div>

          <SearchBar />


      </div>
    </div>
  );
}

export default App;
