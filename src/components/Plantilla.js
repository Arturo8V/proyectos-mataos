import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

export default class Plantilla extends React.Component {
  state = {
    loading: true,
    Equipo: "",
    Jugadores: [],
    FotoEquipo: [],
    Fotos: [],
    Stats: [],
  };
  componentWillMount() {
    import("./Plantilla.css");
  }
  handleEquipo(equipo) {
    this.setState({
      Equipo: equipo,
    });
  }
  async componentDidMount() {
    import("./Plantilla.css");
    const { EquipoLiga } = this.props.location.state;
    this.handleEquipo(EquipoLiga);
    var url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Jugadores/?search=" + EquipoLiga;
    var response = await axios.get(url);
    var data = await response.data;
    this.setState({ Jugadores: data, loading: false });

    data = [];
    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Fotos/?search=" + EquipoLiga;
    response = await axios.get(url);
    data = await response.data;
    this.setState({ Fotos: data });

    data = [];
    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Escudos/?search=" + EquipoLiga;
    response = await axios.get(url);
    data = await response.data;
    this.setState({ FotoEquipo: data[0].Link });

    data = [];
    url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Equipos/?search=" + EquipoLiga;
    response = await axios.get(url);
    data = await response.data;
    this.setState({ Stats: data });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="card-container">
          <p>Loading...</p>
        </div>
      );
    } else if (!this.state.Jugadores.length === null) {
      return (
        <div className="card-container">
          <p>No se encontraron datos del equipo</p>
        </div>
      );
    } else {
      const jugadoresJSX = [];
      const fotosJSX = [];
      this.state.Fotos.forEach((foto) => {
        fotosJSX.push(<img alt="foto" src={foto.LinkFoto} />);
      });
      var i = 0;
      this.state.Jugadores.forEach((jugador) => {
        jugadoresJSX.push(
          <div className="col-5 ml-3">
            <div className="card-container" key={jugador.id}>
              <div className="image-container">{fotosJSX[i]}</div>
              <div className="card-content">
                <div className="card-title">
                  <h3>Nombre: {jugador.jugador}</h3>
                  <h3>Edad: {jugador.edad}</h3>
                  <h3>Pais: {jugador.pais}</h3>
                  <h3>Posicion: {jugador.posicion}</h3>
                  <h3>Valor: {jugador.precio} MILLONES</h3>
                </div>
              </div>
            </div>
          </div>
        );
        i++;
      });

      const valortotal = [];
      const valormedio = [];
      const fecha = [];

      for (let index = 0; index < this.state.Stats.length; index++) {
        valortotal.push(this.state.Stats[index].ValorTotal);
        valormedio.push(this.state.Stats[index].ValorMedio);
        fecha.push(this.state.Stats[index].Actualizacion);
      }
      const grafica1 = [];
      const grafica2 = [];


      grafica1.push(
        <div className="container">
          <Line
            data={{
              labels: fecha,
              datasets: [
                {
                  label: "Valor Medio",
                  data: valormedio,
                  backgroundColor: "red",
                  borderColor: "yellow",
                },
              ],
              beginAtCero: true,
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          ></Line>
        </div>
      );

      grafica2.push(
        <div className="container">
          <Line
            data={{
              labels: fecha,
              datasets: [
                {
                  label: "Valor Total",
                  data: valortotal,
                  backgroundColor: "red",
                  borderColor: "green",
                },
              ],
              beginAtCero: true,
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          ></Line>
        </div>
      );

      return (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img alt="foto" src={this.state.FotoEquipo} />
            </div>
            <div className="col-3 mt-5">
              <h1>{this.state.Equipo}</h1>
            </div>
          </div>

          <div className="row">{grafica1}</div>
          <div className="row">{grafica2}</div>



          <div className="row">{jugadoresJSX}</div>
        </div>
      );
    }
  }
}
