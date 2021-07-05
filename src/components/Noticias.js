import React from "react";
import axios from "axios";
import Modal from "react-modal";

export default class fetchNoticias extends React.Component {
  state = {
    loading: true,
    Noticias: [],
    isOpen: false,
    Foto: "",
    Contenido: "",
    Titulo: "",
    Equipo: "",
  };

  componentWillMount() {
    import("./Noticias.css");
  }
  async componentDidMount() {
    const url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Noticias/?format=json";
    const response = await axios.get(url);
    const data = await response.data;

    this.setState({ Noticias: data, loading: false });
  }
  handleNoticia(noticiaActual) {
    this.setState({
      Foto: noticiaActual.Foto,
      Contenido: noticiaActual.Contenido,
      Titulo: noticiaActual.Titulo,
      Equipo: noticiaActual.Equipo,
    });
  }
  render() {
    if (this.state.loading === true) {
      return (
        <div className="card-container">
          <p>Loading...</p>
        </div>
      );
    } else if (!this.state.Noticias.length === null) {
      return (
        <div className="card-container">
          <p>No se encontraron noticias</p>
        </div>
      );
    } else {
      const noticiasJSX = [];

      this.state.Noticias.forEach((noticia) => {
        noticiasJSX.push(
          <div className="ml-3">
            <div className="car-container">
              <figure>
                <p>
                  <img
                    alt={noticia.foto}
                    height="150px"
                    width="300px"
                    src={noticia.Foto}
                  />
                </p>
              </figure>
              <div>
                <div className="container">
                  <p>
                    <strong>{noticia.Titulo}</strong>
                    <br />
                    <small>
                      <i>Equipo: {noticia.Equipo}</i>
                    </small>
                    <br />
                    <button
                      class="btn btn-success"
                      onClick={() => {
                        this.setState({ isOpen: true });
                        this.handleNoticia(noticia);
                      }}
                    >
                      Leer más
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div className="container">
          <Modal isOpen={this.state.isOpen}>
            <div className="container">
              <img alt="foto" src={this.state.Foto} />

              <h2>{this.state.Titulo}</h2>
              <i>Equipo: {this.state.Equipo}</i>
              <p style={{ color: "black" }}>{this.state.Contenido}</p>
              <br />
              <button
                class="btn btn-danger"
                onClick={() => {
                  this.setState({ isOpen: false });
                }}
              >
                Cerrar
              </button>
            </div>
          </Modal>
          <div className="row">{noticiasJSX}</div>
        </div>
      );
    }
  }
}
