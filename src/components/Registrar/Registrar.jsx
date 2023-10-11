import React, { useState } from "react";
import clienteAxios from "../../config/ClienteAxios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Registrar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([username, password, repetirPassword].includes("")) {
      console.log("Todos los campos son requeridos");
      return;
    }
    if (password !== repetirPassword) {
      console.log("Ambas contraseña no son iguales");
      return;
    }

    if (password.length < 6) {
      console.log("La contraseña debe ser mayor a 6 caracteres");
      return;
    }

    clienteAxios
      .post("api/usuario", { username, password, activo: 1 })
      .then((response) => {
        let exito = response.data.exito;
        let msg = response.data.msg;
        if (exito) {
          console.log(msg);
          Navigate("/");
        } else {
          console.log(msg);
        }
        setUsername("");
        setPassword("");
        setRepetirPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="fondo container-fluid">
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <h3 className="Auth-form-title">Registrarse</h3>
        <div className="Auth-form-content">
          <label>Nombre de Usuario</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Nombre de Usuario"
          />
        </div>
        <div className="Auth-form-content">
          <label>Ingrese su Contraseña</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}          
            type="password"
            className="form-control"
            placeholder="Ingrese su Contraseña"
          />
        </div>
        <div className="Auth-form-content">
          <label>Repita su Contraseña</label>
          <input
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}        
            type="password"
            className="form-control"
            placeholder="Repita su Contraseña"
          />        
          <div className="d-grid gap-1 mt-2">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
        </div>
          <div>
          <Link to="/">Iniciar Sesion</Link>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registrar;
