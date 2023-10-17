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
import UniversidadCard from "./UniversidadCard";

const Universidades = () => {
  const [modalActulizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { universidades } = usePersonas();
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
      <Header />
      <Container>
        <h1>Universidades</h1>
        <br />
        {/* <Button color="success" onClick={() => mostrarModalInsertar()}>
          {" "}
          + Agregar Universidad
        </Button> */}
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Universidad"
              // onChange={(e) => this.handleColumnSearch(e, universidad)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Universidad</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {universidades?.map((uni) => (
              <UniversidadCard dato={uni} key={uni.id} />
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalActulizar}>
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
        </ModalBody>

        {/* <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
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
            <h3>Insertar Universidad</h3>
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
        </ModalBody>
        {/* 
          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default Universidades;
