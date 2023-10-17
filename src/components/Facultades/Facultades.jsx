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
import FacultadCard from "./FacultadCard";

const Facultades = () => {
  const [modalActulizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const { facultades } = usePersonas();
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
        <h1>Facultades</h1>
        <br />
        {/* <Button color="success" onClick={() => mostrarModalInsertar()}>
          {" "}
          + Agregar Facultad
        </Button> */}
        <br />
        <br />
        <div className="row mb-2">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Facultad"
              // onChange={(e) => this.handleColumnSearch(e, facultad)}
            />
          </div>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Facultades</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {facultades?.map((facu) => (
              <FacultadCard dato={facu} key={facu.id} />
            ))}
            {/* {this.state.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.facultad}</td>

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

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Facultad</h3>
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
            <label>Facultad:</label>
            <input
              className="form-control"
              name="facultad"
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

export default Facultades;
