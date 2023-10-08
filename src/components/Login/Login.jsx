import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import clienteAxios from "../../config/ClienteAxios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([username, password].includes("")) {
      console.log("Completa todos los campos");
      return;
    }

    try {
      const { data } = await clienteAxios.post("login-jwt", {
        username,
        password,
      });
      localStorage.setItem("token", data.access_token);
      setUsername("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>
        ADMINISTRACION DE DATOS ACADEMISCOS PERSONALES DE ALUMNOS Y PROFESORES
      </h1>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Ingrese su usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Ingrese su password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  );
};

export default Login;
