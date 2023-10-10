import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthLayout from "./components/Layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import RutaProtegida from "./components/Layouts/RutaProtegida";
import Registrar from "./components/Registrar/Registrar";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="/registrar" element={<Registrar />} />
          </Route>

          <Route path="/home" element={<RutaProtegida />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
