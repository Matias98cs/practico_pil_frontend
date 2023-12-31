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
  const [carreras, setCarreras] = useState([]);
  const [universidades, setUniversidades] = useState([]);
  const [facultades, setFacultades] = useState([]);
  const [campus, setCampus] = useState([]);
  const [programas, setProgramas] = useState([]);

  const [dataPersona, setDataPersona] = useState({});
  const [activo, setActivo] = useState(false);

  // options
  const [facuOption, setFacuOption] = useState([]);
  const [campusOption, setCampusOption] = useState([]);
  const [programaOption, setProgramasOption] = useState([]);

  const [dataUnaPersona, setDataUnaPersona] = useState({});
  const [carreraPersona, setCarreraPersona] = useState([]);
  const [cargando, setCargando] = useState(false);

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

  useEffect(() => {
    const obtenerCarreras = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:9001/carreras-todo/obtener_todo"
        );
        const resultado = await response.json();
        setCarreras(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    };

    const obtenerUniversidades = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:9001/carreras-todo/obtener_universidades"
        );
        const resultado = await response.json();
        setUniversidades(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    };

    const obtenerFacultades = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:9001/obtener_facultades"
        );
        const resultado = await response.json();
        setFacultades(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    };
    const obtenerCampus = async () => {
      try {
        const response = await fetch("http://127.0.0.1:9001/obtener_campus");
        const resultado = await response.json();
        setCampus(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    };

    const obtenerPrograma = async () => {
      try {
        const response = await fetch("http://127.0.0.1:9001/obtener_programas");
        const resultado = await response.json();
        setProgramas(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCarreras();
    obtenerUniversidades();
    obtenerFacultades();
    obtenerCampus();
    obtenerPrograma();
  }, []);

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
    } catch (error) {
      console.log(error);
    }
  };

  const editarPersona = async (personaEdit) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:9001/personas/${personaEdit.persona_id}/editar`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(personaEdit),
        }
      );
      const resultado = await response.json();
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const bajaCarrera = async (id) => {
    const res = { id: id };
    try {
      const response = fetch(
        "http://127.0.0.1:9001/eliminar-carrera/eliminar",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(res),
        }
      );
      setActivo(!activo);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerFacuOption = async (nombUni) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:9001/obtener_facultad_campus_programa/obtener_facultades",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ universidad: nombUni }),
        }
      );
      const resultado = await response.json();
      setFacuOption(resultado.Resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerCampusOption = async (nomUni, nomFacu) => {
    const data = {
      universidad: nomUni,
      facultad: nomFacu,
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:9001/obtener_facultad_campus_programa/obtener_campus",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const resultado = await response.json();
      setCampusOption(resultado.Resultado);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProgramaOption = async (nomUni, nomFacu, nomCampu) => {
    try {
      const data = {
        universidad: nomUni,
        facultad: nomFacu,
        campus: nomCampu,
      };
      try {
        const response = await fetch(
          "http://127.0.0.1:9001/obtener_facultad_campus_programa/obtener_programas",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const resultado = await response.json();
        setProgramasOption(resultado.Resultado);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const asignarCarreraPersona = async (dataCarrera) => {
    try {
      const response = await fetch("http://127.0.0.1:9001/asignar-carrera", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataCarrera),
      });
      const resultado = await response.json();
      setActivo(!activo);
    } catch (error) {
      console.log(error);
    }
  };

  const unaPersona = async (id) => {
    setCargando(true);
    try {
      const response = await fetch(`http://127.0.0.1:9001/persona/${id}`);
      const resultado = await response.json();
      setDataUnaPersona(resultado.persona);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerCarrerasPersonas = async (id) => {
    setCargando(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:9001/carrera-persona/${id}`
      );
      const resultado = await response.json();
      setCarreraPersona(resultado.Resultado);
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
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
        carreras,
        universidades,
        facultades,
        campus,
        programas,
        setDataPersona,
        dataPersona,
        editarPersona,
        bajaCarrera,
        activo,
        obtenerFacuOption,
        facuOption,
        obtenerCampusOption,
        campusOption,
        obtenerProgramaOption,
        programaOption,
        asignarCarreraPersona,
        unaPersona,
        dataUnaPersona,
        setDataUnaPersona,
        cargando,
        obtenerCarrerasPersonas,
        carreraPersona,
      }}
    >
      {children}
    </PersonasContext.Provider>
  );
};

export { PersonasProvider };

export default PersonasContext;
