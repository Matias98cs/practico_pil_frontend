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

// const data = [
//   {
//     id: 1,
//     nombre: "Juan",
//     apellido: "Pérez",
//     email: "juan@example.com",
//     birthdate: "1990-01-15",
//     genero: "Masculino",
//     pais: "Argentina",
//     provincia: "Buenos Aires",
//     ciudad: "CABA",
//     barrio: "Palermo",
//   },
//   {
//     id: 2,
//     nombre: "Maria",
//     apellido: "López",
//     email: "maria@example.com",
//     birthdate: "1985-05-20",
//     genero: "Femenino",
//     pais: "Argentina",
//     provincia: "Córdoba",
//     ciudad: "Córdoba",
//     barrio: "Nueva Córdoba",
//   },
// ];

const Personas = () => {
  const [modalActulizar, setModalActulizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [formualario, setFormulario] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    birthdate: "",
    genero: "",
    pais: "",
    provincia: "",
    ciudad: "",
    barrio: "",
  });
  const { personas } = usePersonas();
  console.log(personas);

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

  // const editar = (dato) => {
  //   var contador = 0;
  //   var arreglo = this.state.data;
  //   arreglo.map((registro) => {
  //     if (dato.id == registro.id) {
  //       arreglo[contador].nombre = dato.nombre;
  //       arreglo[contador].apellido = dato.apellido;
  //       arreglo[contador].email = dato.email;
  //       arreglo[contador].birthdate = dato.birthdate;
  //       arreglo[contador].genero = dato.genero;
  //       arreglo[contador].pais = dato.pais;
  //       arreglo[contador].provincia = dato.provincia;
  //       arreglo[contador].ciudad = dato.ciudad;
  //       arreglo[contador].barrio = dato.barrio;
  //     }
  //     contador++;
  //   });
  //   this.setState({ data: arreglo, modalActualizar: false });
  // };

  // const eliminar = (dato) => {
  //   var opcion = window.confirm(
  //     "Estás Seguro que deseas Eliminar el elemento " + dato.id
  //   );
  //   if (opcion == true) {
  //     var contador = 0;
  //     var arreglo = this.state.data;
  //     arreglo.map((registro) => {
  //       if (dato.id == registro.id) {
  //         arreglo.splice(contador, 1);
  //       }
  //       contador++;
  //     });
  //     this.setState({ data: arreglo, modalActualizar: false });
  //   }
  // };

  // const insertar = () => {
  //   var valorNuevo = { ...this.state.form };
  //   valorNuevo.id = this.state.data.length + 1;
  //   var lista = this.state.data;
  //   lista.push(valorNuevo);
  //   this.setState({ modalInsertar: false, data: lista });
  // };

  // const handleChange = (e) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  return (
    <div className="homeimage">
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
            {/* {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.email}</td>
                  <td>{dato.birthdate}</td>
                  <td>{dato.genero}</td>
                  <td>{dato.pais}</td>
                  <td>{dato.provincia}</td>
                  <td>{dato.ciudad}</td>
                  <td>{dato.barrio}</td>

                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))} */}
          </tbody>
        </Table>
      </Container>

      <Modal>
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
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.apellido}
            />
          </FormGroup>
          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.email}
            />
          </FormGroup>
          <FormGroup>
            <label>Nacimiento:</label>
            <input
              className="form-control"
              name="birthdate"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.birthdate}
            />
          </FormGroup>
          <FormGroup>
            <label>Genero:</label>
            <input
              className="form-control"
              name="genero"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.genero}
            />
          </FormGroup>
          <FormGroup>
            <label>Pais:</label>
            <input
              className="form-control"
              name="genero"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.pais}
            />
          </FormGroup>
          <FormGroup>
            <label>Provincia:</label>
            <input
              className="form-control"
              name="provincia"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.provincia}
            />
          </FormGroup>
          <FormGroup>
            <label>Ciudad:</label>
            <input
              className="form-control"
              name="ciudad"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.ciudad}
            />
          </FormGroup>
          <FormGroup>
            <label>Barrio:</label>
            <input
              className="form-control"
              name="barrio"
              type="text"
              // onChange={this.handleChange}
              // value={this.state.form.barrio}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary">Editar</Button>
          <Button color="danger" onClick={() => cerrarModalActualizar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Persona</h3>
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
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Apellido:</label>
            <input
              className="form-control"
              name="apellido"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Nacimiento:</label>
            <input
              className="form-control"
              name="birthdate"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Genero:</label>
            <input
              className="form-control"
              name="genero"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Pais:</label>
            <input
              className="form-control"
              name="pais"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Provincia:</label>
            <input
              className="form-control"
              name="provincia"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Ciudad:</label>
            <input
              className="form-control"
              name="ciudad"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Barrio:</label>
            <input
              className="form-control"
              name="barrio"
              type="text"
              // onChange={this.handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => modalInsertar}>
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
    </div>
  );
};

export default Personas;
