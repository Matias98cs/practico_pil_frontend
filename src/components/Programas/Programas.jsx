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
import ProgramaCard from "./ProgramaCard";

const Programas = () => {
  const [modalActualizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { programas } = usePersonas();

  return (
    <div className="homeimage overflow-auto">
      <Header></Header>
      <Container>
        <h1>Programas</h1>
        <br />
        {/* <Button color="success" onClick={() => this.mostrarModalInsertar()}>
          {" "}
          + Agregar Programa
        </Button> */}
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Programa"
              // onChange={(e) => this.handleColumnSearch(e, programa)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Programas</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {programas?.map((programa) => (
              <ProgramaCard dato={programa} key={programa.id} />
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={modalActualizar}>
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
            <h3>Insertar Programa</h3>
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
            <label>Programa:</label>
            <input
              className="form-control"
              name="programa"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>

        {/* <ModalFooter>
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

export default Programas;
