import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await clienteAxios("login-jwt", config);
        setAuth(data.user);
      } catch (error) {
        setAuth({});
      }
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{
        cargando,
        auth,
        setAuth,
        cerrarSesionAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
