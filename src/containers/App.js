import AgregarCita from "../components/AgregarCita";
import ListarCitas from "../components/ListarCitas";

function App() {
  return (
    <div className="container center-align">
      <header><h1>EPS Sura</h1></header>
      <div className="row">
        <div className="col m6 s12">
          <AgregarCita />
        </div>
        <div className="col m6 s12">
          <ListarCitas />
        </div>
      </div>
    </div>
  );
}

export default App;
