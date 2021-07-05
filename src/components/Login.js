import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { setUserContext, userContext } from "./user";

var data = [];

async function loginUser(credenciales, setUserInfo) {

  const url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Usuarios/?search=" + credenciales.usuario;
  const response = await axios.get(url);
  const data = await response.data;
  
  if(data.length > 0){ 

    if(data[0].password === credenciales.password){

      setUserInfo(data[0].nombre);

    }
    else{

      alert('Comprueba los datos introducidos');

    }
  }
  else{

    alert('Comprueba los datos introducidos');

  }
}

async function rellenarData(){

  const url = "http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Jugadores/?search=25-04-2021";
  // Await de la función para esperar a la respuesta asincrona y obtener los datos

  //equipos
  const response = await axios.get(url);
  data = await response.data;

}

function crearEquipo(userInfo){

  var equipo = [];

  data.forEach((jugador) => {
    if(jugador.usuario_equipo === userInfo){
      equipo.push(
        <div className="">
          <div className="card-container" key={jugador.jugador}>
            <div className="card-content">
              <button
                className={"btn btn-success"}    
                onClick={() => {
                  buttonHandler(jugador, 1);
                }}
              >
                {jugador.jugador}--{jugador.precio}millones--{jugador.equipos}
              </button>
            </div>
          </div>
        </div>
      );
    }
  });
  console.log(equipo);
  return equipo;

}

function crearListaMercado(userInfo){

  var compraventaJSx = [];
  
  data.forEach((jugador) => {
      compraventaJSx.push(
        <div className="">
          <div className="card-container" key={jugador.jugador}>
            <div className="card-content">
              <button
                className={"btn btn-danger"}    
                onClick={() => {
                  buttonHandler(jugador, userInfo);
                }}
              >
                {jugador.jugador}--{jugador.precio}millones--{jugador.equipos}
              </button>
            </div>
          </div>
        </div>
      );
  });

  return compraventaJSx;

}

async function buttonHandler(jugador, userInfo) {


  const url = 'http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Jugadores/' + jugador.id + '/';
  await axios.delete(url);
  jugador.usuario_equipo = userInfo;
  await axios.post('http://ec2-100-26-164-92.compute-1.amazonaws.com:8000/api/Jugadores/', jugador);

}

export default function Login() {

  const userInfo = React.useContext(userContext);
  const setUserInfo = React.useContext(setUserContext);
  
  const [usuario, setUsuario] = React.useState({});
  const [password, setPassword] = React.useState({});

  rellenarData();  
  var compraventa = crearListaMercado(userInfo);
  var equipo = crearEquipo(userInfo);

  const handleLogin = async (e) => {

    e.preventDefault();
    await loginUser({

      usuario,
      password,

    }, setUserInfo);
    
  };

  if (userInfo != null) {
    return (
      <div className="App container">
        <div className="justify-content-center row">
          <h1 style={{ color: "white" }}>Bienvenido</h1>
        </div>
        <div className="justify-content-center row">
            <button
              type='button'
              className="btn btn-warning"
              onClick={() => {setUserInfo(null)}}
            >
              Logout
            </button>
        </div>
        <div className="row">
            <div className="Container">
              <h1 style={{ color: "white" }}>Mercado de fichajes</h1>
              {compraventa}
            </div>
            <div className="Container">
              <h1 style={{ color: "white" }}>Cartera/Equipo</h1>
              {equipo}
            </div>
          </div>      
      </div>
    );
  }
  else{
  return (
      <div className="App container">
        <div className="justify-content-center row">
          <h1 style={{ color: "white" }}>Inicio de sesion</h1>
        </div>
        <Link to="/Register" className="nav-item nav-link active">
          Registro
        </Link>
        <div className="justify-content-center row">
          <form className="mt-5" onSubmit={handleLogin}>
            <label>
              <p>Username</p>
              <input required type="text" onChange={(e) => setUsuario(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div>
              <button type='button' className="btn btn-success" type="submit">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
