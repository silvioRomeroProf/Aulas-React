import "./App.css";
import SuperMarioImagem from "./images/Super-Mario-World.jpg";

function App() {
  // let idade = 24;
  return (
    <div className="App">
      <h1>Super Mario World</h1>

      <div className="Sinopse">

        <div className="imagem">
          <img src={SuperMarioImagem} alt="Imagem do jogo Super Mario World" />
        </div>

        <div>
          <p>
            Na história de Super Mario World, Mario está em Dinossaur Land e
            após libertar Yoshi, ele descobre que a ilha foi invadida por Bowser
            (Rei Koopa) e seus filhos. Cabe então a Mario e Luigi, derrotar
            Bowser, destruindo os castelos que ele e seus filhos construíram,
            salvar a princesa e recuperar a Dinossaur Land.
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;
