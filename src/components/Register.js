import "./Register.css";
import React, { useState } from "react";
import axios from "axios";

async function registerUser(credenciales) {
  var url = "http://ec2-18-207-140-156.compute-1.amazonaws.com:8000/api/Usuarios/?search=" + credenciales.nombre;
  var response = await axios.get(url);
  var data = response.data;

  if (data.length > 0) {
    if (data[0].nombre === credenciales.nombre) {
      console.log('Usuario ya existente')
      window.location.replace('/Register')
    }
  } else {
    response = await axios.post(
      "http://ec2-18-207-140-156.compute-1.amazonaws.com:8000/api/Usuarios/",
      credenciales
    );
    data = response.data;
    window.location.replace('/')
  }
}

export default function Register() {
  const [nombre, setNombre] = useState();
  const [password, setPassword] = useState();

  const handleRegistrar = async (e) => {
    e.preventDefault();
    await registerUser({
      nombre,
      password,
    });
  };

  return (
    <div className="App container">
      <div className="justify-content-center row">
        <h1 style={{ color: "white" }}>Registro</h1>
      </div>
      <div className="justify-content-center row">
        <form className="mt-5" onSubmit={handleRegistrar}>
          <label>
            <p>Nombre de usuario</p>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
          </label>
          <label>
            <p>Contraseña</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div>
            <button className="btn btn-success" type="submit">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
