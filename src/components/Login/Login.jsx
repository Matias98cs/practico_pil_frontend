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
      setAuth(data.user);
      localStorage.setItem("token", data.access_token);
      setUsername("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fondo container-fluid">
    <div className="Auth-form-container">
      <form onSubmit={handleSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Inicio de Sesion</h3>
          <div className="form-group mt-3">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" value= "Iniciar Sesion">
              Iniciar Sesion
            </button>
          </div>
          <nav>
            <Link to="/registrar">Registrarse</Link>
          </nav>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login;
