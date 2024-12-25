import logo from "./logo.svg";
import "./App.css";

function App() {
  // Just a dummy comment
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://cdn.pixabay.com/photo/2021/02/25/14/12/rinnegan-6049194_1280.png" ||
            logo
          }
          className="App-logo"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          alt="logo"
        />
        <a
          className="App-link"
          href="https://hianime.to/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Anime
        </a>
      </header>
      <p>Application version: 1</p>
    </div>
  );
}

export default App;
