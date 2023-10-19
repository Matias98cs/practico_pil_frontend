import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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

const CarreraCard = ({ dato }) => {
  return (
    <>
      <tr key={dato.id}>
        <td>{dato.id}</td>
        <td>{dato.universidad}</td>
        <td>{dato.facultad}</td>
        <td>{dato.programa}</td>
        <td>{dato.campus}</td>
        <td>{dato.rol}</td>
        <td>
          <Link to="">
            <Button color="primary">Editar</Button>{" "}
          </Link>
          <Button color="danger">Eliminar</Button>
        </td>
      </tr>
    </>
  );
};

export default CarreraCard;
