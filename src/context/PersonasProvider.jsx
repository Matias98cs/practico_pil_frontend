import { useContext, useState, useEffect, createContext } from "react";
import clienteAxios from "../config/ClienteAxios";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PersonasContext = createContext();

const PersonasProvider = ({ children }) => {
  return <PersonasContext value={{}}>{children}</PersonasContext>;
};

export { PersonasProvider };

export default PersonasContext;
