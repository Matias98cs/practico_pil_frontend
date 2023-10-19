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
  Pagination,
  PaginationItem,
  PaginationLink,
  Label,
  Input,
} from "reactstrap";
import usePersonas from "../../hooks/usePersonas";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditarFormulario = () => {
  const { dataPersona, editarPersona } = usePersonas();
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [pais, setPais] = useState("");
  const [provincia, setProvincia] = useState("");
  const [personaId, setPersonaId] = useState("");

  useEffect(() => {
    if (dataPersona.id) {
      setNombre(dataPersona.nombre);
      setApellido(dataPersona.apellido);
      setEmail(dataPersona.email);
      setNacimiento(dataPersona.birthdate);
      setGenero(dataPersona.genero);
      setCiudad(dataPersona.ciudad);
      setBarrio(dataPersona.barrio);
      setPais(dataPersona.pais);
      setProvincia(dataPersona.provincia);
      setPersonaId(dataPersona.personal_id);
    }
  }, [id]);

  const handleSubmitPersona = (e) => {
    e.preventDefault();
    if (
      [
        nombre,
        apellido,
        email,
        nacimiento,
        genero,
        ciudad,
        barrio,
        pais,
        provincia,
        personaId,
      ].includes("")
    ) {
      console.log("Complete todos los campos");
      return;
    }

    const fecha = new Date(nacimiento);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const year = fecha.getFullYear();
    const fechaFormateada = `${dia}-${mes}-${year}`;
    const campos = {
      persona_id: id,
      nombre: nombre,
      apellido: apellido,
      email: email,
      birthdate: fechaFormateada,
      genero: genero,
      ciudad: ciudad,
      barrio: barrio,
      pais: pais,
      provincia: provincia,
      personal_id: personaId,
    };
    editarPersona(campos);
  };

  return (
    <div className="row">
      <div className="col-md-6 px-6">
        <FormGroup className="bg-white rounded">
          <label>Nombre:</label>
          <input
            className="form-control"
            name="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Apellido:</label>
          <input
            className="form-control"
            name="apellido"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Email:</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Nacimiento:</label>
          <input
            className="form-control"
            name="birthdate"
            type="date"
            value={nacimiento}
            onChange={(e) => setNacimiento(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="bg-white rounded">
          <label>DNI:</label>
          <input
            className="form-control"
            name="DNI"
            type="text"
            value={personaId}
            onChange={(e) => setPersonaId(e.target.value)}
          />
        </FormGroup>
      </div>
      <div className="col-md-6 px-6">
        <FormGroup className="bg-white rounded">
          <label>Genero:</label>
          <input
            className="form-control"
            name="genero"
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Pais:</label>
          <input
            className="form-control"
            name="pais"
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Provincia:</label>
          <input
            className="form-control"
            name="provincia"
            type="text"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Ciudad:</label>
          <input
            className="form-control"
            name="ciudad"
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="bg-white rounded">
          <label>Barrio:</label>
          <input
            className="form-control"
            name="barrio"
            type="text"
            value={barrio}
            onChange={(e) => setBarrio(e.target.value)}
          />
        </FormGroup>
      </div>
      <div>
        <Button color="success" onClick={(e) => handleSubmitPersona(e)}>
          Guardar Cambios
        </Button>
      </div>
    </div>
  );
};

export default EditarFormulario;
