import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Header from "../Header/Header";
import usePersonas from "../../hooks/usePersonas";
import PersonaCard from "./PersonaCard";
import {Link} from "react-router-dom"

const Personas = () => {
  const [modalActulizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const {
    personas,
    paginado,
    paginaSiguiente,
    paginaAnterior,
    setInsertarPersona,
    postPersona,
    paginaActual,
  } = usePersonas();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [personaId, setPersonaId] = useState("");

  const handleSubmitPersona = (e) => {
    e.preventDefault();
    if (
      [
        nombre,
        apellido,
        email,
        nacimiento,
        genero,
        ciudad,
        barrio,
        pais,
        provincia,
        personaId,
      ].includes("")
    ) {
      console.log("Complete todos los campos");
      return;
    }

    const fecha = new Date(nacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const year = fecha.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${year}`;
    const campos = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      birthdate: fechaFormateada,
      genero: genero,
      ciudad: ciudad,
      barrio: barrio,
      pais: pais,
      provincia: provincia,
      personal_id: personaId,
    };
    setInsertarPersona(campos);
    postPersona();
    setNombre("");
    setApellido("");
    setEmail("");
    setNacimiento("");
    setGenero("");
    setCiudad("");
    setBarrio("");
    setProvincia("");
    setPais("");
    setPersonaId("");
  };
  const mostrarModalActualizar = () => {
    setModalActulizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActulizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  return (
    <div className="homeimage overflow-auto">
      <Header></Header>
      <Container>
        <h1>Personas</h1>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          {" "}
          + Agregar Nueva Persona
        </Button>
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Nombre"
              // onChange={(e) => this.handleColumnSearch(e, nombre)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Apellido"
              // onChange={(e) => this.handleColumnSearch(e, apellido)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Email"
              // onChange={(e) => this.handleColumnSearch(e, email)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Nacimiento</th>
              <th>Genero</th>
              <th>Pais</th>
              <th>Provincia</th>
              <th>Ciudad</th>
              <th>Barrio</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {personas.map((persona) => (
              <PersonaCard dato={persona} key={persona.id} />
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Persona</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Nacimiento:</label>
            <input
              className="form-control"
              name="birthdate"
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>DNI:</label>
            <input
              className="form-control"
              name="DNI"
              type="number"
              value={personaId}
              onChange={(e) => setPersonaId(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Genero:</label>
            <input
              className="form-control"
              name="genero"
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Pais:</label>
            <input
              className="form-control"
              name="pais"
              type="text"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Provincia:</label>
            <input
              className="form-control"
              name="provincia"
              type="text"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Ciudad:</label>
            <input
              className="form-control"
              name="ciudad"
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label>Barrio:</label>
            <input
              className="form-control"
              name="barrio"
              type="text"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={(e) => handleSubmitPersona(e)}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
      <div className="container-fluid text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-1 " style={{ marginRight: "-40px" }}>
            <button
              className="btn btn-primary mx-auto mb-2"
              onClick={paginaAnterior}
            >
              Anterior
            </button>
          </div>
          <div className="col-1">
            <p className="my-2  bg-white" style={{ maxWidth: "30px" }}>
              {paginaActual}
            </p>
          </div>
          <div className="col-1 offset-0" style={{ marginLeft: "-140px" }}>
            <button
              className="btn btn-primary mx-auto mb-2"
              onClick={paginaSiguiente}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personas;
 