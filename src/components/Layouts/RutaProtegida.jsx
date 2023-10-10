import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../Header/Header";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando...";

  return (
    <>
      {auth.id ? (
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
