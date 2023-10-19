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
import usePersonas from "../../hooks/usePersonas";

const CarreraCard = ({ dato }) => {
  const { bajaCarrera } = usePersonas();
  return (
    <>
      <tr key={dato.id}>
        <td>{dato.id}</td>
        <td>{dato.universidad}</td>
        <td>{dato.facultad}</td>
        <td>{dato.programa}</td>
        <td>{dato.campus}</td>
        <td>{dato.rol}</td>
        <td>{dato.activo ? "Activo" : "Baja"}</td>
        <td>
          <Link to="">
            <Button color="primary">Editar</Button>{" "}
          </Link>
          <Button color="danger" onClick={() => bajaCarrera(dato.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CarreraCard;
