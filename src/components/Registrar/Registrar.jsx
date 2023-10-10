import React, { useState } from "react";
import clienteAxios from "../../config/ClienteAxios";
import { Navigate, useNavigate } from "react-router-dom";

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
    <div>
      <h3>Crear tu cuenta para administrar los datos academicos</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Ingreses un nombre de Usuario"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Ingrese su Password"
        />
        <input
          value={repetirPassword}
          onChange={(e) => setRepetirPassword(e.target.value)}
          type="password"
          placeholder="Ingrese de nuevo su Password"
        />
        <input type="submit" value="Crear cuenta" />
      </form>
    </div>
  );
};

export default Registrar;
