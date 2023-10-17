import { useContext, useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
  const personasPorPagina = 10;
  const [personas, setPersonas] = useState([]);
  const [paginado, setPaginado] = useState();
  const [paginaActual, setPaginaActual] = useState(1);
  useEffect(() => {
    const algonose = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:9001/personas?page=${paginaActual}`
        );
        const resultado = await response.json();
        console.log(resultado);
        setPaginado(resultado.total_paginas);
        setPersonas(resultado.personas);
      } catch (error) {
        console.log(error);
      }
    };
    algonose();
  }, [paginaActual]);

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

  return (
    <PersonasContext.Provider
      value={{
        personas,
        paginado,
        paginaSiguiente,
        paginaAnterior,
      }}
    >
      {children}
    </PersonasContext.Provider>
  );
};

export { PersonasProvider };

export default PersonasContext;
