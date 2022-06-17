function Nave(props) {
    // let modelo = "C3PO";
    // let velocidade = 250;
    // let cor = "black";
    // let energia = 50;
    
    return (
      <div>
        <p>Modelo: {props.modelo}</p>
        <p>Velocidade: {props.velocidade} </p>
        <p>Cor: {props.cor}</p>
        <p>Energia: {props.energia}</p>
      </div>
    );
  }
  
  export default Nave;
  