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
import CampusCard from "./CampusCard";

const Campus = () => {
  const [modalActualizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { campus } = usePersonas();
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
    <div className="homeimage">
      <Header></Header>
      <Container>
        <h1>Campus</h1>
        <br />
        {/* <Button color="success" onClick={() => this.mostrarModalInsertar()}>
          {" "}
          + Agregar Campus
        </Button> */}
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Campus"
              // onChange={(e) => this.handleColumnSearch(e, campus)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Campus</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {campus?.map((cam) => (
              <CampusCard dato={cam} key={cam.id} />
            ))}
            {/* {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.campus}</td>

                <td>
                  <Button
                    color="primary"
                    onClick={() => this.mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => this.eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))} */}
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
            <label>Campus:</label>
            <input
              className="form-control"
              name="campus"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.campus}
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
            <h3>Insertar Campus</h3>
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
            <label>Campus:</label>
            <input
              className="form-control"
              name="campus"
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
export default Campus;
