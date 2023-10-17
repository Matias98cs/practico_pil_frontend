import { useContext, useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
  // const personasPorPagina = 10;
  const [personas, setPersonas] = useState([]);
  const [paginado, setPaginado] = useState();
  const [paginaActual, setPaginaActual] = useState(1);
  const [insertarPersona, setInsertarPersona] = useState({});
  const [actualizar, setActualizar] = useState(false);
  useEffect(() => {
    const obtenerPersonas = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:9001/personas?page=${paginaActual}`
        );
        const resultado = await response.json();
        setPaginado(resultado.total_paginas);
        setPersonas(resultado.personas);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPersonas();
  }, [paginaActual, actualizar]);

  const paginaSiguiente = () => {
    if (paginaActual < paginado) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const postPersona = async () => {
    try {
      const response = await fetch("http://127.0.0.1:9001/personas/crear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(insertarPersona),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPersona = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:9001/personas/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const resultado = await response.json();
      setActualizar(!actualizar);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PersonasContext.Provider
      value={{
        personas,
        paginado,
        paginaSiguiente,
        paginaAnterior,
        setInsertarPersona,
        postPersona,
        eliminarPersona,
        paginaActual,
      }}
    >
      {children}
    </PersonasContext.Provider>
  );
};

export { PersonasProvider };

export default PersonasContext;
