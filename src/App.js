import React from "react";
import "./App.css";
import Loader from "./components/Loader";
import Toast from "./components/Toast";
import { ENDPOINT } from "./utils/constants";
import { useFetch } from "./utils/useFetch";

function App() {
  const { error, setError, isLoading, response } = useFetch(ENDPOINT);
  return (
    <div className="App">
      <header className="App-header">React Custom Hooks Demo</header>
      <div className="App-content">
        {error ? <Toast error={error} setError={setError} /> : null}
        {isLoading ? <Loader /> : null}
        {response && response.count > 0 ? (
          <div>
            {response.entries.map((entry) => {
              return (
                <div>
                  <a href={entry.Link} target="_blank" rel="noreferrer">
                    {entry.API}
                  </a>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <footer className="App-footer">Happy Coding!</footer>
    </div>
  );
}

export default App;
