import "./App.css";
import ImageDog from "./icon-dog.jpg";

function App() {
  const name = "Fulano Silva";

  let _number = 3;

  const dog_img =
    "https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png";

  function parOuImpar(number) {
    return number % 2 === 0 ? "É par" : "É ímpar";
  }

  return (
    <div className="App">
      {/*Comentário*/}
      <img src={dog_img} alt="Descrição da imagem" />
      {/* <img src = {ImageDog} alt="Descrição da imagem"/> */}
      <h1>Olá Mundo! Feito por: {name}</h1>
      <p>Bem vindos 3ºD ao react!</p>
      <p>{_number} é um numero par ou ímpar?</p>
      <p>R: {parOuImpar(_number)}</p>
    </div>
  );
}

export default App;
