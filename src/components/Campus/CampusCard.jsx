const CampusCard = ({ dato }) => {
  return (
    <>
      <tr key={dato.id}>
        <td>{dato.id}</td>
        <td>{dato.nombre}</td>
      </tr>
    </>
  );
};

export default CampusCard;
