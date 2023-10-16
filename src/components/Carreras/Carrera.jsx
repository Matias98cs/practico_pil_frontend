import React from "react";
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

const data = [
  {
    id: 1,
    universidad: "Universidad Nacional de Cordoba",
    facultad: "Facultad de Agronomia",
    campus: "Fuentenueva",
    programa: "Ciencias Ambientales",

}
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      universidad: "",
      facultad: "",
      campus: "",
      programa: "",
    },
  };

  handleColumnSearch = (e, column) => {
    const value = e.target.value;
    const filteredData = data.filter((item) => {
      if (column === "id") {
        return true; // No filtrar la columna "ID"
      } else {
        return item[column].toLowerCase().includes(value.toLowerCase());
      }
    });

    this.setState({ filteredData });
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].universidad = dato.universidad;
        arreglo[contador].facultad = dato.facultad;
        arreglo[contador].campus = dato.facultad;
        arreglo[contador].programa = dato.programa;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="homeimage">
      <Header>
        
      </Header>
        <Container>
        <h1>Carreras</h1>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}> + Agregar Carrera</Button>
          <br />
          <br />
          <div className="row mb-2">
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Buscar por Universidad" onChange={(e) => this.handleColumnSearch(e, universidad)}/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Buscar por Facultad" onChange={(e) => this.handleColumnSearch(e, facultad)}/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Buscar por Campus" onChange={(e) => this.handleColumnSearch(e, campus)}/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Buscar por Programa" onChange={(e) => this.handleColumnSearch(e, programa)}/>
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
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.universidad}</td>
                  <td>{dato.facultad}</td>
                  <td>{dato.campus}</td>
                  <td>{dato.programa}</td>

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
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Universidad: 
              </label>
              <input
                className="form-control"
                name="universidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.universidad}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Facultad: 
              </label>
              <input
                className="form-control"
                name="facultad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.facultad}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Campus: 
              </label>
              <input
                className="form-control"
                name="campus"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.campus}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Programa: 
              </label>
              <input
                className="form-control"
                name="programa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.programa}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Carrera</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Universidad: 
              </label>
              <input
                className="form-control"
                name="universidad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Facultad: 
              </label>
              <input
                className="form-control"
                name="facultad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Campus: 
              </label>
              <input
                className="form-control"
                name="campus"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Programa: 
              </label>
              <input
                className="form-control"
                name="programa"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;