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
import usePersonas from "../../hooks/usePersonas";
import { Link } from "react-router-dom";

const PersonaCard = ({ dato }) => {
  const { eliminarPersona } = usePersonas();
  return (
    <>
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
          <Link to={`/Editar/${dato.id}`}>
            <Button color="primary">Editar</Button>{" "}
          </Link>
          <Button color="danger" onClick={() => eliminarPersona(dato.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default PersonaCard;
