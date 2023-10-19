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
  const [carrerasPersona, setCarrerasPersona] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectUniversidad, setSelectUniversidad] = useState("");
  const [selectFacu, setSelectFacu] = useState("");
  const [selectCampus, setSelectCampus] = useState("");
  const [selectPrograma, setSelectedPrograma] = useState("");
  const [selectRol, setSelectRol] = useState("");
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
    activo,
    universidades,
    obtenerFacuOption,
    facuOption,
    obtenerCampusOption,
    campusOption,
    obtenerProgramaOption,
    programaOption,
    asignarCarreraPersona,
  } = usePersonas();
  useEffect(() => {
    const obtenerPersona = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:9001/persona/${id}`);
        const response_carrera = await fetch(
          `http://127.0.0.1:9001/carrera-persona/${id}`
        );

        const resultado = await response.json();
        setDataPersona(resultado.persona);
        const resultado_carrera = await response_carrera.json();
        setCarrerasPersona(resultado_carrera.Resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerPersona();
  }, [id, activo]);

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

  const asignarCarrera = (nombreUni) => {
    setSelectUniversidad(nombreUni);
    obtenerFacuOption(nombreUni);
  };

  const optionFacultades = (nombreFacu) => {
    setSelectFacu(nombreFacu);
    obtenerCampusOption(selectUniversidad, nombreFacu);
  };

  const optionCampus = (nombreCampus) => {
    setSelectCampus(nombreCampus);
    obtenerProgramaOption(selectUniversidad, selectFacu, nombreCampus);
  };

  const insertarCarrera = (e) => {
    e.preventDefault();
    if (
      [
        selectUniversidad,
        selectFacu,
        selectPrograma,
        selectPrograma,
        setSelectRol,
      ].includes("")
    ) {
      console.log("Selecciona todos los campos");
      return;
    }
    let carrera = {
      universidad: selectUniversidad,
      facultad: selectFacu,
      campus: selectCampus,
      programa: selectPrograma,
      tipo: selectRol,
      id_persona: id,
    };
    asignarCarreraPersona(carrera);
    setModalActulizar(!modalActulizar);
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
              <th>Estado</th>
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
              <Label for="option1">Universidades</Label>
              <Input
                type="select"
                name="select"
                id="option1"
                value={selectUniversidad}
                onChange={(e) => asignarCarrera(e.target.value)}
              >
                <option value="">Seleccionar Universidad</option>
                {universidades?.map((uni) => (
                  <>
                    <option key={uni.nombre} value={uni.nombre}>
                      {uni.nombre}
                    </option>
                  </>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="option2">Facultades</Label>
              <Input
                type="select"
                name="select"
                id="option2"
                value={selectFacu}
                onChange={(e) => optionFacultades(e.target.value)}
              >
                <option value="">Seleccionar Facultad</option>
                {facuOption?.map((facu) => (
                  <>
                    <option key={facu.nombre} value={facu.nombre}>
                      {facu.nombre}
                    </option>
                  </>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="option2">Campus</Label>
              <Input
                type="select"
                name="select"
                id="option2"
                value={selectCampus}
                onChange={(e) => optionCampus(e.target.value)}
              >
                <option value="">Seleccionar Campus</option>
                {campusOption?.map((campu) => (
                  <>
                    <option key={campu.id} value={campu.nombre}>
                      {campu.nombre}
                    </option>
                  </>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="option2">Programa</Label>
              <Input
                type="select"
                name="select"
                id="option2"
                value={selectPrograma}
                onChange={(e) => setSelectedPrograma(e.target.value)}
              >
                <option value="">Seleccionar Programa</option>
                {programaOption?.map((programa) => (
                  <>
                    <option key={programa.id} value={programa.nombre}>
                      {programa.nombre}
                    </option>
                  </>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="option2">Rol</Label>
              <Input
                type="select"
                name="select"
                id="option2"
                value={selectRol}
                onChange={(e) => setSelectRol(e.target.value)}
              >
                <option value="">Seleccionar Rol</option>
                <option value="Alumno">Alumno</option>
                <option value="Profesor">Profesor</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={(e) => insertarCarrera(e)}>
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
