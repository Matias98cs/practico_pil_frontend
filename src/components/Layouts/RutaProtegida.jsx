import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando...";

  return (
    <>
      {auth.id ? (
        <div>
          <main>
            <h4>GOD</h4>
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
