import "bootstrap/dist/css/bootstrap.min.css";

const CarreraCard = ({ dato }) => {
  return (
    <>
      <tr key={dato.id}>
        <td>{dato.id}</td>
        <td>{dato.universidad}</td>
        <td>{dato.facultad}</td>
        <td>{dato.campus}</td>
        <td>{dato.programa}</td>
      </tr>
    </>
  );
};

export default CarreraCard;
