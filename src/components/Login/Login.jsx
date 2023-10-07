import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>
        ADMINISTRACION DE DATOS ACADEMISCOS PERSONALES DE ALUMNOS Y PROFESORES
      </h1>
      <h4>Login</h4>
      <form>
        <input type="text" name="usuario" placeholder="Ingrese su usuario" />
        <input
          type="password"
          name="password"
          placeholder="Ingrese su password"
        />
        <Link to="/home">Iniciar Sesion</Link>
      </form>
    </div>
  );
};

export default Login;
