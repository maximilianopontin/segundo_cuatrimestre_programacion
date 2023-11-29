import "./App.css";
/*maximo de litros 40.
mayor que 30. fondo verde
entre 20 y 30, fondo amarillo
entre 10 y 20 fondo naranja
entre 0 hasta 10 fondo rojo
*/
function App() {
  const litros= Math.floor(Math.random()* 40)+1;
  let bckColor;

  if (litros >= 30){
    bckColor = "#3CFF33";
  } else if (litros > 20 && litros < 30){
    bckColor = "#FFE933";
  }

else if (litros > 10 && litros <= 20){
  bckColor = "#FFA833";
}
else if (litros>=0 && litros <= 10){
  bckColor = "#FF1912";
}

return (
  <div>
    <h2> INDICADOR DE NAFTA</h2>
    <div style= {{ backgroundColor: bckColor, padding: "10px", margin: "10px", color: "white" }}>
      Litros: {litros}
    </div>
  </div>
)
}

export default App;