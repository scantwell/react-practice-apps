import logo from "./images/Fill 213.png";
import "./App.css";
import Destination from "./components/Destination";
import Info from "./destinationinfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <span>
          <p>my travel journal.</p>
        </span>
      </header>
      <div className="content">
        {Info.map((info) => {
          return <Destination {...info} />;
        })}
      </div>
    </div>
  );
}

export default App;
