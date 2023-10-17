import React, { useState } from "react";
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
} from "reactstrap";
import Header from "../Header/Header";
import usePersonas from "../../hooks/usePersonas";
import CarreraCard from "./CarreraCard";

const Carrera = () => {
  const [modalActulizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { carreras } = usePersonas();
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
        <h1>Carreras</h1>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          {" "}
          + Agregar Carrera
        </Button>
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Universidad"
              // onChange={(e) => this.handleColumnSearch(e, universidad)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Facultad"
              // onChange={(e) => this.handleColumnSearch(e, facultad)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Campus"
              // onChange={(e) => this.handleColumnSearch(e, campus)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Programa"
              // onChange={(e) => this.handleColumnSearch(e, programa)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Universidad</th>
              <th>Facultad</th>
              <th>Campus</th>
              <th>Programa</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {carreras?.map((carrera) => (
              <CarreraCard dato={carrera} key={carrera.id} />
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              // value={this.state.form.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Universidad:</label>
            <input
              className="form-control"
              name="universidad"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.universidad}
            />
          </FormGroup>

          <FormGroup>
            <label>Facultad:</label>
            <input
              className="form-control"
              name="facultad"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.facultad}
            />
          </FormGroup>
          <FormGroup>
            <label>Campus:</label>
            <input
              className="form-control"
              name="campus"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.campus}
            />
          </FormGroup>
          <FormGroup>
            <label>Programa:</label>
            <input
              className="form-control"
              name="programa"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.programa}
            />
          </FormGroup>
        </ModalBody>

        {/* <ModalFooter>
          <Button color="primary" onClick={() => this.editar(this.state.form)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
            Cancelar
          </Button>
        </ModalFooter> */}
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Carrera</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              // value={this.state.data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Universidad:</label>
            <input
              className="form-control"
              name="universidad"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Facultad:</label>
            <input
              className="form-control"
              name="facultad"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Campus:</label>
            <input
              className="form-control"
              name="campus"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Programa:</label>
            <input
              className="form-control"
              name="programa"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Insertar</Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default Carrera;
