import React from "react";
import axios from "axios";
import Modal from "react-modal";
import { Bar } from "react-chartjs-2";

export default class Estadisticas extends React.Component {

  componentWillMount() {

    import("./Estadisticas.css");

  }
  state = {

    loading: true,
    clasificacion: [],
    goleadores: [],
    asistencias: [],
    encajados: [],
    asistenciasModal: false,
    goleadoresModal: false,
    clasificacionModal: false,
    encajadosModal: false,

  };

  async componentDidMount() {

    var url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Clasificacion/?format=json";
    // Await de la función para esperar a la respuesta asincrona y obtener los datohttp://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/s
    var response = await axios.get(url);
    const equiposData = await response.data;

    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Pichichi/?format=json";
    response = await axios.get(url);
    const goleadoresData = await response.data;

    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Asistencias/?format=json";
    response = await axios.get(url);
    const asistenciasData = await response.data;

    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Goles_encajados/?format=json";
    response = await axios.get(url);
    const encajadosData = await response.data;

    // Cambio del estado de los datos porque llegado aquí ya se han recibido
    this.setState({

      clasificacion: equiposData,
      goleadores: goleadoresData,
      asistencias: asistenciasData,
      encajados: encajadosData,
      loading: false,
    });
  }

  render() {

    if (this.state.loading === true) {

      return (
        <div className="card-container">
          <p>Loading...</p>
        </div>
      );
    } 
    else if (!this.state.clasificacion.length === null) {

      return (
        <div className="card-container">
          <p>No se encontraron estadisticas</p>
        </div>
      );
    } 
    else {
      // Mapeo del array de equipos por cada uno de los equipos

      const clasificacionJSx = [];
      clasificacionJSx.push(
        <div className="ml-3">
          <div className="car-container">
            <figure>
              <p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/LaLiga_Santander_%282%29.svg/1200px-LaLiga_Santander_%282%29.svg.png"
                  height="150px"
                  width="300px"
                  alt="Clasificacion"
                />
              </p>
            </figure>
            <div>
              <div className="container">
                <p>
                  <br />
                  <button
                    class="btn btn-success"
                    onClick={() => {
                      this.setState({ isOpen: true });
                      this.setState({ clasificacionModal: true });
                    }}
                  >
                    VER CLASIFICACIÓN
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      const datosClasificacionJSx = [];

      datosClasificacionJSx.push(
        <div className="container">
          <div>
            <br />
            <table id="clasificacion">
              <tbody>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[0].Equipo}</td>
                  <td>{this.state.clasificacion[0].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[1].Equipo}</td>
                  <td>{this.state.clasificacion[1].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[2].Equipo}</td>
                  <td>{this.state.clasificacion[2].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[3].Equipo}</td>
                  <td>{this.state.clasificacion[3].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[4].Equipo}</td>
                  <td>{this.state.clasificacion[4].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[5].Equipo}</td>
                  <td>{this.state.clasificacion[5].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[6].Equipo}</td>
                  <td>{this.state.clasificacion[6].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[7].Equipo}</td>
                  <td>{this.state.clasificacion[7].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[8].Equipo}</td>
                  <td>{this.state.clasificacion[8].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[9].Equipo}</td>
                  <td>{this.state.clasificacion[9].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[10].Equipo}</td>
                  <td>{this.state.clasificacion[10].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[11].Equipo}</td>
                  <td>{this.state.clasificacion[11].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[12].Equipo}</td>
                  <td>{this.state.clasificacion[12].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[13].Equipo}</td>
                  <td>{this.state.clasificacion[13].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[14].Equipo}</td>
                  <td>{this.state.clasificacion[14].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[15].Equipo}</td>
                  <td>{this.state.clasificacion[15].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[16].Equipo}</td>
                  <td>{this.state.clasificacion[16].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[17].Equipo}</td>
                  <td>{this.state.clasificacion[17].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[18].Equipo}</td>
                  <td>{this.state.clasificacion[18].Puntos}</td>
                </tr>
                <tr key={this.state.clasificacion.Equipo}>
                  <td>{this.state.clasificacion[19].Equipo}</td>
                  <td>{this.state.clasificacion[19].Puntos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );

      const GoleadoresJSx = [];

      GoleadoresJSx.push(
        <div className="ml-3">
          <div className="car-container">
            <figure>
              <p>
                <img
                  src="http://media-s3-us-east-1.ceros.com/bwin/images/2019/06/11/c75338297879f30b21fcbf5d40622c34/botaaaa.png"
                  height="150px"
                  width="300px"
                  alt="Goleadores"
                />
              </p>
            </figure>
            <div>
              <div className="container">
                <p>
                  <br />
                  <button
                    class="btn btn-success"
                    onClick={() => {
                      this.setState({ isOpen: true });
                      {
                        this.setState({ goleadoresModal: true });
                      }
                    }}
                  >
                    VER GOLEADORES
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      const datosGoleadoresJSx = [];
      const goles = [];
      const jugadorGoles = [];

      for (let index = 0; index < this.state.goleadores.length; index++) {

        jugadorGoles.push(this.state.goleadores[index].Nombre);
        goles.push(this.state.goleadores[index].Goles);

      }

      datosGoleadoresJSx.push(
        <div className="container">
          <Bar
            data={{
              labels: jugadorGoles,
              datasets: [
                {
                  label: "goles",
                  data: goles,
                  backgroundColor: "green",
                },
              ],
            }}
          ></Bar>
        </div>
      );

      const AsistenciasJSx = [];

      AsistenciasJSx.push(
        <div className="ml-3">
          <div className="car-container">
            <figure>
              <p>
                <img
                  src="https://i.pinimg.com/originals/29/ba/97/29ba97dea0b08d6361e7f41fa2e8e740.png"
                  height="150px"
                  width="300px"
                  alt="Asistencias"
                />
              </p>
            </figure>
            <div>
              <div className="container">
                <p>
                  <br />
                  <button
                    class="btn btn-success"
                    onClick={() => {
                      this.setState({ isOpen: true });
                      {
                        this.setState({ asistenciasModal: true });
                      }
                    }}
                  >
                    VER MEJORES ASISTENTES
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      const EncajadosJSx = [];

      EncajadosJSx.push(
        <div className="ml-3">
          <div className="car-container">
            <figure>
              <p>
                <img
                  src="https://i.postimg.cc/SRkdB1Cf/guantes-1.png"
                  height="150px"
                  width="300px"
                  alt="Encajados"
                />
              </p>
            </figure>
            <div>
              <div className="container">
                <p>
                  <br />
                  <button
                    class="btn btn-success"
                    onClick={() => {
                      this.setState({ isOpen: true });
                      {
                        this.setState({ encajadosModal: true });
                      }
                    }}
                  >
                    VER GOLES ENCAJADOS
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      );

      const datosEncajadosJSx = [];
      const encajados = [];
      const jugadorEncajados = [];

      for (let index = 0; index < this.state.encajados.length; index++) {

        encajados.push(this.state.encajados[index].Goles_encajados);
        jugadorEncajados.push(this.state.encajados[index].Nombre);

      }

      datosEncajadosJSx.push(
        <div className="container">
          <Bar
            data={{
              labels: jugadorEncajados,
              datasets: [
                {
                  label: "Goles encajados",
                  data: encajados,
                  backgroundColor: "red",
                },
              ],
            }}
          ></Bar>
        </div>
      );

      const datosAsistenciasJSx = [];
      const jugadorAsistencias = [];
      const asistencias = [];

      for (let index = 0; index < this.state.asistencias.length; index++) {
        
        asistencias.push(this.state.asistencias[index].Asistencias);
        jugadorAsistencias.push(this.state.asistencias[index].Nombre);

      }

      datosAsistenciasJSx.push(
        <div className="container">
          <Bar
            data={{
              labels: jugadorAsistencias,
              datasets: [
                {
                  label: "Asistencias",
                  data: asistencias,
                  backgroundColor: "yellow",
                },
              ],
            }}
          ></Bar>
        </div>
      );

      if (this.state.goleadoresModal) {

        return (
          <div className="container">
            <Modal isOpen={this.state.isOpen}>
              <div className="container">
                <h2>GOLEADORES</h2>
                <div className="row">{datosGoleadoresJSx}</div>
                <button
                  class="btn btn-danger"
                  onClick={() => {
                    this.setState({ isOpen: false });
                    this.setState({ goleadoresModal: false });
                  }}
                >
                  Cerrar
                </button>
              </div>
            </Modal>
            <div className="row">
              {clasificacionJSx}
              {GoleadoresJSx}
              {AsistenciasJSx}
            </div>
          </div>
        );
      }

      if (this.state.encajadosModal) {

        return (
          <div className="container">
            <Modal isOpen={this.state.isOpen}>
              <div className="container">
                <h2>GOLES ENCAJADOS</h2>
                <div className="row">{datosEncajadosJSx}</div>
                <button
                  class="btn btn-danger"
                  onClick={() => {
                    this.setState({ isOpen: false });
                    this.setState({ encajadosModal: false });
                  }}
                >
                  Cerrar
                </button>
              </div>
            </Modal>
            <div className="row">
              {clasificacionJSx}
              {GoleadoresJSx}
              {AsistenciasJSx}
              {EncajadosJSx}
            </div>
          </div>
        );
      }

      if (this.state.clasificacionModal) {

        return (
          <ol>
            <div className="container">
              <Modal isOpen={this.state.isOpen}>
                <div className="container">
                  <h2>CLASIFICACION</h2>

                  <div className="row">{datosClasificacionJSx}</div>
                  <button
                    class="btn btn-danger"
                    onClick={() => {
                      this.setState({ isOpen: false });
                      this.setState({ clasificacionModal: false });
                    }}
                  >
                    Cerrar
                  </button>
                </div>
              </Modal>
              <div className="row">
                {clasificacionJSx}
                {GoleadoresJSx}
                {AsistenciasJSx}
                {EncajadosJSx}
              </div>
            </div>
          </ol>
        );
      }

      if (this.state.asistenciasModal) {

        return (
          <div className="container">
            <Modal isOpen={this.state.isOpen}>
              <div className="container">
                <h2>ASISTENCIAS</h2>
                <div className="row">{datosAsistenciasJSx}</div>
                <button
                  class="btn btn-danger"
                  onClick={() => {
                    this.setState({ isOpen: false });
                    this.setState({ AsistenciasModal: false });
                  }}
                >
                  Cerrar
                </button>
              </div>
            </Modal>
            <div className="row">
              {clasificacionJSx}
              {GoleadoresJSx}
              {AsistenciasJSx}
              {EncajadosJSx}
            </div>
          </div>
        );
      } 
      else {
        
        return (
          <div className="container">
            <div className="row">
              {clasificacionJSx}
              {GoleadoresJSx}
              {AsistenciasJSx}
              {EncajadosJSx}
            </div>
          </div>
        );
      }
    }
  }
}
