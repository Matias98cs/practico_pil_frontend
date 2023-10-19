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
import { useParams } from "react-router-dom";
import CarreraCard from "./CarreraCard";
import EditarFormulario from "./EditarFormulario";

const Editar = () => {
  const { id } = useParams();
  // const { obtenerUnaPersona, dataPersona } = usePersonas();
  const [carrerasPersona, setCarrerasPersona] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const [selectedOption5, setSelectedOption5] = useState("");
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
    setDataPersona,
  } = usePersonas();
  useEffect(() => {
    const obtenerPersona = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9001/persona/${id}`);
        const response_carrera = await fetch(
          `http://127.0.0.1:9001/carrera-persona/${id}`
        );

        const resultado = await response.json();
        const resultado_carrera = await response_carrera.json();
        setCarrerasPersona(resultado_carrera.Resultado);
        // setPersonaData(resultado.persona);
        setDataPersona(resultado.persona);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPersona();
  }, [id]);

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
        <h1>Editar Personas</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center rounded p-4 container-with-margin container-wider">
            <EditarFormulario />
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
            {carrerasPersona?.map((carrera) => (
              <CarreraCard dato={carrera} key={carrera.id} />
            ))}
          </tbody>
        </Table>
      </Container>
      <div>
        <Modal isOpen={modalInsertar}>
          <ModalHeader>Modal con Select Buttons</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="option1">Opción 1</Label>
              <Input
                type="select"
                name="select"
                id="option1"
                value={selectedOption1}
                onChange={(e) => setSelectedOption1(e.target.value)}
              >
                <option value="">Seleccionar opción</option>
                <option value="opcion1-1">Opción 1.1</option>
                <option value="opcion1-2">Opción 1.2</option>
                <option value="opcion1-3">Opción 1.3</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="option2">Opción 2</Label>
              <Input
                type="select"
                name="select"
                id="option2"
                value={selectedOption2}
                onChange={(e) => setSelectedOption2(e.target.value)}
              >
                <option value="">Seleccionar opción</option>
                <option value="opcion2-1">Opción 2.1</option>
                <option value="opcion2-2">Opción 2.2</option>
                <option value="opcion2-3">Opción 2.3</option>
              </Input>
            </FormGroup>
            {/* Repite el bloque anterior para las otras opciones 3, 4 y 5 */}
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={cerrarModalInsertar}>
              Guardar
            </Button>
            <Button color="danger" onClick={cerrarModalInsertar}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Editar;
