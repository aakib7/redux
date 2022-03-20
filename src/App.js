import "./App.css";
import Counter from "./Components/Counter";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
        <Counter />
      </div>
    </>
  );
}

export default App;
