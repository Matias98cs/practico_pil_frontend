import { useContext, useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);

  useContext(() => {
    const obteniendoPersonas = async () => {
      console.log("Lllmando personas");
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch("http://127.0.0.1:9001/personas");
      const result = await response.json();
      console.log(result);
      // try {
      //   const { data } = clienteAxios("personas", config);
      //   console.log(data);
      //   setPersonas(data.personas);
      // } catch (error) {
      //   console.log(error);
      // }
    };
    obteniendoPersonas();
  }, []);
  return (
    <PersonasContext.Provider
      value={{
        personas,
      }}
    >
      {children}
    </PersonasContext.Provider>
  );
};

export { PersonasProvider };

export default PersonasContext;
