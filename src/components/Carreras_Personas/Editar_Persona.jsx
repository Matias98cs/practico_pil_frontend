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
  Label,
  Input,
} from "reactstrap";
import Header from "../Header/Header";
import usePersonas from "../../hooks/usePersonas";

const Editar = () => {
        const [modalOpen, setModalOpen] = useState(false);
        const [selectedOption1, setSelectedOption1] = useState('');
        const [selectedOption2, setSelectedOption2] = useState('');
        const [selectedOption3, setSelectedOption3] = useState('');
        const [selectedOption4, setSelectedOption4] = useState('');
        const [selectedOption5, setSelectedOption5] = useState('');
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
        <div className="row mb-2 text-center">
        <h1>
            Editar Personas
        </h1>
        <div className="d-flex justify-content-center align-items-center">
        <div className="text-center rounded p-4 container-with-margin container-wider"  >
        <div className="row">
        <div className="col-md-6 px-6">
        <FormGroup className="bg-white rounded">
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </FormGroup >

          <FormGroup className="bg-white rounded">
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Nacimiento:</label>
            <input
              className="form-control"
              name="birthdate"
              type="date"
              value={nacimiento}
              onChange={(e) => setNacimiento(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="bg-white rounded">
            <label>DNI:</label>
            <input
              className="form-control"
              name="DNI"
              type="number"
              value={personaId}
              onChange={(e) => setPersonaId(e.target.value)}
            />
          </FormGroup>
          </div>
          <div className="col-md-6 px-6">
          <FormGroup className="bg-white rounded">
            <label>Genero:</label>
            <input
              className="form-control"
              name="genero"
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Pais:</label>
            <input
              className="form-control"
              name="pais"
              type="text"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Provincia:</label>
            <input
              className="form-control"
              name="provincia"
              type="text"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Ciudad:</label>
            <input
              className="form-control"
              name="ciudad"
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="bg-white rounded">
            <label>Barrio:</label>
            <input
              className="form-control"
              name="barrio"
              type="text"
              value={barrio}
              onChange={(e) => setBarrio(e.target.value)}
            />
          </FormGroup>
          </div>
          <div>
          <Button color="success" onClick={(e) => handleSubmitPersona(e)}>
            Guardar Cambios
          </Button>
          </div>
          </div>
          </div>
          </div>
        </div>
        <Container>
        <h1>Carreras Viculadas a </h1>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          {" "}
          + Agregar Nueva Carrera
        </Button>
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Universidad"
              // onChange={(e) => this.handleColumnSearch(e, nombre)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Facultad"
              // onChange={(e) => this.handleColumnSearch(e, apellido)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Programa"
              // onChange={(e) => this.handleColumnSearch(e, email)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Universidad</th>
              <th>Facultad</th>
              <th>Programa</th>
              <th>Campus</th>
              <th>Rol</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
          </tbody>
        </Table>
        </Container>
        <div>
        <Modal isOpen={modalInsertar}>
        <ModalHeader>Modal con Select Buttons</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="option1">Opción 1</Label>
            <Input type="select" name="select" id="option1" value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)}>
              <option value="">Seleccionar opción</option>
              <option value="opcion1-1">Opción 1.1</option>
              <option value="opcion1-2">Opción 1.2</option>
              <option value="opcion1-3">Opción 1.3</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="option2">Opción 2</Label>
            <Input type="select" name="select" id="option2" value={selectedOption2} onChange={(e) => setSelectedOption2(e.target.value)}>
              <option value="">Seleccionar opción</option>
              <option value="opcion2-1">Opción 2.1</option>
              <option value="opcion2-2">Opción 2.2</option>
              <option value="opcion2-3">Opción 2.3</option>
            </Input>
          </FormGroup>
          {/* Repite el bloque anterior para las otras opciones 3, 4 y 5 */}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={cerrarModalInsertar}>Guardar</Button>
          <Button color="danger" onClick={cerrarModalInsertar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
        </div>
        </div>
    );
  };

export default Editar;