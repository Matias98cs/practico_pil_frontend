import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthLayout from "./components/Layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import { PersonasProvider } from "./context/PersonasProvider";
import RutaProtegida from "./components/Layouts/RutaProtegida";
import Registrar from "./components/Registrar/Registrar";
import Personas from "./components/Personas/Personas";
import Carreras from "./components/Carreras/Carrera";
import Universidades from "./components/Universidades/Universidades";
import Facultades from "./components/Facultades/Facultades";
import Campus from "./components/Campus/Campus";
import Programas from "./components/Programas/Programas";
import Editar from "./components/Carreras_Personas/Editar_Persona"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PersonasProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/registrar" element={<Registrar />} />
            </Route>

            <Route path="/home" element={<RutaProtegida />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="/Personas" element={<Personas />} />
            <Route path="/Carreras" element={<Carreras />} />
            <Route path="/Universidades" element={<Universidades />} />
            <Route path="/Facultades" element={<Facultades />} />
            <Route path="/Campus" element={<Campus />} />
            <Route path="/Programas" element={<Programas />} />
            <Route path="/Editar" element={<Editar />} />
          </Routes>
        </PersonasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
