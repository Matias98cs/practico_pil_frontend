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

const PersonaCard = () => {
  return (
    <>
      {this.state.data.map((dato) => (
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
            <Button color="danger" onClick={() => this.eliminar(dato)}>
              Eliminar
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default PersonaCard;
