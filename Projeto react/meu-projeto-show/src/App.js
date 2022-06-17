import Nave from "./components/Nave.js";
import Geladeira from "./components/Geladeira";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Naves 🚀</h1>
      <Nave modelo="C3PO" velocidade={300} cor="Branca" energia={50} />
      <p>--------------------</p>
      <Nave
        modelo="Milenion Falcon"
        velocidade={500}
        cor="Branca"
        energia={100}
      />
      <p>--------------------</p>
      <h2>Geladeiras 🧊</h2>
      <Geladeira
        modelo={"Eletrolux"}
        altura={1.70}
        capacidade={240}
      />
    </div>
  );
}

export default App;
